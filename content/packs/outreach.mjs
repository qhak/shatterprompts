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
    ready: false,
    promptCount: 200,
    blurb: "Deeper workflows for building a prospect list, research at volume, multi-channel sequencing, and reply handling.",
    includes: [
      "Every prompt from the free pack",
      "List building and research at volume",
      "Multi-channel sequences: email, DM, phone",
      "Reply handling and objection workflows",
      "Deliverability and testing playbooks"
    ],
    checkoutUrl: "",
    downloadUrl: ""
  },

  seo: {
    title: "Free Cold Outreach AI Prompt Pack — Write outreach that earns a reply",
    description: "25 practical AI prompts to research prospects, find a real problem, write personal cold emails and DMs, and follow up properly. Free."
  },

  previews: [
    {
      title: "The research pass",
      text: `My prospect is [NAME] at [COMPANY], role [ROLE]. Here is everything I can see about them: [PASTE — website copy, recent posts, job ads, reviews, anything public].

List three specific observations I could reference in a first message. For each, rate 1-5 on how strongly it proves I actually looked, rather than something I could say to any business in this industry.

Discard anything scoring below 4 and tell me exactly what I would need to look at to find something better.

Do not infer facts that are not in what I pasted. If there is not enough here to say anything specific, say so plainly rather than producing something generic.`
    }
  ],

  prompts: [
    { title: "Define who is worth contacting", text: `I sell [SERVICE] to roughly [MARKET].

Define the prospect actually worth my time: their situation, size, what they are probably already doing about this problem, who signs off the money, and the trigger that makes it urgent now.

Then list eight observable signals that a specific business is in that situation, ranked by how strongly each predicts a reply. For each, say exactly where the signal is visible from the outside.` },

    { title: "Find where they are", text: `My ideal prospect is: [PASTE PROFILE].

Tell me the ten most realistic places to find a list of these businesses — directories, marketplaces, review sites, job boards, association member lists, event attendee lists, local listings.

For each: what data I can get, roughly how many prospects are realistically there, and how much manual work it takes. Rank by effort-to-quality ratio for someone with no budget for paid tools.` },

    { title: "Build the list criteria", text: `Write the exact inclusion and exclusion rules for my prospect list for [SERVICE].

Include: size range, industry, location, what must be true about their current situation, and the disqualifiers that mean I should skip them even if they look like a fit.

Then give me a simple scoring rule from 1 to 5 I can apply quickly to each prospect so I stop wasting time on the bottom half.` },

    { title: "Research pass", text: `My prospect is [NAME] at [COMPANY], role [ROLE]. Here is everything I can see about them: [PASTE — website copy, recent posts, job ads, reviews, anything public].

List three specific observations I could reference in a first message. For each, rate 1-5 on how strongly it proves I actually looked, rather than something I could say to any business in this industry.

Discard anything scoring below 4 and tell me exactly what I would need to look at to find something better.

Do not infer facts that are not in what I pasted. If there is not enough here to say anything specific, say so plainly rather than producing something generic.` },

    { title: "Find the real problem", text: `Based on this information about [COMPANY]: [PASTE].

Infer the three problems most likely costing them money or time right now, ranked by how aware they probably already are of each.

For each: the evidence you are basing it on, how confident I should be, and what it plausibly costs them.

Separate clearly what you actually observed from what you are assuming. Assumptions must be labelled as assumptions.` },

    { title: "Qualify before writing", text: `Here is what I know about a prospect: [PASTE].

Score them 1-5 on: do they clearly have the problem, can they afford it, can this person decide alone, is there a reason to act now, and can I genuinely deliver for them.

Give a total, a verdict (write to them / research more / skip), and the single question I would need answered to move them up a category.` },

    { title: "The first line", text: `Write ten opening lines for a cold email to [NAME] at [COMPANY], based on this observation: [OBSERVATION].

Each must be under 20 words, must not compliment them, must not mention me or my company, and must be impossible to send to a different business unchanged.

Then mark the two strongest and explain exactly what makes them specific rather than flattering.` },

    { title: "The cold email", text: `Write a cold email to [ROLE] at [COMPANY]. Under 120 words.

Structure: one line proving I understand their specific situation, one line naming an outcome I can help with, one line of proof, one soft ask that is easy to say yes to.

Ban: "I hope this finds you well", "I wanted to reach out", "quick question", buzzwords, a bulleted list of services, an attachment, and a calendar link in the first message.

MY OFFER: [OFFER]
MY OBSERVATION: [OBSERVATION]
MY PROOF: [PROOF]` },

    { title: "Subject lines", text: `Write twelve subject lines for the email below.

Four plain and descriptive, four referencing the specific observation, four phrased as a short genuine question.

Rules: maximum six words, no title case, no false urgency, no "quick question", nothing that reads like marketing, nothing that promises something the email does not deliver.

Then predict which three a busy owner actually opens and explain why.

EMAIL: [PASTE]` },

    { title: "DM version", text: `Rewrite this cold email as an Instagram or LinkedIn DM: [PASTE EMAIL].

It must fit on a phone screen with no scrolling, read like a person typing rather than a template, and must not open with "Hey! Hope you're doing well".

Give me a two-message version: a short opener whose only job is earning a reply, and the follow-up I send once they respond. Do not put the pitch in the first message.` },

    { title: "Connection note", text: `Write a LinkedIn connection request note to [NAME], role [ROLE] at [COMPANY], under 200 characters.

It must give a real reason for connecting that is specific to them, must not pitch anything, and must not say "I'd love to add you to my professional network".

Give three versions: one referencing their work, one referencing something the company is doing, one referencing a shared context.` },

    { title: "Voice note script", text: `Write a 25-second voice note script to send to [PROSPECT TYPE] about [OBSERVATION].

It should sound spoken, not read. Short sentences. One specific observation, one sentence on what I do, one easy question at the end.

Mark where I should pause. Flag any phrase that would sound rehearsed if said out loud.` },

    { title: "Follow-up sequence", text: `Write a three-step follow-up for the message below, sent day 3, day 7 and day 14.

Each must add something genuinely new — a relevant example, a short observation about their business, a resource, or a smaller easier ask.

None may say "just bumping this", "circling back", "following up on my last email", or repeat the original pitch. The final one should make it easy and comfortable to say no.

ORIGINAL: [PASTE]` },

    { title: "The close-out message", text: `Write the last message I send to a prospect who has ignored four attempts.

It should: acknowledge they are probably not interested without guilt-tripping, leave one clear line about what I do in case timing changes, and explicitly say I will not follow up again.

Under 60 words. No passive aggression, no "I'll assume you're not interested", no fake final-chance framing.` },

    { title: "Objection replies", text: `Here are the replies I get most often: [PASTE — e.g. "too expensive", "we do this in-house", "send me more info", "not right now"].

For each, write a reply under 60 words that takes the objection seriously, asks one clarifying question, and does not argue or discount.

Then tell me which of these objections actually mean I targeted the wrong person, and should stop being handled at all.` },

    { title: "The “send me info” reply", text: `A prospect replied "send me some more info" about [SERVICE].

This usually means "go away politely". Write a reply that does not send a brochure but instead asks one specific question to find out whether there is a real problem.

Give me two versions: one for a prospect who seems genuinely interested, one for a prospect who is clearly deflecting. Tell me how to tell the difference from their wording.` },

    { title: "Handle the price question", text: `A prospect asked "how much do you charge?" before I know anything about their situation.

Write a reply that gives a real range rather than dodging, then asks the two questions that determine where in the range they would fall.

Under 80 words. It must not sound evasive, and it must not commit me to a number before I understand the scope.` },

    { title: "Book the call", text: `Write the message that turns a warm reply into a booked call for [SERVICE].

It should propose a specific short call, say exactly what we will cover and how long it takes, and give two concrete time options rather than asking them to pick from nothing.

Under 70 words. No calendar-link-only reply, no "let me know when suits".` },

    { title: "Pre-call research brief", text: `I have a call booked with [NAME] at [COMPANY]. Here is what I know: [PASTE].

Build me a one-page brief: what they likely want, the three questions I must ask, the two things I should not say, what would make this a good fit, and what would make me walk away.

Then list five questions they are likely to ask me, and a short honest answer for each.` },

    { title: "Post-call follow-up", text: `Here are my notes from a call with a prospect: [PASTE NOTES].

Write the follow-up email: what I heard them say in their own words, what I propose, what it costs, the timeline, and the specific next step with a date.

Under 150 words. Only include things they actually said — if my notes are missing something important, list it as a question for me rather than filling the gap.` },

    { title: "Referral ask", text: `Write the message asking [NAME] for a referral, given our relationship is: [PASTE CONTEXT].

It must make referring easy — name exactly who I am looking for, make it effortless to say no, and give them something forwardable.

Then write the short forwardable paragraph they could paste to someone else without editing it.` },

    { title: "Reply analysis", text: `Here is my sent message and every reply and non-reply: [PASTE].

Group the responses into: interested, not now, wrong person, price objection, no fit, and silence. Give the count and percentage of each.

For each group, tell me what my message most likely caused, and rewrite the exact line responsible.

Then name the single change for the next batch and the number I should watch to know whether it worked. Say clearly where the sample is too small to conclude anything.` },

    { title: "Design the next test", text: `My last outreach round performed like this: [PASTE NUMBERS].

Design one test for the next round. Change one variable only. Tell me exactly what changes, what stays identical, how many sends I need before the result means anything, and what result would make me keep the change.

Reject any test that would need more volume than [N] sends to read.` },

    { title: "Personalisation at scale", text: `I need to send [N] messages a week for [SERVICE] without them reading as mail-merge.

Design a system: which parts of the message stay fixed, which parts must be genuinely researched per prospect, roughly how long the research should take each, and where I can prepare reusable blocks by segment rather than per person.

Then give me the research checklist I run for each prospect, ordered so I can stop early if they are clearly not a fit.` },

    { title: "Deliverability check", text: `Review my cold email below for anything likely to hurt deliverability or trip a spam filter.

Check: link count, attachment, image use, trigger words, all-caps, excessive punctuation, message length, sender-name mismatch, and whether the unsubscribe path is clear for the jurisdiction.

Then rewrite it with the problems fixed while keeping the meaning identical, and list what I should check on the account side that no rewrite can fix.

EMAIL: [PASTE]` }
  ]
};
