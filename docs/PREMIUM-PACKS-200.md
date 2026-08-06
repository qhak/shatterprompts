# Premium packs — 200 prompts × 6 niches

Six paid packs, 200 prompts each. Built in **eight runs of 25**, one per stage.

Never ask for 200 in a single reply. Quality collapses somewhere around prompt 30
and the model starts rewording what it already wrote — which the validator will
reject anyway, wasting the whole batch.

| # | Niche | Slug | Free pack | Premium |
|---|-------|------|-----------|---------|
| 01 | Freelancing | `freelancing` | 25 done | 0 / 200 |
| 02 | Cold outreach | `outreach` | 25 done | 0 / 200 |
| 03 | Content creation | `content` | 25 done | 0 / 200 |
| 04 | Local business | `local-business` | 25 done | 0 / 200 |
| 05 | Digital products | `digital-products` | 25 done | 0 / 200 |
| 06 | Job search | `job-search` | needs writing | 0 / 200 |

---

## How to run a niche

For each niche there is one **MASTER** block and eight **STAGE** blocks.

1. Copy the MASTER block for the niche.
2. Paste STAGE 1 into the `<<< STAGE >>>` slot.
3. Run it. Save the JSON to `~/Downloads/<slug>-s1.json`.
4. Validate:

```bash
node tools/add-batch.mjs freelancing ~/Downloads/freelancing-s1.json premium
```

5. Repeat for stages 2-8. Before each run, paste the titles already accepted into
   the `ALREADY WRITTEN` slot — this is what stops stage 6 rewriting stage 3.

Get the accepted titles at any point with:

```bash
node -e "console.log(JSON.parse(require('fs').readFileSync('content/premium/freelancing.json','utf8')).map(p=>p.title).join('\n'))"
```

At 200:

```
premium: {
  ready: true,                                    // only once 200 exist
  downloadUrl: "https://...",                     // the actual file
  checkoutUrl: "https://buy.stripe.com/...",      // the actual checkout
}
```

The build **refuses** to ship a checkout without a download, or a `ready: true`
without a `downloadUrl`. That gate exists so nobody can pay $2.99 and receive
nothing. Do not remove it.

### Cost and pacing

Eight runs per niche, six niches — 48 runs. Do **one niche end to end first**
(Freelancing), put it on sale at $2.99, and see whether anyone buys before
writing the other 1,000 prompts.

---
---
---

# 01 · Freelancing

## MASTER — copy this, fill the two slots

```
You are writing prompts for a paid product. People pay for these, so a prompt
that produces generic output is a refund, not a minor flaw. You have written
prompts professionally for years and you are hard to impress. If a prompt you
have drafted could be replaced by "act as an expert and advise me", delete it and
write a better one.

NICHE
Topic: Freelancing — selling a skill as a service.
Buyer: someone with a skill who is already trying to sell it. They may have one
or two clients. They are not a beginner who needs "what is freelancing"
explained, and they are not paying for motivation.
Premium standard: these prompts go deeper than the free pack. More inputs, more
demanding output formats, more edge cases handled, and rules that stop the model
producing something plausible and useless.

<<< STAGE >>>

ALREADY WRITTEN — do not repeat, reword or overlap with any of these:
[PASTE ACCEPTED TITLES, OR "none yet"]

HOUSE FORMAT — every prompt uses these sections, in this order, these exact headings:

You are [specific role, with a stated stance — e.g. "sceptical by default",
"refuses to invent numbers", "will tell me when the answer is no"].
[One line on why that stance matters for this particular job.]

MY SITUATION
[Inputs the user pastes, one per line, each with a [PLACEHOLDER].]

WHAT I NEED
[One or two lines. The concrete thing they get back.]

HOW TO DO IT
1. [3-6 numbered steps. Instructions to the model, not advice to the user.]

RETURN
[Exact output format — table columns, list structure, word limits, sections.]

RULES
- [3-5 constraints. At least one must prevent generic or invented output.]

REQUIREMENTS
1. Exactly 25 prompts, all inside this stage. Other batches cover the rest — do
   not stray into them.
2. 150-320 words each. Under 150 is too thin for a paid pack.
3. All five headings present, spelled exactly.
4. At least one [PLACEHOLDER] in capitals per prompt.
5. Distinct jobs. Vary the job, not the wording. If two prompts would produce
   similar output from similar inputs, one of them should not exist.
6. Each RULES block must do real work. At least one rule per prompt must stop
   plausible-but-useless output. Rules that qualify:
   - "If I have not given you a number, ask for it rather than estimating."
   - "Reject any line a competitor could put on their own site unchanged."
   - "If there is not enough information to answer, say so instead of guessing."
   - "Do not soften this to be encouraging."
   - "Every claim must trace back to something I pasted above."
7. Output formats should be specific: named table columns, word counts, section
   headings, ranked lists with the reason for the rank.
8. Vary the role in the opening line. Twenty-five prompts should not all start
   "You are an experienced freelance consultant".

BANNED — these get the batch rejected by the validator
"unleash", "level up", "game-changing", "revolutionary", "10x", "secret weapon",
"cutting-edge", "industry-leading", "proven to", "while you sleep"; any guarantee
of income, clients, results or growth; any invented statistic or "studies show".

OUTPUT
Return ONLY a JSON array. No preamble, no explanation, no code fence.

[ { "title": "2-5 word title", "text": "the full prompt" } ]

Use \n for line breaks inside text values. Plain text only — no markdown inside
the prompt text. Ensure the JSON parses.
```

## STAGE 1 — Choosing what to sell

```
STAGE
Stage 1 of 8: Choosing what to sell.
Covers: converting existing ability into a service someone pays for, and
eliminating everything else. Deciding, not delivering.
Stay out of: pricing (stage 4), proof (stage 5), finding clients (stage 6).

Cover this ground across the 25. Use these as anchors and invent the rest inside
the same territory:
- Skill inventory from work history, hobbies and things people already ask for
- Separating what they enjoy from what sells, and deciding when those conflict
- Service vs productised service vs retainer — which suits this person
- Testing whether a service is already being bought by someone, somewhere
- Adjacent services that reuse the same skill for a richer buyer
- The "unfair advantage" audit — access, context, speed, or specific experience
- Time-to-competence: what could be sold in 30 days vs what needs six months
- Forcing elimination down to one, with the reason each option was cut
```

