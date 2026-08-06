# Premium packs — 200 prompts × 6 niches

Six paid packs, 200 prompts each. Built in **eight batches of 25** — not because
that number is special, but because quality collapses somewhere around prompt 30
in a single reply and the model starts rewording what it already wrote.

The 8 batches are **prompt types**, not a funnel. Every niche gets the same 8
types — start, build, improve, analyse, troubleshoot, decide, systemize, scale —
which is what actually makes a premium pack feel different from the free one:
the free pack walks someone through a process once; the premium pack is a tool
for every situation that comes up afterwards.

| # | Niche | Slug | Free pack | Premium |
|---|-------|------|-----------|---------|
| 01 | Freelancing | `freelancing` | 25 done | 0 / 200 |
| 02 | Cold outreach | `outreach` | 25 done | 0 / 200 |
| 03 | Content creation | `content` | 25 done | 0 / 200 |
| 04 | Local business | `local-business` | 25 done | 0 / 200 |
| 05 | Digital products | `digital-products` | 25 done | 0 / 200 |
| 06 | Job search | `job-search` | needs writing | 0 / 200 |

---

## The 8 categories

Every niche below uses these same 8. They are not sequential — run them in any
order — but each one has a distinct job, so a prompt never has to do two things
at once.

| Category | Job |
|---|---|
| **START** | Begin from zero — choose, plan, set up, before any work exists yet. |
| **BUILD** | Create the actual asset — the thing you send, publish, or hand over. |
| **IMPROVE** | Take a rough or existing version and make it stronger. |
| **ANALYSE** | Diagnose, score, or evaluate something that already happened. |
| **TROUBLESHOOT** | Recover from something that has gone wrong. |
| **DECIDE** | Choose between real options, with the criteria stated. |
| **SYSTEMIZE** | Turn a one-off into a repeatable process or template. |
| **SCALE** | Grow past the first success — more volume, more people, higher stakes. |

This is what makes 200 prompts "fairly different" rather than 200 rewordings of
the same five ideas: a START prompt and a TROUBLESHOOT prompt on the same topic
produce genuinely different work, even before the niche content is added.

---

## How to run a niche

1. Copy the MASTER block for the niche.
2. Paste one CATEGORY block into the `<<< CATEGORY >>>` slot.
3. Before running, paste the titles already accepted into `ALREADY WRITTEN` —
   get them with:

```bash
node -e "console.log(JSON.parse(require('fs').readFileSync('content/premium/freelancing.json','utf8')).map(p=>p.title).join('\n'))"
```

4. Run it. Save the JSON to `~/Downloads/<slug>-<category>.json`.
5. Validate and store:

```bash
node tools/add-batch.mjs freelancing ~/Downloads/freelancing-start.json premium
```

6. Repeat for the other 7 categories, in any order.

At 200:

```
premium: {
  ready: true,                                    // only once 200 exist
  downloadUrl: "https://...",                     // the actual file
  checkoutUrl: "https://buy.stripe.com/...",      // the actual checkout
}
```

The build **refuses** to ship a checkout without a download, or `ready: true`
without a `downloadUrl`. That gate exists so nobody can pay $2.99 and receive
nothing. Do not remove it.

### Cost and pacing

Eight batches per niche, six niches — 48 runs. Do **one niche end to end first**
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
Premium standard: every prompt must be clearly usable — a reader should see
exactly what to paste in within five seconds, not have to interpret the prompt
first.

<<< CATEGORY >>>

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
1. Exactly 25 prompts, all inside this category. The other 7 categories cover
   different jobs — do not write a BUILD prompt in a TROUBLESHOOT batch, etc.
2. 150-320 words each. Under 150 is too thin for a paid pack.
3. All five headings present, spelled exactly.
4. At least one [PLACEHOLDER] in capitals per prompt, placed so the reader
   instantly sees what to paste in.
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
9. Keep it clean: no filler sentences, no restating the prompt's own title back
   to the reader, no throat-clearing before the useful part starts.

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

