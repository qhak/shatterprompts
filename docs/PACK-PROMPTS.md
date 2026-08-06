# Pack generation prompts

Everything needed to have an AI write both tiers of any pack:
**free = 25 prompts**, **premium = 200 prompts**.

Two master prompts below, then a parameter block per niche. Paste the master,
swap in the niche block, run.

---

## Method

**Free pack** — one run of Master Prompt A → 25 prompts.

**Premium pack** — eight runs of Master Prompt B, one per stage → 200 prompts.
Never ask for 200 at once: quality collapses around 30 and the model starts
rewording what it already wrote.

After every batch:

```bash
node tools/add-batch.mjs <slug> ~/Downloads/batch.json free      # free pack
node tools/add-batch.mjs <slug> ~/Downloads/batch.json premium   # premium pack
```

The validator rejects the **whole batch** unless every prompt passes: house
format present, 120+ words, a `[PLACEHOLDER]` present, no duplicate titles, no
near-duplicate of anything already in the pack, no banned marketing language.
Nothing is written unless it all passes.

When a free pack reaches 25:

```bash
node tools/apply-free.mjs <slug>
node build.mjs
```

When a premium pack reaches 200: add `premium.downloadUrl`, then set
`premium.ready = true`. The build refuses to sell it otherwise.

---

## MASTER PROMPT A — free pack (25 prompts)

> You are writing the free pack for SHATTERPROMPTS. It is a lead magnet, but it
> has to be genuinely useful on its own — someone should be able to run all 25
> and finish with real work done. A thin free pack loses the sale for the paid one.
>
> **`<<< PACK >>>`** — *paste the niche block*
>
> **`<<< HOUSE FORMAT >>>`**
> Every prompt uses these sections, in this order, with these exact headings:
>
> ```
> You are [specific role, with a stated stance — e.g. "sceptical by default",
> "refuses to invent numbers"]. [One line on why that stance matters here.]
>
> MY SITUATION
> [Inputs the user pastes, one per line, each with a [PLACEHOLDER].]
>
> WHAT I NEED
> [One or two lines. The concrete thing they get back.]
>
> HOW TO DO IT
> 1. [3-6 numbered steps. Instructions to the model, not advice to the user.]
>
> RETURN
> [Exact output format — table columns, list structure, word limits, sections.]
>
> RULES
> - [3-5 constraints. At least one must prevent generic or invented output.]
> ```
>
> **REQUIREMENTS**
> 1. Exactly 25 prompts, covering the whole workflow from start to finish.
> 2. Spread them across the five stages given in the niche block, 5 per stage.
> 3. 150-320 words each. Under 150 is too thin.
> 4. All five headings present, spelled exactly.
> 5. At least one `[PLACEHOLDER]` in capitals per prompt.
> 6. Every prompt has a distinct job. If two would produce similar output from
>    similar inputs, one should not exist.
> 7. Ordered so someone can work top to bottom, each prompt feeding the next.
> 8. Prompt 1 must be usable by someone with nothing prepared — no dependency on
>    output from a prompt they have not run.
>
> **BANNED** — the validator rejects the batch if any appear
> "unleash", "level up", "game-changing", "revolutionary", "10x", "secret
> weapon", "cutting-edge", "industry-leading", "proven to", "while you sleep";
> any guarantee of income, clients, results or growth; any invented statistic or
> "studies show"; prompts that only say "act as an expert and give me advice".
>
> **OUTPUT**
> Return ONLY a JSON array. No preamble, no explanation, no code fence.
>
> ```
> [ { "title": "2-5 word title", "text": "the full prompt" } ]
> ```
>
> Use `\n` for line breaks inside text values. Plain text only, no markdown
> inside the prompt text. Ensure the JSON parses.

---

## MASTER PROMPT B — premium batch (25 prompts × 8 stages)

> You are writing prompts for a paid product. People pay for these, so a prompt
> that produces generic output is a refund, not a minor flaw. You have written
> prompts professionally for years and you are hard to impress.
>
> **`<<< PACK >>>`** — *paste the niche block*
>
> **`<<< STAGE >>>`**
> Stage [N] of 8: [stage name]
> This batch covers: [what the stage covers]
> Stay inside this stage. Other batches cover the rest — do not stray into them.
>
> **`<<< ALREADY WRITTEN >>>`**
> Do not repeat or reword any of these. Paste the `title` values already in
> `content/premium/<slug>.json`, or write "none yet".
>
> **`<<< HOUSE FORMAT >>>`** — *same as Master Prompt A*
>
> **REQUIREMENTS**
> 1. Exactly 25 prompts for this stage only.
> 2. 150-320 words each.
> 3. All five headings, spelled exactly.
> 4. At least one `[PLACEHOLDER]` per prompt.
> 5. Distinct jobs. Vary the job, not the wording.
> 6. The RULES block must do real work. At least one rule per prompt must stop
>    plausible-but-useless output, e.g.:
>    - "If I have not given you a number, ask for it rather than estimating."
>    - "Reject any answer a competitor could give unchanged."
>    - "If there is not enough information, say so rather than guessing."
>    - "Do not soften this to be encouraging."
> 7. Premium prompts go deeper than a free pack would: more inputs, more
>    demanding output formats, more edge cases handled.
>
> **BANNED** and **OUTPUT** — *same as Master Prompt A*