## STAGE 2 — Niching and market research

```
STAGE
Stage 2 of 8: Niching and market research.
Covers: choosing who to sell to and understanding them well enough to write in
their language.
Stay out of: writing the offer itself (stage 3), outreach copy (stage 7).

Anchors:
- Vertical vs horizontal niching, and how to choose between them
- Sizing a niche without inventing market statistics
- Finding where a niche congregates online and offline
- Reading a niche's own vocabulary back to them
- Interviewing five people in the niche without leading the witness
- Mapping who else already sells to this niche and what they charge for
- Spotting a niche that is too poor, too small, or too crowded — and saying so
- Committing: writing the niche statement and the test that would disprove it
```

## STAGE 3 — Building the offer

```
STAGE
Stage 3 of 8: Building the offer.
Covers: turning a service into a defined, deliverable, describable thing.
Stay out of: price (stage 4), proposals sent to a named prospect (stage 7).

Anchors:
- The one-line offer, and five rewrites testing different emphases
- Scope definition with an explicit "not included" list
- Turning an hourly service into a fixed-scope package
- Designing the deliverable so the client can tell it worked
- Onboarding requirements — what the client must supply before work starts
- Guarantee design that is honest and survivable, or the decision not to offer one
- The good/better/best ladder, differing in scope rather than in hours
- Offer stress test: what breaks if the client is difficult, slow or unclear
```

## STAGE 4 — Pricing and money

```
STAGE
Stage 4 of 8: Pricing and money.
Covers: what to charge, how to say it, and how to get paid.
Stay out of: objection handling in a live sale (stage 7), delivery (stage 8).

Anchors:
- Rate floor from actual costs, target income and realistic billable hours
- Value pricing from the client's own numbers, never from assumed ones
- Moving from hourly to project to retainer, and when each is wrong
- The rate-increase conversation with an existing client
- Deposits, milestones and payment terms
- Late payment: the escalating sequence, and the point at which work stops
- Discount policy — when a discount is a trade and when it is a loss
- Deciding the walk-away number before the call, and holding it
```

## STAGE 5 — Proof and portfolio

```
STAGE
Stage 5 of 8: Proof and portfolio.
Covers: making the work visible and credible, using only what actually happened.
Stay out of: outreach messages (stage 7), delivery process (stage 8).

Anchors:
- Case study structure: situation, constraint, action, measured result
- Recovering real numbers from a finished job, and flagging what stays unverified
- Building proof with no clients: self-directed work against a realistic brief
- Testimonial requests that produce specifics, and the four questions that do it
- Turning a testimonial into a usable quote without changing its meaning
- Portfolio selection: what to cut, and why three strong pieces beat nine
- Writing the personal site's home page and about page
- Handling an NDA or unshowable work without lying about it
```

## STAGE 6 — Finding leads

```
STAGE
Stage 6 of 8: Finding leads.
Covers: producing a named list of people worth contacting, repeatably.
Stay out of: the messages themselves (stage 7).

Anchors:
- Turning the niche statement into search criteria that return real names
- Platform-by-platform sourcing plans, with the actual filters to use
- Qualification checklist and a scoring model for a raw list
- Warm-network mapping — everyone who already knows them, ranked
- Referral partners: who sells to the same buyer without competing
- Inbound: the one channel worth building, chosen on evidence
- Job boards and marketplaces as a lead source rather than a workplace
- Lead tracking that fits in a spreadsheet and survives a busy week
```

## STAGE 7 — Outreach and sales

```
STAGE
Stage 7 of 8: Outreach and sales.
Covers: first contact through to a signed yes.
Stay out of: list building (stage 6), delivery (stage 8).

Anchors:
- First-message templates by channel, each requiring one observable fact
- The follow-up sequence, with a stated stopping point
- Discovery call: question order, what to listen for, when to stop asking
- Diagnosing the real problem behind the stated one
- The proposal, one page, with scope, price, timeline and next step
- The eight objections that actually occur, answered without discounting reflexively
- Negotiating scope instead of price
- Closing, and the follow-up when the answer is "let me think about it"
```

## STAGE 8 — Delivery and retention

```
STAGE
Stage 8 of 8: Delivery and retention.
Covers: doing the work well enough that it repeats.
Stay out of: sales (stage 7), pricing theory (stage 4).

Anchors:
- Kick-off: the questions that prevent the project going wrong in week three
- Project plan and milestone communication
- Weekly client update that takes ten minutes and prevents check-in emails
- Scope creep: recognising it, and the exact sentence that reprices it
- Difficult feedback and unreasonable revision requests
- Handover, documentation, and making the result legible
- The retainer conversation at the end of a successful project
- Win/loss review, and the referral ask with the right timing and wording
```

---
---
---

# 02 · Cold outreach

## MASTER — copy this, fill the two slots

