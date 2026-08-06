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
      price: "2.99",
      label: "Premium pack",
      /* Per-pack Stripe Payment Links live on each pack in content/packs/*.mjs
         under `premium.checkoutUrl`. */
      blurb: "The full system for one topic. Yours permanently."
    },

    /* All-access subscription: every premium pack, plus anything added later. */
    membership: {
      price: "9.99",
      interval: "month",
      label: "All-access",
      checkoutUrl: "",          // Stripe subscription Payment Link
      blurb: "Every premium pack, plus every new one while you are subscribed.",
      includes: [
        "Every premium pack available today",
        "Every new pack added while you are subscribed",
        "Download any pack, any time, from any device",
        "Cancel whenever you like"
      ],
      /* Said plainly on the pricing page. Subscriptions that hide this are the
         reason people distrust them. */
      onCancel: "Your access ends at the end of the billing period you have paid for. Anything you downloaded is yours to keep."
    },

    /* Endpoint that verifies who someone is and what they own.
       Same Worker, different routes. Empty = member area shows as not yet open. */
    accountEndpoint: ""         // e.g. https://<worker>/account
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
  freelancing,

  outreach,
  content,
  localBusiness,
  digitalProducts,
  jobSearch,

  /* ==========================================================================
     SECONDARY PACKS
     Preserved from the previous version of the site. These keep working routes
     and appear on /packs only — they are deliberately kept off the homepage and
     the Instagram funnel.
     ========================================================================== */
  {
    slug: "productivity",
    tier: "secondary",
    index: "07",
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
    index: "08",
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
