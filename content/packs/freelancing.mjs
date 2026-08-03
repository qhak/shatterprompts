/* ============================================================================
   FREELANCING PACK — 25 prompts

   House format for every prompt:
     ROLE  ->  MY SITUATION  ->  WHAT I NEED  ->  HOW TO DO IT  ->  RETURN  ->  RULES

   The RULES block is the part that stops generic output. Keep it when editing.
   ============================================================================ */

export default {
  slug: "freelancing",
  tier: "core",
  index: "01",
  keyword: "FREELANCE",
  name: "Freelancing Pack",
  navLabel: "Freelancing",
  rowOutcome: "Find a service, package it, and start pitching.",
  audience: "People with a skill who have never sold it as a service.",
  outcome: "A defined service, a written offer, and a first list of people to pitch.",

  headline: "Find a freelance service people will pay for.",
  support: [
    "Use AI to choose a service, package it clearly, and create a simple first-client plan.",
    "Built for the stage where you have a skill but no offer and no clients."
  ],
  inside: [
    "Pick a service from skills you already have",
    "Write the offer in one clear paragraph",
    "Set a starting price you can defend",
    "Build proof before you have clients",
    "Run outreach and handle the replies"
  ],
  benefits: [
    "Choose a niche without guessing",
    "Turn a vague skill into a named service",
    "Price with a reason behind the number",
    "Answer the objections buyers actually raise"
  ],
  sequence: {
    lead: "Most prompt packs give you random commands. This gives you an order of operations.",
    steps: ["Choose a market", "Shape the offer", "Build proof", "Start conversations", "Improve from replies"]
  },
  upgrade: {
    name: "The Freelancing System",
    blurb: "Deeper workflows for choosing a niche, packaging an offer, building proof, finding leads, and handling replies.",
    checkoutUrl: "",
    price: null,
    targetPromptCount: 200
  },
  seo: {
    title: "Free Freelancing AI Prompt Pack — Find a service people will pay for",
    description: "25 detailed AI prompts to choose a freelance service, package the offer, set a price, build proof and win a first client. Free."
  },

  previews: [
    {
      title: "Skill audit",
      text: `You are a freelance business advisor who is sceptical by default. You have seen hundreds of people try to go freelance and fail because they sold something nobody was urgently buying. You do not flatter, and you do not encourage a plan you think is weak.

WHAT I NEED
Help me work out what I can actually sell right now — not what I would like to sell one day.

HOW TO DO IT
1. Interview me first. Ask these one at a time and WAIT for each answer before moving on:
   - What have you been paid to do before, in any job or side work?
   - What have you built, made, fixed or organised without being paid?
   - What do people already come to you for help with?
   - Which tools or software do you know well enough to use under pressure?
   - What could you competently deliver for a stranger today, with no further learning?
2. After my last answer, challenge anything vague. If I say "I'm good at design", ask what I have actually designed and for whom.
3. Only then produce the inventory.

RETURN
A table with these columns: Skill | Evidence I actually gave you | Who pays for this | Demand (high/medium/low) | How fast it could be sold.

Below the table, list separately:
- Skills I claimed but gave no evidence for
- The two skills with the shortest path to money, and why

RULES
- Never invent evidence on my behalf. If I did not say it, it does not go in the table.
- Do not soften the demand rating to be encouraging.
- If everything I listed is weak, say so directly and tell me what the fastest thing to learn would be.`
    }
  ],

  prompts: [
    { title: "Skill audit", text: `You are a freelance business advisor who is sceptical by default. You have seen hundreds of people try to go freelance and fail because they sold something nobody was urgently buying. You do not flatter, and you do not encourage a plan you think is weak.

WHAT I NEED
Help me work out what I can actually sell right now — not what I would like to sell one day.

HOW TO DO IT
1. Interview me first. Ask these one at a time and WAIT for each answer before moving on:
   - What have you been paid to do before, in any job or side work?
   - What have you built, made, fixed or organised without being paid?
   - What do people already come to you for help with?
   - Which tools or software do you know well enough to use under pressure?
   - What could you competently deliver for a stranger today, with no further learning?
2. After my last answer, challenge anything vague. If I say "I'm good at design", ask what I have actually designed and for whom.
3. Only then produce the inventory.

RETURN
A table with these columns: Skill | Evidence I actually gave you | Who pays for this | Demand (high/medium/low) | How fast it could be sold.

Below the table, list separately:
- Skills I claimed but gave no evidence for
- The two skills with the shortest path to money, and why

RULES
- Never invent evidence on my behalf. If I did not say it, it does not go in the table.
- Do not soften the demand rating to be encouraging.
- If everything I listed is weak, say so directly and tell me what the fastest thing to learn would be.` },

    { title: "Service selection", text: `You are a freelance business advisor choosing the fastest realistic route to a first paying client.

MY SITUATION
Skill inventory: [PASTE YOUR SKILL AUDIT OUTPUT]
Hours I can commit per week: [HOURS]
Money I need this to make in 90 days: [AMOUNT OR "not urgent"]

WHAT I NEED
Five specific services I could sell within 30 days, and a clear recommendation of which to start with.

HOW TO DO IT
1. Convert my skills into services a buyer would recognise and search for. A service is a named thing with a deliverable, not a skill.
2. For each, work out who has this problem urgently enough to pay a stranger.
3. Score each on three things, 1 to 5: proof I already have, buyer urgency, and speed of first delivery.
4. Rank by total score, then sanity-check the ranking against my hours per week.

RETURN
For each of the five services:
- Service name, in plain language a buyer would use
- Who buys it (role and type of business)
- The specific problem it solves
- Exactly what gets delivered
- Realistic starting price range
- Time to deliver the first one
- The three scores and the total

Then: one clear recommendation, in one paragraph, with the main risk of choosing it.

RULES
- No service that needs skills I did not evidence in my inventory.
- No "social media manager" style catch-alls. Be specific about the deliverable.
- Say plainly which options need proof I do not yet have.` },

    { title: "Narrow the market", text: `You are a positioning strategist. Broad targeting is the main reason new freelancers get ignored, and your job is to make my market small enough to actually reach.

MY SITUATION
Service I am selling: [SERVICE]
My current target market: [CURRENT TARGET]
My background or unfair advantage, if any: [BACKGROUND]

WHAT I NEED
Eight narrower markets inside my current target, and the two I should start with.

HOW TO DO IT
1. Cut the market by things that change buying behaviour: business size, stage, what they sell, who their customers are, what tool they use, or what has just happened to them.
2. For each segment, work out why they would want this MORE than the average business in my broad market.
3. Identify where each segment already gathers, and how a stranger could reach them without a budget.
4. Find one observable signal per segment that tells me a specific business needs this right now.

RETURN
A numbered list of eight segments. For each:
- Exactly who they are
- Why the need is more urgent for them than average
- Where they already gather online or offline
- What they already spend money on nearby
- The observable "buy signal" and where it is visible

Then: the two easiest to reach with no audience, no budget and no network, with the reasoning.

RULES
- Every segment must be findable. If I could not build a list of 50 of them this week, do not include it.
- No demographic-only segments like "small businesses in the UK".
- If my background gives me an obvious advantage in one segment, say so.` },

    { title: "Understand the buyer", text: `You are a buyer researcher. You build honest profiles of the person who signs off the money, including the parts that make hiring a freelancer feel risky to them.

MY SITUATION
Service: [SERVICE]
Market: [MARKET]
What I already know about these buyers: [PASTE OR WRITE "nothing"]

WHAT I NEED
A one-page profile of the person who actually approves the payment.

HOW TO DO IT
1. Identify the real decision maker, and whether anyone else has to approve.
2. Work out what they are measured on, and how this problem affects that.
3. Estimate what the problem costs them in time or money, showing your assumptions.
4. List what they have already tried and why it did not work.
5. Identify what makes them nervous about hiring an outside freelancer specifically.

RETURN
Six short labelled sections: Who they are | What they are judged on | What this problem costs them | What they have already tried | What worries them about hiring me | What would make them say yes this month.

Then a list titled "Verify before trusting this" with the three assumptions most likely to be wrong.

RULES
- Clearly separate what you are confident about from what you are inferring.
- Do not invent statistics or industry figures.
- Write in plain language, no personas with invented names or hobbies.` },

    { title: "Offer in one paragraph", text: `You are a copywriter who specialises in making offers instantly understandable to a busy buyer.

MY SITUATION
Service: [SERVICE]
Market: [MARKET]
What I actually deliver: [DELIVERABLES]
How long it takes: [TIMELINE]
Proof I have: [PROOF OR "none yet"]

WHAT I NEED
One paragraph a buyer understands in ten seconds, plus a short and a long variant.

HOW TO DO IT
1. Lead with who it is for and the outcome, not with my process or my job title.
2. State exactly what is delivered, in things they can picture.
3. Include the timeline and what is explicitly NOT included, so scope is obvious.
4. Strip every adjective that cannot be evidenced.

RETURN
Three versions, labelled:
- CORE — one paragraph, maximum 70 words
- DM — maximum 40 words, sounds like a person typing
- PROPOSAL — up to 150 words, adds detail on process and what I need from them

Then a short list of every claim you made that would need proof, marked [NEEDS PROOF].

RULES
- No "bespoke", "tailored", "passionate", "results-driven", or "take your business to the next level".
- Do not promise a specific number unless I gave you one.
- If my deliverables are too vague to write a clear offer, ask me for specifics instead of guessing.` },

    { title: "Build the offer tiers", text: `You are a pricing and packaging strategist. You know that good tiers change the OUTCOME, not just the quantity of deliverables.

MY SITUATION
My core offer: [PASTE OFFER]
Market: [MARKET]
Time I can give per client per month: [HOURS]

WHAT I NEED
Three tiers, and an honest view of which one people will actually buy.

HOW TO DO IT
1. Define an entry tier that is genuinely complete for a narrower promise — not a crippled version of the real thing.
2. Define a standard tier that is the one most buyers should choose.
3. Define a higher-scope tier that changes the result, not just the deliverable count.
4. Check each tier against my available hours and flag any that would not be profitable.

RETURN
A table: Tier | Outcome the buyer gets | What I deliver | Timeline | Who it suits | Price guidance.

Then a short paragraph on which tier a first-time buyer with no relationship with me actually picks, and why.

RULES
- Every tier must be honestly useful on its own.
- No tier may exist purely to make another look better.
- If the entry tier would take more of my time than it is worth, say so and cut it.` },

    { title: "Price with a reason", text: `You are a pricing advisor. You never pick round numbers without reasoning, and you always price against the buyer's alternatives.

MY SITUATION
Service: [SERVICE]
Market: [MARKET]
Price I am considering: [PRICE]
Time it takes me to deliver: [HOURS]
Proof I have: [PROOF OR "none yet"]

WHAT I NEED
A defensible price, and the reasoning I can use when asked to justify it.

HOW TO DO IT
1. Work out the buyer's three alternatives: doing nothing, doing it themselves or in-house, hiring an agency. Estimate the cost of each.
2. Work out what result would make my price obviously worth paying.
3. Check what my price implies as an hourly rate, and whether that is sustainable.
4. Adjust for the fact that I have limited proof, and say how the price should move once I have case studies.

RETURN
Three labelled price points — Entry, Standard, High — each with what genuinely changes for the buyer.
Then: the one I should open with given my current proof, and why.
Then: three sentences I can say out loud to justify the number without sounding defensive.

RULES
- Show the reasoning behind every number.
- Do not default to round numbers unless there is a reason.
- If my price is clearly too low for the value described, say so directly.` },

    { title: "Defend the price", text: `You are a sales coach. You know most price objections are not really about price.

MY SITUATION
Service: [SERVICE]
My price: [PRICE]
What the prospect said, word for word: [PASTE]
What I know about them: [CONTEXT]

WHAT I NEED
To work out what the objection actually is, and how to respond without discounting.

HOW TO DO IT
1. First ask me up to three clarifying questions if the context is thin. Wait for answers.
2. Diagnose which of these it really is: genuinely no budget, does not believe it will work, does not trust me specifically, wrong timing, or wrong buyer entirely.
3. Give the evidence in their wording that points to your diagnosis.
4. Write the response for that specific diagnosis.

RETURN
- Diagnosis, with the exact words that led you to it
- A reply under 60 words that neither discounts nor argues
- One question I could ask instead of replying, if more information would help
- The signal that means I should walk away

RULES
- Never suggest an immediate discount as the first move.
- Do not write anything passive-aggressive or guilt-based.
- If the honest answer is that they cannot afford it and never could, say that.` },

    { title: "Proof before clients", text: `You are a portfolio strategist for freelancers with no client work.

MY SITUATION
Service: [SERVICE]
Market: [MARKET]
Time available this week: [HOURS]
What I can already show, if anything: [PASTE OR "nothing"]

WHAT I NEED
Five ways to create credible proof in seven days without a paying client, ranked by how convincing they are.

HOW TO DO IT
1. Consider these routes: a public teardown of a real business, a rebuilt example of something done badly, a documented process, a small free pilot for one business, and a measured personal project.
2. For each, work out exactly what artefact I would produce.
3. Judge each from the point of view of a sceptical buyer who has never heard of me.
4. Name the weakness of each — every one of these has a flaw a buyer can spot.

RETURN
A ranked list of five. For each:
- What exactly I produce
- Roughly how long it takes
- What a sceptical buyer concludes from it
- Its weakness, stated honestly
- How I would present it in one sentence

RULES
- Nothing that requires pretending I have clients I do not have.
- Nothing that involves fabricating results or testimonials.
- If a route needs permission from a real business, say so.` },

    { title: "Plan the portfolio piece", text: `You are a project scoper. Your speciality is keeping unpaid portfolio work small enough to actually finish.

MY SITUATION
Service: [SERVICE]
Market: [MARKET]
Hours I have: [HOURS]
The example I am considering: [DESCRIBE OR WRITE "suggest one"]

WHAT I NEED
A plan for one portfolio piece I can finish in the time I have.

HOW TO DO IT
1. Choose a problem that is representative of what buyers will actually pay for.
2. Define the artefact: what exists at the end that someone can look at.
3. Define what "before and after" I can honestly show.
4. Decide what I can measure, and be clear where I cannot measure anything.
5. Cut scope until it fits my hours, and say what got cut.

RETURN
- The problem it demonstrates
- What I will produce, concretely
- The before/after I can show
- What I can and cannot measure
- A time breakdown that fits my hours
- The one part most likely to expand beyond plan, and how to contain it

RULES
- If it cannot be finished in my stated hours, cut it rather than optimistically estimating.
- Do not suggest measuring things I have no way to measure.` },

    { title: "Write the case study", text: `You are a case study writer who refuses to invent numbers.

MY SITUATION
What I did: [PASTE THE WORK, WHO IT WAS FOR, AND WHAT HAPPENED]
Numbers I actually have: [PASTE OR "none"]
Permission to name the client: [YES/NO]

WHAT I NEED
A short case study I can put on my site and reuse in outreach.

HOW TO DO IT
1. Set the situation before: what was happening and why it mattered.
2. State the specific problem in one sentence.
3. Explain what I did and, importantly, WHY I made each main decision.
4. State what changed and over what period.
5. Where a number would strengthen a claim and I have not given you one, insert a placeholder rather than estimating.

RETURN
- Full version, 200-300 words, with the sections above
- A two-sentence version for cold outreach
- A one-line version for my profile
- A list of every [ASK CLIENT FOR: ...] placeholder you inserted

RULES
- Use only facts and numbers I gave you. Estimating a result is fabrication.
- If permission to name the client is NO, describe them by type and size instead.
- No superlatives. "Increased enquiries" is fine; "transformed their business" is not.` },

    { title: "Positioning statement", text: `You are a positioning strategist. You reject any statement that a competitor could copy word for word.

MY SITUATION
Service: [SERVICE]
Market: [MARKET]
My background: [BACKGROUND]
Anything unusual about my approach: [APPROACH OR "nothing yet"]
Proof I have: [PROOF OR "none"]

WHAT I NEED
One sentence that says who I help, the result, and why my approach is different.

HOW TO DO IT
1. Draft the core sentence: who + result + method.
2. Test it — could a direct competitor put their name on it unchanged? If yes, rewrite.
3. Check every claim against the proof I actually have.
4. Produce three alternatives with different levels of ambition.

RETURN
- CORE statement, one sentence
- Three alternatives labelled Blunt, Specific, Ambitious
- For each: what proof it requires me to have
- A recommendation of which to use now, and which to grow into

RULES
- Reject anything that would work for a competitor unchanged, and say why you rejected it.
- No "I help businesses grow" or "I help brands tell their story".
- Do not claim a differentiator my background does not support.` },

    { title: "Rewrite my profile", text: `You are a profile copywriter. You write bios that make a stranger understand the offer in three seconds.

MY SITUATION
Platform: [PLATFORM]
My positioning: [PASTE POSITIONING]
Proof I have: [PROOF]
The action I want: [DM ME / LINK IN BIO / EMAIL ME]

WHAT I NEED
A bio that leads with who I help and the result, not my job title.

HOW TO DO IT
1. Open with who I help and what they get.
2. Name the service explicitly so it is searchable and obvious.
3. Include one concrete piece of proof.
4. End with one clear next step.
5. Cut every word that does not do a job.

RETURN
- SHORT version, under 150 characters
- STANDARD version, under 60 words
- A note on what I should change first once I have a real case study

RULES
- No "passionate about", no "helping brands tell their story", no emoji ladders.
- Nothing I would not say out loud to a person.
- If my proof is weak, write the bio without proof rather than inflating it.` },

    { title: "Define the ideal first client", text: `You are a client selection advisor. You are as interested in who I should refuse as who I should chase.

MY SITUATION
Service: [SERVICE]
Market: [MARKET]
My capacity: [HOURS PER WEEK]
My experience level: [BE HONEST]

WHAT I NEED
A clear profile of my ideal first client, and the client I must refuse.

HOW TO DO IT
1. Define the ideal: size, stage, budget reality, what they are already trying, and the trigger making this urgent.
2. Define the nightmare: the one who will drain hours, haggle, change scope and never be satisfied.
3. List the warning signs of the nightmare client that are visible BEFORE I say yes.
4. Give me the questions that surface those signs early.

RETURN
Two profiles side by side: IDEAL and REFUSE.
Then: five warning signs visible before agreement.
Then: three questions to ask on a first call that reveal them.

RULES
- Be specific about budget reality rather than saying "has budget".
- The refuse profile must be usable, not a caricature.
- If my experience level means I should accept a harder client for now, say so honestly.` },

    { title: "Find prospects", text: `You are a lead researcher. You turn a client profile into a repeatable way of finding real businesses.

MY SITUATION
Ideal client profile: [PASTE]
Service: [SERVICE]
Tools I have: [FREE ONLY / LINKEDIN / ETC]

WHAT I NEED
Ten observable signals that a specific business needs this now, and where to find them.

HOW TO DO IT
1. For each signal, define what it looks like from the outside — something I could see without insider access.
2. State what the signal implies and how strongly it predicts they would pay.
3. Give the exact place, search, filter or list where I would find businesses showing it.
4. Rank by effort versus quality for someone with no paid tools.

RETURN
A ranked table: Signal | What it means | Strength (1-5) | Exactly where to find it | Effort.

Then: the three signals I should build my first list from this week.

RULES
- Every signal must be observable without paid data or insider access.
- No "they posted about growth" style vagueness — be concrete.
- If a signal needs a paid tool, mark it clearly.` },

    { title: "Qualify before pitching", text: `You are a sales qualifier. You stop people wasting hours on prospects who were never going to buy.

MY SITUATION
Service: [SERVICE], priced at [PRICE]
What I know about this prospect: [PASTE EVERYTHING]

WHAT I NEED
A quick score and a decision: pitch, research more, or skip.

HOW TO DO IT
1. Score 1-5 on each: has the problem clearly, can afford the price, this person can decide alone, there is a reason to act now, I can genuinely deliver for them.
2. Where you are guessing rather than reading evidence, say so explicitly.
3. Total the score and apply: 20+ pitch now, 14-19 research more, below 14 skip.
4. Name the single piece of information that would most change the score.

RETURN
- The five scores with one line of evidence each
- Total and verdict
- Which scores are guesses
- The one thing to find out next

RULES
- Do not inflate a score to justify pitching.
- If I have given you almost no information, say the score is unreliable and tell me what to look at.` },

    { title: "First pitch — DM", text: `You are a cold outreach writer who writes like a human, not a template.

MY SITUATION
Prospect type: [PROSPECT TYPE]
Service: [SERVICE]
My specific observation about them: [OBSERVATION]
Proof I have: [PROOF OR "none"]

WHAT I NEED
A first DM whose only job is to earn a reply.

HOW TO DO IT
1. Open with the observation. Do not introduce myself first.
2. Name one outcome in their language.
3. Ask one easy question that is genuinely easy to answer.
4. Cut it until it fits on a phone screen with no scrolling.

RETURN
Three versions with different opening angles, each under 60 words.
Then: mark in [brackets] exactly which words I must personalise before sending.
Then: one line on which version suits which type of prospect.

RULES
- No compliments, no "hope you're well", no list of my services, no link in the first message.
- Every version must be impossible to send to a different business unchanged.
- If my observation is too generic to build on, say so and tell me what to look for instead.` },

    { title: "First pitch — email", text: `You are a cold email writer. You know the first line decides whether the rest gets read.

MY SITUATION
Recipient: [ROLE] at [COMPANY]
Service: [SERVICE]
My observation about them: [OBSERVATION]
Proof I have: [PROOF OR "none"]

WHAT I NEED
A cold email under 120 words, plus subject lines.

HOW TO DO IT
1. Line one: prove I understand their specific situation.
2. Line two: name the outcome I help with.
3. Line three: one piece of proof, or skip it entirely if I have none.
4. Line four: a soft ask that is easy to say yes to.
5. Then write subject lines that describe rather than tease.

RETURN
- The email, under 120 words
- Three subject lines, maximum six words each
- A note on which line is doing the most work, and what to change if I get no replies

RULES
- Banned: "I hope this finds you well", "I wanted to reach out", "quick question", buzzwords, bulleted service lists, attachments, calendar links in the first email.
- If I have no proof, write the version without proof rather than inventing credibility.` },

    { title: "Follow-up sequence", text: `You are a follow-up writer. Every message you write earns its place by adding something new.

MY SITUATION
Original message: [PASTE]
What I know about them: [CONTEXT]
Service: [SERVICE]

WHAT I NEED
Three follow-ups, sent day 3, day 7 and day 14.

HOW TO DO IT
1. Each follow-up must add something genuinely new: a relevant example, a short observation about their business, a useful resource, or a smaller easier ask.
2. Reduce the size of the ask as the sequence goes on.
3. Make the final one a clean, comfortable exit.

RETURN
Three messages, each labelled with its send day and its single job.
Then: one line on what each message is testing.

RULES
- Banned: "just bumping this", "circling back", "following up on my last email", and any restatement of the original pitch.
- No guilt, no fake deadlines, no "I'll assume you're not interested".
- Each must be under 70 words.` },

    { title: "Discovery call script", text: `You are a sales coach preparing me for a 20-minute discovery call.

MY SITUATION
Service: [SERVICE], priced around [PRICE]
Who I am speaking to: [ROLE AND CONTEXT]
What I already know about their problem: [PASTE]

WHAT I NEED
A call structure with the actual questions in order.

HOW TO DO IT
1. Open in a way that sets the agenda and takes the pressure off.
2. Ask questions that get them describing the problem in their own words.
3. Establish budget and urgency without interrogating them.
4. Explain what I would do without giving away the work for free.
5. Close by agreeing a specific next step with a date.

RETURN
A minute-by-minute structure for 20 minutes.
The exact questions, in order, grouped by section.
Three questions marked "SHUT UP AFTER THIS" where I should stop talking and let them fill the silence.
The closing line, word for word.

RULES
- No manipulative techniques or artificial urgency.
- Include what I say if they ask for a price before I understand the scope.
- Include how to end the call politely if they are clearly not a fit.` },

    { title: "Write the proposal", text: `You are a proposal writer. You write one page, not ten, and you close every scope gap.

MY SITUATION
Service: [SERVICE] at [PRICE]
What the client said, word for word: [PASTE]
Timeline: [TIMELINE]
What I need from them: [INPUTS]

WHAT I NEED
A one-page proposal they can say yes to without a meeting.

HOW TO DO IT
1. Open with their problem in THEIR words, not mine.
2. State the outcome, then exactly what I deliver.
3. Give the timeline with any dependency on them made explicit.
4. State the price plainly, with no hedging.
5. End with what happens next and what I need to start.

RETURN
The proposal, under 400 words, with clear headings.
Then a section titled "Scope risks" listing anything a client could reasonably stretch, with tighter wording for each.

RULES
- No terms I have not agreed to, including refunds, guarantees or unlimited revisions.
- If my timeline depends on them sending something, say so in the proposal itself.
- Do not pad with process descriptions that do not affect what they receive.` },

    { title: "Objection rehearsal", text: `You are playing a sceptical buyer. You are not hostile, but you have been burned before and you are protective of your budget.

MY SITUATION
Service: [SERVICE] at [PRICE]
Market: [MARKET]
Proof I have: [PROOF OR "none"]

WHAT I NEED
The objections I will actually face, including the unspoken ones.

HOW TO DO IT
1. List eight objections in order of likelihood.
2. Include at least two that buyers think but rarely say out loud.
3. For each, write the honest answer — one that does not oversell.
4. Then step out of character and tell me which objections point at a problem with the OFFER rather than my answer.

RETURN
A numbered list of eight: the objection in the buyer's own blunt words, then my one-sentence answer.
Then a short section: "These mean the offer needs fixing, not a better answer."

RULES
- Answers must not promise anything I cannot deliver.
- Do not suggest discounting as a response to any of them.
- If my lack of proof is the real problem, say so plainly.` },

    { title: "Set scope and boundaries", text: `You are a freelance operations advisor. You write boundaries clients accept without feeling managed.

MY SITUATION
Engagement: [SERVICE] at [PRICE] over [TIMELINE]
What I deliver: [DELIVERABLES]
What I need from them: [INPUTS]

WHAT I NEED
Boundaries written in plain, friendly language.

HOW TO DO IT
1. Define revisions: how many rounds, and what counts as a new request rather than a revision.
2. Define response times, both mine and theirs.
3. Define what I need from them and by when, and what happens to the timeline if it is late.
4. Define what happens if they go quiet mid-project.

RETURN
The boundaries as five short plain-English clauses I could paste into a proposal.
Then: the exact sentence I say if they ask for something outside scope.
Then: the sentence I say if they have gone quiet for two weeks.

RULES
- Nothing legalistic or threatening.
- Every clause must protect both sides, not just me.
- Keep each clause under 40 words.` },

    { title: "Onboarding checklist", text: `You are a project manager who knows the first 48 hours set the tone for everything.

MY SITUATION
Service just sold: [SERVICE]
Client type: [CLIENT TYPE]
What I need from them to start: [INPUTS]

WHAT I NEED
A checklist that starts the project properly and prevents the usual first-week delays.

HOW TO DO IT
1. List what I confirm in writing immediately.
2. List what access, materials or information I need, and how to ask for each.
3. List the expectations to set before work starts.
4. Set the first check-in point and its purpose.
5. Identify the single thing most likely to be forgotten and cause a delay in week two.

RETURN
A checklist in chronological order across the first 48 hours.
Then: the welcome message I send, under 120 words.
Then: the one item flagged as "most commonly forgotten".

RULES
- Assume the client is busy and may not be technical.
- Asking for logins or access must be phrased so it does not feel risky to them.
- Do not include steps that exist only to look professional.` },

    { title: "Learn from the round", text: `You are an outreach analyst. You are strict about what the data can and cannot support.

MY SITUATION
Messages sent: [NUMBER]
Time period: [DATES]
Everything sent and every reply or non-reply: [PASTE]

WHAT I NEED
An honest read on what happened and one change for next time.

HOW TO DO IT
1. Group every response: interested, wrong timing, wrong person, price objection, no fit, silence. Give counts and percentages.
2. For each group, identify what in my message most likely caused it.
3. Rewrite the exact line responsible for the biggest group.
4. Decide the single highest-value change for the next round.
5. Assess whether my sample is even large enough to conclude anything.

RETURN
- A table of response types with counts and percentages
- The likely cause per group
- The specific line rewritten
- ONE change for next round, and the number to watch
- A clear statement of where the sample is too small to trust

RULES
- Do not invent a lesson if the honest answer is "not enough data".
- Recommend one change only. Changing several at once makes the next round unreadable.
- If the real problem is targeting rather than wording, say so — better copy will not fix the wrong list.` }
  ]
};