```
You are writing prompts for a paid product. People pay for these, so a prompt
that produces generic output is a refund, not a minor flaw. You have written
prompts professionally for years and you are hard to impress.

NICHE
Topic: Cold outreach — email, DMs, LinkedIn and phone.
Buyer: someone already sending cold messages and getting silence. They have
something to sell and a rough idea who buys it. They do not need "what is cold
email" explained.
Premium standard: deeper than the free pack. More inputs, more demanding output
formats, more edge cases, and rules that stop the model producing something
plausible and useless.

<<< STAGE >>>

ALREADY WRITTEN — do not repeat, reword or overlap with any of these:
[PASTE ACCEPTED TITLES, OR "none yet"]

HOUSE FORMAT — every prompt uses these sections, in this order, these exact headings:

You are [specific role, with a stated stance]. [One line on why that stance matters.]

MY SITUATION
[Inputs the user pastes, one per line, each with a [PLACEHOLDER].]

WHAT I NEED
[One or two lines. The concrete thing they get back.]

HOW TO DO IT
1. [3-6 numbered steps. Instructions to the model, not advice to the user.]

RETURN
[Exact output format — table columns, list structure, word limits, sections.]

RULES
- [3-5 constraints. At least one must prevent generic or invented output.]

REQUIREMENTS
1. Exactly 25 prompts, all inside this stage.
2. 150-320 words each.
3. All five headings, spelled exactly.
4. At least one [PLACEHOLDER] per prompt.
5. Distinct jobs. Vary the job, not the wording.
6. Each RULES block must do real work. In this niche, at least one rule per
   prompt must forbid inventing facts about the prospect's company, forbid
   fabricated compliments, and forbid claiming results the user did not supply.
7. Output formats should be specific: named columns, word counts, sections.
8. Vary the role in the opening line across the 25.

BANNED — these get the batch rejected by the validator
"unleash", "level up", "game-changing", "revolutionary", "10x", "secret weapon",
"cutting-edge", "industry-leading", "proven to", "while you sleep"; any guarantee
of replies, meetings or revenue; any invented statistic; anything encouraging
deception about who the sender is, impersonation, or bulk-sending to scraped
addresses.

OUTPUT
Return ONLY a JSON array. No preamble, no explanation, no code fence.

[ { "title": "2-5 word title", "text": "the full prompt" } ]

Use \n for line breaks inside text values. Plain text only. Ensure the JSON parses.
```

## STAGE 1 — Defining who to contact

```
STAGE
Stage 1 of 8: Defining who to contact.
Covers: deciding who is worth a message before any list is built.
Stay out of: sourcing tools (stage 2), message copy (stage 4).

Anchors:
- ICP reverse-engineered from deals that already closed
- Buying triggers, and how each one is observable from outside
- Disqualification criteria that remove a prospect immediately
- Segmenting one market into three tiers with different messages
- The economics: what a deal is worth, and how much effort each tier justifies
- Choosing between the person with the problem and the person with the budget
- Company-size boundaries — too small to pay, too big to reach
- Writing the one-paragraph targeting brief everything else is judged against
```

## STAGE 2 — Building the list

```
STAGE
Stage 2 of 8: Building the list.
Covers: turning criteria into real names, cleanly and legally.
Stay out of: research on individual prospects (stage 3), copy (stage 4).

Anchors:
- Source mapping: where this list can be built, with the filters for each source
- Search-string construction for directories, job boards and social platforms
- Using hiring activity, funding, reviews and site changes as list signals
- Finding the right person and their likely role title
- Verifying a contact without guessing at an email pattern
- List hygiene: deduplication, role addresses, and what to remove before sending
- Consent and legal basis — what changes by jurisdiction, and asking the user
  what applies to them rather than assuming
- Scoring and ordering the list so the best 20 get the most effort
```

## STAGE 3 — Research and personalisation

```
STAGE
Stage 3 of 8: Research and personalisation.
Covers: finding one true, specific, useful thing about a prospect.
Stay out of: writing the full message (stage 4).

Anchors:
- The five-minute research routine that produces three usable facts
- Reading a company's own site for the problem they are trying to solve
- Reading their job ads as a statement of what is broken
- Reading reviews and comments for the complaint they have not fixed
- Distinguishing an observable problem from a guessed one
- Compressing research into one sentence that could not be sent to anyone else
- Personalisation at volume — what can be templated and what cannot
- The research kill-switch: when to skip a prospect rather than force a hook
```

## STAGE 4 — First-touch email

```
STAGE
Stage 4 of 8: The first email.
Covers: the message itself.
Stay out of: follow-ups (stage 6), other channels (stage 5).

Anchors:
- The under-90-word structure: relevance, one claim, one small ask
- Opening lines that are impossible to send to anyone else
- Subject lines that describe the email honestly, and rejecting clickbait
- The ask: call vs question vs resource, and which suits the situation
- Cutting filler — every line that exists for the sender's comfort
- Rewriting a long email down without losing the point
- Three versions of one email testing three different angles
- Pre-send review checklist that catches the obvious failures
```

## STAGE 5 — Other channels

```
STAGE
Stage 5 of 8: LinkedIn, DMs, phone and video.
Covers: the same job in channels with different rules.
Stay out of: email copy (stage 4), sequences (stage 6).

Anchors:
- LinkedIn connection note and the message after acceptance
- Instagram or X DMs, where length and tone rules are stricter
- Warming a prospect through comments before messaging at all
- The cold call opening, and the branch for "we're busy right now"
- Voicemail that gets a callback
- Loom or video message: script, length, and what to show
- Choosing a channel per prospect rather than per campaign
- Multi-channel sequencing without appearing everywhere at once
```

## STAGE 6 — Follow-up sequences

```
STAGE
Stage 6 of 8: Follow-up sequences.
Covers: touches two to seven.
Stay out of: reply handling (stage 7).

Anchors:
- Sequence design: number of touches, spacing, and what changes each time
- Follow-up two: a new angle rather than a repeat
- Follow-up three: evidence, with a rule against inventing any of it
- The value-add touch that is genuinely useful on its own
- The one-line nudge, and why it sometimes outperforms everything else
- The break-up message that is easy to reply to
- Re-engaging a list that went cold three months ago
- Sequence rules: when to stop, and what to do with a "not now"
```

## STAGE 7 — Objections and replies

```
STAGE
Stage 7 of 8: Handling what comes back.
Covers: every reply type, including the discouraging ones.
Stay out of: sequence structure (stage 6), deliverability (stage 8).

Anchors:
- "Not interested" — one good reply, and knowing when to stop
- "Send me some info" — turning a brush-off into a call or a clean close
- "We already work with someone" — finding out whether that is true
- "How much?" before value is established
- "Email me in six months" — the diarised follow-up that actually lands
- Hostile or rude replies, answered without escalation
- The warm reply: booking a time in the fewest messages
- Qualifying on the reply so the call is not wasted
```

## STAGE 8 — Testing, deliverability and volume

