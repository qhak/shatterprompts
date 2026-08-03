/* ============================================================================
   FREELANCING PACK — 25 prompts
   Edit copy here. Run `node build.mjs`. Prompt count on the site is derived
   from prompts.length, so adding or removing one updates every page.
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
    description: "25 practical AI prompts to choose a freelance service, package the offer, set a price, build proof and win a first client. Free."
  },

  previews: [
    {
      title: "Skill audit",
      text: `Act as a freelance business advisor who is sceptical by default.

Interview me to find what I can actually sell. Ask me these one at a time and wait for each answer: what I have been paid for before, what I have built or made without being paid, what people ask my help with, what software or tools I know well, and what I could do competently today with no further learning.

After my answers, produce a Skill Inventory table with four columns: skill, evidence I gave you, market demand (high/medium/low), and how quickly it could be sold.

Mark clearly which skills I claimed but gave no evidence for. Do not invent evidence, and do not be encouraging about a skill I have not demonstrated.`
    }
  ],

  prompts: [
    { title: "Skill audit", text: `Act as a freelance business advisor who is sceptical by default.

Interview me to find what I can actually sell. Ask me these one at a time and wait for each answer: what I have been paid for before, what I have built or made without being paid, what people ask my help with, what software or tools I know well, and what I could do competently today with no further learning.

After my answers, produce a Skill Inventory table with four columns: skill, evidence I gave you, market demand (high/medium/low), and how quickly it could be sold.

Mark clearly which skills I claimed but gave no evidence for. Do not invent evidence, and do not be encouraging about a skill I have not demonstrated.` },

    { title: "Service selection", text: `Using my Skill Inventory below, propose five services I could realistically sell within 30 days.

For each: the service name in plain language, who buys it, the specific problem it solves, exactly what I would deliver, a realistic starting price range, and how long the first delivery would take me.

Then rank all five by shortest path to a first paying client, scoring each 1-5 on: proof I already have, how urgently buyers want it, and how fast I can deliver.

Be honest about which ones need proof I do not have yet.

SKILL INVENTORY: [PASTE]` },

    { title: "Narrow the market", text: `I want to sell [SERVICE]. My target market right now is "[CURRENT TARGET]", which is too broad to act on.

Give me eight narrower markets inside it. For each: exactly who they are, why they need this more urgently than average, where they already gather online, what they currently spend money on, and one observable signal that tells me a specific business needs this right now.

Then pick the two easiest to reach with no audience, no budget and no existing network, and explain what makes them reachable.` },

    { title: "Understand the buyer", text: `My service is [SERVICE] for [MARKET].

Write a one-page profile of the person who actually signs off the payment. Cover: their role, what they are measured on, what this problem costs them in time or money, what they have probably already tried, why those attempts failed, and what would make them nervous about hiring a freelancer.

Separate what you are confident about from what you are inferring, and list the three things I should verify by talking to a real person before I trust this.` },

    { title: "Offer in one paragraph", text: `Turn this service into one paragraph a buyer could understand in ten seconds.

SERVICE: [SERVICE]
MARKET: [MARKET]

It must cover: who it is for, the outcome they get, what is actually delivered, the timeline, and what is explicitly not included.

Then rewrite it twice — one version short enough for a DM, one longer for a proposal.

No adjective that cannot be evidenced. If a claim needs proof I have not given you, mark it [NEEDS PROOF] rather than writing something vague.` },

    { title: "Build the offer tiers", text: `Take my offer below and build three versions: a small entry option, a standard option, and a higher-scope option.

For each: what changes in the outcome (not just the feature list), what I deliver, the timeline, and who it suits.

Rules: each tier must change the result the buyer gets, not just add deliverables. The entry tier must still be genuinely useful on its own, not a crippled teaser. Tell me which tier most first-time buyers will pick and why.

OFFER: [PASTE]` },

    { title: "Price with a reason", text: `I am selling [SERVICE] to [MARKET] and considering charging [PRICE].

Work through this with me: what the buyer's alternative costs them (doing nothing, doing it in-house, hiring an agency), what result would make this price obviously worth paying, and what would have to be true about my delivery for the price to be fair.

Then give me three price points with what genuinely changes between them, and state which one I should open with given I have no testimonials yet.

Show your reasoning. Do not just pick round numbers.` },

    { title: "Defend the price", text: `Someone has told me my price of [PRICE] for [SERVICE] is too high.

First, ask me three questions to work out whether the objection is really about price, about trust, about timing, or about the wrong buyer.

Then based on my answers, tell me which it is and give me a response under 60 words that neither discounts nor argues.

Also tell me plainly when I should walk away instead of defending the price.` },

    { title: "Proof before clients", text: `I have no client work to show for [SERVICE].

Give me five ways to create credible proof in the next seven days without a paying client — for example a public teardown, a rebuilt example, a documented process, a small free pilot, or a measured personal project.

For each: exactly what I would produce, roughly how long it takes, what a sceptical buyer would conclude from it, and its weakness.

Rank them by how convincing they are to someone who has never heard of me.` },

    { title: "Plan the portfolio piece", text: `I am going to build one portfolio piece for [SERVICE] aimed at [MARKET].

Plan it: what problem it demonstrates, what I will produce, what "before and after" I can show, what I can measure, and how long it should take.

Then write the outline of how I will present it — the situation, what I did, the reasoning behind each decision, and the result.

Keep the scope small enough to finish in [HOURS] hours. Flag anything in the plan likely to expand beyond that.` },

    { title: "Write the case study", text: `Turn the work below into a short case study.

WORK: [PASTE WHAT I DID, FOR WHOM, AND WHAT HAPPENED]

Structure: the situation before, the specific problem, what I did and why, what changed, and over what period.

Use only the facts and numbers I gave you. Where a number would strengthen it and I have not provided one, write [ASK CLIENT FOR: ...] instead of estimating.

Then give me a two-sentence version for outreach and a one-line version for my profile.` },

    { title: "Positioning statement", text: `From the inputs below, write my positioning in one sentence: who I help, the result I help them get, and the method or angle that makes my approach different.

INPUTS: [SERVICE, MARKET, MY BACKGROUND, ANYTHING THAT MAKES MY APPROACH UNUSUAL]

Then give three alternative versions — one blunt, one highly specific, one more ambitious — and tell me which is most defensible given the evidence I actually have. Reject any version that would sound identical coming from a competitor.` },

    { title: "Rewrite my profile", text: `Rewrite my profile bio for [PLATFORM] using this positioning: [PASTE POSITIONING].

Requirements: lead with who I help and the result, not my job title. Mention the service explicitly. Include one piece of concrete proof. End with a clear next step.

Give me a version under 150 characters and a longer version under 60 words.

No "passionate about", no "helping brands tell their story", no words I would not say out loud.` },

    { title: "Define the ideal first client", text: `My service is [SERVICE] for [MARKET].

Describe the ideal first client in detail: business size, stage, budget reality, what they are probably already trying, and the trigger event that makes this urgent now.

Then describe the client I should refuse — the one who will drain time, haggle, or never be satisfied — and list the warning signs visible before I say yes.` },

    { title: "Find prospects", text: `Based on my ideal client profile below, list ten observable signals that a specific business is in that situation right now.

For each signal: where it is visible from the outside, what it tells me, and how strongly it predicts they would actually pay.

Then give me the exact searches, filters or places I would use to find businesses showing each signal.

PROFILE: [PASTE]` },

    { title: "Qualify before pitching", text: `Here is a prospect I am considering approaching: [PASTE WHAT I KNOW].

Score them 1-5 on: do they clearly have the problem, can they afford the price, can they decide without three other people, is there a reason to act now, and can I actually deliver for them.

Give a total and a recommendation: pitch, research more, or skip.

If you are guessing on any score, say so and tell me what to check.` },

    { title: "First pitch — DM", text: `Write a first DM to [PROSPECT TYPE] offering [SERVICE], based on this specific observation about them: [OBSERVATION].

Rules: under 60 words, works on a phone with no scrolling, opens with the observation rather than an introduction, names one outcome, ends with a low-friction question. No compliments, no "hope you're well", no list of my skills, no link in the first message.

Give three versions with different angles, and mark exactly which words I must personalise before sending.` },

    { title: "First pitch — email", text: `Write a cold email to [ROLE] at [COMPANY] offering [SERVICE]. Under 120 words.

Structure: one line proving I understand their specific situation, one line naming the outcome I help with, one line of proof, one soft ask.

Ban: "I hope this finds you well", "I wanted to reach out", buzzwords, a bulleted service list, and any attachment.

MY OBSERVATION: [OBSERVATION]
MY PROOF: [PROOF]

Then write three subject lines under six words each.` },

    { title: "Follow-up sequence", text: `Write a three-step follow-up for the message below, sent day 3, day 7 and day 14.

Each must add something new — a relevant example, a short observation about their business, or a smaller easier ask. None may say "just bumping this", "circling back" or repeat the original pitch. The last one should make it easy to say no without awkwardness.

ORIGINAL: [PASTE]` },

    { title: "Discovery call script", text: `Write me a 20-minute discovery call structure for [SERVICE].

Include: how I open, the questions that reveal whether they have budget and urgency, how I get them describing the problem in their own words, how I explain what I would do without giving the work away free, and how I close by agreeing a next step.

Give the actual questions in order, and flag the three where I should shut up and let them talk.` },

    { title: "Write the proposal", text: `Write a one-page proposal for [SERVICE] at [PRICE] for a client who told me: [PASTE WHAT THEY SAID].

Structure: their problem in their own words, the outcome, exactly what I deliver, the timeline, the price, what I need from them to start, and what happens next.

No terms I cannot honour. Then flag anything in it that could cause scope creep and suggest tighter wording.` },

    { title: "Objection rehearsal", text: `Act as a sceptical buyer for [SERVICE] at [PRICE].

List the eight objections you would genuinely raise before paying, ordered by likelihood, including the ones people think but do not say out loud.

For each, write a one-sentence honest answer that does not oversell.

Then tell me which of these objections mean the offer itself needs fixing rather than a better answer.` },

    { title: "Set scope and boundaries", text: `For this engagement — [SERVICE] at [PRICE] over [TIMELINE] — write the boundaries in plain language a client would accept without feeling managed.

Cover: how many rounds of revisions, what counts as a new request, response times both ways, what I need from them and by when, and what happens if they go quiet.

Then write the single sentence I would say if they ask for something outside scope.` },

    { title: "Onboarding checklist", text: `A client just said yes to [SERVICE]. Write the checklist that gets the project started properly in the first 48 hours.

Include: what I confirm in writing, what access or materials I need, what I set expectations about, the first check-in point, and the one thing most likely to be forgotten and cause a delay later.

Then write the short welcome message I send with it.` },

    { title: "Learn from the round", text: `Here are the messages I sent and every reply and non-reply: [PASTE].

Group responses into: interested, wrong timing, wrong person, price objection, no fit, and silence.

For each group, tell me what my message most likely caused and rewrite the exact line responsible.

Then give me the single change most likely to improve the next round, what number I should watch to know whether it worked, and be clear where I have too little data to conclude anything.` }
  ]
};
