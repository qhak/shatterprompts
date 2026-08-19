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

Deploy the `dist/` folder. Production runs on Vercel — `vercel.json` holds the
short-link redirects and security headers; the build command (`node build.mjs`)
and output directory (`dist`) are set in the Vercel project settings. It also
works as-is on Cloudflare Pages, GitHub Pages or any static host — every clean
URL is a real directory with its own `index.html`, so direct loads and hard
refreshes work with no rewrite rules.

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

The Worker is written and tested — it lives in `worker/`. What is left is your
MailerLite account and the deploy.

**Setup, in order:**

```bash
cd worker
npx wrangler kv namespace create LEADS     # paste the returned id into wrangler.toml
npx wrangler secret put MAILERLITE_API_KEY # paste your MailerLite key when prompted
npx wrangler deploy
```

Then in MailerLite:

1. Create a **group per pack** (Freelancing, Cold Outreach, Content, Local
   Business, Digital Products) and one separate **Marketing** group.
2. Create three custom fields: `pack`, `source`, `campaign`. Unknown field names
   are silently dropped by MailerLite's API rather than erroring, so if these do
   not exist you simply lose the attribution inside MailerLite — the Worker's KV
   copy still has it.
3. Build an automation per pack: trigger *"subscriber joins group"* → send the
   email containing that pack's link.
4. Put the group ids into `wrangler.toml`:

```toml
MAILERLITE_GROUPS = "{\"freelancing\":\"123\",\"outreach\":\"124\",\"content\":\"125\",\"local-business\":\"126\",\"digital-products\":\"127\"}"
MAILERLITE_MARKETING_GROUP_ID = "128"
```

Finally point the site at it in `content/site.config.mjs`:

```js
integrations: {
  leadEndpoint: "https://shatterprompts-leads.<your-subdomain>.workers.dev/subscribe"
}
```

**Then test before flipping the honesty flag.** `DELIVERY_CONFIRMED` starts at
`"0"`, so the site says the pack opened but no email was sent. Sign yourself up,
confirm the pack email actually lands in your inbox, and only then set
`DELIVERY_CONFIRMED = "1"` and redeploy the Worker. That flag is the single
thing that makes the site tell a visitor *"we have also sent a copy to you"* —
it is deliberately manual so the site can never claim a delivery that did not
happen.

Subscribers are created with `status: "active"`. With double opt-in enabled a
pending subscriber never triggers the automation, so the pack would never send.

**Consent model:** everyone who requests a pack joins that pack's delivery group
(that is the thing they asked for). Only people who tick the optional box also
join the Marketing group. Keep those groups separate.

**Rate limits:** 20 signups per IP per day, 3 per email address per day.
Adjust at the top of `worker/worker.js`.

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
| `MAILERLITE_API_KEY` | `wrangler secret put` | Your MailerLite key. **Secret — never in wrangler.toml or git.** |
| `MAILERLITE_GROUPS` | `wrangler.toml` vars | JSON map of pack slug to delivery group id |
| `MAILERLITE_MARKETING_GROUP_ID` | `wrangler.toml` vars | Marketing-list group — every signup joins it, there is no separate opt-in |
| `APP_ORIGINS` | `wrangler.toml` vars | Already set to your domain — only these origins may POST |
| `DELIVERY_CONFIRMED` | `wrangler.toml` vars | `"0"` until you have verified a real delivery |

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

### 3. Premium packs — Stripe checkout + gated content

Each pack's `premium` block in `content/packs/<slug>.mjs` controls whether it's
sellable:

```js
premium: {
  name: "The Freelancing System",
  ready: true,                                        // content actually exists
  promptCount: 200,
  blurb: "...",
  checkoutUrl: "https://buy.stripe.com/xxxxx",          // Stripe Payment Link
  downloadUrl: "https://shatterprompts.com/freelancing/premium"
}
```

The build **fails** if `checkoutUrl` is set without `ready: true`, or if either
is set without the other — see the sellability gate in `build.mjs`.

**The prompt text itself never ships in this static build.** `/<slug>/premium`
is a shell page — it fetches the actual prompts client-side from the Worker's
`GET /premium-content`, which only serves them after checking a purchase token
against KV (written by the Stripe webhook, see `grantPurchase()` in
`worker/worker.js`). This matters because the repo is public: baking premium
content into the built HTML, or committing it to git, would make it readable
by anyone without paying.

**To get premium content live, after setting `ready: true` and both URLs:**

```bash
npx wrangler secret put ADMIN_KEY     # generate one: openssl rand -hex 32
ADMIN_KEY=<same value> node scripts/upload-premium-content.mjs
```

The script reads every `content/premium/<slug>.json` (gitignored, generation-tool
output — see `content-source-materials/`) and pushes it to the Worker's KV.
Re-run it whenever premium content changes. Forgetting this step means the
checkout works and money moves, but the buyer's premium page never loads
any prompts — check `GET /premium-content?slug=<slug>&t=<token>` returns
`{"ok":true,...}` for a real purchase before driving traffic.

Also required in Stripe: a webhook pointed at `POST /stripe-webhook` (signing
secret → `STRIPE_WEBHOOK_SECRET`), and `STRIPE_SECRET_KEY` /
`STRIPE_PRICE_MAP` / `STRIPE_BUNDLE_PRICE_ID` set per the Worker's env vars.

### 4. Still to replace

| Item | Where | Status |
|---|---|---|
| `SITE.origin` | `content/site.config.mjs` | Set to `https://shatterprompts.com`. Change if the domain differs — canonicals, OG tags and the sitemap all follow it. |
| `SITE.supportEmail` | same | **Empty.** Privacy/Terms say "the contact address published on this site" until you set it. The footer Contact link is hidden while empty. |
| `SITE.instagram` | same | Empty — footer link hidden rather than dead. |
| `SITE.legal.entityName` | same | Currently the brand name. Use a real trading name before collecting email at scale. |
| `dist/social-preview.png` | generated | Auto-generated branded card. Drop in a designed 1200×630 export to override. |

---

## The free access gate is soft — premium is not

`/<slug>/access` is unlocked by a flag in the visitor's own browser, set after
they submit. Someone who is sent the URL directly sees the "get the pack" screen
instead — but the prompts are in the page source, so this is a courtesy gate,
not security. That is fine for a free lead magnet: there is nothing to lose by
someone bypassing it.

`/<slug>/premium` is different on purpose, because real money is involved: the
prompt text is never in the page's HTML at all (see "Premium packs" above), and
is only served after the Worker verifies a purchase token against KV. Bypassing
the client-side gate gets you nothing, because there is nothing there to get.

---

## Layout

```
content/site.config.mjs   ← all copy, packs, prompts, routes. Edit this.
src/templates.mjs         ← page HTML
src/styles.css            ← design system
src/app.js                ← attribution, analytics, form, copy, access gate
src/ogimage.mjs           ← generates the social card
worker/                   ← Cloudflare Worker: lead capture, MailerLite, Stripe, premium content
scripts/                  ← one-off ops scripts (e.g. upload-premium-content.mjs)
build.mjs                 ← generator + content validation
serve.mjs                 ← local preview
dist/                     ← output. deploy this.
archive/legacy-index.html ← previous single-file site, kept for reference
```