```
STAGE
Stage 8 of 8: Making it repeatable.
Covers: the system around the messages.
Stay out of: copy (stages 4-5), replies (stage 7).

Anchors:
- The weekly numbers review: sent, delivered, replied, booked
- Diagnosing zero replies from the actual figures, refusing to guess without them
- Designing a test that changes one variable at a time
- Sample size — knowing when a result means nothing yet
- Deliverability basics: domain, warm-up, volume, and what breaks them
- Spam-trigger review of a draft, without superstition
- Daily operating plan at a volume one person can sustain
- The quarterly reset: what to keep, what to rewrite, what to abandon
```

---
---
---

# 03 · Content creation

## MASTER — copy this, fill the two slots

```
You are writing prompts for a paid product. People pay for these, so a prompt
that produces generic output is a refund, not a minor flaw. You have written
prompts professionally for years and you are hard to impress.

NICHE
Topic: Content creation for an audience that leads to an offer.
Buyer: someone posting to grow an audience for a service or product. They can
already film, write and edit. What they lack is a system, a reason for each post
to exist, and a path from viewer to customer.
Premium standard: deeper than the free pack. More inputs, more demanding output
formats, more edge cases, and rules that stop the model producing something
plausible and useless.

<<< STAGE >>>

ALREADY WRITTEN — do not repeat, reword or overlap with any of these:
[PASTE ACCEPTED TITLES, OR "none yet"]

HOUSE FORMAT — every prompt uses these sections, in this order, these exact headings:

You are [specific role, with a stated stance]. [One line on why that stance matters.]

MY SITUATION
[Inputs the user pastes, one per line, each with a [PLACEHOLDER].]

WHAT I NEED
[One or two lines. The concrete thing they get back.]

HOW TO DO IT
1. [3-6 numbered steps. Instructions to the model, not advice to the user.]

RETURN
[Exact output format — table columns, list structure, word limits, sections.]

RULES
- [3-5 constraints. At least one must prevent generic or invented output.]

REQUIREMENTS
1. Exactly 25 prompts, all inside this stage.
2. 150-320 words each.
3. All five headings, spelled exactly.
4. At least one [PLACEHOLDER] per prompt.
5. Distinct jobs. Vary the job, not the wording.
6. Each RULES block must do real work. In this niche, at least one rule per
   prompt must forbid engagement-bait, forbid stating how a platform's algorithm
   works as fact, and forbid a hook that promises something the post does not
   deliver.
7. Output formats should be specific: scripts with timings, slide-by-slide
   breakdowns, ranked lists with reasons.
8. Vary the role in the opening line across the 25.

BANNED — these get the batch rejected by the validator
"unleash", "level up", "game-changing", "revolutionary", "10x", "secret weapon",
"cutting-edge", "industry-leading", "proven to", "while you sleep"; any guarantee
of views, followers or virality; any invented statistic; any algorithm claim
stated as fact.

OUTPUT
Return ONLY a JSON array. No preamble, no explanation, no code fence.

[ { "title": "2-5 word title", "text": "the full prompt" } ]

Use \n for line breaks inside text values. Plain text only. Ensure the JSON parses.
```

## STAGE 1 — Audience and positioning

```
STAGE
Stage 1 of 8: Audience and positioning.
Covers: who this is for and why they should follow this account and not another.
Stay out of: ideas (stage 2), hooks (stage 3).

Anchors:
- Defining the single viewer in enough detail to judge a post against
- The transformation promised, checked against what the offer delivers
- Positioning against the ten nearest accounts, found and analysed
- The stance: what this account believes that others in the niche do not
- Choosing the primary platform on evidence, not preference
- Bio, handle and profile image as one coherent statement
- Personal brand vs faceless — deciding, with the trade-offs stated
- The content promise: the sentence that says what following gets them
```

## STAGE 2 — Pillars and ideas

```
STAGE
Stage 2 of 8: Pillars and idea generation.
Covers: never opening the app with nothing to say.
Stay out of: hooks (stage 3), scripts (stages 4-5).

Anchors:
- Three pillars, each able to carry fifty posts
- Thirty ideas from one pillar, differing in angle not wording
- Mining comments, DMs and replies for what the audience actually asks
- Turning real client and customer questions into posts
- The contrarian take, argued honestly rather than for provocation
- Story-based ideas from the user's own history
- Series and recurring formats that build expectation
- The capture-and-rank system so ideas are never generated under deadline
```

## STAGE 3 — Hooks and openings

```
STAGE
Stage 3 of 8: Hooks and openings.
Covers: the first line and the first three seconds.
Stay out of: the body of the content (stages 4-5).

Anchors:
- Ten genuinely different hooks for one idea, each with its reasoning
- Diagnosing why an opening failed and rewriting it three ways
- Hook patterns catalogued, with the situation each one suits
- Matching the hook to the promise so the post can pay it off
- The visual hook — what is on screen during the first line
- Written hooks for carousels, threads and newsletters
- Curiosity without deception: the line between the two, applied
- Testing two hooks on the same content and reading the result
```

## STAGE 4 — Short-form video

```
STAGE
Stage 4 of 8: Short-form video.
Covers: Reels, TikTok, Shorts — script to publish.
Stay out of: written formats (stage 5), calendars (stage 7).

Anchors:
- The 45-second script with timing marks and B-roll notes
- The 15-second script, where every word has to earn its place
- Talking-head structure that holds attention without editing tricks
- Demonstration and screen-recording scripts
- Story format: setup, turn, point, in under a minute
- On-screen text and captions as a second layer of information
- Filming plan for batching six videos in one session
- Self-review before posting: the checklist that catches the obvious failures
```

## STAGE 5 — Written and long-form

```
STAGE
Stage 5 of 8: Carousels, threads, newsletters and long-form.
Covers: everything that is read rather than watched.
Stay out of: video (stage 4), CTAs (stage 6).

Anchors:
- Carousel, slide by slide, where slide one survives without the caption
- The thread, structured so each post earns the next
- Captions that add to the content rather than repeating it
- The newsletter issue: one idea, one takeaway, one action
- A long-form post that is worth the length
- Turning a video script into a written piece properly
- Editing pass: cutting a draft by a third without losing the point
- Writing in the user's own voice from a sample they paste
```

## STAGE 6 — CTAs and funnels

