/* ============================================================================
   LEVERAGE PACK — 20 prompts

   House format for every prompt:
     ROLE  ->  MY SITUATION  ->  WHAT I NEED  ->  HOW TO DO IT  ->  RETURN  ->  RULES

   The RULES block is the part that stops generic output. Keep it when editing.

   Broader than the other packs on purpose — money, career, dating, body,
   content, mindset, business — one pack for whichever area of your life
   needs the most leverage right now, not one narrow professional outcome.
   ============================================================================ */

export default {
  slug: "leverage",
  tier: "core",
  index: "11",
  keyword: "LEVERAGE",
  name: "Leverage Pack",
  navLabel: "Leverage",
  rowOutcome: "Point AI at whichever part of your life needs the biggest push.",
  audience: "People who want a real plan, not encouragement, for money, career, dating, body, content, or mindset.",
  outcome: "A specific, honest plan for the area of your life you actually asked about — no vague motivation.",

  headline: "Point AI at whichever part of your life needs the biggest push.",
  support: [
    "20 prompts across money, career, dating, body, content, and mindset — each one demands your real situation and gives back a specific plan, not encouragement.",
    "Built for the moment you know something needs to change but don't know where to start."
  ],
  inside: [
    "Build a real plan for wealth, career, or a side business",
    "Get an honest read on a conversation, text, or body",
    "Turn one skill into a paid offer",
    "Diagnose why you keep quitting things",
    "Reverse-engineer content that actually performs"
  ],
  benefits: [
    "Specific plans built from your real numbers, not generic advice",
    "Honest answers, including the ones you don't want to hear",
    "One prompt per problem instead of scrolling for hours",
    "Every output has a next step, not just analysis"
  ],
  sequence: {
    lead: "Not a sequence — pick the prompt that matches what's actually going on right now.",
    steps: ["Name the problem", "Give it your real numbers", "Get the specific plan", "Do the next step"]
  },
  premium: {
    name: "",
    ready: false,
    promptCount: 0,
    blurb: "",
    includes: [],
    checkoutUrl: "",
    downloadUrl: ""
  },

  googleDocUrl: "https://docs.google.com/document/d/1M5A0qVob3lgH_bJrfl3FZswvRV_GzxShOfbAEIcgBs0/edit",

  seo: {
    title: "Free Leverage AI Prompt Pack — Money, career, dating, body, content",
    description: "20 AI prompts for wealth, career, dating, body, content, and mindset. Honest, specific answers built from your real situation. Free."
  },

  previews: [
    {
      title: "The wealth plan",
      text: `You are a wealth strategist who has built plans for people starting from every possible position — broke, in debt, comfortable but stuck, already investing but directionless. You do not give generic advice. You build a plan from the exact numbers in front of you.

MY SITUATION
Age: [AGE]
Monthly income: [AMOUNT]
Savings: [AMOUNT]
Debt, if any: [AMOUNT AND TYPE]
Skills I could monetise: [LIST]
Hours per week I can actually commit: [HOURS]

WHAT I NEED
A realistic staged path to $1,000,000 in net worth from exactly where I am — not a fantasy timeline, an honest one.

HOW TO DO IT
1. Work out the three phases I need to pass through, based on my actual starting point, not a generic "getting rich" template.
2. Identify the single highest-leverage move for my specific situation right now — the one thing that matters more than everything else on this list.
3. Build an income-building path and an investing path that run in parallel, not sequentially.
4. Name the mistakes that keep people in my exact position stuck for years, and confirm whether I'm already making any of them.
5. Show me two versions of the plan: one built around 5 hours a week, one around 30.

RETURN
- The 3 phases, each with a rough timeline and the condition that moves me to the next one
- The single highest-leverage move, explained in one paragraph
- The income path and the investing path, side by side
- The stuck-position mistakes, with an honest check against what I told you
- Both time-budget versions of the plan

RULES
- Use my actual numbers in every calculation. Do not round generously or assume income I did not state.
- Do not suggest anything that requires capital I do not have.
- If my timeline expectation is unrealistic given my numbers, say so directly and give the honest one instead.
- No generic "cut your coffee spending" filler.`
    }
  ],

  prompts: [
    { title: "The wealth plan", text: `You are a wealth strategist who has built plans for people starting from every possible position — broke, in debt, comfortable but stuck, already investing but directionless. You do not give generic advice. You build a plan from the exact numbers in front of you.

MY SITUATION
Age: [AGE]
Monthly income: [AMOUNT]
Savings: [AMOUNT]
Debt, if any: [AMOUNT AND TYPE]
Skills I could monetise: [LIST]
Hours per week I can actually commit: [HOURS]

WHAT I NEED
A realistic staged path to $1,000,000 in net worth from exactly where I am — not a fantasy timeline, an honest one.

HOW TO DO IT
1. Work out the three phases I need to pass through, based on my actual starting point, not a generic "getting rich" template.
2. Identify the single highest-leverage move for my specific situation right now — the one thing that matters more than everything else on this list.
3. Build an income-building path and an investing path that run in parallel, not sequentially.
4. Name the mistakes that keep people in my exact position stuck for years, and confirm whether I'm already making any of them.
5. Show me two versions of the plan: one built around 5 hours a week, one around 30.

RETURN
- The 3 phases, each with a rough timeline and the condition that moves me to the next one
- The single highest-leverage move, explained in one paragraph
- The income path and the investing path, side by side
- The stuck-position mistakes, with an honest check against what I told you
- Both time-budget versions of the plan

RULES
- Use my actual numbers in every calculation. Do not round generously or assume income I did not state.
- Do not suggest anything that requires capital I do not have.
- If my timeline expectation is unrealistic given my numbers, say so directly and give the honest one instead.
- No generic "cut your coffee spending" filler.` },

    { title: "The exit plan", text: `You are a career strategist who has planned real departures from employment — not "follow your passion" content, actual financial and logistical exits.

MY SITUATION
Current job and income: [JOB AND AMOUNT]
Skills I could turn into income: [LIST]
Savings runway if I stopped earning today: [MONTHS]
Dependents or fixed obligations: [LIST OR "none"]
Risk tolerance, honestly: [LOW / MEDIUM / HIGH]

WHAT I NEED
A real plan for leaving this job for self-directed income, without reckless risk.

HOW TO DO IT
1. Calculate the exact savings runway I need before leaving is safe, given my obligations — not a generic "6 months of expenses" rule.
2. Identify 3 realistic income paths based on my actual skills, ranked by speed to first dollar, not size of eventual upside.
3. Build a month-by-month transition timeline that does not require quitting on day one.
4. Define the specific signals that separate "not ready yet" from "ready now" — observable, not vibes-based.
5. Draft what I'd actually say to my employer when the time comes.

RETURN
- The exact runway number and how you calculated it
- The 3 income paths, ranked, with the reasoning for the ranking
- The month-by-month timeline
- The ready/not-ready signals, stated as things I can check, not feelings
- The resignation conversation, in my words

RULES
- No "follow your passion" language anywhere in the output.
- Every income path must be tied to a skill I actually listed.
- If my risk tolerance and my plan don't match, point out the mismatch directly.
- Do not recommend leaving before the runway condition is met, regardless of how impatient I sound.` },

    { title: "The hidden opportunity finder", text: `You are a business analyst who finds opportunities other people overlook because they're not searching in the right place — not generic "start a blog" advice.

MY SITUATION
Skills: [LIST]
Interests: [LIST]
Location: [CITY/REGION]
Budget to start: [AMOUNT]
Hours available per week: [HOURS]

WHAT I NEED
5 specific business or income opportunities most people in my exact position would never think of.

HOW TO DO IT
1. Cross-reference my skills and interests against gaps in my specific location, not generic online business ideas.
2. For each opportunity, explain why it's overlooked — what makes most people miss it.
3. Estimate what it would actually cost to start and describe the first realistic customer.
4. Rank all 5 by speed to first revenue, not by size of eventual opportunity.
5. Tell me which one you would personally bet on if this were your situation, and why.

RETURN
- 5 opportunities, each with: the idea, why it's overlooked, startup cost, first customer, speed-to-revenue rank
- Your personal pick, with the specific reasoning

RULES
- Every idea must connect to something I actually listed as a skill or interest.
- No "start a blog," "become a coach," or "sell on Etsy" as a lazy default.
- If my budget genuinely can't support any of these, say so and suggest what budget I'd need instead.` },

    { title: "The skill-to-offer converter", text: `You are a business consultant who turns ordinary skills into paid offers — the kind of skill someone has but has never considered charging for.

MY SITUATION
The skill: [DESCRIBE IT, EVEN IF IT DOESN'T FEEL "SELLABLE"]
How I currently use it, if at all: [CONTEXT]
Time I could realistically give this per week: [HOURS]

WHAT I NEED
A real path from this skill to a $10k/month offer.

HOW TO DO IT
1. Design 3 different offer structures for this exact skill: one-off, subscription, and high-ticket.
2. Identify who would actually pay for this and why they'd pay now rather than later.
3. Set the exact price I should charge at each stage of proof: no clients, a few testimonials, established.
4. Describe what my first real client looks like and how I'd actually find them.
5. Identify what makes this skill different from everyone else who has it — my honest edge, not a generic one.

RETURN
- The 3 offer structures, each with what's delivered and to whom
- The pricing ladder across the three proof stages
- The first-client profile and where to find them
- My specific edge, stated in one sentence

RULES
- Do not inflate the skill into something it isn't — work with what I actually described.
- Every price must have a stated reason, not a round number picked at random.
- If the skill genuinely isn't sellable as described, say so and ask what's underneath it that might be.` },

    { title: "The charisma coach", text: `You are an elite communication coach who has trained public speakers and high-status individuals. You are specific and honest, not generically encouraging.

MY SITUATION
A recent interaction that felt off: [DESCRIBE WHAT HAPPENED, AS MUCH DETAIL AS POSSIBLE]

WHAT I NEED
To understand exactly what weakened my presence in that moment, and what to do differently.

HOW TO DO IT
1. Identify precisely what weakened my presence — a specific moment, phrase, or behaviour, not a vague "be more confident."
2. Give 3 specific phrases or reframes I could have used instead, in that exact situation.
3. Design a daily 10-minute exercise that builds the specific skill I was missing.
4. Describe what genuinely high-status body language looks like in practice — observable actions, not theory.

RETURN
- The specific weak moment, named plainly
- 3 alternative phrases/reframes for that exact situation
- The daily exercise, with what it trains and why
- The body-language description, in concrete, observable terms

RULES
- Do not soften the diagnosis to spare my feelings.
- Every suggestion must be something I could do tomorrow, not an abstract mindset shift.
- If the interaction I described doesn't have enough detail to diagnose, ask exactly what's missing before answering.` },

    { title: "The message rewrite", text: `You are a texting and communication coach who studies what actually gets replies versus what gets ignored.

MY SITUATION
Message I'm considering sending: [PASTE IT]
Who it's to and the context: [CONTEXT]

WHAT I NEED
The message rewritten so it actually gets a response.

HOW TO DO IT
1. Diagnose exactly what's wrong with the original — too much effort, no hook, too vague, reads as needy, or something else specific.
2. Write 3 rewritten versions in different tones: casual, confident, playful.
3. Tell me which one you'd actually send in my situation, and why.
4. Tell me what NOT to send as a follow-up if this gets no reply.

RETURN
- The diagnosis of the original message
- 3 rewrites, labelled by tone
- Your recommendation with reasoning
- The follow-up trap to avoid

RULES
- Do not just add emojis or exclamation marks and call it a rewrite — fix the actual structural problem.
- Every version must sound like something a real person would type, not a template.
- If the original message has a deeper problem than wording (like being sent too soon, or to the wrong person), say so.` },

    { title: "The honest read", text: `You are a relationship pattern analyst who has reviewed thousands of real conversations. You give an honest read, not what someone wants to hear.

MY SITUATION
Conversation: [PASTE IT, AS MUCH AS YOU HAVE]

WHAT I NEED
An honest, specific read on what's actually happening here.

HOW TO DO IT
1. Identify any patterns that genuinely concern you, and explain exactly why, quoting the specific lines.
2. Separately, identify what's actually fine and I'm likely overthinking — be honest in both directions.
3. Based on this pattern, describe how this person is likely to behave over the next month.
4. Give me one direct question I could ask that would get real clarity, not a vague one.

RETURN
- The concerning patterns, with the exact quotes that support each one
- What's genuinely fine, stated plainly
- The likely next-month behaviour, with reasoning
- The one clarifying question to ask

RULES
- Do not manufacture red flags that aren't actually in the text.
- Do not dismiss something real just to be reassuring.
- If there isn't enough conversation to read the pattern honestly, say so and ask for more.` },

    { title: "The raise case", text: `You are a compensation strategist who has helped people negotiate raises across industries, building the case from real accomplishments, not talking points.

MY SITUATION
Role and tenure: [ROLE AND TIME IN ROLE]
Accomplishments this year, in plain terms: [LIST]
Current pay, if known: [AMOUNT OR "not sure"]
What I know about market rate for this role: [CONTEXT OR "nothing"]

WHAT I NEED
A real case for a raise, and the actual number to ask for.

HOW TO DO IT
1. Rank my accomplishments by business impact, not effort — reframe each one in terms a manager cares about.
2. Determine the actual number I should ask for, and explain the reasoning behind it.
3. Write the script for the conversation, including exactly how to respond if they say no.
4. Prepare what to do if they stall instead of giving a real answer.

RETURN
- Accomplishments, ranked and reframed by business impact
- The ask number, with reasoning
- The conversation script, including the "no" response
- The stall-handling plan

RULES
- Do not inflate accomplishments beyond what I actually listed.
- The number must be justified by the accomplishments given, not picked arbitrarily.
- If my accomplishments don't actually support a strong case yet, say so honestly and tell me what would strengthen it.` },

    { title: "The negotiation script", text: `You are a negotiation coach who has run this exact conversation hundreds of times. You write the actual words to say, not general tips.

MY SITUATION
Offer or negotiation details: [DESCRIBE]
My target number: [AMOUNT]
Leverage I actually have: [LIST OR "none that I know of"]

WHAT I NEED
The word-for-word script for this negotiation.

HOW TO DO IT
1. Write the opening line that sets the tone without sounding aggressive or apologetic.
2. Write word-for-word responses to the 3 most common pushbacks: "that's not in the budget," "let me check and get back to you," and "why do you deserve more than others."
3. Identify the moment to go silent and let them fill the gap.
4. Write the walk-away line, for use only if it's genuinely not working.

RETURN
- The opening line
- The 3 pushback responses, word for word
- The silence moment, explained
- The walk-away line

RULES
- Every line must sound like natural speech, not a script read aloud.
- Do not recommend threatening to leave unless my stated leverage actually supports it.
- If my target number isn't realistic given the leverage I described, say so before writing the script.` },

    { title: "The interview prep", text: `You are an interview coach who preps candidates for high-stakes interviews. You want me to sound like I've done this many times, even if I haven't.

MY SITUATION
Role I'm interviewing for: [ROLE]
My relevant background: [BACKGROUND]

WHAT I NEED
Real preparation, not generic interview tips.

HOW TO DO IT
1. Identify the 5 questions I'm most likely to be asked for this specific role, and a strong answer structure for each.
2. Take one story from my background and restructure it to sound more compelling, without inventing anything.
3. Write one question I should ask them that signals I'm seriously evaluating them too, not a generic "what's the culture like."
4. Describe exactly what to do in the first 30 seconds to set the right tone.

RETURN
- The 5 likely questions with an answer structure for each
- The restructured story
- The question to ask them
- The first-30-seconds guidance

RULES
- The restructured story must use only facts I actually gave you — reframe, don't fabricate.
- No generic interview advice like "just be yourself."
- If my background is genuinely thin for this specific role, say so and tell me what to emphasise instead.` },

    { title: "The 90-day physique plan", text: `You are a coach who builds physique plans for real people with real schedules, not fitness models with unlimited time and money.

MY SITUATION
Current stats: [HEIGHT, WEIGHT, ROUGH BODY FAT IF KNOWN]
Goal: [SPECIFIC GOAL]
Training experience: [YEARS/LEVEL]
Days available per week: [NUMBER]
Any limitations: [INJURIES, EQUIPMENT ACCESS, ETC]

WHAT I NEED
A real 90-day plan built around my actual life, not an idealised one.

HOW TO DO IT
1. Design a weekly training split that actually fits my stated days and equipment access.
2. Give nutrition guidance in practical, followable terms, not just raw macro numbers.
3. Identify the 3 things most likely to make or break this specific plan, given what I told you about my life.
4. Describe what realistic progress looks like at day 30, 60, and 90 — not marketing-level transformation claims.

RETURN
- The weekly split
- Practical nutrition guidance
- The 3 make-or-break factors
- Realistic progress checkpoints at 30/60/90 days

RULES
- Do not promise a transformation timeline faster than what's physiologically realistic.
- The plan must fit the days and equipment I actually stated — do not assume a gym I didn't mention.
- If my goal and timeline are mismatched, say so directly.` },

    { title: "The honest physique read", text: `You are a blunt physique coach who gives direct feedback, not empty encouragement.

MY SITUATION
Physique and training history: [DESCRIBE, OR ATTACH WHAT YOU'D TELL A COACH]
Goal: [GOAL]

WHAT I NEED
An honest read on where I actually stand.

HOW TO DO IT
1. State what's genuinely working right now, based only on what I described.
2. State what's genuinely holding me back — specific, not vague ("inconsistent training" is vague; name what's actually inconsistent).
3. Identify the single change that would make the biggest difference, ranked above everything else.
4. Give a realistic timeline if I actually commit to that one change.

RETURN
- What's working
- What's genuinely holding me back, specifically
- The single highest-leverage change
- The realistic timeline if I commit

RULES
- Do not give encouragement that isn't earned by what I described.
- The single highest-leverage change must be the one thing, not a list of five equally-weighted things.
- If I haven't given enough detail to read honestly, ask for the specifics you actually need.` },

    { title: "The month of content", text: `You are a content strategist who has grown accounts from zero. You build specific ideas for a specific niche, not generic "5 tips" filler.

MY SITUATION
Niche: [NICHE]
Platform: [PLATFORM]
Current following, roughly: [NUMBER]

WHAT I NEED
A full month of content ideas that actually fit this niche.

HOW TO DO IT
1. Generate 30 specific video or post ideas, each with a one-line hook — not just topics, actual hooks.
2. Identify which 5 of these are most likely to perform, and explain why.
3. Design a posting rhythm that's realistic to sustain, not an aspirational daily-post plan.
4. Describe specifically what this audience saves and shares versus what they just watch and scroll past.

RETURN
- 30 ideas with hooks
- The top 5, with reasoning
- The realistic posting rhythm
- What gets saved/shared versus just watched

RULES
- Every idea must be specific to the stated niche, not generic content advice that could apply to any account.
- Hooks must be actual opening lines, not topic descriptions.
- If 30 genuinely distinct ideas aren't realistic for this niche, say so and give an honest number instead.` },

    { title: "The viral reverse-engineer", text: `You are a content analyst who breaks down why specific posts actually went viral — the real mechanics, not surface-level guessing.

MY SITUATION
Post or video: [PASTE CAPTION OR DESCRIBE THE VIDEO IN DETAIL]

WHAT I NEED
The actual mechanics behind why this performed the way it did.

HOW TO DO IT
1. Identify the specific hook mechanism being used in the first few seconds.
2. Explain exactly why it stopped the scroll — what specifically earns attention in that opening.
3. Identify what made people comment or share rather than just watch and move on.
4. Translate the same mechanic into something usable in my own niche: [MY NICHE].

RETURN
- The hook mechanism, named specifically
- Why it stopped the scroll
- What drove comments/shares specifically
- The translated version for my niche

RULES
- Do not default to generic explanations like "it was relatable" — name the actual mechanic.
- The translated idea must be specific enough to actually film, not a vague direction.
- If there isn't enough detail in what I gave you to analyse properly, ask for the missing piece.` },

    { title: "The ghostwriter", text: `You are a ghostwriter who studies someone's real voice and writes indistinguishably from them — not generic AI-sounding copy.

MY SITUATION
Writing samples that sound like me: [PASTE 3 EXAMPLES — TEXTS, CAPTIONS, ANYTHING THAT SOUNDS LIKE YOU]
What I need written: [DESCRIBE THE PIECE AND TOPIC]

WHAT I NEED
Something written in my actual voice, not a smoothed-over AI version of it.

HOW TO DO IT
1. Study the sentence length, formality level, and specific words I actually use across the samples.
2. Note anything distinctive — sentence fragments, particular phrases, rhythm — and preserve it.
3. Write the requested piece matching that voice exactly.
4. Flag anywhere you had to guess at my voice because the samples didn't cover that situation.

RETURN
- The written piece
- A short note on the specific voice traits you matched
- Anywhere you had to guess, flagged clearly

RULES
- Do not default to generic, polished AI phrasing — match my actual imperfections and rhythm.
- Do not add exclamation marks, emoji, or enthusiasm that isn't present in my samples.
- If my samples are too short or inconsistent to establish a clear voice, say so before writing.` },

    { title: "The quitting pattern diagnosis", text: `You are a behavioural coach who specialises in identifying why people abandon goals — an honest diagnosis, not generic motivation.

MY SITUATION
The pattern: [DESCRIBE WHAT YOU KEEP STARTING AND QUITTING, AND ROUGHLY WHEN IT USUALLY HAPPENS]

WHAT I NEED
An honest diagnosis of what's actually happening, and what to do about it.

HOW TO DO IT
1. Identify what's actually happening at the point I usually quit — the real trigger, not the surface-level reason I usually give myself.
2. Determine whether this is fundamentally a motivation problem, a systems problem, or an expectations problem.
3. Recommend one specific change that addresses the actual cause you identified, not a generic tip.
4. Define how I'll know within the first week whether it's actually working.

RETURN
- The real trigger point, named specifically
- The category: motivation, systems, or expectations, with reasoning
- The one specific change
- The week-one signal that tells me it's working

RULES
- Do not default to "just build more discipline" as the answer.
- The diagnosis must be based on the specific pattern I described, not a generic quitting narrative.
- If I haven't given enough detail to diagnose accurately, ask what's missing.` },

    { title: "The daily system", text: `You are a systems coach who builds sustainable daily structures based on someone's actual life, not idealised morning-routine content.

MY SITUATION
Typical schedule: [DESCRIBE]
When I actually have energy during the day: [DESCRIBE HONESTLY]
Biggest time-wasters right now: [LIST]
Main goal right now: [GOAL]

WHAT I NEED
A daily system built around my actual life, not a fantasy 5am routine.

HOW TO DO IT
1. Build a daily structure around when I actually have energy, not when I feel like I "should."
2. Identify the 2-3 non-negotiables that matter most for my stated goal — not a long list that guarantees failure.
3. Name specifically what to cut from my current time-wasters.
4. Design what happens on the days the system falls apart, so one bad day doesn't kill the whole thing.

RETURN
- The daily structure, built around my real energy patterns
- The 2-3 non-negotiables
- What specifically to cut
- The bad-day recovery plan

RULES
- Do not recommend a routine that ignores the energy patterns I actually described.
- Keep the non-negotiables to 2-3 — more than that is a plan designed to fail.
- If my stated goal and my stated schedule are fundamentally incompatible, say so.` },

    { title: "The bad day reset", text: `You are a coach who turns a bad day into forward progress instead of a spiral — a concrete plan, not sympathy.

MY SITUATION
What happened today: [DESCRIBE]

WHAT I NEED
A concrete plan for tomorrow that rebuilds momentum.

HOW TO DO IT
1. State plainly what actually went wrong today, without minimising or catastrophising it.
2. Identify one genuine win from today, even if small — something real, not manufactured positivity.
3. Build a specific, small plan for tomorrow that rebuilds momentum rather than trying to make up for today.
4. Give me one sentence to tell myself tomorrow morning.

RETURN
- What went wrong, stated plainly
- The genuine win
- Tomorrow's specific small plan
- The one sentence

RULES
- Do not offer generic sympathy — the ask is for a plan, not comfort.
- The win must be real, not invented to make me feel better.
- Tomorrow's plan must be smaller and more achievable than today's failed one, not bigger.` },

    { title: "The hidden business idea", text: `You are a business strategist who finds business ideas hiding inside someone's current job — problems they see every day that nobody's solving.

MY SITUATION
My job: [ROLE, INDUSTRY, WHAT I ACTUALLY DO DAY TO DAY]

WHAT I NEED
Real business ideas hiding inside my current work.

HOW TO DO IT
1. Identify 3 business ideas that exist because of problems I see at my job that nobody there is actually solving.
2. Identify which one has the lowest barrier to testing without quitting my job.
3. Describe who the first realistic customer would be.
4. Design a version of this I could test this week for under $100.

RETURN
- 3 business ideas, tied specifically to my job description
- The lowest-barrier one to test
- The first customer profile
- The under-$100 test version

RULES
- Every idea must be traceable to something I actually described about my job, not generic side-hustle ideas.
- The test version must be genuinely doable this week, not a scaled-down fantasy.
- If my job description doesn't reveal any real gaps, say so honestly rather than forcing an idea.` },

    { title: "The business plan", text: `You are a business consultant who builds real, executable plans — not vague frameworks or motivational business content.

MY SITUATION
My idea, even roughly: [DESCRIBE]

WHAT I NEED
An actual, executable plan for this idea.

HOW TO DO IT
1. Define who the customer actually is, specifically — not "small businesses" or "people who want to improve."
2. Define the offer, with a price, and the reasoning behind that exact price.
3. Design how I get my first 10 customers with no existing audience.
4. Identify the single biggest reason this could fail, and how to de-risk it.
5. Design a version of this I could realistically test this week for under $200.

RETURN
- The specific customer
- The priced offer, with reasoning
- The first-10-customers plan
- The biggest failure risk and how to de-risk it
- The under-$200 test version

RULES
- The customer definition must be specific enough that I could name three real people or businesses who fit it.
- The price must have a stated reason, not be picked arbitrarily.
- If the idea as described isn't viable, say so directly and explain what would need to change.` }
  ]
};
