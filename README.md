# SHATTERPROMPTS

Mobile-first direct-link funnel for free AI prompt packs.
Static site, no framework, no runtime dependencies.

```
Reel  →  comment "FREELANCE"  →  DM shatterprompts.com/freelancing?src=ig-dm&campaign=freelance-reel-01
      →  pack page  →  email  →  /freelancing/access  →  relevant next step
```

---

## Run it

```bash
node build.mjs     # generates dist/
node serve.mjs     # preview at http://localhost:4321
```

Node 18+. There is nothing to `npm install`.

Deploy the `dist/` folder. `netlify.toml` is set up for Netlify (build command
`node build.mjs`, publish directory `dist`). It also works as-is on Cloudflare
Pages, GitHub Pages or any static host — every clean URL is a real directory
with its own `index.html`, so direct loads and hard refreshes work with no
rewrite rules.

---

## Editing content

**Everything is in one file: `content/site.config.mjs`.**

Change the copy there, run `node build.mjs`, deploy. Adding a pack object
automatically creates both `/<slug>` and `/<slug>/access` — no other file needs
touching.

The build refuses to run if the data would produce a dishonest page. It fails on
a missing SEO description, more than five "Inside this pack" bullets, a pack with
no prompts, or **a price set without a working checkout URL**.

Prompt counts on the page are derived from `prompts.length`. The site can never
promise more prompts than the pack actually contains.

---

## Routes

| Route | What it is |
|---|---|
| `/` | Brand explainer, routes people to the right pack. No email form. |
| `/freelancing` | Core pack landing page |
| `/outreach` | Core pack landing page |
| `/content` | Core pack landing page |
| `/local-business` | Core pack landing page |
| `/digital-products` | Core pack landing page |
| `/<slug>/access` | The pack itself — full prompts, copy buttons |
| `/packs` | All packs, core first, secondary below |
| `/productivity` `/study` `/job-search` `/personal-finance` `/fitness` | Preserved from the old site. Listed on `/packs` only, deliberately kept off the homepage funnel. |
| `/privacy` `/terms` | Written, not placeholders |
| `/404.html` | Served automatically |

---

## Integrations you still need to connect

Everything below is **off** right now. The site behaves honestly while it is off
— it never claims an email was sent or a lead was stored.

### 1. Email delivery + lead storage — REQUIRED before running traffic

Set in `content/site.config.mjs`:

```js
integrations: {
  leadEndpoint: "https://your-worker.workers.dev/subscribe"
}
```

**Current behaviour with it empty:** the visitor submits, the pack opens
immediately, and the access page says *"Email delivery is not connected yet, so
no email has been sent and your address has not been stored anywhere except this
browser."* Nothing is stored server-side. No email goes out.

**What your endpoint receives** (`POST`, `application/json`):

```json
{
  "email": "someone@example.com",
  "pack_slug": "freelancing",
  "pack_name": "Freelancing Pack",
  "marketing_consent": true,
  "consent_text": "Send me occasional emails about new packs.",
  "submitted_at": "2026-08-02T18:40:00.000Z",
  "page_url": "https://shatterprompts.com/freelancing?src=ig-dm&campaign=freelance-reel-01",
  "source": "ig-dm",
  "campaign": "freelance-reel-01",
  "utm_source": "", "utm_medium": "", "utm_campaign": "",
  "utm_content": "", "utm_term": "", "src": "ig-dm",
  "first_touch_ts": "2026-08-02T18:39:12.000Z",
  "first_landing_page": "/freelancing",
  "referrer": ""
}
```

**What it must return:**

```json
{ "ok": true, "emailed": true }
```

`emailed: true` is what unlocks the wording *"We have also sent a copy to
you@example.com"* on the access page. Return `emailed: false` if you stored the
lead but did not send mail — the page will say the lead was saved without
claiming an email went out. A non-2xx response shows an inline error and keeps
what the visitor typed.

