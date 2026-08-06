# Free packs — 25 prompts × 6 niches

Six self-contained generation prompts. Copy one block, paste it into Claude or
ChatGPT, run it once, get 25 prompts back as JSON.

Nothing needs swapping in. Each block already contains the house format, the
niche brief, the 25 prompt jobs, the rules and the output spec.

| # | Niche | Slug | Status |
|---|-------|------|--------|
| 01 | Freelancing | `freelancing` | 25 written (house format) |
| 02 | Cold outreach | `outreach` | 25 written (short format — regenerate) |
| 03 | Content creation | `content` | 25 written (short format — regenerate) |
| 04 | Local business | `local-business` | 25 written (short format — regenerate) |
| 05 | Digital products | `digital-products` | 25 written (short format — regenerate) |
| 06 | Job search | `job-search` | 3 written — needs a full pack |

---

## How to run one

1. Copy the whole block for the niche.
2. Paste into the AI. Run it.
3. Save the JSON it returns to a file, e.g. `~/Downloads/freelancing-free.json`.
4. Validate and store it:

```bash
node tools/add-batch.mjs freelancing ~/Downloads/freelancing-free.json free
```

5. When it says the target is reached, fold it into the site:

```bash
node tools/apply-free.mjs freelancing
node build.mjs
```

The validator rejects the **whole batch** unless every prompt passes: all five
house-format headings present, 120+ words, at least one `[PLACEHOLDER]`, no
duplicate title, no near-duplicate of anything already in the pack, no banned
marketing language. Nothing is written unless it all passes.

If it rejects, paste the error list back to the AI and ask it to fix **only
those items** and return the full corrected array.

---

## The house format

Every prompt in every pack looks like this. It is repeated inside each block
below, so you do not need to paste it separately.

```
You are [specific role, with a stated stance]. [One line on why that stance matters here.]

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
```

---
---

# 01 · Freelancing

**Slug:** `freelancing`  ·  **Buyer:** someone with a skill who wants to sell it as a service.