## CATEGORY: START

```
CATEGORY
START — begin from zero, before any client, offer or list exists.
This batch covers: getting from "I can do this skill" to a first real attempt at
selling it, with nothing built yet.
These are prompt types, not steps — a reader may run this before or after any
other category.

Ground to cover, as 25 distinct prompts:
- Turn a skill inventory into services someone actually pays for
- Choose a first buyer type, from options compared on ability to pay and reach
- Define a minimum viable offer worth pitching on day one
- Sort the legal and business basics worth doing before the first pitch
- Build a first prospecting list from literally nothing
- Set a realistic 30-day plan for landing the first paying job
- Choose the founding project to use as the first case study
- Write the first version of a one-line offer, and test it against five rewrites
```

## CATEGORY: BUILD

```
CATEGORY
BUILD — create the core assets a freelancer actually sends or shows.
This batch covers: turning a decision into a real, usable artefact.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- The service page or one-pager a prospect reads before saying yes
- The pricing sheet with tiers that differ in scope, not effort
- A scope-of-work / contract-lite template
- The discovery-call script and question order
- A portfolio piece built from a realistic self-directed brief
- A proposal template that turns notes into a one-page document
- The "how I work" onboarding document a new client receives
- A personal-brand one-liner and short bio
```

## CATEGORY: IMPROVE

```
CATEGORY
IMPROVE — take something that already exists and make it stronger.
This batch covers: editing, tightening and levelling up real drafts, not
starting from nothing.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Rewrite a proposal that was sent and rejected
- Tighten a scope of work that has become bloated
- Sharpen a CV or portfolio bio that reads generic
- Turn a flat case study into one with a real narrative arc
- Fix pricing that has clearly been set too low
- Rewrite a cold pitch that got no reply
- Polish a client-facing report so it reads as work worth paying for
- Narrow a niche statement that is too broad to mean anything
```

## CATEGORY: ANALYSE

```
CATEGORY
ANALYSE — diagnose, score or evaluate something that has already happened.
This batch covers: turning real data or a real situation into a clear judgement.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Audit a losing proposal for the actual reason it lost
- Score three competing offers against what the buyer actually needs
- Evaluate whether a specific client relationship is worth keeping
- Analyse a month of leads to find the real bottleneck
- Audit current pricing against margin and market evidence
- Evaluate a portfolio and identify the pieces actively hurting it
- Analyse a bad client experience for the root cause, not the symptom
- Benchmark a rate against comparables the user provides, not invents
```

## CATEGORY: TROUBLESHOOT

```
CATEGORY
TROUBLESHOOT — recover from something that has already gone wrong.
This batch covers: the situations nobody plans for.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- A client has gone silent mid-project
- A project was underpriced and is now underwater
- Scope creep is happening in real time
- A client is disputing an invoice
- A deadline was missed and trust needs repairing
- Harsh feedback arrived and needs a response
- A client is asking for extra work "as a favour"
- A slow month has emptied the pipeline
```

## CATEGORY: DECIDE

```
CATEGORY
DECIDE — choose between real options, with the criteria stated up front.
This batch covers: decisions freelancers face repeatedly, each with genuine
trade-offs.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Take a lower-fit but well-paid project, or wait for a better one
- Choose between two live offers to accept
- Raise prices now, or wait for a better moment
- Specialise further, or stay broad
- Fire a difficult client, or keep tolerating it
- Hourly or fixed-price for a specific job
- Pursue an inbound lead, or let it go
- Bring in a subcontractor, or turn the work down
```

## CATEGORY: SYSTEMIZE

```
CATEGORY
SYSTEMIZE — turn a one-off into something repeatable.
This batch covers: building the process so the next time is faster.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Turn one proposal into a reusable proposal template
- Build a repeatable client-onboarding checklist
- Build a weekly pipeline-review routine
- Template the discovery-call notes format
- Build a client-offboarding process
- Template the invoice-chase sequence
- Build a repeatable content routine for marketing the business itself
- Template the referral-ask process, including timing
```