**Secrets belong in the endpoint, never here.** This is a static site — anything
in `site.config.mjs` ships to the browser. Put your MailerLite / ConvertKit /
Resend API key in the Worker's environment variables:

| Variable | Where | Purpose |
|---|---|---|
| `MAILER_API_KEY` | Worker / function env | Your email provider key |
| `MAILER_LIST_ID` | Worker / function env | Which list to add to |
| `ALLOWED_ORIGIN` | Worker / function env | Set to `https://shatterprompts.com` so only your site can post |

> Note on MailerLite specifically: if you use double opt-in, subscribers must be
> created with `status: "active"` or the delivery email never fires.

### 2. Analytics — optional

```js
integrations: {
  analytics: {
    plausibleDomain: "shatterprompts.com",   // loads Plausible
    gaMeasurementId: "G-XXXXXXXXXX",         // loads GA4
    beaconEndpoint: ""                       // or POST every event yourself
  }
}
```

With none of them set, events still fire — into `window.spDataLayer` and a
`shatter:event` CustomEvent. Open the console on any page and type
`spDataLayer` to see them. Nothing is faked and nothing is silently dropped.

Events tracked: `pack_page_view`, `homepage_pack_click`, `prompt_preview_copy`,
`prompt_copy`, `email_form_started`, `email_submit_success`,
`email_submit_error`, `pack_accessed`, `pack_access_gated`,
`paid_upgrade_viewed`, `paid_upgrade_clicked`, `checkout_started`.

Every event carries `pack_slug`, `source`, `campaign`, all `utm_*`, `referrer`,
`page_path` and `page_url` — so you can compare which specific Reel produced
signups, not just visits.

### 3. Paid systems — not built, on purpose

`upgrade.checkoutUrl` is empty for every pack, so each page shows
**"Full system coming soon"** with no price and no checkout button.

When Stripe is live, add the Payment Link:

```js
upgrade: {
  name: "The Freelancing System",
  blurb: "...",
  checkoutUrl: "https://buy.stripe.com/xxxxx",
  price: "$19"          // only shown when checkoutUrl is set
}
```

The button, the price and the `checkout_started` event all appear automatically.
The build **fails** if you set a price without a checkout URL.

Individual `/freelancing-system` product pages were deliberately not generated —
there is no purchasable product yet, so they would be empty shells. Say the word
and they can be added to the generator.

### 4. Still to replace

| Item | Where | Status |
|---|---|---|
| `SITE.origin` | `content/site.config.mjs` | Set to `https://shatterprompts.com`. Change if the domain differs — canonicals, OG tags and the sitemap all follow it. |
| `SITE.supportEmail` | same | **Empty.** Privacy/Terms say "the contact address published on this site" until you set it. The footer Contact link is hidden while empty. |
| `SITE.instagram` | same | Empty — footer link hidden rather than dead. |
| `SITE.legal.entityName` | same | Currently the brand name. Use a real trading name before collecting email at scale. |
| `dist/social-preview.png` | generated | Auto-generated branded card. Drop in a designed 1200×630 export to override. |

---

## The access gate is soft

`/<slug>/access` is unlocked by a flag in the visitor's own browser, set after
they submit. Someone who is sent the URL directly sees the "get the pack" screen
instead — but the prompts are in the page source, so this is a courtesy gate,
not security. That is normal for a free lead magnet.

Real gating needs the lead endpoint plus signed one-time links, which is worth
doing only if you start charging for a pack.

---

## Layout

```
content/site.config.mjs   ← all copy, packs, prompts, routes. Edit this.
src/templates.mjs         ← page HTML
src/styles.css            ← design system
src/app.js                ← attribution, analytics, form, copy, access gate
src/ogimage.mjs           ← generates the social card
build.mjs                 ← generator + content validation
serve.mjs                 ← local preview
dist/                     ← output. deploy this.
archive/legacy-index.html ← previous single-file site, kept for reference
```