```
STAGE
Stage 6 of 8: From viewer to customer.
Covers: the path out of the feed.
Stay out of: content formats (stages 4-5), analytics (stage 8).

Anchors:
- The comment-keyword-to-DM flow, written end to end
- DM scripts that do not read as automated
- The offer post that sells without pretending it is not selling
- Soft CTAs for content that is not selling anything today
- Bio link strategy and what the destination page must say
- The lead magnet: choosing one worth an email address
- Nurture sequence after the email is given
- Ratio and pacing: how often to sell, decided deliberately
```

## STAGE 7 — Repurposing and calendars

```
STAGE
Stage 7 of 8: Systems, calendars and repurposing.
Covers: sustaining output without burning out.
Stay out of: analytics (stage 8).

Anchors:
- One video into five genuinely different posts
- Cross-platform adaptation, respecting each platform's rules
- Reviving a post that performed well six months ago
- The monthly calendar built from pillars and ideas
- The weekly production block, sized to real available time
- Batching: scripting, filming, editing and scheduling as separate sessions
- The minimum viable week for when everything goes wrong
- Asset library and naming so nothing is remade twice
```

## STAGE 8 — Analytics and iteration

```
STAGE
Stage 8 of 8: Reading the numbers.
Covers: deciding what to change, on evidence.
Stay out of: producing content (stages 4-5).

Anchors:
- The five numbers worth watching, and everything to ignore
- Diagnosing low views from the actual figures, refusing to guess without them
- Views but no followers: separating reach from reason-to-follow
- Followers but no sales: finding where the path breaks
- Retention graphs: reading the drop-off and locating the cause
- Post-mortem on a post that did unexpectedly well
- Designing a one-variable test across four posts
- The monthly review that ends in exactly one change
```

---
---
---

# 04 · Local business

## MASTER — copy this, fill the two slots

```
You are writing prompts for a paid product. People pay for these, so a prompt
that produces generic output is a refund, not a minor flaw. You have written
prompts professionally for years and you are hard to impress.

NICHE
Topic: Selling services to local businesses.
Buyer: someone selling to businesses they can visit, phone or find on a map —
trades, salons, restaurants, gyms, dentists, garages. Often no clients yet, no
case studies, no tool budget.
Premium standard: deeper than the free pack. More inputs, more demanding output
formats, more edge cases, and rules that stop the model producing something
plausible and useless.

<<< STAGE >>>

ALREADY WRITTEN — do not repeat, reword or overlap with any of these:
[PASTE ACCEPTED TITLES, OR "none yet"]

HOUSE FORMAT — every prompt uses these sections, in this order, these exact headings:

You are [specific role, with a stated stance]. [One line on why that stance matters.]

MY SITUATION
[Inputs the user pastes, one per line, each with a [PLACEHOLDER].]

WHAT I NEED
[One or two lines. The concrete thing they get back.]

HOW TO DO IT
1. [3-6 numbered steps. Instructions to the model, not advice to the user.]

RETURN
[Exact output format — table columns, list structure, word limits, sections.]

RULES
- [3-5 constraints. At least one must prevent generic or invented output.]

REQUIREMENTS
1. Exactly 25 prompts, all inside this stage.
2. 150-320 words each.
3. All five headings, spelled exactly.
4. At least one [PLACEHOLDER] per prompt.
5. Distinct jobs. Vary the job, not the wording.
6. Each RULES block must do real work. In this niche, at least one rule per
   prompt must forbid inventing findings the user has not observed, forbid
   claiming a business is losing a specific amount without evidence, and forbid
   any script that misrepresents who the caller is.
7. Output formats should be specific: scored checklists, one-page proposals,
   call scripts with branches.
8. Vary the role in the opening line across the 25.

BANNED — these get the batch rejected by the validator
"unleash", "level up", "game-changing", "revolutionary", "10x", "secret weapon",
"cutting-edge", "industry-leading", "proven to", "while you sleep"; any invented
statistic about local search or customer behaviour; any guarantee of rankings,
leads or revenue; any pretence of calling on behalf of Google or another
platform.

OUTPUT
Return ONLY a JSON array. No preamble, no explanation, no code fence.

[ { "title": "2-5 word title", "text": "the full prompt" } ]

Use \n for line breaks inside text values. Plain text only. Ensure the JSON parses.
```

## STAGE 1 — Business type and territory

```
STAGE
Stage 1 of 8: Choosing the business type and the territory.
Covers: deciding who to sell to, geographically and by trade.
Stay out of: auditing (stage 2), offers (stage 3).

Anchors:
- Comparing trades on margin, urgency and owner reachability
- Estimating a realistic monthly budget from job value and volume
- Territory sizing: enough prospects, small enough to work
- Seasonality — which trades to approach in which months
- Owner-operated vs managed vs franchise, and who can actually say yes
- Choosing the lead service, easiest to say yes to
- Disqualification list: who to skip and why
- The written targeting brief everything else is judged against
```

## STAGE 2 — Auditing from outside

```
STAGE
Stage 2 of 8: Finding problems visible from outside.
Covers: everything that can be assessed without access.
Stay out of: turning findings into an offer (stage 3).

Anchors:
- Google Business Profile audit as a scored checklist
- Ten-minute website audit: speed, phone number, hours, next step
- Mobile experience audit, done on an actual phone
- Review audit — volume, recency, responses, and what the complaints reveal
- Social presence: worth fixing or worth abandoning
- Comparing the prospect against three local competitors
- Booking and enquiry path tested end to end as a customer
- Turning every finding into the three the owner will care about
```

## STAGE 3 — Findings into an offer

```
STAGE
Stage 3 of 8: Packaging the fix.
Covers: turning an audit into something sellable.
Stay out of: price (stage 4), the approach (stages 5-6).

Anchors:
- One offer with a defined outcome, not a menu
- Scoping the first job: small enough to say yes to, big enough to matter
- The one-page proposal: problem, fix, price, timeline, next step
- The free-audit-as-offer, and what to hold back
- Productising so the second client takes half the time
- Deliverables the owner can actually see and judge
- What to do when the audit found nothing worth fixing
- The delivery checklist, written before the first sale
```

## STAGE 4 — Pricing for local owners

