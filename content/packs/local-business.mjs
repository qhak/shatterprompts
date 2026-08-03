/* ============================================================================
   LOCAL BUSINESS PACK — 25 prompts
   ============================================================================ */

export default {
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
    "Approach the owner by email, DM or in person"
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
    price: null,
    targetPromptCount: 200
  },
  seo: {
    title: "Free Local Business AI Prompt Pack — Turn local problems into a service",
    description: "25 practical AI prompts to find local business problems, package a service, price it, and write a first message to the owner. Free."
  },

  previews: [
    {
      title: "The outside audit",
      text: `Here is everything I can see about a local [BUSINESS TYPE]: [PASTE — website text, Google listing details, recent reviews, social profiles, opening hours, photos].

Identify the five things most likely costing them customers, ordered by how much money each probably affects.

For each: the evidence you are basing it on, how a customer actually experiences the problem, roughly what it might cost them, and how long a fix would take.

Separate clearly what you observed from what you are assuming. Do not invent details that are not in what I pasted — if something important is missing, tell me what to go and look at.`
    }
  ],

  prompts: [
    { title: "Pick the business type", text: `I live near [AREA] and I can offer [SKILL OR SERVICE].

List eight types of local business that plausibly need this. For each: typical margin, whether one extra customer is worth enough to justify paying me, how reachable the owner is directly, how much competition already sells to them, and how seasonal their demand is.

Rank them for someone starting with no clients and no case studies. Be honest about which are genuinely hard to sell into.` },

    { title: "Map the territory", text: `I am targeting [BUSINESS TYPE] within [DISTANCE] of [AREA].

Tell me how to build a list: where these businesses are listed, what information is publicly visible for each, and what I can tell about them before making contact.

Then give me the five fields I should record per business so I can prioritise rather than working alphabetically.` },

    { title: "The outside audit", text: `Here is everything I can see about a local [BUSINESS TYPE]: [PASTE — website text, Google listing details, recent reviews, social profiles, opening hours, photos].

Identify the five things most likely costing them customers, ordered by how much money each probably affects.

For each: the evidence you are basing it on, how a customer actually experiences the problem, roughly what it might cost them, and how long a fix would take.

Separate clearly what you observed from what you are assuming. Do not invent details that are not in what I pasted — if something important is missing, tell me what to go and look at.` },

    { title: "Read the reviews", text: `Here are recent reviews for a local [BUSINESS TYPE]: [PASTE].

Summarise what customers consistently praise and consistently complain about. Separate problems the owner controls from ones they do not.

Identify the two complaints that are actually solvable with better systems or communication rather than more staff or money.

Then tell me how to raise each with the owner without insulting their business.` },

    { title: "Website teardown", text: `Here is the text and structure of a local [BUSINESS TYPE] website: [PASTE].

Judge it only on whether it converts a ready-to-buy local customer. Check: is it obvious what they do and where, is the contact method one tap away, are hours and location correct and visible, does it answer the three questions a customer has before calling, and does it work on a phone.

Give the five highest-impact fixes in priority order, with the reason each matters in terms of lost customers rather than design opinion.` },

    { title: "Google profile audit", text: `Here is what I can see of a local [BUSINESS TYPE]'s Google Business Profile: [PASTE — categories, description, photos, hours, reviews, posts, Q&A].

List what is missing or weak, ordered by effect on how often they appear and get chosen.

For each: what to change, roughly how long it takes, and what result it plausibly affects. Be clear about which items are proven fundamentals and which are marginal.` },

    { title: "Compare to competitors", text: `Here is my target business: [PASTE]. Here are two local competitors: [PASTE].

Compare them on what a customer actually notices: how easy they are to find, how quickly you understand what they offer, how easy it is to contact them, social proof, and how up to date everything looks.

Produce a simple table, then name the one gap where my target is clearly behind — the one I would lead with in outreach.` },

    { title: "Link the problem to money", text: `A local [BUSINESS TYPE] has this problem: [PROBLEM].

Estimate what it plausibly costs them: how many potential customers it affects, what an average customer is worth, and therefore a realistic monthly cost range.

Show every assumption as a separate line so the owner can challenge the numbers. Use conservative figures. If I have not given you enough to estimate, tell me exactly which number I need to find out first.` },

    { title: "Package the fix", text: `A local [BUSINESS TYPE] has this problem: [PROBLEM].

Turn the fix into a service with fixed scope: what I deliver, what the owner must provide, how long it takes, and how we both know it worked.

Keep it to one clear outcome. Then rewrite it in plain language an owner with no technical background understands in fifteen seconds — no jargon, no acronyms.` },

    { title: "Service tiers", text: `Take my service — [SERVICE] for [BUSINESS TYPE] — and build three versions: a one-off fix, a done-properly version, and an ongoing arrangement.

For each: the outcome, what I deliver, the timeline, and who it suits.

The one-off must be genuinely useful on its own. Tell me which one a first-time buyer with no relationship with me will actually pick.` },

    { title: "Price for a local owner", text: `I want to charge for [SERVICE] for a local [BUSINESS TYPE].

Estimate what one additional customer is worth to that business, then work backwards to a price that is obviously worth paying if the fix works.

Give a one-off price and a monthly version, state exactly what changes between them, and tell me which is easier to say yes to for an owner who has never bought this kind of service before.

Show the reasoning. Do not just pick round numbers.` },

    { title: "The free audit hook", text: `I want to offer a free audit of [SPECIFIC THING] to local [BUSINESS TYPE] as a way in.

Design it: what I check, what I hand over, how long it takes me, and what it must reveal to make the paid work an obvious next step.

Keep it under [MINUTES] minutes of my time per business. Then tell me how to make it genuinely valuable even if they never hire me — and where the line is between useful and giving the work away.` },

    { title: "Write the audit report", text: `Turn these findings into a one-page report I can hand to a local business owner: [PASTE FINDINGS].

Structure: what I looked at, what is working, the three things costing them customers, and what I would do about each.

Plain language, no jargon, no screenshots of dashboards. Lead with what they are doing right. Make the paid next step a single clear sentence at the end, not a sales page.` },

    { title: "First message — email", text: `Write a first email to the owner of a local [BUSINESS TYPE] about this specific thing I noticed: [OBSERVATION].

Under 100 words. Open with the observation, not an introduction. Make it obvious I looked at their business specifically. Name the outcome, not the technical work. End with a low-pressure question.

No "I was browsing your website and loved it". No attachment. No link in the first email.` },

    { title: "First message — DM", text: `Rewrite that outreach as an Instagram or Facebook DM to a local [BUSINESS TYPE].

It must fit on a phone screen, sound like a person typing, and not open with "Hi! Hope business is going well!".

Give a two-message version: a short opener whose only job is a reply, then what I send once they respond.

Remember the owner may be the one behind the counter, reading this between customers.` },

    { title: "The walk-in", text: `I want to walk into a local [BUSINESS TYPE] and speak to the owner about [SERVICE].

Write what I actually say in the first 20 seconds, assuming they are busy and slightly suspicious of being sold to.

Include: how I open, how I name the problem, how I hand over something tangible, and how I leave without pressure.

Then give the three most likely brush-offs and a natural, non-pushy response to each. Tell me the right time of day to go for this type of business.` },

    { title: "The phone call", text: `Write a phone script for calling a local [BUSINESS TYPE] about [SERVICE].

Include: the first sentence, how I earn another twenty seconds, the question that reveals whether there is a real problem, and how I propose a next step.

Then write what I say if the owner is not there, and what I say if I am asked "is this a sales call?" — answer honestly.` },

    { title: "Get past the gatekeeper", text: `I need to reach the owner of a local [BUSINESS TYPE], but staff answer the phone and the inbox.

Write what I say to a member of staff that is honest, brief, and easy for them to pass on. No pretending to be a customer, no fake existing relationship.

Then write the message I would leave if the owner is unavailable, designed to be repeated accurately by someone who does not care.` },

    { title: "Owner objections", text: `Act as the owner of a local [BUSINESS TYPE] who has been sold to badly before and is busy.

List the eight objections you would raise about paying [PRICE] for [SERVICE], in the blunt way an owner actually says them — including "my nephew does that" and "I've had people like you before".

For each, write a short honest answer that does not oversell. Then tell me which objections mean I should walk away rather than keep selling.` },

    { title: "One-page proposal", text: `Write a one-page proposal for [SERVICE] at [PRICE] for a local [BUSINESS TYPE] who told me: [PASTE WHAT THEY SAID].

Structure: their problem in their own words, what I will do, what it costs, how long it takes, what I need from them, and what happens next.

No jargon. No terms I cannot honour. Then flag anything likely to cause scope creep and suggest tighter wording.` },

    { title: "Onboarding a local client", text: `A local [BUSINESS TYPE] just said yes to [SERVICE].

Write the first-48-hours checklist: what I confirm in writing, what access or information I need, what expectations I set, and the first check-in.

Assume the owner is not technical and may be slow to send things. Include exactly how I ask for logins and access in a way that does not feel risky to them.` },

    { title: "Proof from one job", text: `I just finished [SERVICE] for a local [BUSINESS TYPE]. Here is what happened: [PASTE RESULTS AND DETAILS].

Write a short case study: the situation before, what I did, what changed, and over what period.

Use only the numbers I gave you. If something important is missing, write [ASK CLIENT FOR: ...] instead of estimating.

Then write a two-sentence version for outreach to similar businesses nearby.` },

    { title: "Ask for the review", text: `A local client is happy with my work on [SERVICE]. Write the message asking for a public review or testimonial.

Make it easy: say exactly where to leave it, suggest two or three specific things they might mention based on the work, and give them an easy out.

Then write a shorter follow-up for a week later if they have not done it, that does not nag.` },

    { title: "Referrals and the next street", text: `I have one happy client: a local [BUSINESS TYPE] in [AREA].

Write the referral request, timed for the right moment, that makes it easy to say no.

Then list the five nearest business types that share the same customers and would find this result relevant, and write the one line I open with when contacting them, referencing the nearby work without breaching confidence.` },

    { title: "Turn it into a retainer", text: `I did a one-off [SERVICE] for a local [BUSINESS TYPE] and it worked. Here is what happened: [PASTE].

Design the ongoing version: what I would do each month, what outcome it protects or grows, what it costs, and why it is worth more than doing nothing.

Then write the conversation opener that proposes it without implying the original job was incomplete.` }
  ]
};