```
You are writing the free pack for a product called SHATTERPROMPTS. It is a lead
magnet, but it has to be genuinely useful on its own — someone should be able to
run all 25 prompts top to bottom and finish with real work done. A thin free pack
loses the sale for the paid one, so treat this as a product, not a teaser.

NICHE
Topic: Freelancing.
Buyer: someone with a skill who wants to sell it as a service. They may already
have a client or two. They are NOT a beginner who needs "what is freelancing"
explained, and they do not want motivation.
End state after 25 prompts: a chosen market, a priced offer that can actually be
delivered, some form of proof, a list of real prospects, and a first-message and
follow-up process they can repeat every week.

HOUSE FORMAT — every prompt uses these sections, in this order, these exact headings:

You are [specific role, with a stated stance — e.g. "sceptical by default",
"refuses to invent numbers"]. [One line on why that stance matters here.]

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

THE 25 PROMPTS — write one for each job below, in this order. The title in
brackets is the job, not necessarily the final title.

Stage A — Choose a market
1  [Skill audit into sellable services] Turn what they can already do into a
   shortlist of services someone pays money for.
2  [Pick a buyer with a budget] Compare candidate buyer types on ability to pay,
   ease of reach, and how urgent the problem is.
3  [Check the market actually pays] Pressure-test the chosen market for evidence
   money already moves there, without inventing statistics.
4  [Name the problem in their words] Convert a vague service into the sentence
   the buyer would use to describe their own pain.
5  [Kill the weak options] Force a decision: rank the shortlist and eliminate all
   but one, with the reason each was cut.

Stage B — Shape the offer
6  [The one-line offer] Write the single sentence that says who it is for, what
   changes, and roughly how.
7  [Scope so it can be delivered] Turn the offer into a defined deliverable with
   an explicit "not included" list.
8  [Set the first price] Work from time, replacement cost and outcome value to a
   defensible number, asking for missing inputs rather than guessing.
9  [Three-tier package ladder] Build good/better/best where the tiers differ in
   scope, not in effort per pound.
10 [The what-you-get list] Write the bullet list a buyer reads before saying yes,
   with concrete artefacts rather than adjectives.

Stage C — Build proof
11 [Past work into a case study] Turn one job into problem / action / result,
   flagging every number that needs confirming.
12 [Proof with zero clients] Design one piece of self-directed work that
   demonstrates the exact skill being sold.
13 [Portfolio piece from a spec] Produce a realistic brief the user can execute
   this week and show as work.
14 [Get a usable testimonial] Write the request and the four questions that
   produce a specific quote instead of "great to work with".
15 [The about section] Write a short bio that leads with what they do for whom,
   not their history.

Stage D — Start conversations
16 [Find 25 real prospects] Build a search plan and a qualification checklist for
   a named list, not a vague "look on LinkedIn".
17 [The first message] Write an opener that references something observable about
   the prospect and asks for one small thing.
18 [Answer "send me your rates"] Reply in a way that gives a real number and
   keeps the conversation open.
19 [Run the discovery call] Provide the question order, what to listen for, and
   the moment to stop asking and propose.
20 [The proposal] Turn call notes into a one-page proposal with scope, price,
   timeline and next step.

Stage E — Improve from replies
21 [Diagnose silence] Given the message and the list, work out which of the
   likely causes is actually responsible and what to change first.
22 [Rewrite after a no] Take a rejection and produce one changed version, with
   the specific hypothesis being tested.
23 [Price objection script] Handle "too expensive" by scope and comparison rather
   than by discounting reflexively.
24 [Weekly pipeline review] A repeatable review that turns last week's activity
   into next week's three actions.
25 [Decide what to change next] Force a single change for the coming week and
   state how they will know it worked.

REQUIREMENTS
1. Exactly 25 prompts, in the order above.
2. 150-320 words each. Under 150 is too thin to be worth downloading.
3. All five headings present, spelled exactly as shown.
4. At least one [PLACEHOLDER] in capitals per prompt.
5. Every prompt has a distinct job. If two would produce similar output from
   similar inputs, one of them should not exist.
6. Each prompt should be usable on its own, but the sequence should compound —
   later prompts can say "paste the offer you wrote earlier".
7. Prompt 1 must be usable by someone with nothing prepared.
8. At least one rule per prompt must stop plausible-but-useless output. Examples
   of rules that do real work:
   - "If I have not given you a number, ask for it rather than estimating."
   - "Reject any line a competitor could put on their own site unchanged."
   - "If there is not enough information to answer, say so instead of guessing."
   - "Do not soften this to be encouraging."

BANNED — these get the batch rejected by the validator
"unleash", "level up", "game-changing", "revolutionary", "10x", "secret weapon",
"cutting-edge", "industry-leading", "proven to", "while you sleep"; any guarantee
of income, clients, results or growth; any invented statistic or "studies show";
any prompt that only says "act as an expert and give me advice".

OUTPUT
Return ONLY a JSON array. No preamble, no explanation, no code fence.

[ { "title": "2-5 word title", "text": "the full prompt" } ]

Use \n for line breaks inside text values. Plain text only — no markdown inside
the prompt text. Ensure the JSON parses.
```

---
---

# 02 · Cold outreach

**Slug:** `outreach`  ·  **Buyer:** someone sending cold email or DMs and getting silence.