```
STAGE
Stage 4 of 8: Pricing.
Covers: the number, and how to justify it to someone watching every pound.
Stay out of: live objection handling (stage 7).

Anchors:
- Pricing from what the problem costs them, using their numbers
- One-off vs monthly, and which the owner can actually commit to
- The three-tier menu, differing in scope rather than in effort
- Setup fee plus retainer, and when to drop the setup fee
- Payment terms for a business with lumpy cash flow
- The version to offer when the first number is too high
- Deciding the walk-away price before the meeting
- Raising the price on an existing local client
```

## STAGE 5 — First contact remotely

```
STAGE
Stage 5 of 8: Email, DM and messaging.
Covers: reaching the owner without turning up.
Stay out of: phone and in-person (stage 6).

Anchors:
- The first email, built on one specific audit finding
- Facebook or Instagram DM to a business page
- Messaging via a contact form when there is no direct address
- Subject lines for someone who does not read email during the day
- The video audit message: script, length, what to show
- Timing — when a busy owner actually reads things
- The follow-up sequence with a stated stopping point
- The referral-introduction message when there is a mutual connection
```

## STAGE 6 — In person and phone

```
STAGE
Stage 6 of 8: Walk-ins and calls.
Covers: the local advantage nobody else uses.
Stay out of: written outreach (stage 5), closing (stage 7).

Anchors:
- The first fifteen seconds of a walk-in, and when to leave
- What to hand over, and what it must contain
- The phone opening, and the branch for "we're slammed right now"
- Getting past the receptionist honestly
- Booking a return visit at a time the owner is not busy
- The sit-down meeting: agenda, order, and the moment to stop presenting
- Reading the room when the owner is clearly not interested
- Local networking and trade events, used deliberately
```

## STAGE 7 — Objections and closing

```
STAGE
Stage 7 of 8: Getting to yes.
Covers: the conversation from interest to signature.
Stay out of: delivery (stage 8).

Anchors:
- "We already have someone" — establishing whether that is true
- "Too expensive" — reducing scope rather than price
- "I need to think about it" — the next step that keeps it alive
- "My nephew does it" — answered without insulting anyone
- "Does this actually work?" with no case studies to point at
- "Send me a contract" — the simple agreement a local owner will sign
- Setting expectations honestly before taking money
- Knowing when to walk away, and doing it well
```

## STAGE 8 — Delivery, reporting and growth

```
STAGE
Stage 8 of 8: Keeping the client and getting the next one.
Covers: after the money arrives.
Stay out of: sales (stage 7).

Anchors:
- Onboarding: access, assets and expectations, collected in one go
- The monthly report an owner will actually read
- Reporting a result honestly when the result is small
- Reporting when the month went badly
- The check-in call that prevents cancellation
- Turning a project into a retainer
- The referral ask: timing, wording, and who to ask for by name
- The case study built from a real local client, with permission
```

---
---
---

# 05 · Digital products

## MASTER — copy this, fill the two slots

```
You are writing prompts for a paid product. People pay for these, so a prompt
that produces generic output is a refund, not a minor flaw. You have written
prompts professionally for years and you are hard to impress.

NICHE
Topic: Building and selling a digital product.
Buyer: someone who wants income that does not trade hours for money. They may
have a small audience or a skill, but no validated product. Their real risk is
building something nobody asked for.
Premium standard: deeper than the free pack. More inputs, more demanding output
formats, more edge cases, and rules that stop the model producing something
plausible and useless.

<<< STAGE >>>

ALREADY WRITTEN — do not repeat, reword or overlap with any of these:
[PASTE ACCEPTED TITLES, OR "none yet"]

HOUSE FORMAT — every prompt uses these sections, in this order, these exact headings:

You are [specific role, with a stated stance]. [One line on why that stance matters.]

MY SITUATION
[Inputs the user pastes, one per line, each with a [PLACEHOLDER].]

WHAT I NEED
[One or two lines. The concrete thing they get back.]

HOW TO DO IT
1. [3-6 numbered steps. Instructions to the model, not advice to the user.]

RETURN
[Exact output format — table columns, list structure, word limits, sections.]

RULES
- [3-5 constraints. At least one must prevent generic or invented output.]

REQUIREMENTS
1. Exactly 25 prompts, all inside this stage.
2. 150-320 words each.
3. All five headings, spelled exactly.
4. At least one [PLACEHOLDER] per prompt.
5. Distinct jobs. Vary the job, not the wording.
6. Each RULES block must do real work. In this niche, at least one rule per
   prompt must forbid inventing customer quotes or demand, forbid revenue
   projections presented as expectations, and require any pre-launch copy to
   state plainly what has not been built yet.
7. Output formats should be specific: outlines, page sections with word counts,
   ranked lists with reasons.
8. Vary the role in the opening line across the 25.

BANNED — these get the batch rejected by the validator
"unleash", "level up", "game-changing", "revolutionary", "10x", "secret weapon",
"cutting-edge", "industry-leading", "proven to", "while you sleep"; any income
projection stated as a likely outcome; fake scarcity, fake countdowns, fake
"only N left"; any invented testimonial or sales figure.

OUTPUT
Return ONLY a JSON array. No preamble, no explanation, no code fence.

[ { "title": "2-5 word title", "text": "the full prompt" } ]

Use \n for line breaks inside text values. Plain text only. Ensure the JSON parses.
```

## STAGE 1 — Problem mining

```
STAGE
Stage 1 of 8: Finding a problem worth solving.
Covers: everything before there is an idea.
Stay out of: validation (stage 2), format (stage 3).

Anchors:
- Mining the user's own history for problems they have already solved
- Reading a community for repeated, specific complaints
- Search behaviour as evidence of a problem people try to fix
- Clustering scattered complaints into one problem
- The expensive-problem test: enough time or money to be worth removing
- Frequency vs severity, and which matters more here
- Problems that are real but unsolvable by a digital product
- The one-paragraph problem statement a sufferer would recognise
```

## STAGE 2 — Validation