---

# Niche blocks

Paste one of these into the `<<< PACK >>>` slot.

---

## 01 · Freelancing — `freelancing`

**PACK block**

> Topic: Freelancing
> Buyer: someone with a skill who wants to sell it as a service. May already have
> a client or two. Not a beginner who needs "what is freelancing" explained.
> Outcome: a working freelance business — chosen service, priced offer, proof, a
> lead source, and a repeatable sales process.
> Free-pack stages: choose a market · shape the offer · build proof · start
> conversations · improve from replies

**Premium stages**

| # | Stage | Covers |
|---|---|---|
| 1 | Choosing what to sell | skills audit, service selection, market sizing, positioning against alternatives |
| 2 | Niching and research | segment analysis, buyer research, demand signals, competitor pricing |
| 3 | Building the offer | packaging, tiers, scope definition, guarantees, deliverable design |
| 4 | Pricing | rate setting, value framing, raising prices, discounts, payment terms |
| 5 | Proof and portfolio | spec work, case studies, testimonials, personal site, social proof |
| 6 | Finding leads | list building, signals, inbound, referrals, partnerships, platforms |
| 7 | Outreach and sales | first contact, follow-up, calls, proposals, objections, closing |
| 8 | Delivery and retention | onboarding, project management, scope creep, feedback, repeat work, raising rates |

---

## 02 · Cold Outreach — `outreach`

**PACK block**

> Topic: Cold outreach
> Buyer: someone sending cold email or DMs and getting silence. They have
> something to sell and a rough idea who buys it. They do not need "what is cold
> email" explained.
> Outcome: a qualified prospect list, researched personal messages, a follow-up
> sequence, and a way to read replies and fix the real cause of silence.
> Free-pack stages: define who is worth contacting · research one real problem ·
> write the specific first line · sequence the follow-ups · read replies and adjust

**Premium stages**

| # | Stage | Covers |
|---|---|---|
| 1 | Defining who to contact | ICP definition, disqualifiers, buying triggers, decision makers |
| 2 | Building the list | sources, scraping alternatives, enrichment, scoring, list hygiene |
| 3 | Research and personalisation | fast research routines, observation quality, personalisation at volume |
| 4 | First-touch email | openers, structure, length, subject lines, proof placement |
| 5 | Other channels | DMs, LinkedIn, phone, voice notes, video, multi-channel timing |
| 6 | Follow-up sequences | cadence, adding value per touch, break-up messages, re-engagement |
| 7 | Objections and replies | price, timing, in-house, "send info", gatekeepers, booking the call |
| 8 | Testing and deliverability | A/B design, sample sizes, metrics, domain setup, spam avoidance |

---

## 03 · Content Creation — `content`

**PACK block**

> Topic: Content creation for an audience that leads to an offer
> Buyer: someone posting to grow an audience for a service or product. They can
> already make content; what they lack is a system and a link to their offer.
> Outcome: defined pillars, a repeatable idea and hook process, scripts and posts,
> a comment-to-DM funnel, and a review loop.
> Free-pack stages: define who and what for · set three pillars · write the hook
> first · publish and repurpose · review what actually worked

**Premium stages**

| # | Stage | Covers |
|---|---|---|
| 1 | Audience and positioning | audience mapping, problem language, differentiation, voice rules |
| 2 | Pillars and ideas | pillar design, idea generation systems, research, avoiding repetition |
| 3 | Hooks and openings | hook angles, scoring, rewriting, platform differences, first-frame design |
| 4 | Short-form video | scripting, pacing, retention, on-screen text, series design, hooks to payoff |
| 5 | Written and long-form | posts, carousels, threads, newsletters, structure and editing |
| 6 | CTAs and funnels | comment keywords, DM sequences, link strategy, lead magnets, conversion copy |
| 7 | Repurposing and calendars | one idea to many formats, batching, 30 and 90-day calendars |
| 8 | Analytics and iteration | reading data honestly, diagnosing flops, testing, kill-or-keep decisions |

---

## 04 · Local Business — `local-business`

**PACK block**

