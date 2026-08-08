/* ============================================================================
   CONTENT PACK — 25 prompts
   ============================================================================ */

export default {
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
    "Turn one idea into a week of posts",
    "Review what actually worked and why"
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
  /* --------------------------------------------------------------------------
     PREMIUM PRODUCT
     ready:false means the content does not exist yet. While it is false the
     site shows this as not yet available and renders NO price and NO buy
     button, whatever checkoutUrl says. Flip it only when the prompts below
     are actually written and the download is in place.
     -------------------------------------------------------------------------- */
  premium: {
    name: "The Content System",
    ready: true,
    promptCount: 200,
    blurb: "Deeper workflows for positioning, a 30-day calendar, repurposing across formats, and a monthly performance review.",
    includes: [
      "Every prompt from the free pack",
      "30-day and 90-day calendar builders",
      "Repurposing workflows across every format",
      "Hook libraries by niche",
      "Monthly performance review workflows"
    ],
    checkoutUrl: "https://buy.stripe.com/dRm3cwaHUbjec6L19b7Re02",
    downloadUrl: "https://shatterprompts.com/content/premium"
  },

  seo: {
    title: "Free Content Creation AI Prompt Pack — Content that creates demand",
    description: "25 practical AI prompts for content pillars, hooks, short-form scripts, captions, calls to action and a simple posting system. Free."
  },

  previews: [
    { title: "The one viewer", text: `You are an audience strategist who refuses to let anyone define their content for "everyone". A post aimed at everyone is judged by no one, and your job is to force a single, specific person into focus.

WHAT I NEED
One specific person the account talks to, defined in enough detail that a post could be judged against them.

HOW TO DO IT
1. Ask me what I sell or want to be known for: [OFFER OR TOPIC].
2. Interview me one question at a time, waiting for each answer: what stage are they at, what do they already believe, what have they already tried, what would make them stop scrolling for this specific topic.
3. Push back on vague answers — "people who want to get fit" is not specific enough; ask what makes this one different from every other fitness viewer.
4. Build the final profile only from what I actually gave you.

RETURN
A short profile: who they are, what they already believe, what they have tried, and the one line a post would need to say to make them stop scrolling.

RULES
- Do not accept a demographic label as a finished answer — push for specifics every time.
- Do not invent details I did not give you to fill gaps.
- If my answers describe two different people, say so and ask me to pick one.` }
  ],


  prompts: [
    { title: "The one viewer", text: `You are an audience strategist who refuses to let anyone define their content for "everyone". A post aimed at everyone is judged by no one, and your job is to force a single, specific person into focus.

WHAT I NEED
One specific person the account talks to, defined in enough detail that a post could be judged against them.

HOW TO DO IT
1. Ask me what I sell or want to be known for: [OFFER OR TOPIC].
2. Interview me one question at a time, waiting for each answer: what stage are they at, what do they already believe, what have they already tried, what would make them stop scrolling for this specific topic.
3. Push back on vague answers — "people who want to get fit" is not specific enough; ask what makes this one different from every other fitness viewer.
4. Build the final profile only from what I actually gave you.

RETURN
A short profile: who they are, what they already believe, what they have tried, and the one line a post would need to say to make them stop scrolling.

RULES
- Do not accept a demographic label as a finished answer — push for specifics every time.
- Do not invent details I did not give you to fill gaps.
- If my answers describe two different people, say so and ask me to pick one.` },

    { title: "Pick the transformation", text: `You are a positioning auditor whose job is to check that a promised transformation is one the offer can actually deliver.

MY SITUATION
What I offer: [OFFER]. Who I defined as my one viewer: [PASTE VIEWER PROFILE].

WHAT I NEED
The specific before-and-after this account should promise, checked against whether the offer genuinely produces it.

HOW TO DO IT
1. Name the viewer's "before" state precisely, using their actual situation, not a generic pain point.
2. Name the "after" state the offer produces, using only what the offer actually does.
3. Check the gap between before and after is one the content can plausibly move someone through, and flag it if it is too large to be credible.
4. Write the transformation as one sentence a viewer would recognise as their own situation.

RETURN
The before state, the after state, one sentence combining them, and a flag if the offer cannot honestly support the after state as described.

RULES
- Do not describe an after state stronger than what the offer, as I described it, can actually produce.
- If the offer and the viewer's need do not match, say so directly instead of forcing a fit.
- Do not use language implying a guaranteed outcome.` },

    { title: "Position against everyone else", text: `You are a positioning strategist who assumes the niche is already crowded and looks for what makes this account genuinely different, not just differently worded.

MY SITUATION
Topic or niche: [NICHE]. What I have noticed about other accounts in this space: [PASTE — what similar accounts talk about, their angle, their tone].

WHAT I NEED
A stance that separates this account from the others, based on a real difference, not a repositioned version of the same thing.

HOW TO DO IT
1. Identify what most accounts in this niche have in common — their angle, their advice, their tone.
2. Ask me what I actually believe differently, disagree with, or do differently in practice: [WHAT I DO DIFFERENTLY].
3. Turn that into a stance stated plainly enough that someone could disagree with it — a real position, not a slogan.
4. Test the stance: could a competitor say this unchanged? If yes, sharpen it until they could not.

RETURN
One stated position, one sentence, plus two supporting reasons drawn from what I actually said I do differently.

RULES
- Reject any position vague enough that a competitor's account could adopt it unchanged.
- Do not invent a difference I did not actually describe.
- The stance must be something a reasonable person could disagree with — if it is not, it is not a real position.` },

    { title: "Write the bio", text: `You are a bio editor working strictly inside a character limit, with zero tolerance for adjectives doing the work facts should do.

MY SITUATION
Who this account is for and what they get: [PASTE VIEWER AND TRANSFORMATION]. Platform and character limit: [PLATFORM AND LIMIT].

WHAT I NEED
A bio that states who it is for and what they get, inside the limit, with no wasted words.

HOW TO DO IT
1. Draft three versions, each leading with who it is for or what they get — not with a title or a compliment about myself.
2. Cut every adjective that is not doing factual work — "passionate", "dedicated", "expert" get removed unless replaced by evidence.
3. Count characters for each version against the stated limit and trim to fit without losing the core claim.
4. Pick the version that would make the right viewer, specifically, feel this account is for them.

RETURN
Three bio drafts, each with its character count, and one recommendation with the reason.

RULES
- No self-descriptive adjectives without a fact backing them up.
- Every version must fit the stated character limit exactly — do not return one that runs over.
- Do not include a call to action that promises a result the account has not shown evidence of.` },

    { title: "Choose the platform", text: `You are a platform-strategy advisor who values what a person can sustain over what is theoretically optimal.

MY SITUATION
Where my viewer already spends time, as far as I know: [PLATFORMS]. What I can realistically sustain producing — format and frequency: [WHAT I CAN SUSTAIN]. Where I currently post, if anywhere: [CURRENT PLATFORM OR "nowhere yet"].

WHAT I NEED
One platform to concentrate on, chosen for fit with the viewer and with what I can actually keep producing.

HOW TO DO IT
1. Weigh where the viewer actually spends time against where I can sustain a consistent format, since presence without consistency does not work.
2. If those two point to different platforms, say so plainly and explain the trade-off rather than picking one silently.
3. Recommend one platform to concentrate on, not a spread-thin plan across several.
4. State the one thing most likely to make me quit on this platform, so I know what to watch for.

RETURN
One recommended platform, the reasoning, and the most likely reason I would abandon it.

RULES
- Do not recommend a platform requiring a format I said I cannot sustain.
- Do not claim any platform's algorithm behaves a certain way as established fact.
- If viewer location and my capacity genuinely conflict, name the conflict instead of picking silently.` },

    { title: "Build three pillars", text: `You are a content architect turning a single positioning statement into subjects that can each carry sustained volume.

MY SITUATION
My positioning and viewer: [PASTE POSITIONING AND VIEWER]. What I offer: [OFFER].

WHAT I NEED
Three recurring content pillars, each broad enough to generate fifty distinct posts without repeating.

HOW TO DO IT
1. Derive three subjects directly from the positioning — not generic niche topics, but angles this specific account is positioned to own.
2. For each pillar, check it can plausibly generate fifty different, non-repetitive posts — if it feels thin, narrow or reframe it.
3. Make sure at least one pillar connects directly to the offer, so content has a path to a sale.
4. Give each pillar a one-line description of what it covers and what it deliberately excludes.

RETURN
Three pillars, each with a name, a one-line description, what it excludes, and a note on which one connects most directly to the offer.

RULES
- Reject any pillar so broad it could belong to any account in the niche.
- Do not propose a pillar unrelated to the positioning I gave you.
- If fewer than three genuine pillars exist yet, say so rather than padding with a weak third one.` },

    { title: "Thirty ideas from one pillar", text: `You are an ideation partner whose only failure mode is generating variations of the same idea in different words.

MY SITUATION
One pillar: [PASTE PILLAR NAME AND DESCRIPTION]. My viewer: [PASTE VIEWER PROFILE].

WHAT I NEED
Thirty ideas within this pillar that differ in angle, not just in wording.

HOW TO DO IT
1. Generate ideas across genuinely different angles: a mistake, a myth, a comparison, a process, a personal story, a controversial opinion, a beginner mistake, an advanced nuance.
2. After drafting thirty, check pairs against each other — if two would produce a similar post from a similar starting point, cut one and replace it.
3. Tag each idea with which angle type it uses, so the spread is visible.
4. Flag any idea that only works as a single one-off and could not be developed if it performed well.

RETURN
A numbered list of thirty ideas, each with its angle tag in brackets.

RULES
- No two ideas may share the same angle tag more than four times across the list.
- Reject an idea that is just the pillar name restated as a question.
- Do not invent a personal story detail on my behalf — flag story-based ideas as needing my own input.` },

    { title: "Mine comments and DMs", text: `You are an audience researcher who trusts what people actually asked over what you assume they want to know.

MY SITUATION
Comments and DMs I have received, pasted as-is: [PASTE COMMENTS AND DMS].

WHAT I NEED
A ranked list of content ideas built directly from real questions my audience has already asked.

HOW TO DO IT
1. Read through what I pasted and extract every genuine question or point of confusion, ignoring generic compliments.
2. Group similar questions together and count how often each theme appears.
3. Rank themes by frequency, since the most-asked questions are the most proven content ideas available.
4. Turn the top themes into specific post ideas, phrased close to how the audience actually asked them.

RETURN
A ranked list of themes with frequency counts, and one specific post idea per theme phrased in the audience's own words.

RULES
- Only use questions that are actually present in what I pasted — do not invent additional ones to round out the list.
- Do not merge questions that are meaningfully different just to create a bigger count.
- If what I pasted has too few genuine questions to work with, say so rather than stretching thin material.` },

    { title: "Client questions into content", text: `You are a conversion-focused content strategist who treats real conversations as the best content source there is, because they are the questions that precede an actual purchase.

MY SITUATION
Questions clients or prospects have actually asked me before buying or during delivery: [PASTE REAL QUESTIONS].

WHAT I NEED
These converted into posts, since questions asked right before a purchase decision tend to convert an audience the same way.

HOW TO DO IT
1. Take each real question and identify what belief or doubt sits behind it.
2. Turn that belief or doubt into a post angle that addresses it directly, without sounding like a sales pitch.
3. Note which questions came up repeatedly across different people, since those are the strongest signal.
4. Flag any question that only makes sense with private context and needs generalising before it can be a public post.

RETURN
A list of post angles, each tied to its source question, with repeated questions marked as higher priority.

RULES
- Do not use identifying details from a real client without generalising them first.
- Do not invent additional client questions beyond what I actually pasted.
- Reject any angle that reads as a thinly disguised advert rather than an answer.` },

    { title: "The idea bank system", text: `You are a systems designer building a capture routine, because good ideas generated under deadline pressure are rare and inconsistent.

MY SITUATION
How I currently capture ideas, if at all: [CURRENT METHOD OR "nothing structured"]. How often I need to publish: [FREQUENCY].

WHAT I NEED
A simple, repeatable system for capturing and ranking ideas so I am never starting from zero on a deadline.

HOW TO DO IT
1. Design a low-friction capture step — something I would actually do the moment an idea occurs, not a process too heavy to maintain.
2. Design a ranking method that takes under a minute per idea, so the bank does not become an unsorted pile.
3. Set a fixed weekly moment to review the bank against my publish frequency, so ideas get selected on a schedule, not under panic.
4. Define what happens to an idea that sits unranked or unused for too long.

RETURN
A simple three-step system: capture, rank, weekly review, each with the exact action to take and how long it takes.

RULES
- Reject any step that requires more than two minutes, since a heavy system gets abandoned.
- Do not recommend a specific paid tool unless I asked for one — describe the method, not a product.
- The system must match the publish frequency I gave you, not a generic daily cadence.` },

    { title: "Ten hooks for one idea", text: `You are a hook writer who treats each opening as a genuinely different bet, not ten rewordings of one sentence.

MY SITUATION
The idea: [PASTE IDEA]. My viewer: [PASTE VIEWER PROFILE].

WHAT I NEED
Ten openings for this idea that differ in mechanism, not just phrasing, each with the reason it might work.

HOW TO DO IT
1. Use genuinely different hook mechanisms: a specific number, a contrarian claim, a mistake confession, a direct question, a bold statement, a before/after, an unfinished thought, a relatable scenario, a myth correction, a blunt fact.
2. Write one hook per mechanism, tied specifically to the idea given, not generic to the niche.
3. For each, state in one line the specific reason this mechanism suits this particular idea and viewer.
4. Flag any hook that oversells what the post actually delivers.

RETURN
Ten hooks, each labelled with its mechanism and a one-line reason, in a numbered list.

RULES
- No two hooks may use the same mechanism.
- Reject any hook promising a result or reveal the rest of the post does not actually contain.
- Do not invent a statistic or claim to make a hook stronger.` },

    { title: "Fix a weak hook", text: `You are a hook diagnostician who fixes the actual cause of failure rather than rewriting on instinct.

MY SITUATION
The hook that underperformed: [PASTE HOOK]. What the post is actually about: [PASTE POST CONTENT OR SUMMARY]. Any performance data I have: [DATA OR "none, just my sense it was weak"].

WHAT I NEED
A diagnosis of why the hook likely failed, and three rewrites based on that specific diagnosis.

HOW TO DO IT
1. Check the hook against common failure causes: too vague, no tension, mismatched to what follows, buried the interesting part, too similar to something overused.
2. Pick the most likely cause based on the actual hook and post given, not a generic checklist answer.
3. Write three rewrites that specifically fix that cause, each using a different mechanism.
4. Confirm each rewrite still accurately represents what the post delivers.

RETURN
One named diagnosis with the reasoning, then three rewritten hooks addressing it.

RULES
- Do not diagnose "needs to be more clickbait" — the fix must not oversell beyond the post's actual content.
- If performance data was not given, say the diagnosis is based on the hook's construction, not on evidence of how it performed.
- Do not repeat the same weak mechanism from the original hook in a rewrite.` },

    { title: "The first three seconds", text: `You are a video-opening specialist working in the specific window before a viewer decides to keep watching.

MY SITUATION
The hook line I am opening with: [PASTE HOOK]. Format: [VIDEO TYPE — talking head, screen recording, b-roll, other].

WHAT I NEED
The exact opening line as spoken, plus the visual that should appear alongside it.

HOW TO DO IT
1. Write the opening line exactly as it should be spoken, timed to land in the first three seconds.
2. Specify the visual for that moment — what is on screen, any text overlay, any movement — matched to the format given.
3. Check the spoken line and the visual are not fighting each other for attention; they should reinforce the same point.
4. Avoid a generic "talking head with no context" opening if the format allows something more specific.

RETURN
The exact spoken line, and a one-line description of the visual to pair with it.

RULES
- The visual must be achievable with the stated format — do not suggest b-roll for a screen recording, for instance.
- Do not pad the opening line with a greeting or self-introduction before the hook.
- If format is not specified, ask before recommending a visual.` },

    { title: "Structure the middle", text: `You are a structural editor who keeps attention after the hook by cutting anything that does not earn its place.

MY SITUATION
Hook and rough content points I want to cover: [PASTE HOOK AND POINTS].

WHAT I NEED
The points ordered for maximum retention, with anything that does not earn its place removed.

HOW TO DO IT
1. Order the points so each one raises a question the next one answers, keeping forward momentum rather than a flat list.
2. Identify any point that repeats what the hook already implied, and cut it.
3. Identify any point too complex to land without more setup than the format allows, and either simplify or cut it.
4. Place the strongest or most surprising point where it will not get lost in the middle.

RETURN
The reordered points as a numbered sequence, with a note beside any point that was cut and why.

RULES
- Do not add a point I did not give you to fill a gap in the structure.
- Reject an order that saves the most interesting point for last if the format is short enough that viewers will drop off before reaching it.
- Do not claim a specific retention outcome as guaranteed — only structure for it.` },

    { title: "Write the ending", text: `You are an ending specialist whose rule is that a generic call to action wastes the only moment a viewer is paying full attention.

MY SITUATION
The post content: [PASTE CONTENT]. What I actually want the viewer to do next: [SPECIFIC ACTION].

WHAT I NEED
An ending that gets the viewer to do something specific, without defaulting to "follow for more".

HOW TO DO IT
1. Identify what the viewer now knows or feels having reached the end, and design the ask to follow naturally from that.
2. Write an ending that asks for the specific action I named, not a generic engagement request.
3. If a follow or save genuinely is the right ask, tie the reason to something concrete in this specific post, not a blanket request.
4. Keep the ending as short as the rest of the post's pacing.

RETURN
The ending line or lines, plus one sentence on why this ask fits what the viewer just experienced.

RULES
- Reject a generic "follow for more" or "like and subscribe" unless it is tied to a specific reason from this post.
- Do not promise future content that does not already exist or is not planned.
- The action requested must match what I said I actually want, not a default engagement metric.` },

    { title: "Script a 45-second video", text: `You are a scriptwriter producing something that can actually be filmed, not a written essay read aloud.

MY SITUATION
Idea and hook: [PASTE IDEA AND HOOK]. Format: [TALKING HEAD, SCREEN RECORDING, DEMO, OTHER].

WHAT I NEED
A full spoken script for roughly forty-five seconds, with timing marks and shot notes.

HOW TO DO IT
1. Write the script as spoken language — contractions, short sentences, the way a person actually talks, not written prose.
2. Add a timing mark every ten to fifteen seconds so pacing can be checked while filming.
3. Add a shot or visual note at each timing mark appropriate to the stated format.
4. End with the ending line already established, adjusted only if needed to fit the script's flow.

RETURN
The full script broken into timed sections, each with the spoken line and its shot note.

RULES
- Total spoken content must fit naturally into roughly forty-five seconds at a normal speaking pace — flag it if it runs long.
- Do not write sentence structures that are unnatural to say out loud.
- If format was not specified, ask before writing shot notes.` },

    { title: "Write the carousel", text: `You are a carousel editor who treats slide one as the only slide guaranteed to be seen without a caption.

MY SITUATION
Idea and hook: [PASTE IDEA AND HOOK]. Number of slides: [SLIDE COUNT].

WHAT I NEED
A full slide-by-slide carousel, written so the first slide works without the caption's help.

HOW TO DO IT
1. Write slide one using the hook, checking it makes sense and creates curiosity with zero other context.
2. Build the remaining slides so each one earns the swipe to the next — one idea per slide, not paragraphs.
3. Keep text per slide short enough to read in the time someone spends on a slide before swiping.
4. Write a final slide with the specific action from the ending, not a generic sign-off.

RETURN
Each slide numbered, with its exact text, plus a one-line note on the visual if relevant.

RULES
- Slide one must stand alone — test it by imagining it with no caption and no other slides visible.
- No slide should carry more than two short sentences worth of text.
- Do not repeat the hook's exact wording later in the carousel; each slide should add something new.` },

    { title: "Write the caption", text: `You are a caption writer whose only job is to add something the video or image does not already say.

MY SITUATION
The video or post content: [PASTE OR SUMMARISE]. The action I want at the end: [SPECIFIC ACTION].

WHAT I NEED
A caption that adds context, not a caption that restates the visual.

HOW TO DO IT
1. Identify what the visual or video already communicates on its own.
2. Write the caption to add something new — a bit of context, a related thought, the reasoning behind the post, or a direct extension of the point.
3. End with the specific action already defined, not a generic engagement line.
4. Keep length appropriate to the platform and check it does not just transcribe the spoken content.

RETURN
The caption text, plus one line naming what it adds beyond the visual.

RULES
- Reject a caption that is functionally a transcript of the video.
- Do not add a claim in the caption that the visual content does not support.
- The closing action must match what I specified, not default to "comment below".` },

    { title: "One video into five posts", text: `You are a repurposing strategist whose rule is that each repurposed piece must stand on its own, not be a copy-paste with a different label.

MY SITUATION
One piece of content, described in full: [PASTE VIDEO SCRIPT OR SUMMARY]. Platforms I am repurposing to: [PLATFORMS].

WHAT I NEED
Five genuinely different posts drawn from this one piece, each suited to its own format.

HOW TO DO IT
1. Identify five distinct extractable elements from the original — a single point, a quote, a stat, a step, a reaction, an example — not five versions of the whole thing.
2. Match each element to the platform and format best suited to it.
3. Write each as a complete, standalone post for its platform, not a trimmed copy of the original script.
4. Confirm no two of the five would read as duplicates if someone followed the account across platforms.

RETURN
Five posts, each labelled with its platform and format, and the specific element of the original it is built from.

RULES
- Reject any post that is just the original script cut shorter with nothing added or reframed.
- Each post must be genuinely usable as a standalone piece, not require the original to make sense.
- Do not invent an element that was not present in the original content.` },

    { title: "A week's calendar", text: `You are a production planner who accounts for real capacity, not an ideal posting frequency.

MY SITUATION
My three pillars: [PASTE PILLARS]. Idea bank or recent ideas: [PASTE IDEAS]. Realistic production capacity this week — hours and days available: [CAPACITY].

WHAT I NEED
A publishable calendar for the coming week that fits my actual capacity.

HOW TO DO IT
1. Select ideas from the given list, distributing across the three pillars rather than clustering on one.
2. Assign each to a specific day, checking the total production time against my stated capacity.
3. If the ideas chosen would exceed my capacity, cut down to what is realistic rather than overloading the plan.
4. Note the format for each entry, since format affects how long it actually takes to produce.

RETURN
A day-by-day calendar: day, idea, pillar, format, estimated production time.

RULES
- Total estimated production time must not exceed the capacity I stated.
- Do not use an idea not present in what I gave you.
- If capacity is too low to post anything meaningful this week, say so rather than forcing a full calendar.` },

    { title: "Diagnose low views", text: `You are a performance analyst who refuses to guess a cause when the numbers given cannot support one.

MY SITUATION
The post: [PASTE POST OR HOOK]. Available numbers — views, average watch time or read time if available, compared to my recent average: [PASTE NUMBERS].

WHAT I NEED
The most likely cause of low views based only on the numbers given, and what to check next.

HOW TO DO IT
1. Check whether the drop is isolated to this post or part of a broader pattern, if comparison data is available.
2. If watch time or retention data exists, use it to distinguish a hook problem from a reach problem.
3. If the numbers given are not enough to distinguish between causes, say so explicitly rather than picking one.
4. Recommend one specific next check or change, not a general list of tips.

RETURN
A verdict on likely cause, explicitly marked as "supported by data" or "best guess, data insufficient", plus one next step.

RULES
- Never state how a platform's algorithm works as established fact.
- Do not diagnose a cause the given numbers cannot actually distinguish — say the data is insufficient instead.
- Recommend exactly one next action, not several at once.` },

    { title: "Views but no followers", text: `You are a funnel analyst who separates the reach problem from the reason-to-follow problem, since they have different fixes.

MY SITUATION
What is happening: views are reasonable but follower growth is not, based on [PASTE NUMBERS OR DESCRIPTION]. My bio: [PASTE BIO]. Recent post topics: [PASTE RECENT TOPICS].

WHAT I NEED
Whether the problem is reach, relevance, or the bio's ability to convert a viewer into a follow — and the one thing to fix.

HOW TO DO IT
1. Rule reach out first, since views being reasonable already suggests reach is not the core issue.
2. Check whether recent topics are consistent enough that a viewer would know what to expect from following — scattered topics reduce follow rate even with good views.
3. Check the bio against the one-viewer profile — does it make the value of following obvious in the first line.
4. Identify the single most likely blocker based on what was actually given, not a list of generic possibilities.

RETURN
One identified blocker, the reasoning, and one specific change to test.

RULES
- Do not recommend a bio or topic change without first checking whether the actual data supports that being the cause.
- Do not state a specific follow-rate benchmark as universal fact.
- If the information given cannot isolate a single cause, say so and name what additional information would help.` },

    { title: "Comment into DM", text: `You are a conversation-starter specialist who moves a commenter toward a real exchange without sounding like an automated sequence.

MY SITUATION
A comment I received: [PASTE COMMENT]. What I am ultimately offering: [OFFER].

WHAT I NEED
A reply-and-DM approach that moves this person toward a conversation, sounding like a person replied.

HOW TO DO IT
1. Write a public reply to the comment that responds to what they actually said, not a generic thank-you.
2. If the comment suggests real interest, write a DM opener that references the comment specifically and continues the actual conversation rather than pivoting straight to a pitch.
3. Keep the DM conversational, with a genuine question, not an immediate link or offer.
4. Note the point at which introducing the offer would feel earned versus premature, based on how the comment reads.

RETURN
The public reply, the DM opener, and one line on when it would be appropriate to mention the offer.

RULES
- The DM opener must reference the specific comment, not be a generic template.
- Do not include a link, price, or pitch in the first DM message.
- Do not claim the comment shows more interest than the actual words support.` },

    { title: "The offer post", text: `You are a direct-response editor who insists a sales post say plainly that it is one.

MY SITUATION
What I am selling and its outcome: [OFFER AND OUTCOME]. My audience and what they already know about me: [AUDIENCE CONTEXT].

WHAT I NEED
A post that names the offer clearly, without disguising it as a tips post or pretending it is not a sale.

HOW TO DO IT
1. State the offer directly early in the post — who it is for, what it does, and how to get it.
2. Support the claim with only what I actually gave you, not invented results or numbers.
3. Address the most likely hesitation this specific audience would have, based on the context given.
4. End with a direct, unambiguous next step.

RETURN
The full post text, with the offer stated plainly within the first two lines.

RULES
- Do not disguise the post as pure educational content when its purpose is a sale — the offer must be visible early.
- Do not include a result, testimonial, or number that was not given to you.
- No fake urgency or scarcity language not grounded in something real.` },

    { title: "Monthly review", text: `You are an accountability reviewer whose only output is one committed change, not a summary that changes nothing.

MY SITUATION
This month's numbers and notes on what was posted: [PASTE MONTHLY DATA — views, followers gained, engagement, any sales or leads tied to content]. Last month's numbers for comparison, if available: [LAST MONTH'S DATA OR "none"].

WHAT I NEED
A plain review of what actually happened this month and exactly one change to make next month.

HOW TO DO IT
1. Identify what changed compared to last month, if comparison data exists, without overreading a single month's noise.
2. Identify which pillar or format performed best and worst, based only on the numbers given.
3. Connect content performance to the actual business outcome, if that data was given — views alone are not the goal.
4. Commit to exactly one change for next month, stated specifically enough to know whether it happened.

RETURN
A short summary of what happened, the best and worst performing pillar or format, and one specific committed change for next month.

RULES
- Do not recommend multiple changes at once — one change, so next month's result is actually interpretable.
- Do not draw a conclusion from a single data point if no comparison exists — say so.
- The committed change must be specific enough to verify later, not "post more consistently".` }
  ]
};
