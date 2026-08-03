/* ============================================================================
   SHATTERPROMPTS — CONTENT CONFIGURATION
   ----------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO CHANGE COPY, PACKS OR ROUTES.

   After any edit run:   node build.mjs
   Then deploy the      dist/   folder.

   Route mapping is automatic:
     pack.slug "freelancing"  ->  /freelancing  and  /freelancing/access
   Adding a pack object below creates both pages. Nothing else to wire up.
   ============================================================================ */

export const SITE = {
  name: "SHATTERPROMPTS",
  /* Change this one line if the domain changes. Everything canonical/OG uses it. */
  origin: "https://shatterprompts.com",

  tagline: "AI prompt systems for people building online.",

  /* --------------------------------------------------------------------------
     INTEGRATIONS — all empty means "not connected".
     The site NEVER claims an email was sent or a lead was stored unless the
     matching value here is a real https:// URL. See README.md.
     -------------------------------------------------------------------------- */
  integrations: {
    /* POST endpoint that receives the lead JSON. Empty = not connected.
       Expected response: { ok: true, emailed: true|false }
       "emailed" controls whether the success screen says a copy was sent. */
    leadEndpoint: "https://shatterprompts.nicholasdrew62.workers.dev/subscribe",

    /* Optional analytics. Leave empty to use the built-in event queue only. */
    analytics: {
      plausibleDomain: "",   // e.g. "shatterprompts.com" (loads plausible script)
      gaMeasurementId: "",   // e.g. "G-XXXXXXX"
      beaconEndpoint: ""     // optional POST endpoint receiving every event
    }
  },

  /* Contact + legal. Leave a value empty and the link is simply not rendered. */
  supportEmail: "",
  instagram: "",

  /* Legal pages are generated from this text. Replace with your own wording. */
  legal: {
    /* Set to a real trading name/address before you collect email at scale. */
    entityName: "SHATTERPROMPTS",
    lastUpdated: "2 August 2026"
  }
};

/* ============================================================================
   PACKS
   ----------------------------------------------------------------------------
   tier: "core"      -> shown on the homepage list + /packs (the IG funnel)
   tier: "secondary" -> route exists and is listed on /packs only

   promptCount is derived from prompts.length automatically — never hand-written,
   so the page can never promise more prompts than the pack actually contains.

   upgrade.checkoutUrl: leave "" until Stripe is live. While empty the page shows
   "coming soon", never a price and never a checkout button.
   ============================================================================ */

