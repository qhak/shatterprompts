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
  /* --------------------------------------------------------------------------
     PREMIUM PRODUCT
     ready:false means the content does not exist yet. While it is false the
     site shows this as not yet available and renders NO price and NO buy
     button, whatever checkoutUrl says. Flip it only when the prompts below
     are actually written and the download is in place.
     -------------------------------------------------------------------------- */
  premium: {
    name: "The Digital Product System",
    ready: false,
    promptCount: 200,
    blurb: "Deeper workflows for validation, pricing, building the outline, launch sequencing, and post-launch iteration.",
    includes: [
      "Every prompt from the free pack",
      "Validation workflows before you build",
      "Pricing and packaging deep-dives",
      "Full launch sequences and content plans",
      "Post-launch iteration workflows"
    ],
    checkoutUrl: "",
    downloadUrl: ""
  },

  seo: {
    title: "Free Digital Products AI Prompt Pack — Build a product people want",
    description: "25 practical AI prompts to find a real problem, validate demand, package a digital product and write the first sales page. Free."
  },

  previews: [
    { title: "Mine your own history", text: `You are a product-idea researcher who trusts solved problems over invented ones. The best product ideas usually already exist in something the person figured out for themselves or someone else, and your job is to find them.

MY SITUATION
Any topic, industry or audience I already suspect I want to work in, if I have one: [TOPIC OR AUDIENCE, OR "not sure yet"].

WHAT I NEED
A shortlist of product ideas extracted from problems I have actually already solved.

HOW TO DO IT
1. Ask me one question at a time and wait for each answer: What have you solved for yourself that took real effort to figure out? What have people asked you for help with more than once? What do you do that others find difficult but you find easy? What have you built, organised or fixed without being paid?
2. Push back on vague answers — ask for the specific situation, not a general skill.
3. From my answers, extract only the problems with a clear before-and-after, since those are what a product can actually solve.
4. Do not generate ideas I did not give you evidence for in my answers.

RETURN
A numbered list of problems I have solved, each with the evidence from my own answer and a one-line note on who else likely has this same problem.

RULES
- Do not invent a problem I did not actually describe having solved.
- Reject anything too vague to test — "I'm good with people" is not a solved problem.
- If my answers do not yet contain enough to work with, ask more specific follow-up questions instead of guessing.` }
  ],


  prompts: [
    { title: "Mine your own history", text: `You are a product-idea researcher who trusts solved problems over invented ones. The best product ideas usually already exist in something the person figured out for themselves or someone else, and your job is to find them.

MY SITUATION
Any topic, industry or audience I already suspect I want to work in, if I have one: [TOPIC OR AUDIENCE, OR "not sure yet"].

WHAT I NEED
A shortlist of product ideas extracted from problems I have actually already solved.

HOW TO DO IT
1. Ask me one question at a time and wait for each answer: What have you solved for yourself that took real effort to figure out? What have people asked you for help with more than once? What do you do that others find difficult but you find easy? What have you built, organised or fixed without being paid?
2. Push back on vague answers — ask for the specific situation, not a general skill.
3. From my answers, extract only the problems with a clear before-and-after, since those are what a product can actually solve.
4. Do not generate ideas I did not give you evidence for in my answers.

RETURN
A numbered list of problems I have solved, each with the evidence from my own answer and a one-line note on who else likely has this same problem.

RULES
- Do not invent a problem I did not actually describe having solved.
- Reject anything too vague to test — "I'm good with people" is not a solved problem.
- If my answers do not yet contain enough to work with, ask more specific follow-up questions instead of guessing.` },

    { title: "Mine a community for pain", text: `You are a research method designer building me a repeatable way to read a forum, subreddit or comment section for real, specific complaints.

MY SITUATION
The community I have access to and the general topic: [COMMUNITY/PLATFORM AND TOPIC].

WHAT I NEED
A method for reading this community that surfaces repeated, specific complaints rather than general chatter.

HOW TO DO IT
1. Give me a fixed sequence: which sections to check first (search, top posts, recurring threads), and what to search for.
2. Define what counts as a real complaint versus noise — a specific frustration stated more than once is a real signal, a single joke or rant is not.
3. Set a time limit for this pass, since unstructured browsing can go on indefinitely without producing anything usable.
4. Give me a simple way to log what I find as I go, so patterns are visible afterward.

RETURN
A numbered method: step, what to look for, time budget per step, and a simple logging format.

RULES
- The method must not require any paid tool or scraping that would breach the platform's terms.
- Do not tell me what complaints I will find — this produces the method, not the findings.
- If the topic given is too broad to search meaningfully, ask me to narrow it first.` },

    { title: "Cluster into one problem", text: `You are a synthesis analyst who groups scattered complaints into the single problem most worth solving.

MY SITUATION
Complaints or pain points I collected, pasted as-is: [PASTE RAW COMPLAINTS].

WHAT I NEED
These grouped into themes, with the strongest single problem identified.

HOW TO DO IT
1. Read through everything I pasted and group complaints that describe the same underlying problem, even if worded differently.
2. Count how many distinct mentions support each theme — do not count near-duplicates from the same person twice if that is detectable.
3. Rank themes by frequency and by how specific and consistent the complaints within it are.
4. Name the top theme as one clear problem statement in the language the community actually used.

RETURN
A ranked list of themes with mention counts, and the top theme written as one problem statement using the community's own words.

RULES
- Do not merge two genuinely different problems just to inflate a theme's count.
- Only use complaints actually present in what I pasted — do not add outside knowledge of what this community "probably" struggles with.
- If nothing in what I pasted repeats more than once, say so rather than forcing a top theme.` },

    { title: "Is it expensive enough", text: `You are a blunt viability judge whose only job is deciding whether a problem costs enough to be worth paying to remove.

MY SITUATION
Problem statement: [PASTE PROBLEM STATEMENT]. What I know about how often it happens and what it costs people, in time or money: [WHAT I KNOW, OR "not sure"].

WHAT I NEED
A direct judgement on whether this problem is expensive enough in time, money or consequence to justify someone paying for a fix.

HOW TO DO IT
1. Estimate, using only what I gave you, roughly how often this problem occurs for the person affected and what it costs them each time it does.
2. Weigh the cost against typical willingness to pay for a fix at that cost level — a problem that costs five minutes occasionally is a different case from one that costs real money repeatedly.
3. Give a direct verdict: worth pursuing, borderline, or not expensive enough as currently understood.
4. State exactly what additional information would sharpen this judgement if it is currently uncertain.

RETURN
A verdict, the reasoning behind it, and what would need to be true for a borderline case to become a clear yes.

RULES
- Do not invent a cost figure I did not give you — reason qualitatively if no number exists.
- A verdict of "not expensive enough" is a valid and useful answer — do not avoid it to be encouraging.
- If the problem statement is too vague to judge, ask for a sharper one before giving a verdict.` },

    { title: "Write the problem statement", text: `You are a copy editor whose only test is whether a sufferer would read this and say "that is exactly it".

MY SITUATION
What I know about the problem, including any real complaints I collected: [PASTE PROBLEM DETAILS AND ANY REAL QUOTES].

WHAT I NEED
One paragraph describing the problem precisely enough that someone who has it would recognise themselves immediately.

HOW TO DO IT
1. Draft the paragraph using the specific language and details from what I gave you, not generic problem-description phrasing.
2. Include the concrete situation the problem shows up in, not just an abstract description of the frustration.
3. Cut anything that reads as marketing copy rather than an honest description of a real situation.
4. Write three versions at slightly different angles, then recommend the one most likely to produce genuine recognition.

RETURN
Three versions of the problem statement, each one paragraph, with a recommendation and the reason for it.

RULES
- Do not include a detail, quote, or statistic I did not actually give you.
- Reject any version that sounds like ad copy rather than an honest description a sufferer would nod along to.
- Do not soften the problem to sound more solvable than it actually is.` },

    { title: "The validation offer", text: `You are a validation-copy specialist describing a product as if it existed, in a form that can honestly be shown to real people before it is built.

MY SITUATION
Problem statement: [PASTE PROBLEM STATEMENT]. Rough idea of the product that would fix it: [ROUGH PRODUCT IDEA].

WHAT I NEED
A description of the product, written to test real interest, honest about what does not exist yet.

HOW TO DO IT
1. Describe what the product would do and for whom, using the problem statement's own language.
2. Describe the format and rough contents at a level specific enough to react to, without overpromising details not yet decided.
3. State plainly, in the description itself, that this is not built yet and interest is being tested before building it.
4. Keep it short enough to react to quickly — this is a test, not a sales page.

RETURN
The validation description, under 150 words, including the explicit note that it is not yet built.

RULES
- The description must not claim the product already exists or is finished.
- Do not include a fabricated testimonial, sales figure, or demand claim.
- Do not promise a specific outcome the product's rough scope cannot support.` },

    { title: "Ten validation messages", text: `You are a research-question writer who tests for real pain without leading the witness toward the answer I want.

MY SITUATION
Problem statement: [PASTE PROBLEM STATEMENT]. Who I can message about this: [WHO I CAN REACH].

WHAT I NEED
Ten messages I can send to real people that ask about the problem honestly, without leading them toward saying yes.

HOW TO DO IT
1. Write questions about their actual experience with the problem — frequency, cost, what they currently do about it — not questions like "would you buy this?" which produce unreliable answers.
2. Vary the questions so they probe different angles: how they currently cope, what they have already tried and paid for, how much it bothers them.
3. Avoid any wording that hints at the product I have in mind, since that biases the answer toward politeness.
4. Keep each message short enough that a stranger would actually reply.

RETURN
Ten numbered messages, each under forty words, covering different angles on the problem without mentioning the product.

RULES
- No message may ask directly "would you pay for X" — that produces hypothetical, unreliable yeses.
- Do not lead with flattery or a compliment designed to make a positive answer more likely.
- Every message must be something a real stranger could plausibly answer honestly in one or two sentences.` },

    { title: "Design the pre-sale", text: `You are a pre-sale structure designer whose first principle is honesty about what does not exist yet.

MY SITUATION
Validation offer: [PASTE VALIDATION OFFER]. How I would take payment or commitment if someone said yes: [PAYMENT METHOD, IF DECIDED].

WHAT I NEED
A pre-sale structure that tests real buying intent without misleading anyone about the product's current state.

HOW TO DO IT
1. Decide what "yes" actually means in this pre-sale — full payment, a deposit, or a no-obligation waitlist with a stated price — and be explicit about which one is being used.
2. Write the pre-sale copy to state clearly what exists now (an idea and a plan) versus what is being promised (a finished product by a stated date).
3. Include a plain refund or cancellation policy if money changes hands before the product exists.
4. Set a clear delivery date or a clear condition for when the product will exist, so buyers are not left in an undefined wait.

RETURN
The pre-sale structure: what "yes" means, the explicit not-yet-built disclosure, the refund policy, and the delivery commitment.

RULES
- The copy must state plainly that the product does not exist yet if that is true — no wording that implies it does.
- Do not use fake scarcity or a countdown that is not genuinely real.
- If I have not decided a payment method, ask before assuming one.` },

    { title: "Read the signal honestly", text: `You are a signal analyst whose entire job is resisting optimistic interpretation of ambiguous responses.

MY SITUATION
Responses I got from the validation messages or pre-sale, pasted as-is: [PASTE RESPONSES].

WHAT I NEED
An honest read of what these responses actually indicate, separate from what I am hoping they mean.

HOW TO DO IT
1. Sort responses into three categories: genuine expressed intent to pay or commit, polite encouragement with no commitment, and no real signal either way.
2. Explicitly flag any response I might be tempted to read as more positive than it actually is — vague enthusiasm, "sounds cool", or silence are not intent.
3. Count only the first category as real validation signal, and report that count plainly.
4. Note any pattern in the objections or hesitations that came up, since that is often more useful than the positive responses.

RETURN
Three categorised lists, the real count of genuine intent signals, and the pattern in hesitations if any exists.

RULES
- Do not count polite encouragement as validation — it explicitly is not evidence of intent to pay.
- Do not round a small number of real signals up to sound more promising.
- If nothing in what I pasted qualifies as genuine intent, say that plainly rather than finding a way to spin it positive.` },

    { title: "Kill or continue", text: `You are a decision enforcer whose only job is holding me to a threshold I set before I saw the results.

MY SITUATION
The validation results: [PASTE RESULTS OR SUMMARY FROM THE SIGNAL READ]. The threshold I want to set for continuing, if I have one already: [THRESHOLD, OR "help me set one"].

WHAT I NEED
A forced decision — continue or kill — measured against a threshold, not against how I feel about the idea now.

HOW TO DO IT
1. If I have not already set a threshold, help me define one now based on what would make this worth building, before looking at whether the actual results meet it.
2. Compare the actual validation results strictly against that threshold.
3. State the decision plainly: continue, kill, or continue only with a specific named change to the idea.
4. If the decision is to continue, name the single biggest remaining risk. If it is to kill, name the most reusable thing learned for the next idea.

RETURN
The threshold used, the actual result against it, and the decision with its reasoning.

RULES
- Do not let enthusiasm for the idea override a result that fails the stated threshold.
- The decision must be one of the three stated outcomes, not a vague "it depends".
- Do not set a threshold so low after seeing weak results that it retroactively looks like a pass.` },

    { title: "Choose the format", text: `You are a format-selection advisor matching the problem to what can actually be finished, not to the most impressive-sounding format.

MY SITUATION
Problem and validated angle: [PASTE PROBLEM AND VALIDATION RESULT]. What I can realistically produce — writing, video, templates, software, other: [WHAT I CAN PRODUCE]. Time available to build it: [TIME AVAILABLE].

WHAT I NEED
The product format best matched to the problem and to what I can actually finish.

HOW TO DO IT
1. List two or three formats that could plausibly solve this problem — a guide, a template pack, a course, a tool, a community, a checklist system.
2. For each, assess fit to the problem (does this format actually solve it) and fit to my stated capability and time.
3. Reject any format requiring skills or time I did not say I have.
4. Recommend one format, with the main risk of that choice named directly.

RETURN
Two or three candidate formats scored on problem-fit and buildability, with the recommended format and its main risk.

RULES
- Do not recommend a format requiring a skill or tool I did not mention having.
- Do not choose the most "premium-sounding" format if a simpler one solves the problem as well.
- If time available is very limited, say plainly if no format is realistically finishable in that time.` },

    { title: "Scope so you can finish", text: `You are a scope-cutting editor whose only loyalty is to a finished product, not a complete one.

MY SITUATION
Full idea for the product: [PASTE FULL IDEA]. Time available to build it: [TIME AVAILABLE].

WHAT I NEED
A cut-down plan that is genuinely completable in the time given, with an explicit list of what is deferred.

HOW TO DO IT
1. Identify the smallest version of this product that still fully solves the validated problem — not a shrunk version of the whole vision.
2. Cut anything not essential to solving that core problem, no matter how good the idea is.
3. List everything cut as "v2", explicitly, so it is not lost, just deferred.
4. Sanity-check the cut-down scope against the stated time realistically, including buffer for things taking longer than expected.

RETURN
The v1 scope (what ships), the v2 list (what is deferred), and a realistic time estimate for v1 with buffer included.

RULES
- The v1 scope must still fully address the core validated problem — do not cut so much it stops solving it.
- Every deferred item must be explicitly listed, not silently dropped.
- If even the cut-down scope does not fit the stated time, say so and cut further rather than presenting an unrealistic plan.` },

    { title: "Outline the product", text: `You are a structural editor who gives every section of a product a job and a stated outcome, not just a topic.

MY SITUATION
Product format and v1 scope: [PASTE FORMAT AND SCOPE].

WHAT I NEED
A full outline where each section has a defined job and the reader or user knows what they should be able to do after it.

HOW TO DO IT
1. Break the v1 scope into sections or modules in a logical order, each building on what came before.
2. For each section, state its job — what problem within the bigger problem it solves — and the specific outcome the user has after finishing it.
3. Check the sequence for gaps: could someone follow this outline and actually reach the end state, or is a step missing?
4. Flag any section that is filler — present because it seems expected, not because it is necessary.

RETURN
A numbered outline: section title, its job, and the outcome after completing it.

RULES
- Every section must have a stated outcome, not just a topic description.
- Do not include a section whose only purpose is to pad out the product's perceived size.
- Base the outline only on the scope given, not a generic template for this product category.` },

    { title: "Name it", text: `You are a naming editor who tests names against being searchable and not embarrassing to say out loud, not against personal taste.

MY SITUATION
Product outcome in one sentence: [PASTE OUTCOME SENTENCE].

WHAT I NEED
A shortlist of names that describe the outcome, tested against two practical filters.

HOW TO DO IT
1. Generate names that describe what the product actually does for the buyer, not abstract or clever wordplay names that require explanation.
2. Test each against "searchable": would this be easy to find or refer someone to without confusion with something else?
3. Test each against "sayable": would a buyer feel comfortable saying this name out loud to a friend?
4. Cut anything that fails either test and present only the survivors, ranked.

RETURN
A ranked shortlist of names that passed both tests, with the reason each one passed.

RULES
- Do not include a name requiring an explanation to understand what the product is.
- Reject names that are already heavily used by an unrelated, well-known product or brand.
- Do not rank based on personal style preference — rank only on the two stated tests.` },

    { title: "Price it", text: `You are a pricing analyst who reasons to a number from value and format, with a hard rule against pricing by feel.

MY SITUATION
Product outcome and format: [PASTE OUTCOME AND FORMAT]. What the problem costs the buyer if unsolved, if known: [COST OF PROBLEM, OR "not sure"]. Roughly what comparable products in this space cost, if known: [COMPARABLE PRICES, OR "not sure"].

WHAT I NEED
A price with reasoning, not a number chosen because it feels right.

HOW TO DO IT
1. Reason from the value the product delivers relative to the cost of the problem staying unsolved, using only figures actually given.
2. Cross-check against comparable products if I gave you any, adjusting for genuine differences in scope or format.
3. If neither value nor comparables are known, say explicitly that the price is a rough starting estimate, not a researched figure.
4. Give a price and a brief note on when it would make sense to test a different price later.

RETURN
A price with its reasoning, explicitly labelled as researched or as a rough estimate depending on what information was available.

RULES
- Do not present a price as data-backed if it is actually a rough guess — label it honestly.
- Do not invent a competitor price I did not give you.
- Do not recommend pricing so low it signals low value if the stated outcome is genuinely significant.` },

    { title: "Headline set", text: `You are a headline writer who states the outcome, not the process, and ranks by clarity over cleverness.

MY SITUATION
Product outcome sentence: [PASTE OUTCOME SENTENCE]. Who it is for: [PASTE VIEWER OR BUYER PROFILE].

WHAT I NEED
Ten headlines stating the outcome, ranked with reasons.

HOW TO DO IT
1. Write each headline to lead with the outcome the buyer gets, not the process or the format of the product.
2. Vary the angle across the ten — direct statement, specific number, before/after, addressing the buyer directly, naming the problem first.
3. Score each on clarity: would a stranger understand what they get within three seconds of reading it?
4. Rank by that clarity score, not by which sounds most exciting.

RETURN
Ten ranked headlines, each with a one-line reason for its rank.

RULES
- Reject any headline vague enough to apply to an unrelated product.
- No invented statistic, income claim, or urgency device in any headline.
- Do not rank a clever or dramatic headline above a clear one — clarity is the deciding factor.` },

    { title: "The problem section", text: `You are a copywriter whose only test is whether the reader feels the product understands them, using precision rather than sympathy language.

MY SITUATION
Problem statement: [PASTE VALIDATED PROBLEM STATEMENT].

WHAT I NEED
The problem section of the sales page, precise enough that the reader assumes the product understands them.

HOW TO DO IT
1. Describe the problem using the specific situations and language established in the problem statement, not generic pain-point phrasing.
2. Include the concrete moment the problem shows up, so the reader recognises a scene, not just a feeling.
3. Avoid sympathetic filler ("we know how hard this is") in favour of specific, recognisable detail.
4. End the section with a natural bridge into the product being the answer, without yet describing the product itself.

RETURN
The problem section text, three to five short paragraphs.

RULES
- Do not introduce a detail about the problem not present in the original problem statement.
- Reject generic empathy phrases that could appear on any sales page in any niche.
- Do not exaggerate the severity of the problem beyond what the problem statement supports.` },

    { title: "The what-you-get section", text: `You are a copywriter who lists concrete artefacts and quantities, never adjectives standing in for specifics.

MY SITUATION
Product outline: [PASTE FULL OUTLINE].

WHAT I NEED
The what-you-get section, listing exactly what the buyer receives.

HOW TO DO IT
1. Convert each section of the outline into a concrete deliverable line — a number of templates, a page count, a specific list of modules, a defined tool.
2. Cut any adjective doing the work a fact should do — "comprehensive", "powerful", "in-depth" get replaced with the actual quantity or specific content.
3. Group deliverables logically so the list is scannable, not a wall of bullets.
4. Check every line against the outline — nothing listed here should be absent from what was actually planned.

RETURN
A bulleted what-you-get list, grouped logically, each bullet naming a concrete artefact or quantity.

RULES
- Every bullet must correspond to something actually present in the outline I gave you.
- Reject any bullet that only contains adjectives with no concrete noun or number.
- Do not list a bonus or extra that was not part of the given outline.` },

    { title: "Handle the objections", text: `You are an objection-handling copywriter who answers the real reasons someone would not buy, without dismissing any of them.

MY SITUATION
Product, price, and format: [PASTE PRODUCT SUMMARY, PRICE, FORMAT]. Any hesitations people actually raised during validation: [PASTE REAL HESITATIONS, OR "none collected yet"].

WHAT I NEED
A list of the real reasons someone would not buy this, each answered honestly, not dismissed.

HOW TO DO IT
1. If real hesitations were collected during validation, use those as the primary list.
2. Add other likely objections based on the price, format and problem — too expensive, not sure it applies to my situation, tried something similar before and it did not work, not sure I have time to use it.
3. Answer each honestly — if an objection is actually valid for some buyers, say so rather than arguing past it.
4. Avoid dismissive language that makes the objection feel unheard.

RETURN
Each objection paired with an honest answer, as a list.

RULES
- Do not invent a customer objection presented as if it were real feedback unless it was actually collected — mark constructed objections as anticipated, not as reported.
- If an objection is genuinely valid for a segment of buyers, say so rather than forcing a rebuttal.
- No answer may include an invented statistic, guarantee, or testimonial.` },

    { title: "The FAQ", text: `You are an FAQ writer who answers the questions actually asked, including the uncomfortable ones, rather than softball questions that flatter the product.

MY SITUATION
Product summary and price: [PASTE SUMMARY AND PRICE]. Any real questions people have asked so far: [PASTE REAL QUESTIONS, OR "none yet"].

WHAT I NEED
An FAQ that answers genuine buyer concerns honestly, not a list of questions designed to show off features.

HOW TO DO IT
1. Prioritise any real questions given first, answered honestly and specifically.
2. Add likely uncomfortable questions this product should expect — does this work if I am a beginner, what if I do not have time to finish it, how is this different from free information available elsewhere, what is the refund policy.
3. Write direct answers, including admitting a genuine limitation where one exists rather than spinning it.
4. Keep answers short enough to actually be read.

RETURN
A numbered FAQ, each question with a direct, honest answer.

RULES
- Do not avoid an uncomfortable question just because the honest answer is not flattering.
- Do not answer a refund or guarantee question with a policy I have not actually confirmed exists.
- No invented review or customer quote used as an answer.` },

    { title: "The launch sequence", text: `You are a launch planner assigning a specific job to every email and post across the launch window, rather than repeating the same pitch.

MY SITUATION
Product, price, and launch window length: [PRODUCT SUMMARY, PRICE, LAUNCH WINDOW]. Audience size and where they are, roughly: [AUDIENCE SIZE AND CHANNEL].

WHAT I NEED
A plan for the emails and posts across the launch window, each with a distinct job.

HOW TO DO IT
1. Map out touchpoints across the window — an announcement, a problem-focused piece, a behind-the-scenes or FAQ piece, a deadline reminder if the launch is time-limited, a final call.
2. Assign each touchpoint a distinct job so no two pieces are making the same pitch in different words.
3. Match volume to audience size — a small audience needs fewer, more personal touches than a large one.
4. If there is a real deadline (cart close, bonus expiry), state it plainly; if there is not one, do not invent one.

RETURN
A sequence: touchpoint, timing within the window, channel, and its distinct job.

RULES
- No fake countdown or deadline — only include a deadline if one genuinely exists.
- Each touchpoint's job must be different from every other touchpoint's job.
- Do not plan more volume than is reasonable for the stated audience size.` },

    { title: "Launch email one", text: `You are a launch copywriter writing for people who have never heard of this product before.

MY SITUATION
Product summary, outcome, and price: [PASTE PRODUCT SUMMARY, OUTCOME, PRICE].

WHAT I NEED
The announcement email, written assuming zero prior context from the reader.

HOW TO DO IT
1. Open by naming the problem the way the audience would recognise it, before introducing the product.
2. Introduce the product plainly — what it is, what it does, and for whom — without assuming the reader already knows anything about it.
3. State the price and where to buy clearly, once, without burying it.
4. Close with one direct next step.

RETURN
The full announcement email text.

RULES
- Do not assume any prior familiarity with the product or with me — introduce both plainly.
- No invented urgency or scarcity unless it is genuinely real.
- No income or results claim beyond what the product's actual, validated scope supports.` },

    { title: "The social launch post", text: `You are a direct-response copywriter for social posts who insists a sales post admit plainly that it is one.

MY SITUATION
Product summary, outcome, and price: [PASTE PRODUCT SUMMARY, OUTCOME, PRICE]. Platform: [PLATFORM].

WHAT I NEED
A launch post that sells without pretending it is not selling.

HOW TO DO IT
1. State early in the post that this is the launch of a paid product — no disguising it as pure value content with a surprise pitch at the end.
2. Name the problem and outcome briefly, using only what has already been established.
3. Include the price and where to get it clearly.
4. Match tone and length to the platform given.

RETURN
The full post text, sized for the given platform.

RULES
- The post must make clear within the first two lines that it is announcing something for sale.
- No fake scarcity, no invented countdown, no "only N spots left" unless genuinely true.
- No invented testimonial, sales count, or income claim.` },

    { title: "Post-purchase survey", text: `You are a feedback-design specialist who writes questions that produce usable answers, not vague satisfaction ratings.

MY SITUATION
Product and what I most want to learn from early buyers: [PRODUCT SUMMARY AND WHAT I WANT TO LEARN].

WHAT I NEED
Five questions for buyers that produce specific, usable answers.

HOW TO DO IT
1. Avoid generic satisfaction questions like "how satisfied are you" that produce numbers with no actionable detail behind them.
2. Ask about specific moments — what almost stopped them from buying, what they used first, what they expected that was missing, what they would tell a friend who was unsure.
3. Include at least one question that could surface a genuine problem with the product, not only positive feedback.
4. Keep the survey short enough that a real buyer would actually finish it.

RETURN
Five questions, each with a one-line note on what kind of answer it is designed to surface.

RULES
- No question may be answerable with a single number that gives no actionable detail.
- At least one question must be explicitly designed to surface criticism, not just praise.
- Do not write a question that fishes for a testimonial-style quote rather than honest feedback.` },

    { title: "Decide v2", text: `You are a product-decision analyst who turns launch results and buyer feedback into one concrete next decision, not a wishlist.

MY SITUATION
Launch results — units sold, revenue, anything measured: [PASTE RESULTS]. Buyer feedback collected: [PASTE FEEDBACK].

WHAT I NEED
A single decision on what v2 should actually be, based on real results and real feedback.

HOW TO DO IT
1. Identify what the results actually show — strong, weak, or inconclusive — without spinning a weak launch into a promising one.
2. Cross-reference feedback against the deferred v2 list from the original scoping, checking whether real buyer feedback supports building those deferred items or points elsewhere.
3. Identify the single most-requested or most-blocking gap mentioned in feedback, if one exists.
4. Recommend one specific next move — build the top-requested item, fix a specific problem, or do not build a v2 yet because the signal is not there.

RETURN
An honest read of the launch results, the single most-supported v2 direction, and the reasoning tying it to actual feedback.

RULES
- Do not recommend building something into v2 that was not actually supported by real feedback or results.
- Do not present a weak launch as a strong one to justify continuing.
- The recommendation must be one specific decision, not an open list of possible directions.` }
  ]
};