## CATEGORY: SCALE

```
CATEGORY
SCALE — grow past the point where solo, ad-hoc delivery still works.
This batch covers: what changes once demand exceeds one person's hours.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Plan the move from solo delivery to a small team
- Design a productised version of the core service
- Plan raising capacity without raising hours worked
- Design a retainer ladder for existing clients
- Plan a referral-partner network at volume
- Design a waitlist for excess demand
- Plan a price increase across the whole existing client base
- Design handing off delivery while keeping the sales relationship
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
Premium standard: every prompt must be clearly usable — a reader should see
exactly what to paste in within five seconds, not have to interpret the prompt
first.

<<< CATEGORY >>>

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
1. Exactly 25 prompts, all inside this category.
2. 150-320 words each.
3. All five headings, spelled exactly.
4. At least one [PLACEHOLDER] per prompt, placed so the reader instantly sees
   what to paste in.
5. Distinct jobs. Vary the job, not the wording.
6. Each RULES block must do real work. In this niche, at least one rule per
   prompt must forbid inventing facts about the prospect's company, forbid
   fabricated compliments, and forbid claiming results the user did not supply.
7. Output formats should be specific: named columns, word counts, sections.
8. Vary the role in the opening line across the 25.
9. Keep it clean: no filler, no restating the title back to the reader.

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

## CATEGORY: START

```
CATEGORY
START — begin from zero, before any list, sequence or channel is chosen.
This batch covers: the decisions that have to happen before the first message
is written.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Build the first ICP definition from nothing
- Write the very first test campaign, small and disposable
- Set up a tracking sheet before any sending starts
- Pick the first channel to test, and why
- Draft the initial 10-prospect pilot list
- Write the founding message before any reply data exists
- Define the metric that will decide if the pilot worked
- Set the first week's sending plan
```

## CATEGORY: BUILD

```
CATEGORY
BUILD — create the actual messages and infrastructure.
This batch covers: the real assets that get sent or used every day.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- The multi-touch sequence, built end to end
- A prospect-research checklist
- The outreach tracking system's structure
- A library of proof points to reference honestly
- Channel-specific templates: email, LinkedIn, DM
- A qualification scorecard for inbound and outbound alike
- The meeting-booking message
- A re-engagement sequence for a list that went cold
```

## CATEGORY: IMPROVE

```
CATEGORY
IMPROVE — take a real, already-sent message or sequence and make it work
better.
This batch covers: editing what exists, not writing from nothing.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Rewrite an email with a low reply rate
- Tighten a weak subject-line set
- Add real personalisation to a templated message
- Sharpen a CTA that is too vague to act on
- Revise a sequence that gets opens but no replies
- Improve a LinkedIn note that gets ignored
- Polish a voicemail script that is not landing
- Narrow a list-targeting definition that is too broad
```

## CATEGORY: ANALYSE

```
CATEGORY
ANALYSE — diagnose or evaluate outreach that has already run.
This batch covers: turning real numbers and replies into a clear judgement.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Diagnose a zero-reply campaign from the actual numbers
- Identify which touch in a sequence is losing people
- Evaluate list quality against reply data
- Audit a message for what it actually says versus what was intended
- Analyse reply sentiment across a batch of responses
- Benchmark open and reply rates against the user's own history
- Evaluate one channel's return against another
- Analyse why booked meetings are not converting further
```

## CATEGORY: TROUBLESHOOT

```
CATEGORY
TROUBLESHOOT — recover from something that has already gone wrong.
This batch covers: the failure modes that come with sending at any real volume.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- A sudden deliverability drop
- An angry or hostile reply
- A sequence stuck at zero opens
- A domain flagged for spam
- A prospect who ghosted after a good call
- Messaging that no longer matches a changed offer
- A reply that is hostile about being contacted at all
- The wrong version of a message sent to the wrong list
```

## CATEGORY: DECIDE

```
CATEGORY
DECIDE — choose between real options, with the criteria stated up front.
This batch covers: recurring calls that have genuine trade-offs.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Pause a bad week, or push through it
- Choose between two subject-line approaches
- Decide whether a lukewarm reply is worth a follow-up
- Expand or narrow the ICP
- Automate sending, or keep it manual at this volume
- Buy a list, or build one
- Keep or cut an underperforming channel
- Decide the point at which a sequence should stop
```

## CATEGORY: SYSTEMIZE

```
CATEGORY
SYSTEMIZE — turn outreach into a repeatable weekly operation.
This batch covers: the process around the messages, not the messages
themselves.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- A repeatable weekly sending cadence
- The qualification-to-booking handoff, templated
- A repeatable per-prospect research routine
- The follow-up ladder, templated
- A reusable objection-response library
- A reporting format for weekly results
- A repeatable list-building routine
- A templated re-engagement campaign for old leads
```

## CATEGORY: SCALE

```
CATEGORY
SCALE — grow past what one person sending manually can sustain.
This batch covers: what changes once outreach needs to run at real volume.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Move from fully manual to semi-automated sending
- Design a process usable by more than one person
- Expand into a second channel at volume
- Build a referral-based pipeline to reduce cold reliance
- Design a full operating rhythm, not just a campaign
- Build testing infrastructure for continuous experiments
- Expand the ICP into adjacent segments
- Design a dashboard for ongoing performance tracking
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
Premium standard: every prompt must be clearly usable — a reader should see
exactly what to paste in within five seconds, not have to interpret the prompt
first.

