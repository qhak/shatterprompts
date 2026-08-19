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

import freelancing     from "./packs/freelancing.mjs";
import outreach        from "./packs/outreach.mjs";
import content         from "./packs/content.mjs";
import localBusiness   from "./packs/local-business.mjs";
import digitalProducts from "./packs/digital-products.mjs";
import jobSearch        from "./packs/job-search.mjs";
import leverage         from "./packs/leverage.mjs";

export const SITE = {
  name: "ShatterPrompts",
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
      /* Raw analytics snippet injected into every page. Takes priority over
         plausibleDomain below if both are set. One tracker only — running two
         double-counts every pageview. */
      plausibleSnippet: `
<!-- Lucid Analytics (self-hosted, cookieless) -->
<script defer data-domain="shatterprompts.com" src="https://lucid-analytics.nicholasdrew62.workers.dev/tracker.js"></script>
`,
      plausibleDomain: "",   // fallback: classic data-domain embed, e.g. "shatterprompts.com"
      gaMeasurementId: "",   // e.g. "G-XXXXXXX"
      beaconEndpoint: ""     // optional POST endpoint receiving every event
    }
  },

  /* ==========================================================================
     COMMERCE
     --------------------------------------------------------------------------
     Nothing is purchasable until BOTH are true for a product:
       1. its content actually exists  (premium.ready: true)
       2. a real https:// checkout URL is set

     The build FAILS if a price is shown without a working checkout URL, and
     the templates refuse to render a buy button for a product whose content
     is not ready. That combination is what stops the site ever taking money
     for something it cannot deliver.
     ========================================================================== */
  commerce: {
    currency: "USD",
    currencySymbol: "$",

    /* One-off purchase of a single premium pack. */
    pack: {
      price: "4.99",
      label: "Premium pack",
      /* Per-pack Stripe Payment Links live on each pack in content/packs/*.mjs
         under `premium.checkoutUrl`. */
      blurb: "The full system for one topic. Yours permanently."
    },

    /* One-time bundle of every premium pack that exists today — deliberately
       NOT a subscription. It does not promise packs added later; those are
       sold as their own product when they exist, not owed retroactively to
       past buyers. That's what keeps this a single payment instead of an
       ongoing obligation. */
    bundle: {
      price: "19.99",
      label: "All-Access Bundle",
      checkoutUrl: "https://buy.stripe.com/9B64gAaHUgDyeeT8BD7Re06",
      blurb: "Every premium pack available today, one payment, yours to keep.",
      includes: [
        "All 6 premium packs available today (1,200 prompts)",
        "Download any pack, any time, from any device",
        "One payment — nothing recurring, nothing to cancel",
        "Yours to keep permanently"
      ]
    },

    /* Endpoint that verifies who someone is and what they own.
       Same Worker, different routes. Empty = member area shows as not yet open. */
    accountEndpoint: ""         // e.g. https://<worker>/account
  },

  /* Contact + legal. Leave a value empty and the link is simply not rendered. */
  supportEmail: "hello@shatterprompts.com",
  instagram: "",

  /* Legal pages are generated from this text. Replace with your own wording. */
  legal: {
    /* Set to a real trading name/address before you collect email at scale. */
    entityName: "ShatterPrompts",
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
  freelancing,

  outreach,
  content,
  localBusiness,
  digitalProducts,
  jobSearch,
  leverage,

  /* ==========================================================================
     SECONDARY PACKS
     Preserved from the previous version of the site. These keep working routes
     and appear on /packs only — they are deliberately kept off the homepage and
     the Instagram funnel.
     ========================================================================== */
  {
    slug: "productivity",
    tier: "secondary",
    index: "08",
    keyword: "",
    name: "Productivity Pack",
    navLabel: "Productivity",
    rowOutcome: "Turn a crowded week into a plan you can execute.",
    audience: "People with more tasks than time.",
    outcome: "A prioritised week with realistic time estimates.",
    headline: "Turn a crowded week into a plan you can execute.",
    support: [
      "Prompts for sorting a task dump, planning deep work, and reviewing what actually got done."
    ],
    inside: ["Sort a full task dump by impact", "Plan realistic deep-work blocks", "Review the gap between planned and finished"],
    benefits: ["Decide what not to do", "Estimate time honestly", "Find the pattern behind the gap"],
    sequence: { lead: "Prompts in a sensible order.", steps: ["Capture everything", "Sort by impact", "Block the week", "Review honestly"] },
    upgrade: { name: "", blurb: "", checkoutUrl: "", price: null },
    googleDocUrl: "https://docs.google.com/document/d/1jgwo0KlIhwjLrzuDdOIs5k9PPJR8V_3zwhEcHxqJkWQ/edit",
    seo: {
      title: "Free Productivity AI Prompt Pack — Plan a week you can execute",
      description: "Practical AI prompts for sorting tasks by impact, planning deep work, and reviewing the week honestly. Free."
    },
    previews: [],
    prompts: [
      { title: "Capture everything", text: `I want to get every task, commitment and nagging thought out of my head. Ask me questions across four buckets — work, home, unfinished projects, and things I said I would "get to eventually" — until I have said I have nothing left in each one.

Then hand back the full list as a single dump, unsorted, ready for prioritising.` },
      { title: "Sort the task dump", text: `Here is everything on my plate this week: [DUMP].

Sort it into Do Now (moves my main goal forward), Schedule, Delegate, and Delete. For every Do Now item give a realistic time estimate and the single first physical action.` },
      { title: "Find the real priority", text: `Here is my sorted task list: [LIST].

Run it through urgent/important, but push further than the usual four boxes — for every "urgent but not important" item, tell me who else could realistically do it, and for every "important but not urgent" item, tell me the cost of delaying it one more week.` },
      { title: "Plan the week", text: `I have [N] hours of focused time this week and this goal: [GOAL].

Build a weekly schedule with 90-minute deep-work blocks, what I work on in each, and what I explicitly will not do this week. Flag any block that looks unrealistic.` },
      { title: "Pick tomorrow's one thing", text: `Here is tomorrow's task list: [LIST] and this week's main goal: [GOAL].

Pick the single task that would make the rest of the day feel like a win even if nothing else got done, and explain in one line why it beats the others.` },
      { title: "Map energy to task type", text: `Here is roughly how my energy and focus move through a typical day: [DESCRIPTION].

Match my task types — deep work, admin, meetings, creative — to the times I am actually suited to them, and flag the one task I am currently scheduling at the worst possible time.` },
      { title: "Audit the recurring meetings", text: `Here is my recurring meeting schedule: [LIST], with who runs each one and roughly what it covers.

For each meeting, recommend keep, shorten, make it async, or cut — with a one-line reason for each — and estimate the hours per month I would get back.` },
      { title: "Build an inbox triage system", text: `My inbox has [N] unread emails and I check it [FREQUENCY].

Design a simple triage system with no more than four categories, a rule for what gets an immediate reply versus a scheduled one, and one habit that stops it building back up.` },
      { title: "Diagnose the avoided task", text: `There is one task I keep pushing to tomorrow: [TASK]. I have avoided it for [HOW LONG].

Ask me questions to find out whether I am avoiding it because it is unclear, boring, hard, or scary — then, based on the real reason, give me the smallest possible first step that gets it moving today.` },
      { title: "Write the delegation handoff", text: `I want to hand off this task to [PERSON]: [TASK DESCRIPTION].

Write the handoff message: what needs doing, the outcome I actually care about, any constraints, and the one check-in point I need before it's finished — short enough that they will actually read it.` },
      { title: "Turn the fix into a system", text: `This kept going wrong this month: [PROBLEM], and I fixed it once by [WHAT I DID].

Turn that one-off fix into a repeatable system or checklist so I do not have to solve the same problem from scratch next time.` },
      { title: "Review the gap", text: `Compare what I planned — [PLANNED] — with what I finished: [FINISHED].

Identify the two patterns causing the gap, then propose one change to my routine, one only, and how I will measure it next week.` }
    ]
  },

  {
    slug: "study",
    tier: "secondary",
    index: "09",
    keyword: "",
    name: "Study and Learning Pack",
    navLabel: "Study and Learning",
    rowOutcome: "Break difficult material into a study sequence.",
    audience: "Students and anyone learning something hard.",
    outcome: "A dependency-ordered study plan and a way to test recall.",
    headline: "Break difficult material into a study sequence.",
    support: [
      "Prompts for planning revision, getting a concept explained properly, and testing yourself."
    ],
    inside: ["Order subtopics by dependency", "Get one concept explained three ways", "Run an adaptive self-quiz"],
    benefits: ["Study in the right order", "Find the gap before the exam", "Test recall instead of rereading"],
    sequence: { lead: "Prompts in a sensible order.", steps: ["Break down the topic", "Plan the weeks", "Explain and check", "Test recall"] },
    upgrade: { name: "", blurb: "", checkoutUrl: "", price: null },
    googleDocUrl: "https://docs.google.com/document/d/1tlk6GdrfTPHvd2T9oB4ZXlSHadtgy73SGoAweT7ISXs/edit",
    seo: {
      title: "Free Study and Learning AI Prompt Pack — Learn difficult material",
      description: "Practical AI prompts for building a study plan, getting clear explanations, and testing recall. Free."
    },
    previews: [],
    prompts: [
      { title: "Find what you don't actually understand", text: `I am about to start studying [TOPIC] and have [TIME] before [EXAM OR DEADLINE].

Ask me five quick questions about it to find out what I already know versus what I am fuzzy on, then tell me honestly where to actually spend my limited time.` },
      { title: "Build the plan", text: `I need to learn [TOPIC] for [EXAM OR PURPOSE] by [DATE] and can study [HOURS] per week.

Break the topic into subtopics, order them by dependency, and build a week-by-week plan with review days built in.` },
      { title: "Turn notes into flashcards", text: `Here are my notes on [TOPIC]: [PASTE].

Turn them into 15 flashcard-style question-and-answer pairs, ordered from foundational to advanced, each testing one single fact or idea rather than several at once.` },
      { title: "Explain it three ways", text: `Explain [CONCEPT] three times: first in plain language for a beginner, then with a concrete worked example, then in the precise technical wording an examiner would expect.

Finish with the three mistakes students most often make with it.` },
      { title: "Untangle two concepts I keep confusing", text: `I keep mixing up [CONCEPT A] and [CONCEPT B].

Explain the core difference in one sentence, then give me a side-by-side comparison and a memory trick that would stop me confusing them in an exam.` },
      { title: "Teach it back", text: `I am going to explain [CONCEPT] to you in my own words: [MY EXPLANATION].

Tell me honestly what I got right, what I got wrong or oversimplified, and the one gap in my explanation an examiner would catch immediately.` },
      { title: "Find the gaps with practice questions", text: `Quiz me on [TOPIC] with five short-answer questions, no multiple choice.

After each answer, tell me whether I am right, and if I am wrong, do not just give the correct answer — explain the specific misunderstanding that likely caused my mistake.` },
      { title: "Adaptive quiz", text: `Quiz me on [TOPIC]. Ask one question at a time, wait for my answer, then tell me whether I am right, why, and what the ideal answer includes.

Start easy and increase difficulty each time I answer correctly. Ten questions total.` },
      { title: "Build a spaced-repetition schedule", text: `I need to remember these [N] topics long-term, not just until the exam on [DATE]: [LIST].

Build a spaced-repetition review schedule — when to first review each one, and the increasing gaps after that — that fits around the rest of my study plan.` },
      { title: "Run a timed practice under exam conditions", text: `Give me a [LENGTH]-minute practice question on [TOPIC], written in the style and difficulty of a real exam question, and tell me to stop and answer before reading further.

Once I answer, mark it as an examiner would — award marks, not just right or wrong — and show exactly where marks were lost.` },
      { title: "Debug a wrong answer", text: `Here is a question I got wrong: [QUESTION], and the answer I gave: [MY ANSWER]. The correct answer is [CORRECT ANSWER].

Do not just explain the correct answer — work backwards from my wrong answer to find the exact step where my reasoning went off track.` },
      { title: "Build the pre-exam cram sheet", text: `My exam on [TOPIC] is in [TIME] and here are my full notes: [PASTE].

Condense everything into a single-page cram sheet: only the facts, formulas or arguments most likely to actually appear, nothing I already know cold.` }
    ]
  },

  {
    slug: "personal-finance",
    tier: "secondary",
    index: "10",
    keyword: "",
    name: "Personal Finance Pack",
    navLabel: "Personal Finance",
    rowOutcome: "Organise personal money information clearly.",
    audience: "Anyone who wants a clearer picture of their own spending.",
    outcome: "A categorised view of spending and a simple budget template.",
    headline: "Organise personal money information clearly.",
    support: [
      "Prompts for categorising spending, building a budget template, and mapping your current position."
    ],
    inside: ["Categorise a month of spending", "Build a simple budget template", "Map the current picture in one page"],
    benefits: ["See where money actually goes", "Set a target you can hit", "Know what you are not tracking"],
    sequence: { lead: "Prompts in a sensible order.", steps: ["Gather the numbers", "Categorise", "Set a target", "Track for 30 days"] },
    note: "Educational templates only. Not financial advice.",
    upgrade: { name: "", blurb: "", checkoutUrl: "", price: null },
    googleDocUrl: "https://docs.google.com/document/d/1_IdLPNuXPF_Yad0otNGZSGBiKrmCWvJVyvhF8e-tYNY/edit",
    seo: {
      title: "Free Personal Finance AI Prompt Pack — Organise your money picture",
      description: "Practical AI prompts for categorising spending, building a budget template and mapping your financial position. Educational only."
    },
    previews: [],
    prompts: [
      { title: "Categorise spending", text: `Here are my monthly income and expenses: [PASTE].

Group the spending into fixed, variable and optional. Show totals, the percentage of income for each group, and the three largest reduction opportunities. Educational analysis only — not financial advice.` },
      { title: "Map the picture", text: `Ask me ten questions, one at a time, to map my current financial situation.

At the end, summarise it in one page: what is clear, what is missing, and what I should track for 30 days.` },
      { title: "Budget template", text: `Build a simple monthly budget template for someone earning [AMOUNT] with these commitments: [LIST].

Include a starting savings target, a small buffer, and a plain explanation of what to do in a month where income drops.` },
      { title: "Set a specific savings goal", text: `I want to save [AMOUNT] for [GOAL] by [DATE], and I currently save about [CURRENT AMOUNT] per month.

Work out whether the timeline is realistic, show the monthly amount actually required, and suggest two ways to close the gap if there is one. Educational only — not financial advice.` },
      { title: "Build an emergency fund plan", text: `My essential monthly expenses are [AMOUNT] and I currently have [CURRENT SAVINGS] saved.

Work out a sensible emergency fund target for my situation, and a realistic monthly contribution to get there from where I am now. Educational only — not financial advice.` },
      { title: "Understand my debt payoff order", text: `Here are my debts with balances and interest rates: [LIST].

Explain the difference between paying off highest-interest-first versus smallest-balance-first, show what each would look like for my actual numbers, and let me decide which fits my situation. Educational only — not financial advice.` },
      { title: "Audit recurring subscriptions", text: `Here is everything I am subscribed to and what each costs: [LIST].

Group them into clearly worth it, unclear, and probably not worth it, based on how often I actually mentioned using them, and total the monthly cost of the ones I should reconsider.` },
      { title: "Write a bill negotiation script", text: `I want to try negotiating my bill for [SERVICE], currently costing [AMOUNT] per month, and I have been a customer for [LENGTH OF TIME].

Write a short script I could use on a call or in writing, including a fallback ask if they will not lower the price.` },
      { title: "Explain a financial term simply", text: `Explain [TERM] to me in plain English, no jargon, with a concrete example using round numbers.

Then tell me the one situation where getting this wrong actually costs people money.` },
      { title: "Compare a big purchase", text: `I am deciding between two options: [OPTION A] costing [PRICE A], and [OPTION B] costing [PRICE B].

Lay out the true cost of each including any ongoing costs, then list the questions I should be asking myself before either purchase — not which one to pick. Educational only — not financial advice.` },
      { title: "Plan for a large irregular expense", text: `I know [EXPENSE] is coming up in about [TIMEFRAME] and will cost roughly [AMOUNT].

Work out how much I would need to set aside per month between now and then, and suggest where in my current budget that money could realistically come from.` },
      { title: "Design a 30-day spending challenge", text: `I want to cut spending in [CATEGORY] for the next 30 days without making my life miserable.

Design a simple challenge with one clear rule, a way to track it daily that takes under a minute, and a realistic reward if I stick to it.` }
    ]
  },

  {
    slug: "fitness",
    tier: "secondary",
    index: "11",
    keyword: "",
    name: "Fitness and Nutrition Pack",
    navLabel: "Fitness and Nutrition",
    rowOutcome: "Organise a realistic training routine.",
    audience: "People who want structure rather than a perfect plan.",
    outcome: "A weekly training structure and a way to review consistency.",
    headline: "Organise a realistic training routine.",
    support: [
      "Prompts for structuring training, generating meal ideas, and reviewing consistency honestly."
    ],
    inside: ["Structure a weekly split", "Generate meals around your targets", "Review four weeks of consistency"],
    benefits: ["Train with a structure you will keep", "Plan food without counting everything", "Find the one thing to change"],
    sequence: { lead: "Prompts in a sensible order.", steps: ["Set the structure", "Plan the food", "Track", "Review"] },
    note: "Educational templates only. Not medical advice.",
    upgrade: { name: "", blurb: "", checkoutUrl: "", price: null },
    googleDocUrl: "https://docs.google.com/document/d/1nChYS-B87UI4HcZZ2SJ0nQZb1Fg0vH2PWJlxHVX-veg/edit",
    seo: {
      title: "Free Fitness and Nutrition AI Prompt Pack — Build a routine you keep",
      description: "Practical AI prompts for structuring weekly training, planning meals and reviewing consistency. Educational only."
    },
    previews: [],
    prompts: [
      { title: "Set a specific, realistic goal", text: `My general goal is [GOAL] and I have [TIMEFRAME] and can train [N] days per week.

Turn that into one specific, measurable target, and tell me honestly whether the timeframe is realistic for it. General educational guidance only.` },
      { title: "Weekly structure", text: `Build a realistic weekly training structure for someone training [N] days per week with access to [EQUIPMENT] and this goal: [GOAL].

Show the split, the main movement per session, and how to progress week to week. General educational guidance only.` },
      { title: "Build a warm-up and mobility routine", text: `My main training days are [DAYS OR TYPES OF SESSIONS], and I tend to feel tight in [AREAS].

Build a 10-minute warm-up and mobility routine to do before training, tailored to what I am about to train that day. General educational guidance only.` },
      { title: "Plan progressive overload", text: `Here is what I lifted or did last week for [EXERCISE OR SESSION TYPE]: [NUMBERS].

Suggest how to progress it over the next four weeks without jumping too fast, and tell me the signs I should hold at the current level instead of increasing. General educational guidance only.` },
      { title: "Build a no-equipment alternative", text: `My usual session is [SESSION DESCRIPTION] but I will not have access to [EQUIPMENT] for the next [TIMEFRAME].

Rebuild the session with bodyweight or minimal-equipment alternatives that train the same movement patterns. General educational guidance only.` },
      { title: "Meal ideas", text: `Give me ten meal ideas that fit roughly [CALORIES] kcal and [PROTEIN]g protein using ingredients from this list: [LIST].

Show approximate macros and prep time per meal, and flag which ones batch-cook well.` },
      { title: "Turn the meal plan into a grocery list", text: `Here are the meals I am planning to cook this week: [LIST].

Turn them into a single grocery list grouped by supermarket section, with quantities, so I am not guessing in the shop.` },
      { title: "Consistency review", text: `Review my last four weeks of training and food notes below.

Identify what I have actually been consistent with, what I have avoided, and the single smallest change most likely to improve consistency. NOTES: [PASTE]` },
      { title: "Get back on track after a missed week", text: `I missed most of my training and meal plan last week because [REASON].

Do not just tell me to try harder — give me a realistic plan to get back into it this week without trying to make up for everything I missed at once.` },
      { title: "Check in on sleep and recovery", text: `Here is roughly how I have been sleeping and recovering this week: [DESCRIPTION], and here is my training: [SESSIONS].

Ask me follow-up questions to figure out whether my training load matches my recovery, and flag if something needs to change before I keep pushing.` },
      { title: "Think through persistent discomfort", text: `I have been getting [DESCRIPTION OF DISCOMFORT] during or after [ACTIVITY], for about [HOW LONG].

Ask me questions to help me describe it clearly enough to explain to a physiotherapist or doctor — this is not a diagnosis, and persistent or worsening pain should always be checked by a professional.` },
      { title: "Plan a deload week", text: `I have been training hard for [N] weeks without a real break, doing roughly [TRAINING SUMMARY].

Build a one-week deload — reduced volume or intensity, not a full stop — and tell me what signs would mean I actually need more than one easy week. General educational guidance only.` }
    ]
  }
];