> Topic: Selling services to local businesses
> Buyer: someone who wants to sell a service to businesses they can visit, phone
> or find on a map. Often no clients yet, no case studies, no budget.
> Outcome: a chosen business type, a repeatable audit that finds visible
> problems, a packaged fix, a price, and a first approach that gets a reply.
> Free-pack stages: pick a business type · audit for a visible problem · package
> the fix · contact the owner · turn one into referrals

**Premium stages**

| # | Stage | Covers |
|---|---|---|
| 1 | Business type and territory | choosing a vertical, margin reality, reachability, mapping an area |
| 2 | Auditing from outside | website, Google profile, reviews, social, competitor comparison |
| 3 | Findings into an offer | linking problems to money, packaging fixes, scope, service tiers |
| 4 | Pricing for local owners | customer value maths, one-off vs monthly, framing, payment terms |
| 5 | First contact remotely | email, DM, forms, timing, subject lines, what owners actually read |
| 6 | In person and phone | walk-in scripts, phone openers, gatekeepers, leaving something behind |
| 7 | Objections and closing | owner objections, proposals, free audits, trust with no track record |
| 8 | Delivery and growth | onboarding non-technical clients, proof, reviews, referrals, retainers |

---

## 05 · Digital Products — `digital-products`

**PACK block**

> Topic: Building and selling a digital product
> Buyer: someone who wants income that does not trade hours for money. They may
> have an audience or a skill, but no validated product.
> Outcome: a validated problem, a scoped product they can actually finish, a
> sales page, a launch plan, and a way to learn from the result.
> Free-pack stages: mine the problem · validate the angle · package the product ·
> write the page · launch and learn

**Premium stages**

| # | Stage | Covers |
|---|---|---|
| 1 | Problem mining | finding painful problems, audience research, interview design |
| 2 | Validation | demand evidence, pre-selling honestly, competitor teardowns, kill criteria |
| 3 | Format and scope | choosing a format, smallest complete version, outlining, finishing |
| 4 | Naming and pricing | naming, one-liners, positioning, price framing, tiers, anchoring |
| 5 | Sales page | structure, headline, objection handling, FAQ, who it is not for |
| 6 | List building | lead magnets, capture pages, nurture sequences, segmenting |
| 7 | Launch | sequences, launch content, day-of checklist, platform setup, pricing windows |
| 8 | After launch | delivery, onboarding, feedback, testimonials, iteration, evergreen selling |

---

## Adding a niche that does not exist yet

Generate the pack metadata first:

> You are naming and positioning a new prompt pack for SHATTERPROMPTS, a brand
> selling practical AI prompt packs to people building something online.
>
> The niche is: `<<< NICHE >>>`
>
> It must not overlap with: Freelancing, Cold Outreach, Content Creation, Local
> Business, Digital Products.
>
> Return ONLY this JSON:
>
> ```json
> {
>   "slug": "kebab-case-url",
>   "keyword": "ONE WORD FOR INSTAGRAM COMMENTS",
>   "name": "X Pack",
>   "navLabel": "Short label",
>   "rowOutcome": "One sentence, what they achieve. Under 60 characters.",
>   "audience": "Who exactly, and what stage they are at.",
>   "outcome": "The concrete thing they have at the end.",
>   "headline": "Page headline. A specific promise, not a category name.",
>   "support": ["One line on method.", "One line naming their stage."],
>   "inside": ["5 items — what they DO"],
>   "benefits": ["4 items — what they WALK AWAY WITH, outcomes not tasks"],
>   "sequence": { "lead": "Why order matters here.", "steps": ["5 workflow stages"] },
>   "seo": { "title": "Under 60 chars", "description": "Under 155 chars, says 25 prompts and free" },
>   "premiumStages": ["8 stage names for the 200 premium prompts"]
> }
> ```
>
> Rules: no claim that cannot be evidenced; no numbers you were not given; the
> headline must break if you swap the topic word for another niche; `inside` is
> process language and `benefits` is outcome language — keep them distinct.

Copy the result into a new `content/packs/<slug>.mjs` using an existing pack file
as the shape, then `node build.mjs`. The route, both pages, the sitemap entry and
the pricing row are created automatically.

---

## When a batch is rejected

| Rejection | Meaning |
|---|---|
| `too similar to existing prompt` | It rewrote something. Add that title to ALREADY WRITTEN, re-run. |
| `only N words` | It got lazy near the end. Ask it to expand those specific items. |
| `missing section(s)` | It dropped a heading. Re-run just those items. |
| `no [INPUT] placeholder` | It wrote advice, not a prompt. |
| `banned phrase` | It drifted into marketing. |
| `duplicate title` | Two prompts share a name — usually the same job twice. |

Paste the errors back to the model and ask for corrections on those items only.