<<< CATEGORY >>>

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
1. Exactly 25 prompts, all inside this category.
2. 150-320 words each.
3. All five headings, spelled exactly.
4. At least one [PLACEHOLDER] per prompt, placed so the reader instantly sees
   what to paste in.
5. Distinct jobs. Vary the job, not the wording.
6. Each RULES block must do real work. In this niche, at least one rule per
   prompt must forbid engagement-bait, forbid stating how a platform's algorithm
   works as fact, and forbid a hook that promises something the post does not
   deliver.
7. Output formats should be specific: scripts with timings, slide-by-slide
   breakdowns, ranked lists with reasons.
8. Vary the role in the opening line across the 25.
9. Keep it clean: no filler, no restating the title back to the reader.

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

## CATEGORY: START

```
CATEGORY
START — begin from zero, before a single post exists.
This batch covers: the decisions that have to happen before posting starts.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Build the first content plan from nothing
- Write the first 10 post ideas
- Set up an idea-capture system before it is needed
- Choose the founding content format
- Write the account's launch post
- Define the first month's posting cadence
- Set the initial content goals, stated so they can be checked later
- Build the starter content calendar
```

## CATEGORY: BUILD

```
CATEGORY
BUILD — create the actual templates and assets used every time content is made.
This batch covers: reusable structures, not one-off posts.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- A script template for short-form video
- A carousel template
- A hook swipe file
- A caption formula
- A repurposing workflow, one piece into several
- The content calendar's structure
- A CTA library matched to different post types
- A content brief template for a collaborator or editor
```

## CATEGORY: IMPROVE

```
CATEGORY
IMPROVE — take a real draft and make it stronger.
This batch covers: editing existing content, not writing from nothing.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Rewrite a flat hook
- Tighten a script that rambles
- Sharpen a caption that undersells the post
- Restructure a video with poor retention
- Revise a CTA that gets no clicks
- Fix a thread that trails off before the point lands
- Rebuild a carousel's weak middle slides
- Rewrite a bio that is not converting
```

## CATEGORY: ANALYSE

```
CATEGORY
ANALYSE — diagnose or evaluate content that has already been posted.
This batch covers: turning real metrics into a clear judgement.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Diagnose a low-view post from the actual metrics
- Read a retention graph for where the drop-off happens
- Evaluate which content pillar is underperforming
- Audit a month of posts for the real pattern in what worked
- Analyse follower growth against posting cadence
- Benchmark a post against the account's own history, not a guessed average
- Evaluate whether a CTA change affected conversion
- Read comment sentiment for what it says about content direction
```

