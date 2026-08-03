/* ============================================================================
   DIGITAL PRODUCTS PACK — 25 prompts
   ============================================================================ */

export default {
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
    "Scope something you can actually finish",
    "Write the sales page and launch emails",
    "Learn from the launch instead of guessing"
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
    price: null,
    targetPromptCount: 200
  },
  seo: {
    title: "Free Digital Products AI Prompt Pack — Build a product people want",
    description: "25 practical AI prompts to find a real problem, validate demand, package a digital product and write the first sales page. Free."
  },

  previews: [
    {
      title: "Stress-test before you build",
      text: `Before I build anything, stress-test this product concept: [CONCEPT] for [AUDIENCE].

List the five most likely reasons it will not sell, ordered by probability. For each: what evidence would tell me it is a real risk, and what evidence would tell me it is not.

Then give me three ways to gather that evidence within seven days without building the product.

Be sceptical rather than encouraging. Assume the idea is flawed and try to find where. If you think the concept is fundamentally weak, say so directly rather than softening it.`
    }
  ],

  prompts: [
    { title: "Mine the problem", text: `My audience is [AUDIENCE] and I know something about [TOPIC].

List twelve specific, painful problems this audience has — the kind they have already tried to solve and failed at.

For each: what they currently do instead, roughly what that costs them in time or money, how urgent it feels, and whether they know they have the problem.

Rank by how likely someone is to pay to solve it this month. Ignore problems people find interesting but never pay for.` },

    { title: "Interview the audience", text: `I want to test whether [AUDIENCE] really has this problem: [PROBLEM].

Write ten questions I could ask five real people that would get honest answers rather than polite encouragement.

Rules: no leading questions, nothing that describes my idea, nothing answerable with yes or no. Focus on what they have actually done and paid for, not what they say they would do.

Then tell me what answers would mean I should stop.` },

    { title: "Stress-test the idea", text: `Before I build anything, stress-test this product concept: [CONCEPT] for [AUDIENCE].

List the five most likely reasons it will not sell, ordered by probability. For each: what evidence would tell me it is a real risk, and what evidence would tell me it is not.

Then give me three ways to gather that evidence within seven days without building the product.

Be sceptical rather than encouraging. Assume the idea is flawed and try to find where. If you think the concept is fundamentally weak, say so directly rather than softening it.` },

    { title: "Find existing demand", text: `I am considering a product about [PROBLEM] for [AUDIENCE].

Tell me where this audience already spends money on this problem, what they buy, roughly what they pay, and what those existing solutions consistently fail to do.

Then identify the gap I could genuinely fill, and be explicit about whether it is a real gap or just a crowded market with no room.` },

    { title: "Competitor teardown", text: `Here are two or three products already serving this problem: [PASTE WHAT I CAN SEE].

Compare them on: who they are for, the promise, format, price, what is included, and what buyers complain about.

Then tell me the position that is actually open — narrower audience, different format, different depth, or different price — and which of those I am realistically able to occupy.` },

    { title: "Choose the format", text: `The problem is [PROBLEM] and the outcome I want to deliver is [OUTCOME].

Compare five formats — template, short course, toolkit, notion system, guided workbook — for this specific problem.

For each: how well it fits, how long it takes me to build, how easy it is to explain in one line, how likely the buyer is to actually finish it, and how easy it is to update later.

Recommend one and explain what makes the others worse here.` },

    { title: "Scope it so it ships", text: `I want to build [PRODUCT] delivering [OUTCOME].

Define the smallest version that fully delivers that outcome — not a stripped-down version, a complete one with a narrower promise.

List what is in, what is deliberately out, and what I would only add if buyers ask.

Then estimate build time honestly and tell me which part I am most likely to underestimate.` },

    { title: "Outline the product", text: `Outline [PRODUCT] for [AUDIENCE], delivering [OUTCOME].

Break it into sections. For each: what the buyer can do afterwards that they could not before, what it contains, and roughly how long it takes them.

Order it so each section depends only on what came before. Flag any section that is filler — content included because it seems expected rather than because it moves the buyer forward.` },

    { title: "Name and one-liner", text: `My product: [DESCRIPTION]. Audience: [AUDIENCE]. Outcome: [OUTCOME].

Give me eight names — plain and descriptive rather than clever. For each, one line on what a stranger would assume it does.

Then write the single sentence I would say when someone asks what it is, in language the buyer would repeat to a friend without changing it.` },

    { title: "Positioning", text: `Write the positioning for [PRODUCT]: who it is for, who it is explicitly not for, the outcome, and what makes it different from the alternatives.

Then write the "who this is not for" paragraph properly — specific enough that the wrong buyer self-selects out. Being honest here reduces refunds more than any guarantee does.` },

    { title: "Price framing", text: `I am pricing [PRODUCT] for [AUDIENCE], considering [PRICE].

What is the buyer comparing this to in their head? What would make the price feel obviously fair, and what would make it feel like too much?

Give three price points with what genuinely changes between them, and tell me which to launch with given I have no reviews yet.

Show the reasoning rather than picking round numbers.` },

    { title: "Pre-sell test", text: `I want to test demand for [PRODUCT] before building it, honestly — no fake scarcity, no pretending it exists.

Design the test: what I put in front of people, what I ask them to do, what number would tell me to build it, and what number would tell me to stop.

Be explicit about what I must tell buyers if I take money before the product exists, including delivery date and refund terms.` },

    { title: "Landing page structure", text: `Plan the structure of a landing page for [PRODUCT].

For each section: its job, what it must contain, and the one question in the reader's head it answers.

Order it the way a sceptical buyer actually reads. Tell me what belongs above the fold on a phone, and what can be cut entirely if the page gets too long.` },

    { title: "Write the sales page", text: `Write the first version of a sales page for [PRODUCT].

Sections: headline stating the outcome, one paragraph on who it is for, the problem in the buyer's own words, exactly what they get, how it works, who it is not for, and the price.

Rules: no invented testimonials, no fake urgency, no guarantees I have not agreed to, no claims I have not evidenced. Where a section needs proof I have not given you, mark it [NEEDS PROOF] rather than writing something vague.` },

    { title: "Answer the objections", text: `Act as a sceptical buyer for [PRODUCT] at [PRICE].

List the ten objections you would genuinely have, ordered by how likely they are, including the ones people think but do not say.

For each, write an honest answer under 40 words.

Then tell me which objections should be answered directly on the page, and which mean the product itself needs to change.` },

    { title: "Write the FAQ", text: `Write the FAQ for [PRODUCT], using the objections below: [PASTE].

Rules: answer the awkward questions rather than the flattering ones. Include what happens if it does not work for them, exactly what they get and in what format, whether there are updates, and what support exists.

Only state terms I have actually decided. If I have not told you the refund policy, write [DECIDE: refund terms] rather than inventing one.` },

    { title: "Email capture hook", text: `I want to collect emails before [PRODUCT] launches by offering something free and genuinely useful.

Propose five free things I could make in under three hours that solve a real slice of the same problem.

For each: what it is, why someone would give an email for it, how it leads naturally to the paid product, and why it would not cannibalise it.

Rank by how quickly I could make it.` },

    { title: "Launch email sequence", text: `Write a five-email launch sequence for [PRODUCT] to a list who joined for [FREE THING].

Each email: one job, one idea, one call to action. Most should be useful on their own to someone who never buys.

Give me subject line, purpose, and full body for each, plus the day it sends.

No countdown timers, no fake scarcity, no "last chance" unless something genuinely ends.` },

    { title: "Launch content plan", text: `I am launching [PRODUCT] in [N] days to [AUDIENCE].

Plan the content for those days: what I post each day, the angle, and what it is meant to do.

Most of it must be useful on its own to someone who never buys. Mark the two posts doing the actual selling and where they sit in the sequence.

No countdowns or manufactured scarcity.` },

    { title: "Launch day checklist", text: `Build my launch-day checklist for [PRODUCT] sold through [PLATFORM].

Cover: what to test before announcing, what to check on the payment and delivery path, what to have written in advance, what to monitor in the first hours, and what to do if something breaks mid-launch.

Order it by what causes the most damage if missed.` },

    { title: "Delivery and onboarding", text: `Someone just bought [PRODUCT]. Design what happens next.

Cover: the confirmation, how they access it, the first thing I want them to do, and the message that gets them actually starting rather than filing it away.

Then write the receipt-plus-welcome email. Include only what genuinely happens — no promises about support or updates I have not committed to.` },

    { title: "Collect feedback", text: `Write the message I send buyers of [PRODUCT] after [DAYS] days asking what worked and what did not.

Ask three questions maximum, phrased to get honest criticism rather than politeness. Make it clear I want the negative version.

Then tell me what to do with answers that contradict each other, and how many people need to say something before I act on it.` },

    { title: "Request a testimonial", text: `A buyer told me: [PASTE WHAT THEY SAID].

Write the message asking whether I can use it publicly, and offering to let them edit it first.

Then draft a tightened version of their words that keeps their voice and adds nothing they did not say. Show clearly what you cut and what you kept — I will not publish anything they did not actually mean.` },

    { title: "Iterate from feedback", text: `Here is the feedback from my first buyers: [PASTE].

Group it into: confusion, missing content, unmet expectation, and genuine praise.

Separate the changes that fix the product from the ones that fix the sales page — a lot of complaints are actually a promise problem, not a product problem.

Then give me the single change most worth making next, and why the others can wait.` },

    { title: "Learn from the launch", text: `Here is what happened in my launch: [PASTE — traffic, page views, email signups, sales, and any replies or questions].

Tell me where people dropped off and the most likely cause at each step. Distinguish a traffic problem from a page problem from an offer problem — they need completely different fixes.

Then give me the single change most likely to matter and the number to watch to know whether it worked.

Say plainly where the data is too thin to conclude anything rather than inventing a narrative.` }
  ]
};
