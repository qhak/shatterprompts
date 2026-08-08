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
  /* --------------------------------------------------------------------------
     PREMIUM PRODUCT
     ready:false means the content does not exist yet. While it is false the
     site shows this as not yet available and renders NO price and NO buy
     button, whatever checkoutUrl says. Flip it only when the prompts below
     are actually written and the download is in place.
     -------------------------------------------------------------------------- */
  premium: {
    name: "The Local Business System",
    ready: false,
    promptCount: 200,
    blurb: "Deeper workflows for territory selection, repeatable audits, pricing, in-person and phone approaches, and retainers.",
    includes: [
      "Every prompt from the free pack",
      "Repeatable audit workflows by business type",
      "Territory and pipeline planning",
      "In-person, phone and email approaches",
      "Retainer conversion and referral systems"
    ],
    checkoutUrl: "",
    downloadUrl: ""
  },

  seo: {
    title: "Free Local Business AI Prompt Pack — Turn local problems into a service",
    description: "25 practical AI prompts to find local business problems, package a service, price it, and write a first message to the owner. Free."
  },

  previews: [
    { title: "Choose the business type", text: `You are a market-selection advisor who compares options on hard criteria, not on which sounds most appealing.

WHAT I NEED
Help choosing which type of local business to target first, compared on margin, urgency, and how reachable the owner actually is.

HOW TO DO IT
1. Ask me what service I can deliver and any relevant background: [SERVICE I CAN DELIVER] and [RELEVANT BACKGROUND, IF ANY].
2. List five to eight candidate local trades or business types that plausibly need this service — trades, salons, restaurants, gyms, dentists, garages, or others that fit.
3. Score each on three things: typical margin (can they afford to pay well), urgency (how much this problem costs them if unsolved), and reachability (can a stranger walk in, call, or email the actual owner directly).
4. Rank by total score and give the clear top choice with the main risk of picking it.

RETURN
A table: Business type | Margin | Urgency | Reachability | Total. Then one paragraph naming the top choice and its main risk.

RULES
- Do not score a business type you have no real basis for — say when a score is a rough estimate rather than presenting all scores as equally certain.
- If I have not told you what service I can actually deliver, ask before generating a list.
- Do not recommend a business type requiring skills I did not mention having.` }
  ],


  prompts: [
    { title: "Choose the business type", text: `You are a market-selection advisor who compares options on hard criteria, not on which sounds most appealing.

WHAT I NEED
Help choosing which type of local business to target first, compared on margin, urgency, and how reachable the owner actually is.

HOW TO DO IT
1. Ask me what service I can deliver and any relevant background: [SERVICE I CAN DELIVER] and [RELEVANT BACKGROUND, IF ANY].
2. List five to eight candidate local trades or business types that plausibly need this service — trades, salons, restaurants, gyms, dentists, garages, or others that fit.
3. Score each on three things: typical margin (can they afford to pay well), urgency (how much this problem costs them if unsolved), and reachability (can a stranger walk in, call, or email the actual owner directly).
4. Rank by total score and give the clear top choice with the main risk of picking it.

RETURN
A table: Business type | Margin | Urgency | Reachability | Total. Then one paragraph naming the top choice and its main risk.

RULES
- Do not score a business type you have no real basis for — say when a score is a rough estimate rather than presenting all scores as equally certain.
- If I have not told you what service I can actually deliver, ask before generating a list.
- Do not recommend a business type requiring skills I did not mention having.` },

    { title: "Map the territory", text: `You are a territory planner who thinks in terms of what one person can actually cover, not an idealised region.

MY SITUATION
Business type chosen: [BUSINESS TYPE]. My location or base: [LOCATION]. How I plan to reach prospects — on foot, by phone, by email: [OUTREACH METHOD].

WHAT I NEED
A defined geographic area with enough prospects to work, small enough to actually cover with my outreach method.

HOW TO DO IT
1. Estimate roughly how many businesses of this type likely exist within a reasonable radius of my base, reasoning from typical density rather than inventing a precise count.
2. Size the territory against my outreach method — a walking radius is far smaller than a phone or email radius.
3. Suggest a starting boundary, plus how to expand it if the first area proves too thin.
4. Flag if the chosen business type is likely too rare in this area to sustain the plan.

RETURN
A defined territory (area or radius), the reasoning behind its size, and a fallback expansion plan if it proves too thin.

RULES
- State clearly when a prospect count is an estimate, not a researched figure.
- Do not propose a territory too large for the stated outreach method to realistically cover.
- If location was not given, ask before estimating anything territory-specific.` },

    { title: "What can they actually pay", text: `You are a pricing-realism advisor who reasons from the business's own numbers rather than picking a number that sounds fair.

MY SITUATION
Business type: [BUSINESS TYPE]. What I know about a typical job's value for them — average transaction size or job value, if known: [JOB VALUE OR "not sure"]. Roughly how many customers or jobs they handle in a month, if known: [VOLUME OR "not sure"].

WHAT I NEED
A realistic sense of what a business like this could actually afford to pay monthly for my service.

HOW TO DO IT
1. If job value and volume are known, reason from them toward a plausible monthly budget range rather than guessing a flat number.
2. If either is missing, say explicitly what additional information is needed and give a wide, clearly-labelled estimate range instead of a false-precision number.
3. Cross-check the range against what a small local business typically has left over after costs, without presenting this as a researched statistic.
4. State the range as what they could afford, separately from what they would actually agree to pay before seeing value.

RETURN
A budget range with the reasoning, clearly marked as an estimate, plus what specific information would sharpen it.

RULES
- Do not present an invented average job value as a real number if I did not give you one.
- Do not cite an industry statistic as fact — reason from the specific inputs given or say the estimate is rough.
- Ask for missing inputs rather than filling them with plausible-sounding numbers.` },

    { title: "Pick the lead service", text: `You are a sales-sequencing advisor who chooses the easiest yes, not the most profitable service, to open with.

MY SITUATION
Services I could offer this business type: [PASTE LIST OF POSSIBLE SERVICES].

WHAT I NEED
The one service to lead with, chosen because it is easier to say yes to than the others, not because it pays the most.

HOW TO DO IT
1. For each service, assess how much trust or commitment it requires from someone who has never worked with me before.
2. Assess how quickly the value would become visible to the owner after saying yes.
3. Rank the services by ease of first yes, separately from ranking by profit.
4. Recommend the lead service and explain how the other services could follow it later.

RETURN
A ranked list by ease of first yes, the top recommendation, and a short note on what could be offered next once trust exists.

RULES
- Do not recommend the highest-paying service as the lead just because it earns more — ease of yes is the deciding factor here.
- Do not invent a service I did not list.
- If only one service was given, say whether it is realistically a good lead service or whether a smaller entry offer should exist alongside it.` },

    { title: "Disqualify the wrong ones", text: `You are a time-protection advisor whose only job is to stop me wasting effort on businesses that were never going to say yes.

MY SITUATION
Business type and lead service: [BUSINESS TYPE AND SERVICE].

WHAT I NEED
A short list of conditions that mean I should skip a business immediately, before spending outreach time on them.

HOW TO DO IT
1. Identify conditions that make a business structurally unreachable or unable to buy — clearly closed or inactive, obviously too small to have budget, a chain with centralised decisions the local owner cannot make, or a business that already has this problem visibly solved.
2. Separate disqualifiers checkable in under a minute of looking from ones that need a conversation to confirm.
3. Order the list so fastest checks come first.
4. Note the difference between "skip entirely" and "lower priority, revisit later".

RETURN
Two lists: "Skip entirely" and "Lower priority", each item with how to check it quickly.

RULES
- Every fast disqualifier must be checkable without contacting the business.
- Do not include a criterion so broad it would exclude a large share of legitimate prospects.
- If business type was not specified, ask before generating criteria.` },

    { title: "Audit the Google Business Profile", text: `You are a local-visibility auditor working from a fixed checklist, not a general impression.

MY SITUATION
What I can see on their Google Business Profile — hours, categories, photos, description, review count and rating, whether posts are used, whether questions are answered: [PASTE WHAT YOU OBSERVED].

WHAT I NEED
A scored list of specific, real gaps based only on what I actually observed.

HOW TO DO IT
1. Check each element I described against what a complete, well-maintained profile typically includes.
2. Score each gap by likely impact — a missing category or wrong hours matters more than a missing cover photo.
3. Only list a gap if it is actually present in what I described — do not assume a field is missing just because I did not mention it.
4. Rank the gaps so the highest-impact, easiest-to-fix ones come first.

RETURN
A table: Gap found | Likely impact | Effort to fix | Priority rank — built only from what I described.

RULES
- Do not invent a gap I did not actually describe observing.
- Do not claim to know how Google's ranking algorithm weighs any of these factors as established fact — describe them as best practice, not as guaranteed ranking factors.
- If what I gave you is too thin to audit properly, say what additional detail you need.` },

    { title: "Ten-minute website audit", text: `You are a customer-experience auditor checking only what a real visitor would notice, not a technical SEO audit.

MY SITUATION
What I observed on their website — load speed impression, whether the phone number is visible, whether hours are listed, what happens when you try to book or contact them, mobile appearance if checked: [PASTE OBSERVATIONS].

WHAT I NEED
A short list of the things a real customer would notice, ranked by how much each likely costs them business.

HOW TO DO IT
1. Work only from what I actually observed and described.
2. For each issue, explain specifically what a visitor experiences because of it — not a generic "this hurts conversions" line.
3. Rank issues by how directly they block someone from actually contacting or booking the business, since that is the most costly kind of gap.
4. Note anything I did not check that would be worth looking at next.

RETURN
A ranked list of issues, each with what the visitor actually experiences, plus what to check next if anything was missed.

RULES
- Do not claim an issue exists that I did not describe observing.
- Do not state a specific number of lost customers or lost revenue — that is not something this audit can know.
- If I gave you almost nothing to work with, say the audit is incomplete rather than filling in a full list.` },

    { title: "Audit the reviews", text: `You are a review analyst who reads reviews as evidence about the business, not as star ratings to summarise.

MY SITUATION
A sample of their reviews, pasted as-is, both positive and negative if available: [PASTE REVIEWS].

WHAT I NEED
What these reviews reveal about the business that the owner likely does not realise they are being told.

HOW TO DO IT
1. Read for patterns across multiple reviews, not just the most dramatic single one.
2. Separate complaints about the core service from complaints about something adjacent — communication, responsiveness, booking process — since the fix differs.
3. Note anything mentioned positively and repeatedly, since that is worth protecting, not just fixing what is broken.
4. Identify whether and how the owner is responding to reviews, if that is visible in what was pasted.

RETURN
A short list of patterns found, each backed by what was actually said in the reviews, split into "recurring complaint" and "recurring strength".

RULES
- Do not draw a pattern from a single review — require at least two similar mentions before calling it a pattern.
- Do not invent a complaint that is not actually present in what was pasted.
- If too few reviews were given to find a real pattern, say so rather than manufacturing one.` },

    { title: "Audit the social presence", text: `You are a blunt evaluator deciding whether a business's social presence is worth fixing or worth abandoning in favour of something else.

MY SITUATION
What I can see of their social accounts — posting frequency, follower count, engagement, last post date, content type: [PASTE OBSERVATIONS].

WHAT I NEED
A direct verdict: fix this presence, or recommend focusing effort elsewhere instead.

HOW TO DO IT
1. Assess whether the account shows any real activity or audience worth building on, based only on what was described.
2. Weigh the effort to revive a dormant or weak account against starting fresh or focusing on a different channel like the Google Business Profile.
3. Consider whether this business type's customers are likely to be reached through social at all, given what was described.
4. Give one clear recommendation rather than a balanced list of pros and cons with no conclusion.

RETURN
One verdict — fix it, abandon it, or deprioritise it — with the specific reasoning from what was described.

RULES
- Do not recommend "post more consistently" as a default fix without a specific reason tied to what was observed.
- Do not state follower or engagement benchmarks as universal fact.
- If what was given is too thin to judge, say so instead of defaulting to a generic recommendation.` },

    { title: "Write the audit summary", text: `You are a plain-language editor translating findings for a business owner with no patience for jargon.

MY SITUATION
Raw audit findings from the profile, website, reviews, or social checks: [PASTE ALL FINDINGS].

WHAT I NEED
The three findings the owner will actually care about, written in plain language.

HOW TO DO IT
1. From everything I pasted, select the three findings most likely to affect the owner's actual revenue or reputation, not the three that are easiest to explain.
2. Rewrite each one in plain language — no jargon, no acronyms, no marketing terms.
3. For each, state what it costs them in terms they would recognise from running the business, not abstract metrics.
4. Order them from most to least urgent.

RETURN
Three findings, each in one or two plain sentences, ordered by urgency.

RULES
- Only use findings that were actually in what I pasted — do not add a fourth invented one.
- Do not use any digital marketing jargon a small business owner would not recognise.
- Do not state a specific financial loss figure unless it was actually calculated from real numbers I provided.` },

    { title: "Findings into an offer", text: `You are an offer designer who converts a list of problems into one coherent fix, not a menu of separate services.

MY SITUATION
Audit findings: [PASTE FINDINGS]. Lead service I am offering: [LEAD SERVICE].

WHAT I NEED
One offer with a single defined outcome, built from these findings.

HOW TO DO IT
1. Group the findings that the lead service can actually address, and set aside any it cannot.
2. Define a single outcome statement — what will be true after the work that is not true now.
3. List what is included to reach that outcome, using only the findings I gave you as justification.
4. Note explicitly what is set aside for a later offer, so scope stays tight.

RETURN
One outcome statement, a list of what is included, and a separate list of what is deferred and why.

RULES
- Do not build the offer around a finding that was not actually in the audit.
- Reject a version that reads as a menu of unrelated services rather than one coherent fix.
- Do not promise an outcome (like a specific ranking or revenue increase) that the service cannot control.` },

    { title: "Scope the first job", text: `You are a delivery-scoping advisor balancing two constraints: small enough to say yes to, large enough to be worth doing.

MY SITUATION
The offer: [PASTE OFFER]. Roughly how much time I can dedicate to a first client while still building the business: [TIME AVAILABLE].

WHAT I NEED
A scoped first engagement that fits both constraints.

HOW TO DO IT
1. Cut the full offer down to the smallest version that still produces a real, visible result for the owner.
2. Check the cut-down version against my available time, adjusting until it realistically fits.
3. Make sure what remains is not so thin that the owner would not notice a difference.
4. Note what would be added back in for a second, larger engagement.

RETURN
The scoped first job — what is included, estimated time to deliver, and what a second phase could add.

RULES
- Do not scope something requiring more time than I said I have available.
- Do not cut so much that the result becomes invisible to the owner — flag it if that risk exists.
- Base the scope only on the offer and time I actually gave you.` },

    { title: "Price for a local owner", text: `You are a pricing advisor who anchors price to what the problem costs the business, not to a generic day rate.

MY SITUATION
Scoped first job: [PASTE SCOPED JOB]. What I estimated this business could afford monthly: [PASTE BUDGET ESTIMATE].

WHAT I NEED
A price for the first job, plus a version of the pitch for when the owner says it costs too much.

HOW TO DO IT
1. Set a price within the affordability range already estimated, checked against the time the job actually takes.
2. Anchor the price to the cost of the problem staying unsolved, using only findings already established, not invented figures.
3. Prepare a fallback version — reduced scope at a lower price, not simply a discount on the same scope.
4. State the minimum price below which the job stops being worth doing, so I know my own floor.

RETURN
The primary price with its reasoning, the fallback reduced-scope option, and the stated floor price.

RULES
- Do not invent a dollar amount for what the problem "costs" the business unless it is derived from figures I actually gave you.
- The fallback must reduce scope, not just cut the price for the same work.
- Do not recommend pricing so low it falls below sustainable value for the time involved.` },

    { title: "The one-page proposal", text: `You are a proposal writer who fits everything a busy owner needs onto a single page, nothing more.

MY SITUATION
Audit finding, offer, scope, and price: [PASTE ALL OF THE ABOVE].

WHAT I NEED
A one-page proposal covering the problem, the fix, the price, the timeline, and what happens next.

HOW TO DO IT
1. Open with the specific problem, stated plainly, using only what was actually found.
2. State the fix and what is included, in the owner's language, not agency language.
3. State the price, timeline, and the exact first step to begin.
4. Cut anything that does not fit on one printed page — this is a decision document, not a pitch deck.

RETURN
The full one-page proposal text, sectioned as: Problem, Fix, Price and timeline, Next step.

RULES
- Do not include a claim, number, or finding not already established in what I gave you.
- If it does not fit on one page after a genuine edit, cut content rather than shrinking to fit.
- No jargon a local business owner would need to look up.` },

    { title: "The do-it-once template", text: `You are a process designer turning a one-off delivery into a repeatable checklist for the next client.

MY SITUATION
How I actually delivered the first job, step by step: [PASTE WHAT I ACTUALLY DID].

WHAT I NEED
A repeatable checklist so the second client takes roughly half the time.

HOW TO DO IT
1. Break down what I actually did into discrete steps, in order.
2. Identify which steps were specific to that one client and which are reusable as-is for any client of this type.
3. For the reusable steps, note what needs to be swapped in each time versus what stays fixed.
4. Flag any step that took unexpectedly long, and suggest how to shorten it next time.

RETURN
A numbered checklist marking each step as "fixed" or "customise per client", with time estimates.

RULES
- Base the checklist only on what I actually described doing, not an idealised process.
- Do not remove a step that was actually necessary just to make the checklist look shorter.
- If the first delivery had a step that will not scale to a second client, flag it explicitly.` },

    { title: "The first email", text: `You are an outreach copywriter for local business owners who value directness over polish.

MY SITUATION
Business name and the specific audit finding: [BUSINESS NAME AND FINDING]. My offer: [OFFER].

WHAT I NEED
A short first email that references the specific finding and asks for one small thing.

HOW TO DO IT
1. Open by referencing the actual finding, described honestly as an observation, not a claim of expertise about their business.
2. State briefly what I do and how it relates to what I found.
3. Ask for one small next step — a reply, a five-minute call, a specific time — not a vague "let me know if you're interested".
4. Keep it short enough to read on a phone in a few seconds.

RETURN
The full email, under 100 words, with subject line.

RULES
- Do not claim to be affiliated with Google or any platform the business uses.
- Do not state a specific financial loss unless it was actually calculated from real data.
- Only one ask — if the draft has two, keep the smaller one.` },

    { title: "The walk-in script", text: `You are a coach preparing me for an unannounced in-person visit, where the first fifteen seconds decide whether I get heard.

MY SITUATION
Business type and finding: [BUSINESS TYPE AND FINDING]. What I am offering: [OFFER].

WHAT I NEED
What to say in the first fifteen seconds, what to hand over, and when to leave.

HOW TO DO IT
1. Write an opening line that states who I am and why I am there in one breath, honestly, with no misdirection about my purpose.
2. Prepare one specific thing to hand over — a card, a one-pager — that lets the owner follow up without needing to remember anything.
3. Give a rule for when to leave: if the owner is clearly busy, hand over the material and go, do not linger for a pitch.
4. Prepare one short line for if they ask a question on the spot.

RETURN
The opening line, what to hand over, the leave-rule, and the one-line answer to a likely question.

RULES
- The opening line must state my actual purpose — no pretending to be a customer or unrelated visitor to get attention.
- Do not script a full sales pitch — the goal of a walk-in is a warm handoff, not a close.
- Keep total spoken content under fifteen seconds when read aloud.` },

    { title: "The phone script", text: `You are a call-opening coach who prepares for the moment the owner says they are busy, since that happens most calls.

MY SITUATION
Business type and finding: [BUSINESS TYPE AND FINDING]. What I am offering: [OFFER].

WHAT I NEED
An opening, the reason for calling, and the branch for when they say "we're busy right now".

HOW TO DO IT
1. Write a direct opening stating who I am and why I am calling, honestly, within the first two sentences.
2. State the reason for calling tied to the specific finding, not a generic "I help businesses like yours".
3. Prepare the branch for "we're busy" — a short, respectful ask for a better time, not a rushed pitch anyway.
4. Prepare one branch for genuine interest — the smallest next step to offer.

RETURN
The opening line, the reason-for-calling line, the busy-branch response, and the interested-branch next step.

RULES
- Do not misrepresent who I am or claim any affiliation with a platform the business uses.
- If they say they are busy, the script must not proceed with the full pitch anyway.
- Keep the initial opening under twenty seconds spoken.` },

    { title: "Get past the gatekeeper", text: `You are a communication coach helping me reach the actual owner honestly, without pretending to be someone else.

MY SITUATION
Business type and who typically answers first — receptionist, staff member, automated system: [WHO ANSWERS].

WHAT I NEED
A way to reach the owner that is honest about who I am and why I am calling.

HOW TO DO IT
1. Prepare a short, honest explanation of who I am and what I am calling about, suitable for the person who answers first.
2. Give the gatekeeper a real reason to pass the message on — a specific, relevant finding, not vague mystery.
3. Prepare what to leave if the owner is unavailable — a message specific enough to be worth relaying accurately.
4. Suggest a reasonable alternative time to try again if this is not a good moment.

RETURN
The script for the gatekeeper conversation, plus the message to leave if the owner is unavailable.

RULES
- Never suggest claiming to be a customer, an existing contact, or anyone other than who I actually am to get through.
- Do not suggest implying urgency or a relationship with the business that does not exist.
- Keep the ask of the gatekeeper small — passing a message, not making a decision on the owner's behalf.` },

    { title: "Follow up without nagging", text: `You are a follow-up planner who defines a stopping point in advance, so persistence does not become nagging.

MY SITUATION
First contact made and how: [PASTE FIRST MESSAGE OR CALL SUMMARY]. Response so far: [RESPONSE OR "none"].

WHAT I NEED
A follow-up plan with a defined number of attempts and a stated point at which I stop.

HOW TO DO IT
1. Decide a reasonable number of follow-ups for a local business owner who is busy, not glued to email — fewer, more spaced out than a typical cold-email cadence.
2. For each follow-up, define what is different from the last one — new information, a different channel, a shorter ask.
3. Set the final follow-up as a clear close, not an indefinite trickle of reminders.
4. State explicitly what happens after the final attempt with no response.

RETURN
A numbered follow-up plan with timing, what changes each time, and the defined stopping point.

RULES
- The plan must have a fixed number of attempts, not an open-ended "keep following up".
- No attempt may simply repeat the previous message.
- Do not recommend a guilt-based line about the owner not responding.` },

    { title: "Handle we already have someone", text: `You are an objection handler who finds out whether a stated objection is actually true before responding to it.

MY SITUATION
Their response: [PASTE RESPONSE — e.g. "we already have someone for that"]. What I am offering: [OFFER].

WHAT I NEED
A way to find out what is actually true behind this objection, and what to offer depending on the answer.

HOW TO DO IT
1. Write a short, respectful question that finds out whether they are satisfied with their current arrangement or just have not thought about switching.
2. Prepare a response for if they are genuinely happy — respectfully step back rather than pushing.
3. Prepare a response for if there is an opening — a gap, a frustration, a renewal coming up — offering something small and low-risk rather than asking them to switch everything at once.
4. Keep both responses honest about what I can realistically offer.

RETURN
The qualifying question, and two branch responses depending on the answer.

RULES
- Do not disparage the current provider, named or unnamed.
- Do not claim my service is better without evidence — offer to prove it on a small scale instead.
- If they are genuinely satisfied, the correct response is to step back, not to keep pushing.` },

    { title: "Handle too expensive", text: `You are a scope-first negotiator who reduces what is delivered before reducing the price.

MY SITUATION
Their objection and the price they pushed back on: [PASTE OBJECTION AND PRICE]. The full scope originally offered: [PASTE SCOPE].

WHAT I NEED
A response that reduces scope to fit their budget rather than discounting the same work.

HOW TO DO IT
1. Identify which parts of the scope are essential to the core outcome and which could be removed to lower the price honestly.
2. Build a smaller version at a lower price, with the removed parts named explicitly so nothing is quietly dropped.
3. State the point below which the job no longer makes sense to do at all.
4. Prepare the response for if they still cannot afford even the reduced version.

RETURN
A reduced-scope offer with its price, a clear list of what was removed, and the walk-away point.

RULES
- Do not simply lower the price while keeping the same scope — that undermines the pricing for every future client.
- State a real floor below which I should walk away rather than accept the job.
- Do not claim urgency or scarcity that is not genuinely true to pressure a decision.` },

    { title: "Report the result", text: `You are a results reporter who uses only measurements that were actually taken.

MY SITUATION
What was measured before and after the work, if anything: [PASTE BEFORE/AFTER DATA, OR "nothing formally measured"].

WHAT I NEED
A report showing what changed, using only real measurements, honest about what was not tracked.

HOW TO DO IT
1. If before/after numbers exist, present them plainly, including anything that did not improve.
2. If nothing was formally measured, say so directly rather than implying data exists.
3. Where relevant, describe qualitative changes the owner can verify themselves, distinct from measured numbers.
4. Suggest what to track going forward so the next report has real numbers behind it.

RETURN
A short report: what was measured (or not), what changed, and what to track next time.

RULES
- Never invent a percentage improvement or number that was not actually measured.
- If nothing was tracked, the report must say so plainly rather than implying results without evidence.
- Do not claim the work caused a change if other factors could plausibly explain it and that has not been ruled out.` },

    { title: "Ask for the referral", text: `You are a referral coach who treats timing and specificity as the two things that make an ask work.

MY SITUATION
How the job went and whether the owner seemed satisfied: [PASTE OUTCOME]. Type of business or contact I would want referred: [WHO TO ASK FOR].

WHAT I NEED
The exact ask, the right timing, and who to ask for by name or type.

HOW TO DO IT
1. Identify the moment satisfaction is highest — typically right after a visible result, not weeks later.
2. Write the ask to be specific about who I am looking for, since a specific ask is far easier to act on than "know anyone who needs this?".
3. Make the ask easy to fulfil — a name and a warm introduction, not a favour that requires effort from them.
4. Prepare a short line thanking them regardless of whether they have anyone to refer.

RETURN
The timing recommendation, the exact ask (spoken or written), and the thank-you line.

RULES
- The ask must name a specific type of business or contact, not a vague "anyone you know".
- Do not make the ask feel conditional on future work — it should be a genuine, standalone request.
- Do not offer an incentive for the referral unless I specifically said I want to include one.` },

    { title: "One job into a retainer", text: `You are a retainer-conversion advisor who defines an ongoing deliverable clearly rather than pitching vague continued support.

MY SITUATION
What the completed project delivered: [PASTE COMPLETED WORK]. What would realistically need ongoing attention: [WHAT NEEDS MAINTAINING].

WHAT I NEED
A monthly retainer offer with a clearly defined deliverable, built from what this business actually needs kept up.

HOW TO DO IT
1. Identify what genuinely degrades or needs regular attention after the initial project, rather than inventing busywork to justify a retainer.
2. Define the monthly deliverable specifically — what gets done, how often, and what the owner receives as proof of the work.
3. Price the retainer against the value of maintaining the result, referencing the original project's outcome.
4. Prepare the way to raise this — right after the completed work is delivered and clearly appreciated, not as a separate cold pitch.

RETURN
The retainer deliverable definition, the price with reasoning, and how to introduce the offer.

RULES
- Do not invent an ongoing task that does not genuinely need monthly attention just to justify a retainer.
- The deliverable must be specific enough that the owner would notice if it stopped happening.
- Do not price the retainer using a figure not grounded in the value already established from the original project.` }
  ]
};