## CATEGORY: TROUBLESHOOT

```
CATEGORY
TROUBLESHOOT — recover from something that has already gone wrong.
This batch covers: the situations a content creator eventually hits.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- A viral post that brought the wrong audience
- A pile-on of negative comments
- A content rut with no ideas left
- Reach dropping after a platform change
- Burnout from the posting cadence
- An account that plateaued after early growth
- A collaboration post that underperformed
- A brand voice that has drifted inconsistent
```

## CATEGORY: DECIDE

```
CATEGORY
DECIDE — choose between real options, with the criteria stated up front.
This batch covers: recurring calls with genuine trade-offs.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Chase a trend, or skip it
- Choose between two content directions
- Niche down further, or stay broad
- Prioritise one platform when time is limited
- Collaborate with a specific creator, or not
- Pause posting during a life event
- Post a controversial take, or leave it
- Retire an underperforming series, or persist with it
```

## CATEGORY: SYSTEMIZE

```
CATEGORY
SYSTEMIZE — turn content production into a repeatable process.
This batch covers: the system around the content, not the content itself.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- A weekly content-batching process
- The idea-to-publish pipeline, templated
- A repeatable analytics-review routine
- The repurposing workflow, templated
- A reusable comment-response system
- A collaboration-outreach process
- A repeatable content-audit cadence
- The monthly planning session, templated
```

## CATEGORY: SCALE

```
CATEGORY
SCALE — grow past what one person can produce alone.
This batch covers: what changes once output needs to increase.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Move from solo content to a small team
- Design a system for outsourcing editing
- Expand into a second platform
- Add a paid-promotion layer on top of organic
- Batch at three times the volume without losing quality
- Design a content-to-product pipeline
- Plan a content calendar 90 days out
- Delegate research or scripting to someone else
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
Premium standard: every prompt must be clearly usable — a reader should see
exactly what to paste in within five seconds, not have to interpret the prompt
first.

<<< CATEGORY >>>

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
1. Exactly 25 prompts, all inside this category.
2. 150-320 words each.
3. All five headings, spelled exactly.
4. At least one [PLACEHOLDER] per prompt, placed so the reader instantly sees
   what to paste in.
5. Distinct jobs. Vary the job, not the wording.
6. Each RULES block must do real work. In this niche, at least one rule per
   prompt must forbid inventing findings the user has not observed, forbid
   claiming a business is losing a specific amount without evidence, and forbid
   any script that misrepresents who the caller is.
7. Output formats should be specific: scored checklists, one-page proposals,
   call scripts with branches.
8. Vary the role in the opening line across the 25.
9. Keep it clean: no filler, no restating the title back to the reader.

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

## CATEGORY: START

```
CATEGORY
START — begin from zero, before a territory or client exists.
This batch covers: the decisions that have to happen before the first pitch.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Pick the founding business type to target
- Build the first prospecting list from nothing
- Write the first audit from scratch, on a test business
- Define the initial offer before any client exists
- Set the first outreach plan
- Build the starting price sheet
- Define the first-month working territory
- Write the founding pitch, before any track record exists
```

## CATEGORY: BUILD

```
CATEGORY
BUILD — create the actual tools and documents used with every prospect.
This batch covers: reusable assets, not a one-off pitch.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- The audit checklist tool
- The proposal template
- The pricing menu
- The client onboarding packet
- A reporting template an owner will actually read
- A referral-request script
- A case-study template
- A follow-up sequence template
```

## CATEGORY: IMPROVE

```
CATEGORY
IMPROVE — take something real and make it stronger.
This batch covers: editing existing pitches, audits and reports.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Rewrite a proposal that got no response
- Tighten an audit that is too long for an owner to read
- Fix a pitch that sounds like it came from a stranger
- Sharpen a pricing page that undersells the value
- Revise a call script that sounds scripted
- Improve a report an owner visibly ignored
- Rework a referral ask that got silence
- Narrow an offer that is too vague to act on
```

## CATEGORY: ANALYSE

```
CATEGORY
ANALYSE — diagnose or evaluate something that has already happened.
This batch covers: turning real outcomes into a clear judgement.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Diagnose why a specific audit did not convert
- Analyse a batch of rejected pitches for the pattern
- Evaluate whether a territory is actually viable
- Audit close rate by business type
- Analyse pricing against real willingness to pay
- Benchmark delivered results against what was promised
- Evaluate a lead source's quality
- Analyse a lost client for the real reason, not the stated one
```

## CATEGORY: TROUBLESHOOT

```
CATEGORY
TROUBLESHOOT — recover from something that has already gone wrong.
This batch covers: the situations that come with dealing with local owners
directly.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- A client stopped responding after signing
- An owner is disputing the invoice
- A delivered project underperformed
- A bad review arrived from a client
- A client is asking for more work for free
- A territory has become saturated
- A competitor is undercutting on price
- A slow season has emptied the pipeline
```

## CATEGORY: DECIDE

```
CATEGORY
DECIDE — choose between real options, with the criteria stated up front.
This batch covers: recurring calls with genuine trade-offs.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Expand territory, or go deeper in the current one
- Choose between two business types to pursue
- Discount to win a first client, or hold the price
- Keep a difficult client, or let them go
- One-off or retainer for a specific lead
- Specialise in one trade, or stay general
- Hire help for delivery, or stay solo
- Walk from a bad-fit prospect, or keep pursuing
```

## CATEGORY: SYSTEMIZE

```
CATEGORY
SYSTEMIZE — turn one good result into a repeatable process.
This batch covers: the system around the work, not the work itself.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- The audit-to-proposal pipeline, templated
- A repeatable client-onboarding process
- A monthly-reporting cadence
- The referral-ask timing, templated
- A repeatable prospecting routine
- A set of standard objection responses
- A delivery checklist
- The price-increase conversation, templated
```

## CATEGORY: SCALE

```
CATEGORY
SCALE — grow past what one person can deliver alone.
This batch covers: what changes once client count outgrows solo capacity.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Expand into a second trade vertical
- Hire a subcontractor for delivery
- Expand territory systematically
- Build a referral-partner network
- Raise prices across the whole existing client base
- Design a productised package for faster onboarding
- Build a small local team
- Manage twenty or more clients without things slipping
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
Premium standard: every prompt must be clearly usable — a reader should see
exactly what to paste in within five seconds, not have to interpret the prompt
first.