```
You are writing the free pack for a product called SHATTERPROMPTS. It is a lead
magnet, but it has to be genuinely useful on its own — someone should be able to
run all 25 prompts top to bottom and finish with real work done. A thin free pack
loses the sale for the paid one, so treat this as a product, not a teaser.

NICHE
Topic: Cold outreach — email and DMs.
Buyer: someone already sending cold messages and getting silence. They have
something to sell and a rough idea who buys it. They do NOT need "what is cold
email" explained, and they are not asking for a spam tool.
End state after 25 prompts: a qualified prospect list, a repeatable research
routine, a first message that references something real, a follow-up sequence,
and a way to read the replies and fix the actual cause of the silence.

HOUSE FORMAT — every prompt uses these sections, in this order, these exact headings:

You are [specific role, with a stated stance]. [One line on why that stance matters here.]

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

THE 25 PROMPTS — write one for each job below, in this order.

Stage A — Define who is worth contacting
1  [The buying trigger] Identify the events that make a prospect suddenly worth
   contacting, and how each one is visible from outside.
2  [ICP from won deals] Reverse-engineer the ideal customer from the deals that
   already closed, rather than from a wish.
3  [Disqualify fast] Build the list of conditions that remove a prospect
   immediately, so time is not spent on people who cannot buy.
4  [Where the list lives] Work out the specific places this list can be built
   from, with the search or filter to use in each.
5  [Score a raw list] Turn an unsorted list into tiers with a stated reason per
   tier, so the best 20 get the most effort.

Stage B — Research one real problem
6  [Five-minute research routine] A fixed sequence of checks that produces three
   usable facts about a company in five minutes.
7  [Find the observable problem] Locate a problem the user can see from outside
   and describe without claiming inside knowledge.
8  [Research into one sentence] Compress the findings into one sentence that
   proves the message was not mass-sent.
9  [Check the timing] Decide whether now is the right moment to contact them, and
   what to do if it is not.
10 [Find the right person] Work out who actually owns this problem, and what to
   do when only a generic address is available.

Stage C — Write the specific first line
11 [The opening line] Write the first sentence, with the constraint that it must
   be impossible to send to anyone else.
12 [The whole first email] Under 90 words: relevance, one claim, one small ask.
13 [Cut the filler] Strip a draft of every line that exists to make the sender
   feel polite rather than to help the reader.
14 [The DM version] Rewrite the email for Instagram or LinkedIn, where length and
   tone rules are different.
15 [Subject lines] Produce a set of subject lines that describe the email
   honestly, and reject the clickbait ones.

Stage D — Sequence the follow-ups
16 [Design the sequence] Decide how many touches, how far apart, and what changes
   each time.
17 [Follow-up two: new angle] A second message that adds information rather than
   repeating the first.
18 [Follow-up three: proof] A third message built around evidence, with a rule
   against inventing any of it.
19 [The break-up message] Close the loop in a way that is easy to reply to and
   does not guilt the reader.
20 [Cadence and volume] Turn the sequence into a weekly operating plan with a
   realistic daily number.

Stage E — Read replies and adjust
21 [Diagnose zero replies] Given the message, the list and the volume, identify
   the most likely cause and the single change to test next.
22 [Handle "not interested"] Reply once, well, and know when to stop.
23 [Handle "send me some info"] Turn a brush-off into either a call or a clean
   close, without sending a brochure.
24 [Book the call] Convert a warm reply into a booked time in the fewest
   messages.
25 [Weekly numbers review] Review sent / opened / replied / booked and decide the
   one variable to change.

REQUIREMENTS
1. Exactly 25 prompts, in the order above.
2. 150-320 words each.
3. All five headings present, spelled exactly.
4. At least one [PLACEHOLDER] in capitals per prompt.
5. Distinct jobs. Vary the job, not the wording.
6. Later prompts may reference outputs from earlier ones.
7. Prompt 1 must be usable by someone with nothing prepared.
8. At least one rule per prompt must prevent generic output. Especially here:
   forbid inventing facts about the prospect company, forbid fake compliments,
   and forbid claiming results that were not supplied.

BANNED — these get the batch rejected by the validator
"unleash", "level up", "game-changing", "revolutionary", "10x", "secret weapon",
"cutting-edge", "industry-leading", "proven to", "while you sleep"; any guarantee
of replies, meetings or revenue; any invented statistic; anything encouraging
deception about who the sender is or bulk-sending to scraped addresses.

OUTPUT
Return ONLY a JSON array. No preamble, no explanation, no code fence.

[ { "title": "2-5 word title", "text": "the full prompt" } ]

Use \n for line breaks inside text values. Plain text only. Ensure the JSON parses.
```

