/* ============================================================================
   COLD OUTREACH PACK — 25 prompts
   ============================================================================ */

export default {
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
    "Decide who is actually worth contacting",
    "Research a prospect in a few minutes",
    "Write a first line that proves you looked",
    "Follow up without saying “just bumping this”",
    "Read the replies and fix the real cause"
  ],
  benefits: [
    "Personalise without spending an hour per prospect",
    "Lead with their situation, not your service",
    "Follow up in a way that adds something",
    "Diagnose silence instead of sending more volume"
  ],
  sequence: {
    lead: "Most outreach advice hands you a template. This gives you the order that makes a template unnecessary.",
    steps: ["Define who is worth contacting", "Research one real problem", "Write the specific first line", "Sequence the follow-ups", "Read the replies and adjust"]
  },
  /* --------------------------------------------------------------------------
     PREMIUM PRODUCT
     ready:false means the content does not exist yet. While it is false the
     site shows this as not yet available and renders NO price and NO buy
     button, whatever checkoutUrl says. Flip it only when the prompts below
     are actually written and the download is in place.
     -------------------------------------------------------------------------- */
  premium: {
    name: "The Outreach System",
    ready: true,
    promptCount: 200,
    blurb: "Deeper workflows for building a prospect list, research at volume, multi-channel sequencing, and reply handling.",
    includes: [
      "Every prompt from the free pack",
      "List building and research at volume",
      "Multi-channel sequences: email, DM, phone",
      "Reply handling and objection workflows",
      "Deliverability and testing playbooks"
    ],
    checkoutUrl: "https://buy.stripe.com/4gMdRaaHU0EAdaPg457Re01",
    downloadUrl: "https://shatterprompts.com/outreach/premium"
  },

  /* Free pack, formatted as a Google Doc — offered as a save-your-own-copy
     option alongside the on-page unlock, not as the delivery mechanism. */
  googleDocUrl: "https://docs.google.com/document/d/1Jw4R7qo7Ya-uAIRnjEiq_m6f9I9yo2PBmEwC1bc0D-k/edit",

  seo: {
    title: "Free Cold Outreach AI Prompt Pack — Write outreach that earns a reply",
    description: "25 practical AI prompts to research prospects, find a real problem, write personal cold emails and DMs, and follow up properly. Free."
  },

  previews: [
    { title: "The buying trigger", text: `You are an outbound strategist who refuses to work from a static list. Static lists rot — the only prospects worth contacting are the ones where something just happened, and your job is to name what that something is.

WHAT I NEED
The specific events that make a prospect suddenly worth contacting for what I sell, and how I would actually see each one from outside the company.

HOW TO DO IT
1. Ask me what I sell and who typically buys it: [SERVICE] and [TYPICAL BUYER].
2. List eight events that would make that buyer newly receptive — a hire, a launch, a complaint pattern, a funding round, a tool switch, a compliance deadline, a competitor move, a leadership change. Only include ones plausible for this buyer.
3. For each, say exactly where it becomes visible from outside: a job post, a press mention, a review, a public filing, a changed website.
4. Rank the eight by how strongly each predicts urgency, not just visibility.

RETURN
A numbered list of eight triggers. For each: the event, where it is visible, and the urgency rank (1 highest).

RULES
- Do not include a trigger you cannot tie to a concrete, checkable public source.
- If I have not told you the service and buyer, ask before generating anything.
- Reject generic triggers like "they might need help" — every entry must be a specific, dated-feeling event.` }
  ],



  prompts: [
    { title: "The buying trigger", text: `You are an outbound strategist who refuses to work from a static list. Static lists rot — the only prospects worth contacting are the ones where something just happened, and your job is to name what that something is.

WHAT I NEED
The specific events that make a prospect suddenly worth contacting for what I sell, and how I would actually see each one from outside the company.

HOW TO DO IT
1. Ask me what I sell and who typically buys it: [SERVICE] and [TYPICAL BUYER].
2. List eight events that would make that buyer newly receptive — a hire, a launch, a complaint pattern, a funding round, a tool switch, a compliance deadline, a competitor move, a leadership change. Only include ones plausible for this buyer.
3. For each, say exactly where it becomes visible from outside: a job post, a press mention, a review, a public filing, a changed website.
4. Rank the eight by how strongly each predicts urgency, not just visibility.

RETURN
A numbered list of eight triggers. For each: the event, where it is visible, and the urgency rank (1 highest).

RULES
- Do not include a trigger you cannot tie to a concrete, checkable public source.
- If I have not told you the service and buyer, ask before generating anything.
- Reject generic triggers like "they might need help" — every entry must be a specific, dated-feeling event.` },

    { title: "ICP from won deals", text: `You are a revenue analyst who trusts closed deals over stated preferences. What someone says they target and what they actually sold to are usually two different lists, and only one of them is real.

MY SITUATION
My last five to ten actual customers, one line each: name, size, industry, what they bought, roughly what it solved for them: [PASTE CUSTOMER LIST].

WHAT I NEED
An ideal customer profile built only from these wins, not from who I wish I sold to.

HOW TO DO IT
1. Find what is actually shared across the list: size range, industry pattern, situation, the problem they had in common.
2. Separate genuine patterns from coincidence — if three of ten share a trait, say so, do not present it as universal.
3. Note any customer that does not fit the pattern and flag them as an outlier rather than forcing them in.
4. State what is still unknown because the sample is too small or too mixed.

RETURN
A short ICP definition (size, industry, situation, trigger), followed by a confidence note on each element based on how many deals actually support it.

RULES
- Do not invent a pattern from fewer than three matching examples.
- If the list is too small or too varied to conclude anything, say that plainly instead of forcing a profile.
- Do not fold in any assumption I did not give you in the pasted list.` },

    { title: "Disqualify fast", text: `You are a pipeline gatekeeper whose only job is to protect my time from prospects that were never going to buy.

MY SITUATION
What I sell and who buys it: [SERVICE AND BUYER]. My current ICP notes, if any: [ICP NOTES OR "none yet"].

WHAT I NEED
A short, hard list of conditions that mean I should drop a prospect immediately, before spending any research time on them.

HOW TO DO IT
1. Work out what makes a prospect structurally unable to buy — too small to afford it, no one in the role who owns the problem, a contract already locked in, a stated policy against outside vendors, wrong geography or regulation.
2. Separate hard disqualifiers (never proceed) from soft ones (proceed only if a strong trigger is also present).
3. For each disqualifier, state exactly how I would spot it in under thirty seconds of looking.
4. Order the list so the fastest checks come first.

RETURN
Two lists: "Hard disqualifiers" and "Soft disqualifiers", each item with the thirty-second check that reveals it.

RULES
- Every disqualifier must be checkable without contacting the prospect.
- Do not include a disqualifier that would also exclude a business you know is a real past customer.
- If I have not told you what I sell, ask first rather than guessing generic criteria.` },

    { title: "Where the list lives", text: `You are a list-building specialist working with no budget for paid data tools.

MY SITUATION
My ideal prospect profile: [PASTE ICP — size, industry, situation, trigger].

WHAT I NEED
The specific, free or near-free places I can actually build a list of these prospects, not a generic "try LinkedIn" answer.

HOW TO DO IT
1. Work from the ICP to concrete sources: directories, marketplaces, review sites, job boards, association member lists, event attendee pages, local listings, public procurement records — whichever actually fit this profile.
2. For each source, name the specific search or filter to use, not just the site name.
3. Estimate how many realistic prospects each source could produce and how much manual time per twenty prospects.
4. Rank sources by yield-per-hour for someone doing this by hand.

RETURN
A table: Source | Exact search or filter to use | Estimated prospects available | Manual time per 20 | Yield rank.

RULES
- Only list sources that are free or have a free tier usable at this volume.
- Do not recommend scraping in a way that breaches a platform's stated terms.
- If the ICP given is too vague to map to real sources, ask for the missing detail instead of listing generic platforms.` },

    { title: "Score a raw list", text: `You are a list triage analyst. An unsorted prospect list wastes time because the best twenty and the worst twenty get equal attention.

MY SITUATION
My raw prospect list, one line each with whatever I know — name, company, size, anything else: [PASTE RAW LIST]. My ICP: [PASTE ICP].

WHAT I NEED
The same list sorted into tiers by how well each prospect matches, so I spend effort on the right ones first.

HOW TO DO IT
1. Score each prospect against the ICP on fit and any visible trigger, using only what is actually in the pasted data.
2. Sort into three tiers: contact this week, contact if time allows, drop.
3. For every prospect, give the one-line reason for its tier — not a generic score, an actual reason.
4. Flag any prospect where you do not have enough information to score confidently, separately from "drop".

RETURN
Three tiered lists with one reason per prospect, plus a separate "needs more information" list.

RULES
- Never assign a tier based on information not present in what I pasted.
- "Needs more information" is a valid outcome — do not force a guess into a tier to avoid it.
- If the ICP is missing, ask for it before scoring anything.` },

    { title: "Five-minute research routine", text: `You are a research coach building me a fixed checklist, because ad-hoc research produces inconsistent, thin outreach.

MY SITUATION
What I sell and who buys it: [SERVICE AND TYPICAL BUYER].

WHAT I NEED
A repeatable sequence of checks that reliably produces three usable, specific facts about a company in about five minutes, every time.

HOW TO DO IT
1. Build a fixed order of places to check — homepage, about page, recent news or blog, job listings, reviews, social presence — choosing only the ones likely to surface something relevant to what I sell.
2. For each step, state exactly what to look for and how long to spend on it.
3. End with a rule for what counts as a "usable fact" versus something too generic to use.

RETURN
A numbered checklist, each step with a time budget and what a usable finding looks like, totalling roughly five minutes.

RULES
- The total time budget across steps must not exceed six minutes.
- Reject any step whose likely output is something true of almost any company in the industry.
- If I have not said what I sell, ask before building the checklist, since relevance depends on it.` },

    { title: "Find the observable problem", text: `You are a diagnostic researcher who only works from what is actually visible, never from assumption.

MY SITUATION
What I found about this company using my research routine: [PASTE — homepage copy, job ads, reviews, recent posts, anything public].

WHAT I NEED
The problem this company most plausibly has right now, stated as something I observed rather than something I am inventing.

HOW TO DO IT
1. Read what I pasted and separate hard evidence from your own inference.
2. Identify the one problem most strongly supported by that evidence — not the most dramatic one, the best supported one.
3. Write it as an outside observation: "I noticed X", not "you are struggling with X".
4. State your confidence and exactly which piece of evidence it rests on.

RETURN
One paragraph naming the problem as an outside observation, followed by a confidence rating and the specific evidence it is based on.

RULES
- If the pasted material does not support any specific problem, say so instead of inventing one to sound useful.
- Never claim insider knowledge the outside evidence would not justify.
- Do not produce a problem statement generic enough to apply to a competitor unchanged.` },

    { title: "Research into one sentence", text: `You are an editor whose only job is compression without losing what makes the research specific.

MY SITUATION
My research findings and the problem I identified: [PASTE FINDINGS AND PROBLEM STATEMENT].

WHAT I NEED
One sentence that proves, to the person reading it, that this message was not mass-sent.

HOW TO DO IT
1. Pull out the single most specific, least-guessable detail from the research.
2. Write five candidate sentences using that detail, each under twenty-five words.
3. Score each on one test only: could this sentence be sent unchanged to a different company in the same industry? If yes, it fails.
4. Return the sentence that fails that test most decisively, and discard the rest with the reason.

RETURN
The winning sentence, plus the four rejected candidates with the specific reason each was too generic.

RULES
- Do not include any fact not present in what I pasted.
- Reject any sentence that praises the company in vague terms — it must reference something concrete.
- If nothing specific enough exists in the research, say the research is not strong enough yet rather than settling for a weak sentence.` },

    { title: "Check the timing", text: `You are a timing analyst deciding whether now is actually the right moment to reach out, not whether the prospect is a good fit in general.

MY SITUATION
What I know about this company right now, including anything recent: [PASTE — recent news, hiring activity, any signals]. What I am selling: [SERVICE].

WHAT I NEED
A clear yes-or-not-yet on timing, and what to do in either case.

HOW TO DO IT
1. Look for evidence of active budget, active pain, or an approaching deadline relevant to what I sell.
2. Look separately for evidence this is a bad moment — recent layoffs, leadership change mid-transition, a just-signed competing contract.
3. Weigh the two against each other rather than treating any single signal as decisive.
4. If timing is unclear, say what specific piece of information would resolve it and where to look for it.

RETURN
A verdict — contact now, wait, or unclear — with the evidence behind it, and if "wait" or "unclear", the exact next check to run and roughly when.

RULES
- Do not default to "contact now" just because no negative signal was found — absence of a bad sign is not evidence of a good one.
- Do not invent a deadline or budget signal that was not in what I pasted.
- State the verdict in one line before the explanation, so it is not buried.` },

    { title: "Find the right person", text: `You are a stakeholder-mapping specialist who does not settle for a generic inbox.

MY SITUATION
Company: [COMPANY]. What I am selling and the problem it solves: [SERVICE AND PROBLEM]. What I can see about the team, if anything: [PASTE — team page, LinkedIn search results, org info].

WHAT I NEED
Who most plausibly owns this problem at this company, and a fallback plan if I cannot find them.

HOW TO DO IT
1. Work out which function or role would feel this problem directly, based on what it costs and who it slows down.
2. Match that to the most likely job titles at a company this size — titles vary by size, so account for that.
3. If I gave you team information, identify the best-matching real person; if not, tell me exactly how to find them.
4. Give a fallback path for when only a generic address or contact form is available.

RETURN
The most likely role or person, the reasoning, and a numbered fallback plan for reaching them if direct contact is not available.

RULES
- Do not guess a specific person's name if none was given in what I pasted — name the role and how to find the person instead.
- Do not recommend impersonating another department to get through.
- If company size is unknown, ask, since it changes which title is realistic.` },

    { title: "The opening line", text: `You are a copy editor who tests one thing only: could this line be sent to anyone else unchanged.

MY SITUATION
My research and the specific detail I found: [PASTE — company, role, specific observation].

WHAT I NEED
The first sentence of my message, and proof it passes the copy-paste test.

HOW TO DO IT
1. Write five candidate opening lines using only the specific detail I gave you.
2. For each, run the test: swap in a different company name — does the sentence still make sense and still sound true? If yes, it fails.
3. Discard every line that passes the swap test.
4. From what remains, pick the one that is shortest while staying specific.

RETURN
The winning opening line, then the discarded lines with the reason each failed.

RULES
- Do not write a line that compliments something generic, like "great website" or "impressive growth".
- Do not invent a detail that was not in what I pasted.
- If nothing I gave you is specific enough to survive the test, say so rather than forcing a weak line through.` },

    { title: "The whole first email", text: `You are an outbound copywriter working under a hard length limit, because length is what turns a message into something worth reading.

MY SITUATION
Opening line: [PASTE OPENING LINE]. What I am offering and the outcome it produces: [OFFER AND OUTCOME]. The one small thing I want them to do next: [SMALL ASK].

WHAT I NEED
A complete first email under ninety words: relevance, one claim, one small ask.

HOW TO DO IT
1. Open with the given line, unchanged.
2. Add exactly one claim about the outcome — no list of features, one claim, tied to what the research suggests they need.
3. Close with a single small ask, easy to say yes to in one line — not "let's hop on a call" unless that is genuinely the smallest ask available.
4. Cut every sentence that exists to sound polite rather than to move the reader toward the ask.

RETURN
The full email text, followed by its word count.

RULES
- Hard limit ninety words — if it runs long, cut before returning it, do not just report the overage.
- Only one ask. If a draft contains two, keep the smaller one.
- Do not include a claim about results I have not given you evidence for.` },

    { title: "Cut the filler", text: `You are a ruthless line editor whose only job is removing words that exist to make the sender feel polite.

MY SITUATION
My draft message: [PASTE DRAFT].

WHAT I NEED
The same message with every line that does not help the reader removed, and a list of what was cut.

HOW TO DO IT
1. Go line by line and classify each as either moving the reader toward the ask, or existing to soften/pad/apologise.
2. Delete every line in the second category — "I hope this finds you well", "I know you're busy", "just wanted to reach out", and anything doing the same job in different words.
3. Check what remains still reads like a message from a person, not a list of demands — a small connective phrase can stay if it is load-bearing.
4. Recount the words before and after.

RETURN
The edited message, then a list of exactly what was removed and why each line was padding.

RULES
- Do not remove the one specific detail that proves this was not mass-sent — that line stays even if it is long.
- Do not rewrite the core claim or ask, only cut filler around them.
- If the draft has no filler to cut, say so rather than inventing edits to look useful.` },

    { title: "The DM version", text: `You are a platform-native copywriter who treats a DM and an email as genuinely different formats, not the same message pasted somewhere shorter.

MY SITUATION
My email version: [PASTE EMAIL]. The platform I am sending this on: [INSTAGRAM, LINKEDIN, OR OTHER].

WHAT I NEED
A rewritten version suited to that platform's length, tone and reading context.

HOW TO DO IT
1. Identify what changes about how this gets read on the stated platform — shorter attention, more casual tone, read on a phone, often read alongside personal messages.
2. Cut to the single most essential claim and ask — a DM cannot carry as much as an email.
3. Adjust tone to match how real people actually message on that platform, without becoming unprofessional.
4. Keep the one specific detail that proves this is not mass-sent — it matters even more in a shorter message.

RETURN
The rewritten DM, under fifty words, plus one line on what you cut from the email version and why.

RULES
- Do not just shorten the email mechanically — the structure should suit how DMs get read, not just be a trimmed email.
- Do not use platform slang that would read as try-hard for a professional context.
- If the platform is not specified, ask before rewriting, since the two differ significantly.` },

    { title: "Subject lines", text: `You are an honesty-first copywriter who rejects any subject line that oversells what the email actually contains.

MY SITUATION
My email body: [PASTE EMAIL].

WHAT I NEED
A set of subject lines that describe the email accurately, with the clickbait options rejected before I see them.

HOW TO DO IT
1. Draft ten subject lines based only on what is actually in the email body.
2. Test each against one rule: would the reader feel misled after opening it? If yes, cut it before it reaches the final list.
3. Return only the lines that survive, ranked by how likely they are to be opened without misleading anyone.
4. Keep them short enough to display fully on a phone.

RETURN
The surviving subject lines, ranked, each under six words, with the rejected ones listed separately and the reason each was misleading.

RULES
- Never use a subject line implying a reply, a referral, or a prior relationship that does not exist.
- No fake urgency ("following up" when this is the first message, or invented deadlines).
- If the email body was not provided, ask for it rather than writing generic subject lines.` },

    { title: "Design the sequence", text: `You are a sequencing strategist who treats a follow-up sequence as a set of distinct messages, not four copies of the same email.

MY SITUATION
My first email: [PASTE FIRST EMAIL]. How I am sending this — email, DM, or both: [CHANNEL].

WHAT I NEED
A complete follow-up plan: how many touches, how far apart, and what genuinely changes in each one.

HOW TO DO IT
1. Decide a realistic number of touches for this channel and buyer type — more than one, but not so many it becomes harassment.
2. Space them out with reasons tied to how people actually process a message they have not answered, not an arbitrary number of days.
3. For each touch, state the one thing that is different from the previous message — new angle, new proof, or a close.
4. Mark the point at which silence should end the sequence.

RETURN
A numbered plan: touch number, days after the previous one, and the one new thing that message must contain.

RULES
- No touch may simply repeat the previous message with a different opening line.
- The plan must have a defined final touch — an indefinite sequence is not acceptable.
- If channel is not specified, ask, since email and DM cadence should differ.` },

    { title: "Follow-up two: new angle", text: `You are a follow-up copywriter whose rule is that every message must add information the reader did not already have.

MY SITUATION
First message sent: [PASTE FIRST MESSAGE]. Anything new I have learned or can add since then: [NEW INFORMATION, OR "nothing new"].

WHAT I NEED
A second message that earns attention with a different angle, not a reminder that the first one exists.

HOW TO DO IT
1. Identify an angle the first message did not use — a different problem it solves, a different piece of research, a different framing of the outcome.
2. Write the message around that new angle, keeping it short.
3. Reference the first message only briefly, if at all — do not open with "just following up".
4. End with the same or an easier ask than the first message.

RETURN
The full second message, under seventy words, plus one line naming the new angle used.

RULES
- Reject any draft that only restates the first message's claim in different words — that is not a new angle.
- Do not invent new information to create an angle; if nothing new is available, build the angle from a different true aspect of the original offer.
- No guilt-based language about them not replying.` },

    { title: "Follow-up three: proof", text: `You are a proof-first copywriter who will not let a claim stand without evidence behind it.

MY SITUATION
What proof I actually have — a result, a case, a number, a testimonial: [PASTE PROOF, OR "none yet"]. First two messages sent: [PASTE FIRST TWO MESSAGES].

WHAT I NEED
A third message built around real evidence, not a generic reminder.

HOW TO DO IT
1. Take only the proof I actually gave you and find the version of it most relevant to this specific prospect's likely problem.
2. Build the message around that one piece of proof, stated precisely, not rounded up or dramatized.
3. If I have no proof yet, do not fabricate any — instead write a version built around a specific, honest observation instead of manufactured evidence.
4. Keep the ask as easy as the previous two messages.

RETURN
The full third message, under eighty words, and a note on which piece of proof (or honest substitute) it uses.

RULES
- Never invent a client name, number, or outcome that was not in what I pasted.
- If no real proof exists, say so plainly and offer the honest-observation version rather than a fabricated one.
- Do not exaggerate a real result beyond what I actually reported.` },

    { title: "The break-up message", text: `You are a closing-message specialist who values an easy exit over a guilt-trip.

MY SITUATION
The sequence sent so far, in brief: [PASTE OR SUMMARISE PREVIOUS MESSAGES].

WHAT I NEED
A final message that closes the loop cleanly and is genuinely easy to reply to, even with a no.

HOW TO DO IT
1. State plainly that this is the last message in the sequence.
2. Give the reader a one-word or one-line way to say no that requires no explanation from them.
3. Leave the door open for later, without manufacturing pressure to reply now.
4. Keep it shorter than every previous message in the sequence.

RETURN
The full break-up message, under fifty words.

RULES
- No language implying they have been rude by not replying.
- No fake scarcity like "closing your file" or invented deadlines.
- Do not ask a new question that requires effort to answer — the whole point is to make replying effortless.` },

    { title: "Cadence and volume", text: `You are an operations planner turning a sequence into a weekly routine that a solo person can actually sustain.

MY SITUATION
My follow-up sequence: [PASTE SEQUENCE]. Hours per week I can realistically spend on outreach: [HOURS]. Prospects on my list: [LIST SIZE].

WHAT I NEED
A weekly plan: how many new prospects to start, and how the sequence workload stacks up as it runs.

HOW TO DO IT
1. Work out how much time each touch actually takes, including research, not just sending.
2. Calculate a realistic daily and weekly volume of new prospects to start, given my stated hours.
3. Account for the fact that follow-ups from previous weeks stack up over time, not just new starts.
4. Flag if my list size cannot sustain the sequence at this volume without running out.

RETURN
A weekly plan: new prospects per week, total touches per week once the sequence is running steady-state, and a warning if the list will run out before I need more.

RULES
- Base every number on the hours and list size I actually gave you, not a generic recommendation.
- If my hours cannot realistically sustain even the smallest workable sequence, say so rather than forcing a plan that will fail.
- Do not recommend a volume that would require automation I have not mentioned having.` },

    { title: "Diagnose zero replies", text: `You are a blunt outbound auditor. Silence has a specific, findable cause, and your job is to name it rather than suggest sending more.

MY SITUATION
My message: [PASTE MESSAGE]. My list or how prospects were chosen: [DESCRIBE LIST]. Volume sent and replies received: [NUMBERS].

WHAT I NEED
The single most likely cause of zero or low replies, and the one change to test next.

HOW TO DO IT
1. Check the list first — wrong buyer, wrong company stage, or no real problem present are the most common causes and often overlooked.
2. Check the message second — too generic, too long, unclear ask, or missing a real reason to reply.
3. Check volume and timing third — too small a sample to judge yet, or sent at a bad time.
4. Pick the most likely cause based on the actual evidence given, not the easiest one to fix.

RETURN
One named cause, the evidence pointing to it, and one specific change to make before sending the next batch.

RULES
- Do not default to "the message needs work" if the list evidence points elsewhere — follow the evidence.
- If volume is too low to diagnose anything reliably, say that plainly instead of guessing.
- Recommend exactly one change to test, not a list of five.` },

    { title: "Handle not interested", text: `You are a reply strategist whose rule is one good response, then genuinely knowing when to stop.

MY SITUATION
Their reply: [PASTE REPLY]. What I was offering: [OFFER].

WHAT I NEED
One well-judged response to "not interested", and a clear signal for whether to reply again after that.

HOW TO DO IT
1. Read the reply for tone — a flat no and an annoyed no need different responses.
2. Write a short reply that respects the no, without a hidden pitch disguised as politeness.
3. If appropriate, ask one honest, low-pressure question that could reveal whether "not interested" means "not now" — only if the tone supports it.
4. State plainly whether this warrants a second reply from me or whether the thread should end here.

RETURN
The reply text, under forty words, plus one line stating whether to follow up again and why.

RULES
- Never argue with a no or restate the pitch after being told no.
- If the tone reads as final or annoyed, the verdict must be to stop, not to probe further.
- Do not manufacture a reason to keep the conversation going that is not genuinely there.` },

    { title: "Handle send me some info", text: `You are a qualification specialist who treats "send me some info" as a fork, not an instruction to attach a brochure.

MY SITUATION
Their reply: [PASTE REPLY]. What I am offering: [OFFER].

WHAT I NEED
A response that moves this to either a real conversation or a clean close, without sending generic materials into a void.

HOW TO DO IT
1. Recognise this reply as often non-committal, and respond in a way that tests real interest rather than complying immediately.
2. Offer a short, specific answer to the likely question behind their request, plus one direct question that would move things toward a call.
3. Make it easy for them to say "actually, not right now" instead of going silent.
4. Only if they confirm real interest should the next step become sending detailed material.

RETURN
The reply text, under sixty words, framed as answering plus one qualifying question.

RULES
- Do not attach or describe a generic brochure — respond with a specific answer tied to their situation.
- Do not treat the request as a guaranteed sign of interest; the reply must still test for it.
- Give them a graceful way to decline rather than forcing a yes/no.` },

    { title: "Book the call", text: `You are a scheduling-focused closer whose only goal is converting a warm reply into a booked time in the fewest messages.

MY SITUATION
Their reply showing interest: [PASTE REPLY]. My general availability: [AVAILABILITY OR SCHEDULING LINK].

WHAT I NEED
A message that gets a specific time booked without a long back-and-forth.

HOW TO DO IT
1. Confirm interest briefly, without re-pitching — they already said yes to a conversation.
2. Offer two or three specific time options rather than asking "when works for you", which invites delay.
3. If I gave a scheduling link, use it as the single fastest option instead of listing times.
4. Keep the message short enough to answer from a phone in one line.

RETURN
The full message, under fifty words, with either specific time options or the scheduling link presented as the fastest path.

RULES
- Do not ask an open-ended availability question when specific options or a link are available.
- Do not add new claims or pitch content — this message's only job is booking the time.
- If no availability information was given, ask for it before writing the message.` },

    { title: "Weekly numbers review", text: `You are a pipeline analyst reviewing outreach numbers honestly, without spinning a bad week into a good one.

MY SITUATION
This week's numbers: sent [NUMBER SENT], opened [NUMBER OPENED OR "unknown"], replied [NUMBER REPLIED], booked [NUMBER BOOKED]. Last week's numbers for comparison, if available: [LAST WEEK'S NUMBERS OR "none"].

WHAT I NEED
A plain read of what these numbers say, and the one variable worth changing next week.

HOW TO DO IT
1. Calculate the rates that matter — reply rate and booking rate — rather than just repeating raw counts.
2. Compare against last week if given, and note whether the change is meaningful or within normal noise for this volume.
3. Identify which stage of the funnel is weakest — getting opened, getting replies, or converting replies to bookings — since each points to a different fix.
4. Name exactly one variable to change next week, tied to the weakest stage.

RETURN
The calculated rates, a one-line verdict on the weakest stage, and the single change to make next week.

RULES
- Do not declare a trend from one week of data if no prior week was given — say the sample is too small instead.
- Recommend changing exactly one variable, not several at once, so the next week's result is actually interpretable.
- Do not round a bad number into a more flattering one.` }
  ]
};