<<< CATEGORY >>>

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
1. Exactly 25 prompts, all inside this category.
2. 150-320 words each.
3. All five headings, spelled exactly.
4. At least one [PLACEHOLDER] per prompt, placed so the reader instantly sees
   what to paste in.
5. Distinct jobs. Vary the job, not the wording.
6. Each RULES block must do real work. In this niche, at least one rule per
   prompt must forbid inventing customer quotes or demand, forbid revenue
   projections presented as expectations, and require any pre-launch copy to
   state plainly what has not been built yet.
7. Output formats should be specific: outlines, page sections with word counts,
   ranked lists with reasons.
8. Vary the role in the opening line across the 25.
9. Keep it clean: no filler, no restating the title back to the reader.

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

## CATEGORY: START

```
CATEGORY
START — begin from zero, before a product idea has been chosen.
This batch covers: the decisions that have to happen before anything is built.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Pick the founding product idea from nothing
- Write the first validation message
- Set up a pre-launch list before there is anything to sell
- Define the initial scope
- Build the first outline
- Write the founding landing-page draft
- Set the launch date and the plan behind it
- Define the initial price
```

## CATEGORY: BUILD

```
CATEGORY
BUILD — create the actual assets that make up the launch.
This batch covers: real, usable pieces, not ideas about them.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- The sales page, section by section
- The welcome / onboarding sequence
- The FAQ
- The launch email sequence
- The product outline or table of contents
- The pricing and tier structure
- A lead magnet
- The post-purchase survey
```