---
---

# 03 · Content creation

**Slug:** `content`  ·  **Buyer:** someone posting to grow an audience for an offer.

```
You are writing the free pack for a product called SHATTERPROMPTS. It is a lead
magnet, but it has to be genuinely useful on its own — someone should be able to
run all 25 prompts top to bottom and finish with real work done. A thin free pack
loses the sale for the paid one, so treat this as a product, not a teaser.

NICHE
Topic: Content creation for an audience that leads to an offer.
Buyer: someone posting to grow an audience for a service or product. They can
already make content — filming, writing, editing are not the problem. What they
lack is a system, a reason for each post to exist, and a path from a viewer to a
customer.
End state after 25 prompts: a defined viewer, three content pillars, a
repeatable idea-and-hook process, scripts and posts they can publish this week, a
comment-to-DM path to the offer, and a monthly review that changes something.

HOUSE FORMAT — every prompt uses these sections, in this order, these exact headings:

You are [specific role, with a stated stance]. [One line on why that stance matters here.]

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

THE 25 PROMPTS — write one for each job below, in this order.

Stage A — Define who and what for
1  [The one viewer] Define a single specific person the account talks to, in
   enough detail that a post can be judged against them.
2  [Pick the transformation] Name the before-and-after the account promises, and
   check the offer actually delivers it.
3  [Position against everyone else] Find the stance that separates this account
   from the ten others in the same niche.
4  [Write the bio] A bio that says who it is for and what they get, in the
   character limit, without adjectives.
5  [Choose the platform] Decide where to concentrate, based on where the buyer
   already is and what the user can sustain.

Stage B — Set three pillars
6  [Build three pillars] Turn the positioning into three recurring subjects that
   can each carry fifty posts.
7  [Thirty ideas from one pillar] Generate ideas that differ in angle, not just
   in wording.
8  [Mine comments and DMs] Turn existing audience questions into a ranked idea
   list.
9  [Client questions into content] Convert the questions asked in real
   conversations into posts, which are the ones that convert.
10 [The idea bank system] Set up a capture-and-rank routine so ideas are never
   generated under deadline pressure.

Stage C — Write the hook first
11 [Ten hooks for one idea] Ten genuinely different openings, each with the
   reason it might work.
12 [Fix a weak hook] Diagnose why an opening failed and rewrite it three ways.
13 [The first three seconds] Write the exact opening line, and the visual that
   goes with it.
14 [Structure the middle] Keep attention after the hook: order the points and cut
   the ones that do not earn their place.
15 [Write the ending] End so that the viewer does something, without a generic
   "follow for more".

Stage D — Publish and repurpose
16 [Script a 45-second video] A full spoken script with timing marks and B-roll
   notes.
17 [Write the carousel] Slide-by-slide, with the rule that slide one must survive
   without the caption.
18 [Write the caption] Caption that adds to the video rather than repeating it.
19 [One video into five posts] Repurpose properly — different format, different
   angle, not a copy-paste.
20 [A week's calendar] Turn the pillars and ideas into a publishable week with
   realistic production load.

Stage E — Review what actually worked
21 [Diagnose low views] Work from the available numbers to the most likely cause,
   and refuse to guess if the numbers are not supplied.
22 [Views but no followers] Separate the reach problem from the reason-to-follow
   problem.
23 [Comment into DM] A reply-and-DM script that moves a commenter to a
   conversation without sounding automated.
24 [The offer post] Write the post that names the offer, without pretending it is
   not a sale.
25 [Monthly review] Review the month and commit to one change for the next.

REQUIREMENTS
1. Exactly 25 prompts, in the order above.
2. 150-320 words each.
3. All five headings present, spelled exactly.
4. At least one [PLACEHOLDER] in capitals per prompt.
5. Distinct jobs. Vary the job, not the wording.
6. Later prompts may reference earlier outputs.
7. Prompt 1 must be usable by someone with nothing prepared.
8. At least one rule per prompt must prevent generic output. Especially here:
   forbid engagement-bait, forbid invented view counts or algorithm claims, and
   forbid hooks that promise something the post does not deliver.

BANNED — these get the batch rejected by the validator
"unleash", "level up", "game-changing", "revolutionary", "10x", "secret weapon",
"cutting-edge", "industry-leading", "proven to", "while you sleep"; any claim
about how a platform's algorithm works stated as fact; any guarantee of views,
followers or virality; any invented statistic.

OUTPUT
Return ONLY a JSON array. No preamble, no explanation, no code fence.

[ { "title": "2-5 word title", "text": "the full prompt" } ]

Use \n for line breaks inside text values. Plain text only. Ensure the JSON parses.
```