export const PACKS = [
  /* ==========================================================================
     1. FREELANCING
     ========================================================================== */
  {
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
      "Send a first pitch that gets read"
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
      price: null
    },
    seo: {
      title: "Free Freelancing AI Prompt Pack — Find a service people will pay for",
      description: "Ten practical AI prompts to choose a freelance service, package the offer, set a price, build proof and write your first client pitch. Free."
    },
    previews: [
      {
        title: "Choose the service",
        text: `My skills: [SKILLS]. My work or study background: [BACKGROUND]. The time I can commit each week: [HOURS].

Propose five services I could realistically sell within 30 days. For each one give: who buys it, the specific problem it solves, what the buyer gets, a realistic starting price range, and how quickly I could deliver the first one.

Then rank all five by shortest path to a first paying client, and explain the ranking. Be honest about which ones need proof I do not have yet.`
      }
    ],
    prompts: [
      { title: "Service selection", text: `My skills: [SKILLS]. My work or study background: [BACKGROUND]. The time I can commit each week: [HOURS].

Propose five services I could realistically sell within 30 days. For each one give: who buys it, the specific problem it solves, what the buyer gets, a realistic starting price range, and how quickly I could deliver the first one.

Then rank all five by shortest path to a first paying client, and explain the ranking. Be honest about which ones need proof I do not have yet.` },

      { title: "Narrow the market", text: `I want to sell [SERVICE]. Right now my target market is "[CURRENT TARGET]", which is too broad.

Give me eight narrower markets inside it. For each: who exactly they are, why they need this service more urgently than average, where they already gather online, and one signal I could look for that tells me a specific business needs it right now.

Then tell me which two are easiest to reach with no audience and no budget.` },

      { title: "Offer in one paragraph", text: `Turn this service into a single clear paragraph a buyer could understand in ten seconds.

SERVICE: [SERVICE]
MARKET: [MARKET]

The paragraph must cover: who it is for, the outcome they get, what is actually delivered, the timeline, and what is explicitly not included.

Then rewrite it twice — one version short enough for a DM, one longer version for a proposal. No adjectives that cannot be evidenced.` },

      { title: "Price with a reason", text: `I am selling [SERVICE] to [MARKET] and I am considering charging [PRICE].

Work through this with me: what the buyer's alternative costs them, what result makes this price obviously worth paying, and what would have to be true about my delivery for the price to be fair.

Then give me three price points — entry, standard, and a higher-scope version — and state exactly what changes between them. Do not just add features; change the outcome.` },

      { title: "Proof before clients", text: `I have no client work to show for [SERVICE].

Give me five ways to create credible proof in the next seven days without a paying client — for example, working on a public example, auditing a real business, or documenting a process.

For each: what exactly I would produce, roughly how long it takes, and how a buyer would read it. Rank them by how convincing they are to a sceptical buyer.` },

      { title: "Find the first prospects", text: `My service is [SERVICE] for [MARKET].

Describe the ideal first client in detail: business size, situation, what they are probably already trying, and the trigger that makes this urgent.

Then list ten specific, observable signals I could use to find businesses in that situation right now, and tell me where each signal is visible.` },

      { title: "First pitch", text: `Write a first message to [PROSPECT TYPE] offering [SERVICE].

Rules: under 120 words, no flattery, no "I hope this finds you well", no listing my skills. Open with one specific observation about their situation, name one outcome I can help with, and end with a low-friction ask.

Give me three versions with different opening angles, and mark which parts I must personalise before sending.` },

      { title: "Proposal structure", text: `Someone replied and wants details for [SERVICE] at [PRICE].

Write a short proposal with: the problem in their words, the outcome, what I deliver, the timeline, the price, and what I need from them to start.

Keep it under one page. No terms I cannot honour. Flag anything in it that would create scope creep, and suggest a clearer boundary.` },

      { title: "Objection rehearsal", text: `Act as a sceptical buyer for [SERVICE] at [PRICE].

List the eight objections you would genuinely raise before paying, ordered by how likely they are. Include the ones people think but do not say.

For each, write a one-sentence honest answer that does not oversell, and tell me which objections mean the offer itself needs fixing rather than a better answer.` },

      { title: "Learn from replies", text: `Here are the replies and non-replies from my first outreach round: [PASTE].

Group them into: interested, wrong timing, wrong person, price problem, and no fit.

For each group, tell me what my message most likely caused, and rewrite the specific line responsible. Then tell me the single change most likely to improve the next round, and how I will know if it worked.` }
    ]
  },

  /* ==========================================================================
     2. COLD OUTREACH
     ========================================================================== */
  {
    slug: "outreach",
    tier: "core",
    index: "02",
    keyword: "OUTREACH",
    name: "Cold Outreach Pack",
    navLabel: "Cold Outreach",
    rowOutcome: "Write outreach that sounds like a person, not a template.",
    audience: "Anyone sending cold email or DMs and getting silence.",
    outcome: "Researched, specific outreach and a follow-up sequence you can actually send.",

    headline: "Stop sending outreach people instantly ignore.",
    support: [
      "Prompts to research a prospect, spot a real problem, and write personal outreach without sounding automated.",
      "For cold email and DMs where the first line decides everything."
    ],
    inside: [
      "Research a prospect in a few minutes",
      "Find a problem worth mentioning",
      "Write a first line that proves you looked",
      "Follow up without saying “just bumping this”",
      "Read replies and fix the real cause"
    ],
    benefits: [
      "Personalise without spending an hour per prospect",
      "Lead with their situation, not your service",
      "Follow up in a way that adds something",
      "Diagnose silence instead of sending more volume"
    ],
    sequence: {
      lead: "Most outreach advice gives you templates. This gives you the order that makes a template unnecessary.",
      steps: ["Define who is worth contacting", "Research one real problem", "Write the specific first line", "Sequence the follow-ups", "Read the replies and adjust"]
    },
    upgrade: {
      name: "The Outreach System",
      blurb: "Deeper workflows for building a prospect list, research at volume, multi-channel sequencing, and reply handling.",
      checkoutUrl: "",
      price: null
    },
    seo: {
      title: "Free Cold Outreach AI Prompt Pack — Write outreach that earns a reply",
      description: "Ten practical AI prompts to research prospects, find a real problem, write personal cold emails and DMs, and follow up properly. Free."
    },
    previews: [
      {
        title: "The research pass",
        text: `My prospect is [NAME] at [COMPANY], role [ROLE]. Here is what I can see about them: [PASTE ANYTHING — website copy, recent posts, job ads, reviews].

List three specific observations I could reference in a first message. For each, rate 1–5 how much it proves I actually looked, rather than something I could say to any business.

Discard anything that scores below 4 and tell me what I would need to look at to find something better.`
      }
    ],
    prompts: [
      { title: "Who is worth contacting", text: `I sell [SERVICE] to [ROUGH MARKET].

Define the prospect worth my time: their situation, size, what they are probably already doing about this problem, and the trigger that makes it urgent now.

Then list eight observable signals that a specific business is in that situation, and where each signal is visible from the outside. Rank by how strongly each predicts a reply.` },

      { title: "Research pass", text: `My prospect is [NAME] at [COMPANY], role [ROLE]. Here is what I can see about them: [PASTE ANYTHING — website copy, recent posts, job ads, reviews].

List three specific observations I could reference in a first message. For each, rate 1–5 how much it proves I actually looked, rather than something I could say to any business.

Discard anything that scores below 4 and tell me what I would need to look at to find something better.` },

      { title: "Find the real problem", text: `Based on this information about [COMPANY]: [PASTE].

Infer the three problems most likely costing them money or time right now, and rank them by how aware they probably already are of each.

For each, tell me the evidence I am basing it on and how confident I should be. Separate what you actually observed from what you are assuming.` },

      { title: "The first line", text: `Write ten opening lines for a cold email to [NAME] at [COMPANY], based on this observation: [OBSERVATION].

Each must be under 20 words, must not compliment them, must not mention me, and must be impossible to send to a different company unchanged.

Then mark the two strongest and explain what makes them specific.` },

      { title: "The cold email", text: `Write a cold email to [ROLE] at [COMPANY]. Under 120 words.

Structure: one line proving I understand their specific situation, one line naming an outcome I can help with, one soft ask that is easy to say yes to.

Rules: no "I hope this finds you well", no buzzwords, no bullet list of services, no attachment, no calendar link in the first message.

MY OFFER: [OFFER]. MY OBSERVATION: [OBSERVATION].` },

      { title: "Subject lines", text: `Write twelve subject lines for this email: [PASTE EMAIL].

Four plain and specific, four referencing the observation, four phrased as a short question. Maximum six words each. Nothing that reads as marketing, nothing in title case, no "quick question" and no false urgency.

Then predict which three get opened by a busy owner and say why.` },

      { title: "DM version", text: `Rewrite this cold email as an Instagram or LinkedIn DM: [PASTE EMAIL].

It must work on a phone screen with no scrolling, sound like a person typing, and not open with "Hey! Hope you're doing well".

Give me a two-message version: a short opener that earns a reply, and the follow-up I send only once they respond.` },

      { title: "Follow-up sequence", text: `Write a three-step follow-up sequence for the message below, sent on day 3, day 7 and day 14.

Each follow-up must add something new — a relevant example, a short observation, or a smaller ask. None may say "just bumping this", "circling back", or repeat the original pitch.

The final one should make it easy to say no without awkwardness. ORIGINAL: [PASTE].` },

      { title: "Objection replies", text: `Here are the replies I get most: [PASTE OBJECTIONS — e.g. "too expensive", "we do this in-house", "send more info"].

For each, write a reply under 60 words that takes the objection seriously, asks one clarifying question, and does not argue.

Then tell me which of these objections is really a signal that I targeted the wrong person.` },

      { title: "Reply analysis", text: `Here is my sent message and every reply and non-reply: [PASTE].

Group the responses into: interested, not now, wrong person, price objection, no fit, and silence.

For each group, tell me what my message most likely caused and rewrite the exact line responsible. Then give me one change for the next batch and the number I should watch to know whether it worked.` }
    ]
  },

  /* ==========================================================================
     3. CONTENT CREATION
     ========================================================================== */
  {
    slug: "content",
    tier: "core",
    index: "03",
    keyword: "CONTENT",
    name: "Content Pack",
    navLabel: "Content Creation",
    rowOutcome: "Build posts people actually save and act on.",
    audience: "People posting to grow an audience for a service or product.",
    outcome: "Content pillars, hooks, and a repeatable posting system tied to an offer.",

    headline: "Make content that earns attention and creates demand.",
    support: [
      "Prompts for useful hooks, content angles, captions, calls to action, and a simple content system.",
      "For posting that leads somewhere, not posting to stay busy."
    ],
    inside: [
      "Turn what you know into three content pillars",
      "Write hooks from ten different angles",
      "Script short-form that holds attention",
      "Write captions that end in a real action",
      "Turn one idea into a week of posts"
    ],
    benefits: [
      "Stop starting from a blank page every day",
      "Post about things that connect to your offer",
      "Write hooks that promise something you deliver",
      "Review performance without guessing"
    ],
    sequence: {
      lead: "Most content prompts write you a caption. This builds the system that decides what the caption is for.",
      steps: ["Define who and what for", "Set three pillars", "Write the hook first", "Publish and repurpose", "Review what actually worked"]
    },
    upgrade: {
      name: "The Content System",
      blurb: "Deeper workflows for positioning, a 30-day calendar, repurposing across formats, and a monthly performance review.",
      checkoutUrl: "",
      price: null
    },
    seo: {
      title: "Free Content Creation AI Prompt Pack — Content that creates demand",
      description: "Ten practical AI prompts for content pillars, hooks, short-form scripts, captions, calls to action and a simple posting system. Free."
    },
    previews: [
      {
        title: "Ten hooks, ten angles",
        text: `My audience is [AUDIENCE] and they are trying to [GOAL]. My topic is [TOPIC].

Write ten short-form hooks for this single idea, each from a different angle: contrarian, common mistake, specific result, direct question, short list, personal story, myth, comparison, warning, and behind-the-scenes.

Each under 12 words. No clickbait I cannot pay off in the content itself. Then mark the three that would still make sense to someone who has never heard of me.`
      }
    ],
    prompts: [
      { title: "Audience and problem map", text: `I want to reach [AUDIENCE] and I help them [OUTCOME].

Map their situation: what they are trying to do, what they have already tried, what they believe is the obstacle, and what the real obstacle usually is.

Then list the ten questions they would actually type into a search bar or ask a friend. Use their words, not industry language.` },

      { title: "Three content pillars", text: `Based on this audience map: [PASTE].

Propose three content pillars. For each: what it proves about me, the audience problem it answers, and five recurring angles I can post about without repeating myself.

Flag any pillar that overlaps another and merge them. Then tell me which pillar should be most frequent and why.` },

      { title: "Ten hooks, ten angles", text: `My audience is [AUDIENCE] and they are trying to [GOAL]. My topic is [TOPIC].

Write ten short-form hooks for this single idea, each from a different angle: contrarian, common mistake, specific result, direct question, short list, personal story, myth, comparison, warning, and behind-the-scenes.

Each under 12 words. No clickbait I cannot pay off in the content itself. Then mark the three that would still make sense to someone who has never heard of me.` },

      { title: "Short-form script", text: `Turn this idea into a 40-second script: [IDEA].

Structure: hook in one line, then three beats each with one concrete example, then a closing line that invites a specific reply.

Write at a Grade 6 reading level, mark on-screen text in [brackets], and keep the spoken part under 110 words. Tell me where the visual needs to change to hold attention.` },

      { title: "Written post", text: `Write a post for [PLATFORM] about [TOPIC] for [AUDIENCE].

Open with a line that states a specific situation, not a general claim. Make one point only. Use a concrete example with real detail. End with a takeaway they can use today.

No emoji headers, no "let that sink in", no engagement bait. Under 200 words.` },

      { title: "Caption and call to action", text: `Write three caption variations for this post: [PASTE].

Each should end with a different type of action: a reply prompt, a save prompt, and a comment keyword for a DM.

For the comment keyword version, use the keyword [KEYWORD]. Make the instruction unmistakable but not desperate, and make the value of the thing being sent obvious in one line.` },

      { title: "One idea, one week", text: `Take this single idea: [IDEA].

Turn it into seven pieces of content across the week — different formats and different angles, not the same post reworded. For each: format, angle, working title, the hook, and the one action I want.

Mark which two are for people who have never heard of me, and which one is closest to my offer.` },

      { title: "Comment-to-DM funnel", text: `I want people to comment [KEYWORD] to receive [THING].

Write the post that earns the comment: the hook, the value in the post itself, and the instruction. The post must be useful even to someone who never comments.

Then write the DM I send when they do — short, no pitch, delivers the thing immediately, and gives one reason to reply.` },

      { title: "Repurpose", text: `Here is a piece that performed well: [PASTE].

Give me five ways to reuse it: a different format, a different angle on the same point, a deeper version, a shorter version, and a version aimed at a colder audience.

For each, tell me what to change and what to keep identical, and how long after the original I should post it.` },

      { title: "Performance review", text: `Here is my last 30 days of content and rough performance: [PASTE].

Identify what actually worked and separate it from what got attention but led nowhere. Look for patterns in hook type, topic, format and length.

Then tell me the two things to do more of, the one thing to stop, and what I should test next. Be specific about what evidence you are using and where the data is too thin to conclude anything.` }
    ]
  },

  /* ==========================================================================
     4. LOCAL BUSINESS
     ========================================================================== */
  {
    slug: "local-business",
    tier: "core",
    index: "04",
    keyword: "LOCAL",
    name: "Local Business Pack",
    navLabel: "Local Business",
    rowOutcome: "Turn local-business problems into sellable services.",
    audience: "People selling services to local businesses in their area.",
    outcome: "A findable local problem, a service that fixes it, and a first message to the owner.",

    headline: "Turn local business problems into a sellable service.",
    support: [
      "Find real opportunities, create a relevant offer, and build a strong first outreach message.",
      "For selling to businesses you can visit, phone, or find on a map."
    ],
    inside: [
      "Pick a local business type worth targeting",
      "Audit what is actually costing them customers",
      "Turn one problem into a fixed-scope service",
      "Price for a local owner, not a tech company",
      "Write the first message an owner will read"
    ],
    benefits: [
      "Find problems you can see from the outside",
      "Sell a fix, not a package of services",
      "Talk in outcomes owners already care about",
      "Turn one client into referrals nearby"
    ],
    sequence: {
      lead: "Most prompt packs give you random commands. This gives you an order of operations.",
      steps: ["Pick a business type", "Audit for a visible problem", "Package the fix", "Contact the owner", "Turn one into referrals"]
    },
    upgrade: {
      name: "The Local Business System",
      blurb: "Deeper workflows for territory selection, repeatable audits, pricing, in-person and phone approaches, and retainers.",
      checkoutUrl: "",
      price: null
    },
    seo: {
      title: "Free Local Business AI Prompt Pack — Turn local problems into a service",
      description: "Ten practical AI prompts to find local business problems, package a service, price it, and write a first message to the owner. Free."
    },
    previews: [
      {
        title: "The outside audit",
        text: `Here is everything I can see about a local [BUSINESS TYPE]: [PASTE — website text, Google listing details, recent reviews, social profiles, opening hours].

Identify the five things most likely costing them customers, ordered by how much money each probably affects. For each: the evidence I am basing it on, how a customer experiences it, and roughly how long it would take to fix.

Separate clearly what you actually observed from what you are assuming. Do not invent details that are not in what I pasted.`
      }
    ],
    prompts: [
      { title: "Pick the business type", text: `I live near [AREA] and I can offer [SKILL OR SERVICE].

List eight types of local business that plausibly need this, and for each: their typical margin, whether one customer is worth enough to justify spending on a fix, how easy the owner is to reach directly, and how much competition already sells to them.

Rank them for someone starting with no clients and no case studies. Be honest about which ones are hard.` },

      { title: "The outside audit", text: `Here is everything I can see about a local [BUSINESS TYPE]: [PASTE — website text, Google listing details, recent reviews, social profiles, opening hours].

Identify the five things most likely costing them customers, ordered by how much money each probably affects. For each: the evidence I am basing it on, how a customer experiences it, and roughly how long it would take to fix.

Separate clearly what you actually observed from what you are assuming. Do not invent details that are not in what I pasted.` },

      { title: "Read the reviews", text: `Here are recent reviews for a local [BUSINESS TYPE]: [PASTE].

Summarise what customers consistently praise and consistently complain about. Separate problems the owner controls from ones they do not.

Then identify the two complaints that are actually solvable with better systems or communication rather than more staff, and explain how I would describe each to the owner without insulting their business.` },

      { title: "Package the fix", text: `A local [BUSINESS TYPE] has this problem: [PROBLEM].

Turn the fix into a service with fixed scope: what I deliver, what the owner has to provide, how long it takes, and how we both know it worked.

Keep it to one clear outcome. Then write it in plain language an owner with no technical background would understand in fifteen seconds.` },

      { title: "Price for a local owner", text: `I want to charge for [SERVICE] for a local [BUSINESS TYPE].

Estimate what one additional customer is worth to that business, and work backwards to a price that is obviously worth paying if the fix works.

Give me a one-off price and a monthly version, state what changes between them, and tell me which is easier to say yes to for an owner who has never bought this before.` },

      { title: "First message to the owner", text: `Write a first message to the owner of a local [BUSINESS TYPE] about this specific problem I noticed: [OBSERVATION].

Under 100 words. Open with the observation, not an introduction. Make it clear I looked at their business specifically. Name the outcome, not the technical work. End with a low-pressure ask.

Give me three versions: email, Instagram DM, and something I could say in person in under 30 seconds.` },

      { title: "The walk-in and the phone call", text: `I want to approach a local [BUSINESS TYPE] in person or by phone about [SERVICE].

Write what I actually say in the first 20 seconds, assuming the owner is busy and slightly suspicious. Include how I open, how I name the problem, and how I leave without pressure.

Then give me the three most likely brush-offs and a natural, non-pushy response to each.` },

      { title: "Owner objections", text: `Act as the owner of a local [BUSINESS TYPE] who has been sold to badly before.

List the eight objections you would raise about paying [PRICE] for [SERVICE], in the blunt way an owner actually says them.

For each, write a short honest answer that does not oversell, and tell me which objections mean I should walk away rather than keep selling.` },

      { title: "Proof from one job", text: `I just finished [SERVICE] for a local [BUSINESS TYPE]. Here is what happened: [PASTE RESULTS AND DETAILS].

Write a short case study: the situation before, what I did, what changed, and over what period. Only use the numbers I gave you — if something important is missing, ask me for it rather than estimating.

Then write a two-sentence version I can use in outreach to similar businesses nearby.` },

      { title: "Referrals and the next street", text: `I have one happy client: a local [BUSINESS TYPE] in [AREA].

Write the message asking for a referral without making it awkward, timed for the right moment.

Then list the five nearest business types that share the same customers and would find this result relevant, and write the one line I would open with when contacting them mentioning the work I did nearby.` }
    ]
  },

  /* ==========================================================================
     5. DIGITAL PRODUCTS
     ========================================================================== */
  {
    slug: "digital-products",
    tier: "core",
    index: "05",
    keyword: "PRODUCT",
    name: "Digital Products Pack",
    navLabel: "Digital Products",
    rowOutcome: "Find, validate, and package a useful digital offer.",
    audience: "People who want to sell something that does not trade time for money.",
    outcome: "A validated product idea, a package, and a first sales page.",

    headline: "Build a digital product people actually want.",
    support: [
      "Use AI to identify a painful problem, validate the angle, package the product, and write the first sales page.",
      "For deciding what to build before spending a month building it."
    ],
    inside: [
      "Mine a problem people already pay to solve",
      "Pressure-test the idea before you build",
      "Choose the format that fits the problem",
      "Package and name it clearly",
      "Write the first sales page"
    ],
    benefits: [
      "Start from a problem, not a format",
      "Find the evidence before the build",
      "Scope something you can finish",
      "Explain it in one sentence people repeat"
    ],
    sequence: {
      lead: "Most prompt packs give you random commands. This gives you an order of operations.",
      steps: ["Mine the problem", "Validate the angle", "Package the product", "Write the page", "Launch and learn"]
    },
    upgrade: {
      name: "The Digital Product System",
      blurb: "Deeper workflows for validation, pricing, building the outline, launch sequencing, and post-launch iteration.",
      checkoutUrl: "",
      price: null
    },
    seo: {
      title: "Free Digital Products AI Prompt Pack — Build a product people want",
      description: "Ten practical AI prompts to find a real problem, validate demand, package a digital product and write the first sales page. Free."
    },
    previews: [
      {
        title: "Stress-test before you build",
        text: `Before I build anything, stress-test this product concept: [CONCEPT] for [AUDIENCE].

List the five most likely reasons it will not sell, ordered by probability. For each: what evidence would tell me it is a real risk, and what evidence would tell me it is not.

Then give me three ways to gather that evidence in seven days without building the product. Be sceptical rather than encouraging — assume the idea is flawed and try to find where.`
      }
    ],
    prompts: [
      { title: "Mine the problem", text: `My audience is [AUDIENCE] and I know something about [TOPIC].

List twelve specific, painful problems this audience has — the kind they have already tried to solve and failed. For each: what they currently do instead, roughly what that costs them in time or money, and how urgent it feels.

Rank by how likely someone is to pay to solve it this month. Ignore problems people find interesting but never pay for.` },

      { title: "Stress-test the idea", text: `Before I build anything, stress-test this product concept: [CONCEPT] for [AUDIENCE].

List the five most likely reasons it will not sell, ordered by probability. For each: what evidence would tell me it is a real risk, and what evidence would tell me it is not.

Then give me three ways to gather that evidence in seven days without building the product. Be sceptical rather than encouraging — assume the idea is flawed and try to find where.` },

      { title: "Find the existing demand", text: `I am considering a product about [PROBLEM] for [AUDIENCE].

Tell me where this audience already spends money on this problem, what they buy, and what those existing solutions consistently fail to do.

Then write five questions I could ask ten real people that would tell me whether they would buy — questions that get honest answers, not polite encouragement.` },

      { title: "Choose the format", text: `The problem is [PROBLEM] and the outcome I want to deliver is [OUTCOME].

Compare five formats — template, short course, toolkit, notion system, guided workbook — for this specific problem. For each: how well it fits, how long it takes me to build, how easy it is to explain, and how likely the buyer is to actually finish it.

Recommend one and explain what makes the others worse for this case.` },

      { title: "Scope it so it ships", text: `I want to build [PRODUCT] delivering [OUTCOME].

Define the smallest version that fully delivers that outcome — not a stripped-down version, a complete one with a narrower promise.

List what is in, what is deliberately out, and what I would add only if people ask. Then estimate the build time honestly and tell me which part I will most likely underestimate.` },

      { title: "Name and one-liner", text: `My product: [DESCRIPTION]. Audience: [AUDIENCE]. Outcome: [OUTCOME].

Give me eight names — plain and descriptive, not clever. For each, one line explaining what a stranger would assume it does.

Then write the single sentence I would use when someone asks what it is, in language the buyer would repeat to a friend.` },

      { title: "Price framing", text: `I am pricing [PRODUCT] for [AUDIENCE], considering [PRICE].

What is the buyer comparing this to in their head? What would make the price feel obviously fair, and what would make it feel like too much?

Give me three price points with what genuinely changes between them, and tell me which one to launch with given I have no reviews yet.` },

      { title: "The sales page", text: `Write the first version of a sales page for [PRODUCT].

Sections: headline stating the outcome, one paragraph on who it is for, the problem in the buyer's own words, exactly what they get, how it works, who it is not for, and the price.

Rules: no invented testimonials, no urgency, no guarantees, no claims I have not evidenced. If a section needs proof I have not given you, mark it [NEEDS PROOF] instead of writing something vague.` },

      { title: "Launch content", text: `I am launching [PRODUCT] in [N] days to [AUDIENCE].

Plan the content for those days: what I post each day, the angle, and what each post is meant to do. Most of it should be useful on its own to someone who never buys.

Include the two posts that do the actual selling and where they go in the sequence. No countdowns or fake scarcity.` },

      { title: "Learn from the launch", text: `Here is what happened in my launch: [PASTE — traffic, page views, email signups, sales, and any replies or questions].

Tell me where people dropped off and what the most likely cause was at each step. Distinguish a traffic problem from a page problem from an offer problem.

Then give me the single change most likely to matter, and what number I should watch to know whether it worked. Say clearly where the data is too thin to conclude anything.` }
    ]
  },

  /* ==========================================================================
     SECONDARY PACKS
     Preserved from the previous version of the site. These keep working routes
     and appear on /packs only — they are deliberately kept off the homepage and
     the Instagram funnel.
     ========================================================================== */
  {
    slug: "productivity",
    tier: "secondary",
    index: "06",
    keyword: "",
    name: "Productivity Pack",
    navLabel: "Productivity",
    rowOutcome: "Turn a crowded week into a plan you can execute.",
    audience: "People with more tasks than time.",
    outcome: "A prioritised week with realistic time estimates.",
    headline: "Turn a crowded week into a plan you can execute.",
    support: [
      "Prompts for sorting a task dump, planning deep work, and reviewing what actually got done.",
      "Carried over from the earlier version of this site."
    ],
    inside: ["Sort a full task dump by impact", "Plan realistic deep-work blocks", "Review the gap between planned and finished"],
    benefits: ["Decide what not to do", "Estimate time honestly", "Find the pattern behind the gap"],
    sequence: { lead: "Prompts in a sensible order.", steps: ["Capture everything", "Sort by impact", "Block the week", "Review honestly"] },
    upgrade: { name: "", blurb: "", checkoutUrl: "", price: null },
    seo: {
      title: "Free Productivity AI Prompt Pack — Plan a week you can execute",
      description: "Practical AI prompts for sorting tasks by impact, planning deep work, and reviewing the week honestly. Free."
    },
    previews: [],
    prompts: [
      { title: "Sort the task dump", text: `Here is everything on my plate this week: [DUMP].

Sort it into Do Now (moves my main goal forward), Schedule, Delegate, and Delete. For every Do Now item give a realistic time estimate and the single first physical action.` },
      { title: "Plan the week", text: `I have [N] hours of focused time this week and this goal: [GOAL].

Build a weekly schedule with 90-minute deep-work blocks, what I work on in each, and what I explicitly will not do this week. Flag any block that looks unrealistic.` },
      { title: "Review the gap", text: `Compare what I planned — [PLANNED] — with what I finished: [FINISHED].

Identify the two patterns causing the gap, then propose one change to my routine, one only, and how I will measure it next week.` }
    ]
  },

  {
    slug: "study",
    tier: "secondary",
    index: "07",
    keyword: "",
    name: "Study and Learning Pack",
    navLabel: "Study and Learning",
    rowOutcome: "Break difficult material into a study sequence.",
    audience: "Students and anyone learning something hard.",
    outcome: "A dependency-ordered study plan and a way to test recall.",
    headline: "Break difficult material into a study sequence.",
    support: [
      "Prompts for planning revision, getting a concept explained properly, and testing yourself.",
      "Carried over from the earlier version of this site."
    ],
    inside: ["Order subtopics by dependency", "Get one concept explained three ways", "Run an adaptive self-quiz"],
    benefits: ["Study in the right order", "Find the gap before the exam", "Test recall instead of rereading"],
    sequence: { lead: "Prompts in a sensible order.", steps: ["Break down the topic", "Plan the weeks", "Explain and check", "Test recall"] },
    upgrade: { name: "", blurb: "", checkoutUrl: "", price: null },
    seo: {
      title: "Free Study and Learning AI Prompt Pack — Learn difficult material",
      description: "Practical AI prompts for building a study plan, getting clear explanations, and testing recall. Free."
    },
    previews: [],
    prompts: [
      { title: "Build the plan", text: `I need to learn [TOPIC] for [EXAM OR PURPOSE] by [DATE] and can study [HOURS] per week.

Break the topic into subtopics, order them by dependency, and build a week-by-week plan with review days built in.` },
      { title: "Explain it three ways", text: `Explain [CONCEPT] three times: first in plain language for a beginner, then with a concrete worked example, then in the precise technical wording an examiner would expect.

Finish with the three mistakes students most often make with it.` },
      { title: "Adaptive quiz", text: `Quiz me on [TOPIC]. Ask one question at a time, wait for my answer, then tell me whether I am right, why, and what the ideal answer includes.

Start easy and increase difficulty each time I answer correctly. Ten questions total.` }
    ]
  },

  {
    slug: "job-search",
    tier: "secondary",
    index: "08",
    keyword: "",
    name: "Job Search Pack",
    navLabel: "Job Search",
    rowOutcome: "Build specific applications from real evidence.",
    audience: "People applying for roles and getting no response.",
    outcome: "Stronger CV bullets, a specific cover letter, and interview practice.",
    headline: "Build specific applications from real evidence.",
    support: [
      "Prompts for rewriting CV bullets, writing a cover letter that is not generic, and practising interviews.",
      "Carried over from the earlier version of this site."
    ],
    inside: ["Rewrite CV bullets with evidence", "Write a 250-word cover letter", "Practise scored STAR answers"],
    benefits: ["Stop sending generic applications", "Use your own facts, not invented ones", "Rehearse before the real thing"],
    sequence: { lead: "Prompts in a sensible order.", steps: ["Fix the CV", "Write the letter", "Research the company", "Rehearse"] },
    upgrade: { name: "", blurb: "", checkoutUrl: "", price: null },
    seo: {
      title: "Free Job Search AI Prompt Pack — Build stronger applications",
      description: "Practical AI prompts for rewriting CV bullets, writing specific cover letters, and practising interview answers. Free."
    },
    previews: [],
    prompts: [
      { title: "Rewrite CV bullets", text: `Rewrite the CV bullets below for a [ROLE] application. Each bullet: strong verb, what I did, how I did it, and a measurable result.

If a bullet has no number, ask me for one instead of inventing it. BULLETS: [PASTE]` },
      { title: "Cover letter", text: `Write a cover letter for [ROLE] at [COMPANY], max 250 words, using these three requirements from the ad: [PASTE].

Reference one specific thing about the company. No "I am writing to express my interest". Plain, direct, first person.` },
      { title: "Interview practice", text: `Interview me for [ROLE]. Ask one competency question at a time in STAR format.

After each answer, score it 1–5 on structure, evidence and relevance, then show a stronger version of my own answer using only the facts I gave you.` }
    ]
  },

  {
    slug: "personal-finance",
    tier: "secondary",
    index: "09",
    keyword: "",
    name: "Personal Finance Pack",
    navLabel: "Personal Finance",
    rowOutcome: "Organise personal money information clearly.",
    audience: "Anyone who wants a clearer picture of their own spending.",
    outcome: "A categorised view of spending and a simple budget template.",
    headline: "Organise personal money information clearly.",
    support: [
      "Prompts for categorising spending, building a budget template, and mapping your current position.",
      "Carried over from the earlier version of this site."
    ],
    inside: ["Categorise a month of spending", "Build a simple budget template", "Map the current picture in one page"],
    benefits: ["See where money actually goes", "Set a target you can hit", "Know what you are not tracking"],
    sequence: { lead: "Prompts in a sensible order.", steps: ["Gather the numbers", "Categorise", "Set a target", "Track for 30 days"] },
    note: "Educational templates only. Not financial advice.",
    upgrade: { name: "", blurb: "", checkoutUrl: "", price: null },
    seo: {
      title: "Free Personal Finance AI Prompt Pack — Organise your money picture",
      description: "Practical AI prompts for categorising spending, building a budget template and mapping your financial position. Educational only."
    },
    previews: [],
    prompts: [
      { title: "Categorise spending", text: `Here are my monthly income and expenses: [PASTE].

Group the spending into fixed, variable and optional. Show totals, the percentage of income for each group, and the three largest reduction opportunities. Educational analysis only — not financial advice.` },
      { title: "Budget template", text: `Build a simple monthly budget template for someone earning [AMOUNT] with these commitments: [LIST].

Include a starting savings target, a small buffer, and a plain explanation of what to do in a month where income drops.` },
      { title: "Map the picture", text: `Ask me ten questions, one at a time, to map my current financial situation.

At the end, summarise it in one page: what is clear, what is missing, and what I should track for 30 days.` }
    ]
  },

  {
    slug: "fitness",
    tier: "secondary",
    index: "10",
    keyword: "",
    name: "Fitness and Nutrition Pack",
    navLabel: "Fitness and Nutrition",
    rowOutcome: "Organise a realistic training routine.",
    audience: "People who want structure rather than a perfect plan.",
    outcome: "A weekly training structure and a way to review consistency.",
    headline: "Organise a realistic training routine.",
    support: [
      "Prompts for structuring training, generating meal ideas, and reviewing consistency honestly.",
      "Carried over from the earlier version of this site."
    ],
    inside: ["Structure a weekly split", "Generate meals around your targets", "Review four weeks of consistency"],
    benefits: ["Train with a structure you will keep", "Plan food without counting everything", "Find the one thing to change"],
    sequence: { lead: "Prompts in a sensible order.", steps: ["Set the structure", "Plan the food", "Track", "Review"] },
    note: "Educational templates only. Not medical advice.",
    upgrade: { name: "", blurb: "", checkoutUrl: "", price: null },
    seo: {
      title: "Free Fitness and Nutrition AI Prompt Pack — Build a routine you keep",
      description: "Practical AI prompts for structuring weekly training, planning meals and reviewing consistency. Educational only."
    },
    previews: [],
    prompts: [
      { title: "Weekly structure", text: `Build a realistic weekly training structure for someone training [N] days per week with access to [EQUIPMENT] and this goal: [GOAL].

Show the split, the main movement per session, and how to progress week to week. General educational guidance only.` },
      { title: "Meal ideas", text: `Give me ten meal ideas that fit roughly [CALORIES] kcal and [PROTEIN]g protein using ingredients from this list: [LIST].

Show approximate macros and prep time per meal, and flag which ones batch-cook well.` },
      { title: "Consistency review", text: `Review my last four weeks of training and food notes below.

Identify what I have actually been consistent with, what I have avoided, and the single smallest change most likely to improve consistency. NOTES: [PASTE]` }
    ]
  }
];

/* Homepage "How it works" — three steps only. */
export const HOW_IT_WORKS = [
  { n: "1", title: "Choose your current problem", body: "Pick the pack that matches what you are trying to do this week." },
  { n: "2", title: "Get the free pack by email", body: "Enter your email and the pack opens straight away." },
  { n: "3", title: "Use the prompts to execute", body: "Work through them in order. Each one produces something you can use." }
];