```
STAGE
Stage 2 of 8: Evidence that someone will pay.
Covers: testing before building.
Stay out of: building the product (stage 3), the sales page (stage 5).

Anchors:
- The validation offer: describing it as if it existed
- Conversation guide that asks about the problem without leading the witness
- Ten outreach messages to people who have the problem
- Designing a pre-sale that is honest about what does not exist yet
- The landing-page test, and what result would mean nothing
- Separating encouragement from intent to buy
- Setting the kill threshold before results arrive
- The go/no-go decision, made against the threshold rather than the feeling
```

## STAGE 3 — Format and scope

```
STAGE
Stage 3 of 8: Deciding what to actually build.
Covers: format, scope, outline.
Stay out of: naming and pricing (stage 4).

Anchors:
- Matching format to problem: template, course, ebook, tool, community
- What the user can realistically finish, given their actual hours
- Cutting to a v1, with an explicit deferred list
- Outlining so each section has a job and a stated outcome
- The minimum that still solves the problem completely
- Production plan with milestones and a real deadline
- Deciding what to make yourself and what to buy or license
- Quality bar: what "finished" means, defined before starting
```

## STAGE 4 — Naming and pricing

```
STAGE
Stage 4 of 8: Name, price and packaging.
Covers: how it is presented as a purchase.
Stay out of: the sales page copy (stage 5).

Anchors:
- Names that describe the outcome, tested for searchability
- Checking a name is not already taken or embarrassing to say
- Pricing from value and format rather than from feel
- Price testing without misleading early buyers
- Tiers and bundles that differ in substance
- One-off vs subscription, and when subscription is the wrong answer
- Order bumps and upsells that are genuinely relevant
- The refund policy, written honestly and then honoured
```

## STAGE 5 — Sales page

```
STAGE
Stage 5 of 8: The sales page.
Covers: every section of it.
Stay out of: email (stage 6), launch (stage 7).

Anchors:
- Ten headlines stating the outcome, ranked with reasons
- The problem section, precise enough that the reader feels understood
- What-you-get: concrete artefacts and quantities, not adjectives
- Who this is not for, written honestly
- The objection section, answering real reasons without dismissing them
- Proof section built only from what actually exists
- FAQ including the uncomfortable questions
- The checkout section: price, terms, and what happens after paying
```

## STAGE 6 — List building

```
STAGE
Stage 6 of 8: Building an audience to sell to.
Covers: getting people to hear about it before launch day.
Stay out of: the launch itself (stage 7).

Anchors:
- Choosing a lead magnet worth an email address
- The opt-in page, short and specific
- The welcome sequence: five emails with a job each
- A weekly email that people open without a sale attached
- Growing the list without an existing audience
- Collaborations and guest appearances, approached properly
- Segmenting by what people clicked and asked for
- List hygiene, and re-engaging before the launch
```

## STAGE 7 — Launch

```
STAGE
Stage 7 of 8: Selling it.
Covers: the launch window.
Stay out of: post-launch (stage 8).

Anchors:
- The launch calendar: what goes out when, and the job of each piece
- Pre-launch content that makes the announcement land
- Launch email one, for people who have never heard of it
- The middle-of-launch email that addresses the real hesitation
- The closing email, honest about what actually changes at the deadline
- Social launch posts that sell without pretending otherwise
- Answering the questions that arrive during a launch
- Handling a launch that is clearly going badly, while it is happening
```

## STAGE 8 — After launch

```
STAGE
Stage 8 of 8: What happens next.
Covers: buyers, results, and version two.
Stay out of: the launch (stage 7).

Anchors:
- The buyer welcome that reduces refunds and increases completion
- Five survey questions that produce usable answers
- Reading refund reasons without defensiveness
- Collecting a real testimonial with permission
- Post-launch review: what worked, what did not, what is unknown
- Evergreen: turning a launch into something that sells continuously
- Deciding v2 from buyer feedback rather than from preference
- The second product, chosen from what buyers asked for next
```

---
---
---

# 06 · Job search

## MASTER — copy this, fill the two slots

```
You are writing prompts for a paid product. People pay for these, so a prompt
that produces generic output is a refund, not a minor flaw. You have written
prompts professionally for years and you are hard to impress.

NICHE
Topic: Job search — applications, CV, interviews, offer.
Buyer: someone applying for roles and getting no response, or reaching interview
and stopping there. They are not asking for career therapy and they do not want
"believe in yourself". They want their application to be specific and their
answers to hold up.
Premium standard: deeper than the free pack. More inputs, more demanding output
formats, more edge cases, and rules that stop the model producing something
plausible and useless.

<<< STAGE >>>

ALREADY WRITTEN — do not repeat, reword or overlap with any of these:
[PASTE ACCEPTED TITLES, OR "none yet"]

HOUSE FORMAT — every prompt uses these sections, in this order, these exact headings:

You are [specific role, with a stated stance]. [One line on why that stance matters.]

MY SITUATION
[Inputs the user pastes, one per line, each with a [PLACEHOLDER].]

WHAT I NEED
[One or two lines. The concrete thing they get back.]

HOW TO DO IT
1. [3-6 numbered steps. Instructions to the model, not advice to the user.]

RETURN
[Exact output format — table columns, list structure, word limits, sections.]

RULES
- [3-5 constraints. At least one must prevent generic or invented output.]

REQUIREMENTS
1. Exactly 25 prompts, all inside this stage.
2. 150-320 words each.
3. All five headings, spelled exactly.
4. At least one [PLACEHOLDER] per prompt.
5. Distinct jobs. Vary the job, not the wording.
6. This niche needs the strictest honesty rules in the set. Every prompt that
   touches a CV, an application, or an interview answer MUST include a rule
   forbidding the invention of experience, qualifications, employers, dates or
   numbers, and MUST instruct the model to ask the user rather than fill a gap.
7. Output formats should be specific: rewritten bullets in a table, letters with
   word counts, scored answers with the score criteria named.
8. Vary the role in the opening line across the 25.

BANNED — these get the batch rejected by the validator
"unleash", "level up", "game-changing", "revolutionary", "10x", "secret weapon",
"cutting-edge", "industry-leading", "proven to", "while you sleep"; any invented
statistic about recruiters or applicant tracking systems stated as fact; any
guarantee of interviews or offers; anything that fabricates credentials or
encourages overstating experience.

OUTPUT
Return ONLY a JSON array. No preamble, no explanation, no code fence.

[ { "title": "2-5 word title", "text": "the full prompt" } ]

Use \n for line breaks inside text values. Plain text only. Ensure the JSON parses.
```