---
---

# 04 · Local business

**Slug:** `local-business`  ·  **Buyer:** someone selling services to businesses they can visit or phone.

```
You are writing the free pack for a product called SHATTERPROMPTS. It is a lead
magnet, but it has to be genuinely useful on its own — someone should be able to
run all 25 prompts top to bottom and finish with real work done. A thin free pack
loses the sale for the paid one, so treat this as a product, not a teaser.

NICHE
Topic: Selling services to local businesses.
Buyer: someone who wants to sell a service to businesses they can visit, phone,
or find on a map — trades, salons, restaurants, gyms, dentists, garages. Usually
no clients yet, no case studies, and no budget for tools.
End state after 25 prompts: a chosen business type and territory, a repeatable
audit that finds problems visible from outside, a packaged fix with a price, a
first approach that gets a reply, and a route from one job to referrals.

HOUSE FORMAT — every prompt uses these sections, in this order, these exact headings:

You are [specific role, with a stated stance]. [One line on why that stance matters here.]

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

THE 25 PROMPTS — write one for each job below, in this order.

Stage A — Pick a business type
1  [Choose the business type] Compare candidate local trades on margin, urgency,
   and how reachable the owner is.
2  [Map the territory] Define a geographic area big enough to hold enough
   prospects and small enough to work on foot or by phone.
3  [What can they actually pay] Reason from job value and volume to a realistic
   monthly budget, asking for inputs rather than guessing.
4  [Pick the lead service] Choose the one service to open with, and the reason it
   is easier to say yes to than the others.
5  [Disqualify the wrong ones] Define the businesses to skip and why, so time is
   not wasted on the unreachable.

Stage B — Audit for a visible problem
6  [Audit the Google Business Profile] A fixed checklist producing a scored list
   of specific gaps.
7  [Ten-minute website audit] Check the things a customer notices — speed,
   phone number, opening hours, what to do next.
8  [Audit the reviews] Read the reviews as evidence about the business, and pull
   out what the owner does not know they are being told.
9  [Audit the social presence] Judge whether it is worth fixing, or whether it
   should be abandoned in favour of something else.
10 [Write the audit summary] Turn every finding into three the owner will care
   about, in plain language, with no jargon.

Stage C — Package the fix
11 [Findings into an offer] Convert the audit into one offer with a defined
   outcome, not a menu.
12 [Scope the first job] Make the first engagement small enough to say yes to and
   large enough to be worth doing.
13 [Price for a local owner] Price against what the problem costs them, and
   provide a version for when they say the number is too high.
14 [The one-page proposal] Everything on one page: problem, fix, price, timeline,
   what happens next.
15 [The do-it-once template] Turn the delivery into a repeatable checklist so the
   second client takes half the time.

Stage D — Contact the owner
16 [The first email] Short, references a specific finding from the audit, asks
   for one small thing.
17 [The walk-in script] What to say in the first fifteen seconds, what to hand
   over, and when to leave.
18 [The phone script] Opening, the reason for calling, and the branch for "we're
   busy right now".
19 [Get past the gatekeeper] Reach the owner honestly, without pretending to be
   someone else.
20 [Follow up without nagging] A follow-up plan with a stated stopping point.

Stage E — Turn one into referrals
21 [Handle "we already have someone"] Find out whether that is true, and what to
   offer if it is.
22 [Handle "too expensive"] Reduce scope rather than price, and know when to walk.
23 [Report the result] Show what changed after the work, using only measurements
   that were actually taken.
24 [Ask for the referral] The exact ask, the timing, and who to ask for by name.
25 [One job into a retainer] Turn a completed project into ongoing work, with the
   monthly deliverable defined.

REQUIREMENTS
1. Exactly 25 prompts, in the order above.
2. 150-320 words each.
3. All five headings present, spelled exactly.
4. At least one [PLACEHOLDER] in capitals per prompt.
5. Distinct jobs. Vary the job, not the wording.
6. Later prompts may reference earlier outputs.
7. Prompt 1 must be usable by someone with nothing prepared.
8. At least one rule per prompt must prevent generic output. Especially here:
   forbid inventing findings the user has not observed, forbid claiming a
   business is losing a specific amount of money without evidence, and forbid
   any script that misrepresents who the caller is.

BANNED — these get the batch rejected by the validator
"unleash", "level up", "game-changing", "revolutionary", "10x", "secret weapon",
"cutting-edge", "industry-leading", "proven to", "while you sleep"; any invented
statistic about local search or customer behaviour; any guarantee of rankings,
leads or revenue; any pretence of being from Google or another platform.

OUTPUT
Return ONLY a JSON array. No preamble, no explanation, no code fence.

[ { "title": "2-5 word title", "text": "the full prompt" } ]

Use \n for line breaks inside text values. Plain text only. Ensure the JSON parses.
```