## CATEGORY: IMPROVE

```
CATEGORY
IMPROVE — take something real and make it stronger.
This batch covers: editing existing drafts, not writing from nothing.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Rewrite a flat headline
- Tighten a bloated sales page
- Sharpen a weak call to action
- Revise a launch email that got low opens
- Adjust pricing after weak conversion
- Clarify an outline that reads unclear
- Rework an FAQ that dodges the real objections
- Rebuild a lead magnet that is getting no signups
```

## CATEGORY: ANALYSE

```
CATEGORY
ANALYSE — diagnose or evaluate something that has already happened.
This batch covers: turning real numbers and feedback into a clear judgement.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Diagnose low landing-page conversion from the actual numbers
- Find where a launch sequence lost momentum
- Read refund reasons for the real pattern
- Audit a sales page against the objections it is missing
- Read validation-message replies for genuine signal
- Benchmark launch performance against the original plan
- Evaluate pricing against actual conversion, not intuition
- Compare which lead magnet is actually performing
```

## CATEGORY: TROUBLESHOOT

```
CATEGORY
TROUBLESHOOT — recover from something that has already gone wrong.
This batch covers: the failure points a launch runs into.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- A launch is underperforming mid-week
- A wave of refund requests has arrived
- High traffic but no sales on the page
- A technical failure during the launch window
- Negative feedback from early buyers
- A pre-launch list that has stalled
- A competitor launching something similar
- Momentum that never built after a slow open
```

## CATEGORY: DECIDE

```
CATEGORY
DECIDE — choose between real options, with the criteria stated up front.
This batch covers: recurring calls with genuine trade-offs.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Delay the launch, or push ahead
- Choose between two pricing models
- Pivot the product based on feedback, or hold the line
- Run a relaunch, or move on to something new
- One-time price or subscription
- Add an upsell, or keep the offer simple
- Decide whether validation signal is strong enough to build
- Sunset an underperforming product, or keep supporting it
```

## CATEGORY: SYSTEMIZE

```
CATEGORY
SYSTEMIZE — turn one launch into a repeatable process.
This batch covers: the system behind the launch, not the launch content
itself.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- A repeatable launch checklist
- The validation-message process, templated
- A reusable sales-page structure
- The post-launch review, templated
- A content-to-list pipeline
- A refund-handling process
- A pricing-decision framework
- The buyer-feedback loop, templated
```

## CATEGORY: SCALE

