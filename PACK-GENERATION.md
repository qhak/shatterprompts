# Generating a premium pack

How to produce the 200 prompts for a premium pack using Claude (or any strong model),
without ending up with 200 rewordings of the same eight ideas.

---

## The method

**Do not ask for 200 prompts in one go.** Quality collapses somewhere around 30 and
the model starts rephrasing what it already wrote. Instead:

1. Pick the eight **stages** of the workflow (below).
2. Run the generation prompt once per stage → 25 prompts each → 200 total.
3. After each batch, validate it:

```bash
node tools/add-batch.mjs freelancing ~/Downloads/batch-01.json
```

The validator **rejects the whole batch** if anything is thin, duplicated, missing
the house format, or drifts into marketing language. Nothing is written unless it
all passes, so a bad batch costs you one re-run and never reaches the product.

4. When the file reaches 200, add the download and flip `premium.ready` to `true`.

---

## Stages for the Freelancing pack

Run the prompt below eight times, changing only the STAGE block each time.

| # | Stage | Covers |
|---|---|---|
| 1 | Choosing what to sell | skills audit, service selection, market sizing, positioning against alternatives |
| 2 | Niching and market research | segment analysis, buyer research, demand signals, competitor pricing |
| 3 | Building the offer | packaging, tiers, scope definition, guarantees, deliverable design |
| 4 | Pricing | rate setting, value framing, raising prices, discount handling, payment terms |
| 5 | Proof and portfolio | spec work, case studies, testimonials, personal site, social proof |
| 6 | Finding leads | list building, signals, inbound, referrals, partnerships, platforms |
| 7 | Outreach and sales | first contact, follow-up, calls, proposals, objections, closing |
| 8 | Delivery and retention | onboarding, project management, scope creep, feedback, repeat work, raising rates |

---

## THE GENERATION PROMPT

Copy everything between the lines. Replace the four `<<< >>>` blocks.

---

You are writing prompts for a paid product. People pay for these, so a prompt that
produces generic output is a refund, not a minor flaw. You have written prompts
professionally for years and you are hard to impress.

<<< PACK >>>
Topic: Freelancing
Buyer: someone with a skill who wants to sell it as a service. They may already have
a client or two. They are not a beginner who needs "what is freelancing" explained.
Outcome the pack delivers: a working freelance business — chosen service, priced
offer, proof, a lead source, and a repeatable sales process.

<<< STAGE >>>
Stage 3 of 8: Building the offer
This batch covers: packaging, tiers, scope definition, guarantees, deliverable design.
Stay inside this stage. Do not write prompts about pricing, lead generation or
outreach — other batches cover those.

<<< ALREADY WRITTEN >>>
Do not repeat or reword any of these. Paste the `title` values already in the pack:
[PASTE THE TITLES FROM content/premium/freelancing.json, OR "none yet"]

<<< HOUSE FORMAT >>>
Every prompt uses these sections, in this order, with these exact headings:

You are [a specific role, with a stated stance or bias — e.g. "sceptical by default",
"refuses to invent numbers"]. [One line on why that stance matters here.]

MY SITUATION
[The inputs the user pastes, one per line, each with a [PLACEHOLDER].]

WHAT I NEED
[One or two lines. The concrete thing they get back.]

HOW TO DO IT
1. [Numbered method. 3-6 steps. Each step is an instruction to the model, not advice
   to the user.]

RETURN
[The exact output format — table columns, list structure, word limits, sections.]

RULES
- [3-5 constraints. At least one must prevent generic or invented output.]

---

REQUIREMENTS

1. Write exactly 25 prompts for this stage.
2. Each prompt is 150-320 words. Under 150 is too thin to sell.
3. Every prompt must include all five headings above, spelled exactly:
   MY SITUATION, WHAT I NEED, HOW TO DO IT, RETURN, RULES
4. Every prompt must contain at least one [PLACEHOLDER] in capitals.
5. Every prompt must have a distinct JOB. If two prompts would produce similar
   output from similar inputs, one of them should not exist. Vary the job, not the
   wording.
6. The RULES block must do real work. At least one rule per prompt must stop the
   model producing something plausible but useless — for example:
   - "If I have not given you a number, ask for it rather than estimating."
   - "Reject any answer a competitor could give unchanged."
   - "If the honest answer is that there is not enough information, say so."
   - "Do not soften this to be encouraging."
7. Order the 25 so an unfamiliar buyer could work top to bottom and each prompt
   feeds the next.

BANNED — the validator rejects the batch if any appear
- "unleash", "level up", "game-changing", "revolutionary", "10x", "secret weapon",
  "cutting-edge", "industry-leading", "proven to", "while you sleep"
- Any guarantee of income, clients, results or growth
- Any invented statistic, benchmark or "studies show"
- Prompts that only ask the model to "act as an expert and give me advice"
- Prompts whose whole job is writing a social post — that is the Content pack

OUTPUT

Return ONLY a JSON array. No preamble, no explanation, no code fence.

[
  {
    "title": "Short specific title, 2-5 words",
    "text": "The full prompt with real line breaks"
  }
]

Use `\n` for line breaks inside the text values. Do not use markdown inside the
text — plain text with the capitalised headings only. Ensure the JSON parses.

---

## After each batch

```bash
node tools/add-batch.mjs freelancing ~/Downloads/batch-03.json
```

If it rejects the batch, paste the errors back to the model and ask for corrections.
The most common rejections:

| Rejection | What it means |
|---|---|
| `too similar to existing prompt` | The model rewrote something. Add that title to ALREADY WRITTEN and re-run. |
| `only N words` | It got lazy near the end of the batch. Ask it to expand those specific ones. |
| `missing section(s)` | It dropped a heading. Usually fixable by re-running just those items. |
| `no [INPUT] placeholder` | It wrote advice, not a prompt. |
| `banned phrase` | It drifted into marketing. |

---

## Adding a completely new niche

To add a pack that does not exist yet, first generate the pack metadata:

---

You are naming and positioning a new prompt pack for SHATTERPROMPTS, a brand selling
practical AI prompt packs to people building something online.

The niche is: <<< NICHE >>>

Existing packs, which this must not overlap with: Freelancing, Cold Outreach,
Content Creation, Local Business, Digital Products.

Return ONLY this JSON:

{
  "slug": "kebab-case-url",
  "keyword": "SINGLE WORD FOR INSTAGRAM COMMENTS",
  "name": "X Pack",
  "navLabel": "Short label",
  "rowOutcome": "One sentence, what they achieve. Under 60 characters.",
  "audience": "Who exactly this is for, and what stage they are at.",
  "outcome": "The concrete thing they have at the end.",
  "headline": "The page headline. A specific promise, not a category name.",
  "support": ["One line on method.", "One line naming the stage they are at."],
  "inside": ["5 items, what they DO"],
  "benefits": ["4 items, what they WALK AWAY WITH — outcomes, not tasks"],
  "sequence": {
    "lead": "One line on why order matters for this topic.",
    "steps": ["5 stages of the workflow"]
  },
  "seo": {
    "title": "Under 60 chars, includes the niche",
    "description": "Under 155 chars, says 25 prompts and free"
  },
  "stages": ["8 stage names for generating the 200 premium prompts"]
}

Rules:
- No claim that cannot be evidenced. No numbers you were not given.
- The headline must not work for a different pack if you swapped the topic word.
- "inside" is process language, "benefits" is outcome language. Keep them distinct.

---

Then paste the result into a new `content/packs/<slug>.mjs`, copying the shape of an
existing pack file, and run `node build.mjs`. The route, both pages, the sitemap and
the pricing row are all created automatically.
