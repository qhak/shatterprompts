/* ==========================================================================
   SHATTERPROMPTS — runtime
   Attribution, analytics, email capture, prompt copying, pack access.
   Config is injected by the build as window.SP_CONFIG (see build.mjs).
   Page context is injected as window.SP_PAGE.
   ========================================================================== */
(function () {
  "use strict";

  var CFG  = window.SP_CONFIG || {};
  var PAGE = window.SP_PAGE || {};
  var INT  = CFG.integrations || {};
  var ANA  = INT.analytics || {};

  var KEY_FIRST    = "sp.attr.first";
  var KEY_LAST     = "sp.attr.last";
  var KEY_ACCESS   = "sp.access";
  var KEY_EMAIL    = "sp.email";
  var KEY_PURCHASE = "sp.purchase";

  /* ---------------------------------------------------------------- storage
     Wrapped: Safari private mode and locked-down browsers throw on access. */
  function read(key, fallback) {
    try {
      var raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function write(key, value) {
    try { window.localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch (e) { return false; }
  }

  /* ------------------------------------------------------------ attribution
     Reads utm_*, src and campaign from the URL. Keeps BOTH first-touch (never
     overwritten) and last-touch (updated whenever new parameters arrive), so a
     lead can be traced to the exact Reel and DM that produced it. */
  var ATTR_FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src", "campaign"];

  function readParams() {
    var out = {};
    try {
      var p = new URLSearchParams(window.location.search);
      ATTR_FIELDS.forEach(function (f) {
        var v = p.get(f);
        if (v) out[f] = String(v).slice(0, 120);
      });
    } catch (e) {}
    return out;
  }

  function initAttribution() {
    var params = readParams();
    var hasParams = Object.keys(params).length > 0;
    var now = new Date().toISOString();

    var first = read(KEY_FIRST, null);
    if (!first) {
      first = Object.assign({}, params, {
        landing_page: location.pathname,
        referrer: document.referrer || "",
        ts: now
      });
      write(KEY_FIRST, first);
    }

    var last = read(KEY_LAST, null);
    if (hasParams || !last) {
      last = Object.assign({}, params, {
        landing_page: location.pathname,
        referrer: document.referrer || "",
        ts: now
      });
      write(KEY_LAST, last);
    }
    return { first: first, last: last };
  }

  var ATTR = initAttribution();

  /* Flattened attribution for event payloads and lead records. */
  function attribution() {
    var last = ATTR.last || {};
    var first = ATTR.first || {};
    return {
      source: last.src || last.utm_source || first.src || first.utm_source || "direct",
      campaign: last.campaign || last.utm_campaign || first.campaign || first.utm_campaign || "",
      utm_source: last.utm_source || "",
      utm_medium: last.utm_medium || "",
      utm_campaign: last.utm_campaign || "",
      utm_content: last.utm_content || "",
      utm_term: last.utm_term || "",
      src: last.src || "",
      first_touch_ts: first.ts || "",
      first_landing_page: first.landing_page || "",
      referrer: document.referrer || ""
    };
  }

  /* -------------------------------------------------------------- analytics
     Provider-agnostic. Every event goes to:
       1. window.spDataLayer            (always — inspect in the console)
       2. a "shatter:event" CustomEvent (hook anything onto this)
       3. Plausible / GA4               (only if configured in site.config.mjs)
       4. a beacon endpoint             (only if configured)
     Nothing is fabricated: if no provider is configured, events simply queue.
     TO CONNECT A PROVIDER: set values in content/site.config.mjs -> integrations.analytics
     ---------------------------------------------------------------------- */
  window.spDataLayer = window.spDataLayer || [];

  function trackEvent(name, props) {
    var payload = Object.assign({
      event: name,
      pack_slug: PAGE.slug || "",
      page_path: location.pathname,
      page_url: location.href,
      ts: new Date().toISOString()
    }, attribution(), props || {});

    window.spDataLayer.push(payload);

    try {
      window.dispatchEvent(new CustomEvent("shatter:event", { detail: payload }));
    } catch (e) {}

    if (typeof window.plausible === "function") {
      window.plausible(name, { props: compact(payload) });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", name, compact(payload));
    }
    if (ANA.beaconEndpoint) {
      try {
        var body = JSON.stringify(payload);
        if (navigator.sendBeacon) {
          navigator.sendBeacon(ANA.beaconEndpoint, new Blob([body], { type: "application/json" }));
        } else {
          fetch(ANA.beaconEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: body, keepalive: true }).catch(function () {});
        }
      } catch (e) {}
    }
    if (CFG.debug) console.debug("[shatter]", name, payload);
  }

  /* Providers reject nested objects and empty strings — flatten and drop blanks. */
  function compact(obj) {
    var out = {};
    Object.keys(obj).forEach(function (k) {
      var v = obj[k];
      if (v !== "" && v !== null && v !== undefined && typeof v !== "object") out[k] = v;
    });
    return out;
  }

  window.shatterTrack = trackEvent;

  /* ------------------------------------------------------------------ toast */
  function toast(message) {
    var root = document.getElementById("toasts");
    if (!root) return;
    var el = document.createElement("div");
    el.className = "toast";
    el.textContent = message;
    root.appendChild(el);
    setTimeout(function () { el.remove(); }, 3600);
  }

  /* ------------------------------------------------------------- pack access
     Access is granted locally after a successful submit. This is a soft gate
     suitable for a free lead magnet — it is not authentication. Real gating
     requires the lead endpoint plus signed delivery links (see README). */
  function getAccess() { return read(KEY_ACCESS, {}) || {}; }

  function grantAccess(slug, record) {
    var all = getAccess();
    all[slug] = record;
    return write(KEY_ACCESS, all);
  }

  function hasAccess(slug) { return !!getAccess()[slug]; }

  /* ---------------------------------------------------------- pack purchase
     Same local-record pattern as free access, but a record here only ever
     gets written after the Worker has verified a real Stripe session — never
     from anything the client alone can produce. A "*" entry means a
     membership: it covers every pack, not just one. */
  function getPurchases() { return read(KEY_PURCHASE, {}) || {}; }

  function grantPurchase(slug, record) {
    var all = getPurchases();
    all[slug] = record;
    return write(KEY_PURCHASE, all);
  }

  function hasPurchase(slug) {
    var all = getPurchases();
    return !!(all[slug] || all["*"]);
  }

  /* ------------------------------------------------------------- top bar */
  var bar = document.querySelector("[data-topbar]");
  if (bar) {
    var ticking = false;
    addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        bar.classList.toggle("is-scrolled", window.scrollY > 8);
        ticking = false;
      });
    }, { passive: true });
  }

  /* --------------------------------------------------------- copy prompts */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-copy]");
    if (!btn) return;

    var target = document.getElementById(btn.getAttribute("data-copy"));
    if (!target) return;
    /* textContent, not innerText: the prompt block is white-space:pre-wrap, so the
       literal newlines in the markup are exactly what should land on the clipboard. */
    var text = target.textContent;

    function done() {
      btn.setAttribute("data-copied", "true");
      var label = btn.querySelector("[data-copy-label]") || btn;
      var original = label.textContent;
      label.textContent = "Copied";
      setTimeout(function () {
        label.textContent = original;
        btn.removeAttribute("data-copied");
      }, 1800);
      trackEvent(btn.getAttribute("data-copy-event") || "prompt_preview_copy", {
        prompt_title: btn.getAttribute("data-prompt-title") || ""
      });
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(function () { legacyCopy(text, done); });
    } else {
      legacyCopy(text, done);
    }
  });

  function legacyCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:-9999px;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); }
    catch (err) { toast("Copy failed — select the text manually."); }
    ta.remove();
  }

  /* ---------------------------------------------------- homepage pack clicks */
  document.addEventListener("click", function (e) {
    var row = e.target.closest("[data-pack-link]");
    if (!row) return;
    trackEvent("homepage_pack_click", {
      pack_slug: row.getAttribute("data-pack-link"),
      from: PAGE.type || ""
    });
  });

  /* ------------------------------------------------------- upgrade tracking */
  var upgrade = document.querySelector("[data-upgrade]");
  if (upgrade) {
    if ("IntersectionObserver" in window) {
      var uo = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            trackEvent("paid_upgrade_viewed", { upgrade_name: upgrade.getAttribute("data-upgrade") });
            uo.disconnect();
          }
        });
      }, { threshold: 0.4 });
      uo.observe(upgrade);
    }
    upgrade.addEventListener("click", function (e) {
      var link = e.target.closest("a, button");
      if (!link) return;
      trackEvent("paid_upgrade_clicked", { upgrade_name: upgrade.getAttribute("data-upgrade") });
    });
  }

  /* -------------------------------------------------------- checkout clicks
     Fires for every real checkout link on the site, not just the access-page
     upgrade block above — /pricing's tier cards and per-pack shop rows use
     the same [data-checkout] attribute but sit outside [data-upgrade], so a
     listener scoped only to that element would never see clicks from there. */
  document.addEventListener("click", function (e) {
    var link = e.target.closest("[data-checkout]");
    if (!link) return;
    var upgradeAncestor = link.closest("[data-upgrade]");
    trackEvent("checkout_started", {
      upgrade_name: upgradeAncestor ? upgradeAncestor.getAttribute("data-upgrade") : "",
      checkout_url: link.href
    });
  });

  /* ============================================================ EMAIL FORM */
  var form = document.querySelector("[data-lead-form]");
  if (form) {
    var emailInput = form.querySelector("[data-email]");
    var errorEl    = form.querySelector("[data-error]");
    var submitBtn  = form.querySelector("[data-submit]");
    var consentEl  = form.querySelector("[data-consent]");
    var submitting = false;
    var started    = false;
    var slug       = PAGE.slug || "";

    /* Returning visitor: prefill their address, never make them retype it. */
    var knownEmail = read(KEY_EMAIL, "");
    if (knownEmail && emailInput) emailInput.value = knownEmail;

    emailInput && emailInput.addEventListener("input", function () {
      if (!started) {
        started = true;
        trackEvent("email_form_started", {});
      }
      clearError();
    });

    /* Catch an obviously malformed address as soon as the field is left, not
       only on submit — but only once there's something to judge (an empty
       required field is a submit-time concern), and without stealing focus
       back the way showError() does for a submit failure: the visitor just
       left this field on purpose, dragging them back would be worse than
       the delayed feedback this is meant to fix. */
    emailInput && emailInput.addEventListener("blur", function () {
      var value = emailInput.value.trim();
      if (value && !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(value) && errorEl) {
        errorEl.textContent = "That email address does not look right.";
        errorEl.hidden = false;
        emailInput.setAttribute("aria-invalid", "true");
      }
    });

    function clearError() {
      if (!errorEl) return;
      errorEl.hidden = true;
      errorEl.textContent = "";
      emailInput && emailInput.setAttribute("aria-invalid", "false");
    }

    function showError(message) {
      if (!errorEl) return;
      errorEl.textContent = message;
      errorEl.hidden = false;
      emailInput && emailInput.setAttribute("aria-invalid", "true");
      emailInput && emailInput.focus();
    }

    function setBusy(on) {
      submitting = on;
      if (!submitBtn) return;
      submitBtn.disabled = on;
      submitBtn.innerHTML = on
        ? '<span class="spinner" aria-hidden="true"></span> Opening your pack'
        : submitBtn.getAttribute("data-label");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (submitting) return;
      clearError();

      var email = (emailInput ? emailInput.value : "").trim();
      if (!email) return showError("Enter your email address.");
      if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) {
        return showError("That email address does not look right.");
      }

      setBusy(true);

      var lead = Object.assign({
        email: email,
        pack_slug: slug,
        pack_name: PAGE.packName || "",
        marketing_consent: consentEl ? !!consentEl.checked : false,
        consent_text: consentEl ? (consentEl.getAttribute("data-consent-text") || "") : "",
        submitted_at: new Date().toISOString(),
        page_url: location.href
      }, attribution());

      /* Promise.resolve() first so a *synchronous* throw inside deliver() — a
         missing fetch or AbortController on an old browser — becomes a
         rejection and hits .catch(), instead of escaping the handler and
         leaving the button stuck on its loading spinner forever. */
      Promise.resolve().then(function () {
        return deliver(lead);
      }).then(function (result) {
        write(KEY_EMAIL, email);
        grantAccess(slug, {
          email: email,
          ts: lead.submitted_at,
          /* Only true when the endpoint actually confirmed it sent the email. */
          emailed: !!result.emailed,
          stored: !!result.stored,
          source: lead.source,
          campaign: lead.campaign
        });

        trackEvent("email_submit_success", {
          marketing_consent: lead.marketing_consent,
          delivery_mode: result.stored ? (result.emailed ? "endpoint_emailed" : "endpoint_stored") : "local_only"
        });

        /* Carry the access token in the URL itself, not just localStorage, so
           this exact link still works if it's opened on a different browser
           or device later — an emailed copy, a bookmark synced elsewhere, a
           DM re-opened outside the app that first submitted the form. */
        var dest = PAGE.accessUrl || ("/" + slug + "/access");
        if (result.token) {
          dest += (dest.indexOf("?") > -1 ? "&" : "?") + "t=" + encodeURIComponent(result.token);
        }
        window.location.href = dest;
      }).catch(function (err) {
        setBusy(false);
        showError(err && err.message ? err.message : "Something went wrong. Your email is still here — try again.");
        trackEvent("email_submit_error", { reason: (err && err.message) || "unknown" });
      });
    });

    /* ----------------------------------------------------------------------
       DELIVERY
       If integrations.leadEndpoint is not set, the lead is NOT stored anywhere
       and NO email is sent. The pack is still opened, and the access page says
       exactly that. Nothing here pretends otherwise.
       To go live: set leadEndpoint in content/site.config.mjs (see README).
       ---------------------------------------------------------------------- */
    function deliver(lead) {
      var endpoint = INT.leadEndpoint;

      if (!endpoint) {
        return new Promise(function (resolve) {
          setTimeout(function () { resolve({ stored: false, emailed: false }); }, 300);
        });
      }

      var controller = new AbortController();
      var timer = setTimeout(function () { controller.abort(); }, 12000);

      return fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        signal: controller.signal
      }).then(function (res) {
        clearTimeout(timer);
        if (!res.ok) throw new Error("We could not save that just now. Please try again.");
        return res.json().catch(function () { return {}; });
      }).then(function (data) {
        return { stored: true, emailed: !!(data && data.emailed), token: (data && data.token) || "" };
      }).catch(function (err) {
        clearTimeout(timer);
        if (err && err.name === "AbortError") throw new Error("That took too long. Check your connection and try again.");
        throw err;
      });
    }
  }

  /* ----------------------------------------------- returning-visitor notice
     If someone re-opens a pack landing page they already unlocked, say so and
     link them straight to it rather than asking for the same email again. */
  var returning = document.querySelector("[data-returning]");
  if (returning && PAGE.slug && hasAccess(PAGE.slug)) {
    returning.hidden = false;
  }

  /* ============================================================ ACCESS PAGE */
  var gate = document.querySelector("[data-access-gate]");
  var packBody = document.querySelector("[data-access-body]");

  function showGate() {
    gate.hidden = false;
    packBody.hidden = true;
    trackEvent("pack_access_gated", {});
  }

  function showGranted(record) {
    gate.hidden = true;
    packBody.hidden = false;

    /* Tell the person exactly what happened — never claim an email was sent. */
    var statusEl = document.querySelector("[data-access-status]");
    if (statusEl) {
      var name = PAGE.packName || "pack";
      if (record.emailed && record.email) {
        statusEl.innerHTML = "Your " + escapeHtml(name) + " is ready below. We have also sent a copy to " +
          "<strong>" + escapeHtml(record.email) + "</strong>.";
      } else if (record.stored) {
        statusEl.innerHTML = "Your " + escapeHtml(name) + " is ready below. Email delivery is not switched on yet, " +
          "so nothing has been sent to your inbox — bookmark this page to come back to it.";
      } else {
        statusEl.innerHTML = "Your " + escapeHtml(name) + " is ready below. Email delivery is not connected yet, so " +
          "no email has been sent and your address has not been stored anywhere except this browser. " +
          "Bookmark this page to come back to it.";
      }
    }

    trackEvent("pack_accessed", {
      delivery_mode: record.stored ? (record.emailed ? "endpoint_emailed" : "endpoint_stored") : "local_only"
    });
  }

  if (gate && packBody) {
    var record = getAccess()[PAGE.slug];

    if (record) {
      showGranted(record);
    } else {
      /* No local record on this browser — before assuming the visitor never
         signed up, check for an access token in the URL. Covers the case a
         signup happened on a different browser or device: the link itself
         carries proof, not just this browser's storage. */
      var urlToken = new URLSearchParams(location.search).get("t") || "";
      var endpoint = INT.leadEndpoint;

      if (urlToken && endpoint) {
        var accessEndpoint = endpoint.replace(/\/subscribe\/?$/, "/access");
        fetch(accessEndpoint + "?t=" + encodeURIComponent(urlToken))
          .then(function (res) { return res.ok ? res.json() : null; })
          .then(function (data) {
            if (data && data.ok && data.pack_slug === PAGE.slug) {
              var verified = {
                email: data.email,
                ts: new Date().toISOString(),
                emailed: false,
                stored: true,
                source: "",
                campaign: ""
              };
              grantAccess(PAGE.slug, verified);
              write(KEY_EMAIL, data.email);
              showGranted(verified);
            } else {
              showGate();
            }
          })
          .catch(function () { showGate(); });
      } else {
        showGate();
      }
    }
  }

  /* ============================================================ PREMIUM PAGE
     Same shape as the access-page gate above, but verifying a Stripe purchase
     instead of a free signup — and checking a membership ("*") as well as a
     pack-specific entitlement, since a subscriber's purchase covers every
     pack, not just the one they happened to buy from. */
  var purchaseGate = document.querySelector("[data-purchase-gate]");
  var purchaseBody = document.querySelector("[data-purchase-body]");

  if (purchaseGate && purchaseBody) {
    var showPurchaseGate = function (message) {
      purchaseGate.hidden = false;
      purchaseBody.hidden = true;
      var statusEl = document.querySelector("[data-purchase-status]");
      if (statusEl && message) {
        statusEl.textContent = message;
        statusEl.hidden = false;
      }
      trackEvent("premium_access_gated", {});
    };

    var showPurchaseGranted = function () {
      purchaseGate.hidden = true;
      purchaseBody.hidden = false;
      trackEvent("premium_accessed", {});
    };

    if (hasPurchase(PAGE.slug)) {
      showPurchaseGranted();
    } else {
      var sessionId = new URLSearchParams(location.search).get("session_id") || "";
      var purchaseEndpoint = INT.leadEndpoint ? INT.leadEndpoint.replace(/\/subscribe\/?$/, "/purchase") : "";

      if (sessionId && purchaseEndpoint) {
        var purchaseAttempts = 0;
        (function tryVerifyPurchase() {
          purchaseAttempts++;
          fetch(purchaseEndpoint + "?session_id=" + encodeURIComponent(sessionId))
            .then(function (res) {
              return res.json().catch(function () { return {}; }).then(function (data) {
                if (data && data.ok && (data.pack_slug === PAGE.slug || data.pack_slug === "*")) {
                  grantPurchase(PAGE.slug, { email: data.email, pack_slug: data.pack_slug, ts: new Date().toISOString() });
                  showPurchaseGranted();
                } else if (res.status === 202 && purchaseAttempts < 5) {
                  /* Stripe's webhook can land a moment after the redirect —
                     wait and try again a few times before giving up. */
                  setTimeout(tryVerifyPurchase, 1500);
                } else {
                  showPurchaseGate("We could not confirm that purchase yet. If you just paid, refresh this page in a moment.");
                }
              });
            })
            .catch(function () { showPurchaseGate(); });
        })();
      } else {
        showPurchaseGate();
      }
    }
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* --------------------------------------------------------- page view ping
     A generic event on every page (home, /packs, /pricing, legal, 404 — not
     just packs), so top-of-funnel volume and bounce are measurable once an
     analytics provider is connected, instead of only ever seeing pack pages. */
  trackEvent("page_view", { page_type: PAGE.type || "", pack_name: PAGE.packName || "" });
  if (PAGE.type === "pack") {
    trackEvent("pack_page_view", { pack_name: PAGE.packName || "", tier: PAGE.tier || "" });
  }

  /* ------------------------------------------------ keep attribution on links
     Internal links carry src/campaign forward so a click from a DM landing page
     to another page does not lose the attribution mid-funnel. */
  var carry = readParams();
  if (Object.keys(carry).length) {
    var qs = new URLSearchParams(carry).toString();
    document.querySelectorAll('a[href^="/"]').forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href || href.indexOf("#") === 0 || href.indexOf("?") > -1) return;
      a.setAttribute("href", href + "?" + qs);
    });
  }
})();