---
---

# 05 · Digital products

**Slug:** `digital-products`  ·  **Buyer:** someone who wants income that is not hours-for-money.

```
You are writing the free pack for a product called SHATTERPROMPTS. It is a lead
magnet, but it has to be genuinely useful on its own — someone should be able to
run all 25 prompts top to bottom and finish with real work done. A thin free pack
loses the sale for the paid one, so treat this as a product, not a teaser.

NICHE
Topic: Building and selling a digital product.
Buyer: someone who wants income that does not trade hours for money. They may
have a small audience or a skill, but no validated product. Their real risk is
building something nobody asked for.
End state after 25 prompts: a validated problem, evidence someone will pay, a
product scoped small enough to finish, a sales page, a launch plan, and a way to
learn from the result.

HOUSE FORMAT — every prompt uses these sections, in this order, these exact headings:

You are [specific role, with a stated stance]. [One line on why that stance matters here.]

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

THE 25 PROMPTS — write one for each job below, in this order.

Stage A — Mine the problem
1  [Mine your own history] Extract product ideas from problems the user has
   already solved for themselves or others.
2  [Mine a community for pain] A method for reading a forum, subreddit or comment
   section for repeated, specific complaints.
3  [Cluster into one problem] Group scattered complaints into the single problem
   worth solving.
4  [Is it expensive enough] Judge whether the problem costs enough time or money
   to be worth paying to remove.
5  [Write the problem statement] One paragraph a sufferer would read and say "that
   is exactly it".

Stage B — Validate the angle
6  [The validation offer] Describe the product as if it existed, in the form that
   can be shown to real people.
7  [Ten validation messages] Messages that ask about the problem without leading
   the witness.
8  [Design the pre-sale] Structure a pre-sale that is honest about what does not
   exist yet.
9  [Read the signal honestly] Distinguish encouragement from intent to buy, with
   a rule against optimistic interpretation.
10 [Kill or continue] Force a decision with a stated threshold, decided before
   the results are in.

Stage C — Package the product
11 [Choose the format] Match the format to the problem and to what the user can
   actually finish.
12 [Scope so you can finish] Cut the plan to something completable, with an
   explicit list of what is deferred to v2.
13 [Outline the product] A structure where every section has a job and a stated
   outcome.
14 [Name it] Names that describe the outcome, tested against being searchable and
   not embarrassing to say out loud.
15 [Price it] Reason to a number from the value and the format, with a rule
   against pricing by feel.

Stage D — Write the page
16 [Headline set] Ten headlines that state the outcome, ranked with reasons.
17 [The problem section] Describe the problem so precisely the reader assumes the
   product understands them.
18 [The what-you-get section] Concrete artefacts and quantities, not adjectives.
19 [Handle the objections] List the real reasons someone would not buy and answer
   each without dismissing it.
20 [The FAQ] Answer the questions that are actually asked, including the
   uncomfortable ones.

Stage E — Launch and learn
21 [The launch sequence] Plan the emails and posts across the launch window, with
   the job of each one.
22 [Launch email one] The announcement, written for people who have never heard
   of the product.
23 [The social launch post] A post that sells without pretending it is not
   selling.
24 [Post-purchase survey] Five questions to buyers that produce usable answers.
25 [Decide v2] Turn the launch results and buyer feedback into the next decision.

REQUIREMENTS
1. Exactly 25 prompts, in the order above.
2. 150-320 words each.
3. All five headings present, spelled exactly.
4. At least one [PLACEHOLDER] in capitals per prompt.
5. Distinct jobs. Vary the job, not the wording.
6. Later prompts may reference earlier outputs.
7. Prompt 1 must be usable by someone with nothing prepared.
8. At least one rule per prompt must prevent generic output. Especially here:
   forbid inventing customer quotes or demand, forbid revenue projections
   presented as expectations, and require that any pre-sale copy state plainly
   what has not been built yet.

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

---
---

# 06 · Job search

**Slug:** `job-search`  ·  **Buyer:** someone applying for roles and getting no response.

```
You are writing the free pack for a product called SHATTERPROMPTS. It is a lead
magnet, but it has to be genuinely useful on its own — someone should be able to
run all 25 prompts top to bottom and finish with real work done. A thin free pack
loses the sale for the paid one, so treat this as a product, not a teaser.

