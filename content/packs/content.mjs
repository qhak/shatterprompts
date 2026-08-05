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
    ready: false,
    promptCount: 200,
    blurb: "Deeper workflows for positioning, a 30-day calendar, repurposing across formats, and a monthly performance review.",
    includes: [
      "Every prompt from the free pack",
      "30-day and 90-day calendar builders",
      "Repurposing workflows across every format",
      "Hook libraries by niche",
      "Monthly performance review workflows"
    ],
    checkoutUrl: "",
    downloadUrl: ""
  },

  seo: {
    title: "Free Content Creation AI Prompt Pack — Content that creates demand",
    description: "25 practical AI prompts for content pillars, hooks, short-form scripts, captions, calls to action and a simple posting system. Free."
  },

  previews: [
    {
      title: "Ten hooks, ten angles",
      text: `My audience is [AUDIENCE] and they are trying to [GOAL]. My topic is [TOPIC].

Write ten short-form hooks for this single idea, each from a different angle: contrarian, common mistake, specific result, direct question, short list, personal story, myth, comparison, warning, and behind-the-scenes.

Each under 12 words. No clickbait I cannot pay off in the content itself — if a hook promises something the piece would not deliver, do not write it.

Then mark the three that would still make sense to someone who has never heard of me, and explain what makes them work without context.`
    }
  ],

  prompts: [
    { title: "Audience and problem map", text: `I want to reach [AUDIENCE] and I help them [OUTCOME].

Map their situation: what they are trying to do, what they have already tried, what they believe the obstacle is, and what the real obstacle usually turns out to be.

Then list the ten questions they would genuinely type into a search bar or ask a friend, in their words rather than industry language.

Mark which of those questions I am actually qualified to answer.` },

    { title: "Three content pillars", text: `Based on this audience map: [PASTE].

Propose three content pillars. For each: what it proves about me, the audience problem it answers, why someone would follow me for it, and five recurring angles I can post about without repeating myself.

Merge any pillars that overlap. Then tell me which pillar should be most frequent, which is closest to my offer, and which is most likely to reach people who have never heard of me.` },

    { title: "Positioning sentence", text: `From my pillars and background below, write one sentence describing what I post about and who it is for.

INPUTS: [PASTE]

Then give three alternatives — one blunt, one specific, one broader — and tell me which is most defensible given my actual experience.

Reject any version that would read identically on a competitor's profile.` },

    { title: "Content-offer fit check", text: `My offer is [OFFER]. My three pillars are [PASTE PILLARS].

For each pillar, tell me honestly how it connects to the offer: directly, indirectly, or not at all.

Then identify which pillar is attracting the wrong audience — people who will consume everything and never buy — and what I would change to fix it without making the content salesy.` },

    { title: "Ten hooks, ten angles", text: `My audience is [AUDIENCE] and they are trying to [GOAL]. My topic is [TOPIC].

Write ten short-form hooks for this single idea, each from a different angle: contrarian, common mistake, specific result, direct question, short list, personal story, myth, comparison, warning, and behind-the-scenes.

Each under 12 words. No clickbait I cannot pay off in the content itself — if a hook promises something the piece would not deliver, do not write it.

Then mark the three that would still make sense to someone who has never heard of me, and explain what makes them work without context.` },

    { title: "Score and fix the hooks", text: `Here are my hooks: [PASTE].

Score each 1-5 on: specificity, tension, clarity in under two seconds, and whether the content can actually deliver what it promises.

Rewrite every hook scoring 3 or below — twice each, one shorter and one more specific.

Do not add hype words, superlatives, or claims my content does not support. Tell me which hooks should be deleted rather than rewritten.` },

    { title: "Short-form script", text: `Turn this idea into a 40-second script: [IDEA].

Structure: hook in one line, three beats each carrying one concrete example, then a closing line that invites a specific reply.

Grade 6 reading level. Spoken part under 110 words. Mark on-screen text in [brackets] and tell me where the visual must change to hold attention.

Flag any sentence that would be hard to say naturally out loud.` },

    { title: "Written post", text: `Write a post for [PLATFORM] about [TOPIC] for [AUDIENCE].

Open with a specific situation rather than a general claim. Make one point only. Use a concrete example with real detail. End with a takeaway they can use today.

Under 200 words. No emoji headers, no "let that sink in", no engagement bait, no numbered list of vague tips.` },

    { title: "Carousel outline", text: `Outline a [N]-slide carousel about [TOPIC] for [AUDIENCE].

Slide 1 must earn the swipe on its own. Each following slide gets one idea and one line of supporting detail. The final slide gets the action.

For each slide give: the headline text, the supporting line, and what the visual should show. Keep every headline under 8 words.` },

    { title: "Caption and call to action", text: `Write three caption variations for this post: [PASTE].

Each should end with a different action: a reply prompt, a save prompt, and a comment-keyword prompt using the keyword [KEYWORD].

For the keyword version, make the instruction unmistakable but not desperate, and make the value of what they receive obvious in one line.

No "double tap if you agree", no fake questions I would not read the answers to.` },

    { title: "Comment-to-DM funnel", text: `I want people to comment [KEYWORD] to receive [THING].

Write the post that earns the comment: the hook, genuinely useful content in the post itself, and the instruction. The post must be worth reading even for someone who never comments.

Then write the DM I send when they do — short, delivers the thing immediately, no pitch, and one reason to reply.

Then write the second DM I send two days later that offers help without selling.` },

    { title: "Story sequence", text: `Plan a [N]-frame story sequence about [TOPIC] for [AUDIENCE].

For each frame: what is on screen, the text overlay, and its job in the sequence. Include one interactive element (poll, question, slider) placed where it makes sense rather than at the end.

The last frame gets the action. Keep every overlay under 10 words.` },

    { title: "One idea, one week", text: `Take this single idea: [IDEA].

Turn it into seven pieces across the week — different formats and different angles, not the same post reworded.

For each: format, angle, working title, the hook, and the one action I want.

Mark which two are aimed at people who have never heard of me, and which one sits closest to my offer.` },

    { title: "Plan a series", text: `Design a [N]-part series about [TOPIC] for [AUDIENCE].

For each part: the specific promise, what it covers, and why someone would come back for the next one.

The series must build — each part should be worth watching alone but better in order. Tell me what the audience can do by the end that they could not at the start.` },

    { title: "Content calendar", text: `Build a 30-day calendar from my three pillars: [PASTE PILLARS].

Rotate the pillars evenly. For each day: pillar, format, working title, the hook, and the one action.

Rules: no day repeats an angle already used, every week includes at least one piece aimed at a cold audience, and no more than two directly promotional pieces in the month.

Return it as a table and mark the four pieces most worth repurposing.` },

    { title: "Batch it", text: `Here is my content calendar: [PASTE].

Group the pieces into batches I can produce in single sittings — same format together, same setup together, same research together.

Give me a realistic production schedule for [HOURS] hours per week, and tell me which pieces need something I do not yet have (footage, data, a screenshot, permission).` },

    { title: "Voice and tone rules", text: `Here are three things I have written: [PASTE].

Extract my actual voice: sentence length, vocabulary level, how direct I am, what I do and do not use, recurring habits.

Write it as a rules sheet I can paste into any future prompt, including a "never do this" list.

Be honest about the habits that weaken my writing, not just the ones that make it distinctive.` },

    { title: "Rewrite in my voice", text: `Rewrite the text below using my voice rules: [PASTE VOICE RULES].

TEXT: [PASTE]

Keep the meaning and structure. Change only the phrasing so it sounds like me.

Then show me a short list of the specific edits you made and why, so I can learn the pattern rather than depending on the prompt.` },

    { title: "Optimise the profile", text: `Rewrite my [PLATFORM] bio for someone landing on it straight from a piece of content.

It must answer in three seconds: who this is for, what they get, and what to do next.

INPUTS: [WHO I HELP, THE RESULT, MY PROOF, THE ACTION I WANT]

Give a version within the platform character limit and one alternative. No "passionate about", no emoji ladders, no vague mission statements.` },

    { title: "Adapt a trend honestly", text: `Here is a trend or format doing well right now: [DESCRIBE].

Tell me whether it genuinely suits my pillars: [PASTE PILLARS]. If it does not, say so and stop.

If it does, give me three ways to use it that still say something true about my subject, and one version that would be a mistake because it prioritises the format over the point.` },

    { title: "Reply to comments", text: `Here are comments on a recent post: [PASTE].

Group them into: genuine questions, disagreement, praise, spam, and buying signals.

For the questions and disagreement, write replies that add something rather than just thanking people. For the buying signals, write a reply that moves the conversation to DMs without being pushy.

Flag any comment I should not reply to at all.` },

    { title: "Pitch a collaboration", text: `I want to collaborate with [PERSON OR ACCOUNT], who posts about [TOPIC].

Write the outreach message: why them specifically, what I am proposing, what their audience gets from it, and what I bring.

Under 100 words. It must not be flattery, must propose something concrete rather than "let's collab", and must be easy to decline.` },

    { title: "Performance review", text: `Here is my last 30 days of content and rough performance: [PASTE].

Separate what actually worked from what got attention but led nowhere. Look for patterns in hook type, topic, format, length and posting time.

Tell me the two things to do more of, the one thing to stop, and what to test next.

State exactly what evidence you are using, and say plainly where the data is too thin to conclude anything.` },

    { title: "Diagnose a flop", text: `This piece underperformed: [PASTE THE PIECE AND ITS NUMBERS].

Work through the possible causes in order: was it the hook, the topic, the format, the length, the timing, the audience, or was it just variance?

For each, give the evidence for and against. Then tell me the most likely single cause and the one change worth making. If the honest answer is variance, say that rather than inventing a lesson.` },

    { title: "Kill or keep", text: `Here is everything I am currently posting: [PASTE FORMATS AND PILLARS WITH ROUGH RESULTS].

Tell me what to stop doing. For each thing: how much time it costs, what it returns, and whether that return justifies it.

Be decisive — name the one thing consuming the most time for the least result, and what I should do with those hours instead.` }
  ]
};