## STAGE 1 — Targeting and role research

```
STAGE
Stage 1 of 8: Deciding what to apply for.
Covers: everything before an application is written.
Stay out of: CV (stage 2), letters (stage 3).

Anchors:
- Extracting evidenced accomplishments from a messy work history
- Translating ability into the titles employers actually advertise
- Adjacent roles the user has not considered but qualifies for
- Reading a job ad: hard requirements vs wish list
- Scoring a role honestly, and naming what is missing
- Researching whether a company is worth working for
- Salary research from public sources, with the uncertainty stated
- The target list, and the weekly application volume that is sustainable
```

## STAGE 2 — CV and evidence

```
STAGE
Stage 2 of 8: The CV.
Covers: the document itself.
Stay out of: cover letters (stage 3), LinkedIn (stage 4).

Anchors:
- Rewriting bullets as verb, action, method, measurable result
- Recovering a real number from memory, and marking what stays unconfirmed
- Replacing the generic summary with three specific lines
- Tailoring the CV to one advert without adding anything untrue
- Identifying the ad's key terms and where they can legitimately appear
- Ordering sections for a career-changer, a returner, or a first job
- Cutting a three-page CV to two without losing evidence
- The final review pass: every claim traced to something real
```

## STAGE 3 — Cover letters and written applications

```
STAGE
Stage 3 of 8: Everything written for a specific employer.
Covers: letters, forms and free-text boxes.
Stay out of: CV (stage 2), interviews (stages 5-6).

Anchors:
- The 250-word letter built on three requirements and one specific company fact
- Opening lines that are not "I am writing to express my interest"
- Answering "why this company" without flattery
- Answering "why you" without listing adjectives
- The long-form application question, structured and evidenced
- Explaining a gap, a dismissal, or a change of field, briefly and honestly
- Writing for a role where the user meets most but not all requirements
- The final honesty pass across the whole application
```

## STAGE 4 — LinkedIn and networking

```
STAGE
Stage 4 of 8: Being found and being referred.
Covers: the parts of a search that are not applications.
Stay out of: written applications (stage 3), interviews (stages 5-6).

Anchors:
- The LinkedIn headline and about section, written for a specific search
- Turning CV bullets into a profile that reads as a person
- Messaging a hiring manager so the message is worth replying to
- Asking someone who barely knows the user for a referral
- Reconnecting with a former colleague without it being transactional
- Approaching a recruiter, and what to ask before engaging
- A short piece of public work that demonstrates the skill
- Following up on a networking conversation without pestering
```

## STAGE 5 — Interview preparation

```
STAGE
Stage 5 of 8: Before the interview.
Covers: research and rehearsal.
Stay out of: the interview itself (stage 6), tasks (stage 7).

Anchors:
- Researching the company from public information only
- Reading the job ad again for the competencies that will be tested
- Building the STAR bank from real history, mapped to those competencies
- Preparing the answer to "tell me about yourself" in ninety seconds
- Preparing for the weakness, the failure and the conflict questions
- Preparing questions that reveal whether the job is any good
- Salary expectations: what to say when asked early
- Logistics and the day-before checklist
```

## STAGE 6 — Interview performance

```
STAGE
Stage 6 of 8: In the room.
Covers: answering well and recovering when it goes wrong.
Stay out of: preparation (stage 5), the offer (stage 8).

Anchors:
- Mock interview: one question at a time, scored, with the criteria named
- Rewriting a weak answer using only the facts the user supplied
- Structuring an answer under time pressure
- Handling a question the user cannot answer
- Answering when the honest answer is a weakness
- Panel, phone and video interviews, and what changes in each
- Reading the interviewer's follow-up questions as signals
- The final-round conversation, where the job is usually decided
```

## STAGE 7 — Tasks, tests and assessments

```
STAGE
Stage 7 of 8: The stages that are not conversations.
Covers: take-homes, presentations, and assessment days.
Stay out of: interviews (stages 5-6), offers (stage 8).

Anchors:
- Scoping a take-home task and deciding how long to spend
- Clarifying questions to ask before starting
- Structuring the submission so the reviewer finds the reasoning
- The presentation task: structure, slides, and timing
- Case-study and scenario questions, worked through out loud
- Assessment-centre group exercises
- Personality and aptitude tests, approached honestly
- Reviewing a completed task before sending it
```

## STAGE 8 — Offer, negotiation and the first 90 days

```
STAGE
Stage 8 of 8: After the yes.
Covers: closing out the search properly.
Stay out of: interviews (stages 5-6).

Anchors:
- The thank-you note, sent within a day, adding one unsaid thing
- Chasing silence with a stated stopping point
- Turning a rejection into feedback, and extracting the lesson if none comes
- Evaluating the whole package against what the user said they wanted
- Preparing the negotiation: ask, justification, fallback
- Negotiating without inventing a competing offer
- Comparing two offers on stated criteria rather than on feel
- Resigning well, and the first 90 days plan
```

---

## If a batch gets rejected

```
The validator rejected the batch with these errors:

[PASTE ERRORS]

Fix only the items listed. Keep every other prompt exactly as it was. Return the
complete corrected JSON array of all 25, same format, no preamble.
```

| Error | Cause | Fix |
|-------|-------|-----|
| `missing section(s)` | A heading was dropped, usually RULES | Tell it the headings are literal |
| `only N words` | Compressed to fit 25 in one reply | Ask for 1-13, then 14-25, as two replies |
| `no [INPUT] placeholder` | It wrote advice, not a prompt | Point at the specific item |
| `too similar to` | It drifted into another stage, or repeated itself | Re-paste ALREADY WRITTEN and name the stage boundary |
| `banned phrase` | Marketing drift | Name the phrase, ask for a plain replacement |

`too similar to` is the one that appears most at stages 5-8. It almost always
means the ALREADY WRITTEN slot was left empty or stale. Refresh it every run.