NICHE
Topic: Job search — applications, CV, interviews, offer.
Buyer: someone applying for roles and getting no response, or getting to
interview and stopping there. They are not asking for career-change therapy and
they do not want "believe in yourself". They want their application to be
specific and their interview answers to hold up.
End state after 25 prompts: a target list of roles that fit, a CV rebuilt on
evidence they actually have, applications tailored to individual ads, a bank of
rehearsed answers, and a plan for the follow-up and the offer conversation.

HOUSE FORMAT — every prompt uses these sections, in this order, these exact headings:

You are [specific role, with a stated stance]. [One line on why that stance matters here.]

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

THE 25 PROMPTS — write one for each job below, in this order.

Stage A — Target the right roles
1  [Audit what you actually did] Extract concrete, evidenced accomplishments from
   a messy work history, including from jobs that felt unremarkable.
2  [Skills into job titles] Translate what they can do into the titles employers
   actually advertise, including adjacent ones they had not considered.
3  [Read a job ad properly] Separate the hard requirements from the wish list,
   and identify what the ad reveals about the team.
4  [Score a role against you] Rate fit honestly across requirements, and state
   what is missing rather than talking them into applying.
5  [Build the target list] Turn the criteria into a specific list of employers and
   where their roles are posted.

Stage B — Rebuild the CV on evidence
6  [Rewrite bullets with evidence] Verb, action, method, measurable result — and
   ask for the number rather than inventing it.
7  [Recover missing numbers] Help someone reconstruct a real figure from what
   they remember, and mark anything still unconfirmed.
8  [Fix the summary] Replace the generic opening paragraph with three lines that
   say what they do and for whom.