```
CATEGORY
SCALE — grow past a single product and a single launch.
This batch covers: what changes once the first product has proven itself.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Plan a second product for the same audience
- Design an evergreen funnel from a single launch
- Bundle products into a suite
- Design affiliate or partner promotion
- Raise price for new buyers while honouring existing ones
- Design a membership or subscription layer
- Plan repeat launches on a calendar
- Outsource production to support higher volume
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
Premium standard: every prompt must be clearly usable — a reader should see
exactly what to paste in within five seconds, not have to interpret the prompt
first.

<<< CATEGORY >>>

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
1. Exactly 25 prompts, all inside this category.
2. 150-320 words each.
3. All five headings, spelled exactly.
4. At least one [PLACEHOLDER] per prompt, placed so the reader instantly sees
   what to paste in.
5. Distinct jobs. Vary the job, not the wording.
6. This niche needs the strictest honesty rules in the set. Every prompt that
   touches a CV, an application, or an interview answer MUST include a rule
   forbidding the invention of experience, qualifications, employers, dates or
   numbers, and MUST instruct the model to ask the user rather than fill a gap.
7. Output formats should be specific: rewritten bullets in a table, letters with
   word counts, scored answers with the score criteria named.
8. Vary the role in the opening line across the 25.
9. Keep it clean: no filler, no restating the title back to the reader.

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

## CATEGORY: START

```
CATEGORY
START — begin from zero, before a target list, CV or tracker exists.
This batch covers: the decisions that have to happen before the first
application goes out.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Build the first target-role list from nothing
- Write the first version of the CV
- Set up an application tracker
- Define the initial search criteria and radius
- Write the founding LinkedIn profile
- Set a realistic weekly application target
- Build the first STAR story bank
- Plan the first week of the search
```

## CATEGORY: BUILD

```
CATEGORY
BUILD — create the actual documents and materials used in every application.
This batch covers: real, reusable assets.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- The CV tailored to a specific job ad
- The cover letter
- The STAR answer bank
- The "why this company" research document
- A salary-negotiation prep sheet
- The reference list and the ask that goes with it
- A 30-60-90 day plan for interviews that request one
- The thank-you note template
```

## CATEGORY: IMPROVE

```
CATEGORY
IMPROVE — take something real and make it stronger.
This batch covers: editing existing CVs, letters and answers.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Rewrite a weak CV bullet
- Tighten a cover letter that rambles
- Sharpen a vague interview answer
- Revise a LinkedIn summary that undersells
- Improve an answer to a screening question
- Fix a networking message that gets ignored
- Shorten a story that runs too long for the interview
- Strengthen an answer to a weakness question
```

## CATEGORY: ANALYSE

```
CATEGORY
ANALYSE — diagnose or evaluate something that has already happened.
This batch covers: turning a real outcome into a clear judgement.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Diagnose why applications are getting no response
- Analyse interview performance against the actual questions asked
- Evaluate a CV against one specific job ad's requirements
- Audit a batch of rejections for the pattern
- Identify where in the process candidacies keep dropping
- Benchmark the CV against likely competition, honestly, without invention
- Evaluate whether the target-role list is realistic
- Analyse feedback received for the actual lesson in it
```

## CATEGORY: TROUBLESHOOT

```
CATEGORY
TROUBLESHOOT — recover from something that has already gone wrong.
This batch covers: the moments a job search actually derails.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- A bad answer given mid-interview
- Silence after a strong final round
- An application likely caught by a keyword filter
- Being ghosted after informal offer talk
- A lowball offer
- A reference who gave lukewarm feedback
- A gap that keeps getting questioned
- Motivation collapsing during a long search
```

## CATEGORY: DECIDE

```
CATEGORY
DECIDE — choose between real options, with the criteria stated up front.
This batch covers: recurring calls with genuine trade-offs.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Choose between two competing offers
- Accept a counter-offer from the current employer, or not
- Widen the search criteria, or hold the line
- Disclose a reason for leaving, or not
- Take a lower-title role at a better company, or hold out
- Negotiate the first offer, or accept it
- Pursue a role that is a partial fit, or skip it
- Pause the search and regroup, or keep pushing
```

## CATEGORY: SYSTEMIZE

```
CATEGORY
SYSTEMIZE — turn the search into a repeatable weekly process.
This batch covers: the system around the search, not any single application.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- A repeatable weekly application routine
- The CV-tailoring process, templated per ad
- An interview-prep checklist
- The follow-up cadence, templated
- A repeatable networking-outreach routine
- An offer-evaluation framework
- The rejection-to-feedback process, templated
- The reference-request process, templated
```

## CATEGORY: SCALE

```
CATEGORY
SCALE — grow past a single, narrow search track.
This batch covers: what changes when the search needs to widen or speed up.
These are prompt types, not steps.

Ground to cover, as 25 distinct prompts:
- Run multiple parallel search tracks across industries or functions
- Build a personal-brand push to generate inbound interest
- Work with a recruiter alongside self-search
- Build a portfolio or work-sample strategy
- Negotiate beyond salary — equity, remote, title
- Plan a career-ladder beyond this one role
- Build a professional network before the next search is needed
- Stay interview-ready in the gaps between active searches
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
| `too similar to` | It repeated itself, or drifted into another category's job | Re-paste ALREADY WRITTEN and re-read the category's job line |
| `banned phrase` | Marketing drift | Name the phrase, ask for a plain replacement |

`too similar to` is the one that appears most from category 3 onward. It almost
always means the `ALREADY WRITTEN` slot was left empty or stale. Refresh it
every run.