9  [Tailor to one ad] Reorder and rewrite the CV against a specific advert
   without adding anything untrue.
10 [Pass the keyword filter honestly] Identify the terms the ad uses and where
   they can legitimately appear, with a hard rule against claiming skills they
   do not have.

Stage C — Write the specific application
11 [The 250-word cover letter] Three requirements, one specific thing about the
   company, no "I am writing to express my interest".
12 [Message the hiring manager] A short LinkedIn note that is worth replying to.
13 [Ask for a referral] Ask someone who barely knows them, without being
   presumptuous.
14 [Answer application questions] Handle the free-text boxes that most people
   waste.
15 [Explain a gap or a switch] Explain a career break or a change of field
   honestly and briefly, without apologising for it.

Stage D — Prepare and interview
16 [Research the company] Find the things worth mentioning, and the questions
   worth asking, from public information only.
17 [Build the STAR bank] Turn their history into a set of stories mapped to the
   competencies the ad names.
18 [Practise scored answers] Interview them one question at a time, score each
   answer, and rewrite it using only the facts they gave.
19 [Prepare your questions] Questions that reveal whether the job is any good,
   not questions designed to look keen.
20 [The task or technical stage] Prepare for a take-home task or technical
   interview, including how long to spend on it.

Stage E — Follow up and negotiate
21 [The thank-you note] Short, specific, sent within a day, adding one thing they
   did not get to say.
22 [Chase without pestering] Follow up on silence with a stated stopping point.
23 [Rejection into feedback] Ask for feedback in a way that occasionally gets a
   real answer, and extract the lesson if it does not.
24 [Evaluate the offer] Compare the whole package against what they said they
   wanted, including the parts that are not salary.
25 [Negotiate the number] Prepare the ask, the justification and the fallback,
   with a rule against inventing a competing offer.

REQUIREMENTS
1. Exactly 25 prompts, in the order above.
2. 150-320 words each.
3. All five headings present, spelled exactly.
4. At least one [PLACEHOLDER] in capitals per prompt.
5. Distinct jobs. Vary the job, not the wording.
6. Later prompts may reference earlier outputs.
7. Prompt 1 must be usable by someone with nothing prepared.
8. At least one rule per prompt must prevent generic output. This niche needs the
   strictest honesty rules in the set — every prompt that touches the CV, the
   letter or the interview MUST forbid inventing experience, qualifications,
   employers, dates or numbers, and must instruct the model to ask the user
   instead of filling a gap.

BANNED — these get the batch rejected by the validator
"unleash", "level up", "game-changing", "revolutionary", "10x", "secret weapon",
"cutting-edge", "industry-leading", "proven to", "while you sleep"; any invented
statistic about recruiters or applicant tracking systems stated as fact; any
guarantee of interviews or offers; anything that fabricates credentials or
encourages the user to overstate their experience.

OUTPUT
Return ONLY a JSON array. No preamble, no explanation, no code fence.

[ { "title": "2-5 word title", "text": "the full prompt" } ]

Use \n for line breaks inside text values. Plain text only. Ensure the JSON parses.
```

---

## If a batch gets rejected

Paste this after the errors:

```
The validator rejected the batch with these errors:

[PASTE ERRORS]

Fix only the items listed. Keep every other prompt exactly as it was. Return the
complete corrected JSON array of all 25, same format, no preamble.
```

Common causes:

| Error | Cause | Fix |
|-------|-------|-----|
| `missing section(s)` | The model dropped a heading, usually RULES | Tell it the headings are literal |
| `only N words` | It compressed to fit 25 in one reply | Ask for prompts 1-13, then 14-25 |
| `no [INPUT] placeholder` | It wrote advice, not a prompt | Point at the specific item |
| `too similar to` | Two jobs overlapped | Rewrite the later one against its listed job |
| `banned phrase` | Marketing drift | Name the phrase, ask for a plain replacement |
