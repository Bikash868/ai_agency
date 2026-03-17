export interface NewsletterIssue {
  slug: string;
  issue: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
    conclusion: string;
  };
}

export const newsletterIssues: NewsletterIssue[] = [
  {
    slug: "generative-ai-brand-identity-2026",
    issue: "Issue #24",
    tag: "AI Trends",
    date: "March 2026",
    title: "How Generative AI Is Reshaping Brand Identity in 2026",
    excerpt:
      "From AI-generated logos to adaptive visual systems, brands are rethinking what identity even means. This issue breaks down the five biggest shifts — and what they mean for your competitive advantage.",
    image: "/assets/newsletters/featured.jpg",
    readTime: "8 min read",
    content: {
      intro:
        "Brand identity is no longer a static document locked in a PDF style guide. In 2026, the most forward-thinking brands are building living visual systems — ones that adapt, evolve, and generate on demand. Generative AI isn't just a production tool anymore; it's becoming the backbone of how brands express themselves.",
      sections: [
        {
          heading: "1. Adaptive Visual Systems Replace Static Style Guides",
          body: "The era of the monolithic brand guidelines PDF is ending. Brands like Spotify, Nike, and a wave of VC-backed startups are now deploying AI-powered design systems that generate on-brand assets in real time. Instead of a fixed logo with prescribed usage rules, a brand might now have a 'generative identity' — a set of AI parameters that can produce thousands of unique yet cohesive visuals.",
        },
        {
          heading: "2. AI Is Making Brand Consistency Easier and Harder Simultaneously",
          body: "On one hand, AI tools can now enforce brand guidelines at scale — auto-checking colors, fonts, and tone across every touchpoint. On the other hand, when everyone has access to the same AI models, differentiation becomes harder. The brands winning are those that have fine-tuned their own models on proprietary visual data, creating styles that can't be easily replicated.",
        },
        {
          heading: "3. The Rise of the 'Brand Voice Model'",
          body: "Writing a brand voice guide was once a consulting project. Today, agencies like ours are training brand-specific language models on a client's existing content, customer conversations, and aspirational voice examples. The output is a model that generates on-brand copy, responds to customer inquiries, and maintains tone consistency across every channel — automatically.",
        },
        {
          heading: "4. Real-Time Personalization at the Identity Level",
          body: "The most cutting-edge brands are now personalizing not just messaging, but visual identity itself. Imagine a landing page that subtly adapts its color palette, imagery, and typography based on the visitor's inferred demographics or past behavior. This is happening today — and it's raising genuine questions about authenticity, trust, and what 'brand' even means.",
        },
        {
          heading: "5. What This Means for Your Competitive Advantage",
          body: "If you're still treating brand as a static asset, you're leaving enormous value on the table. The competitive advantage now belongs to brands that treat identity as an AI-augmented system: scalable, consistent, and personalized. The good news? You don't need a Fortune 500 budget. The tooling has democratized. What you need is the right strategy — and partners who understand both AI and brand.",
        },
      ],
      conclusion:
        "The brands that will lead in 2026 and beyond won't be the ones with the biggest design teams. They'll be the ones that have built AI-powered identity systems that work while their teams sleep. If you're curious about how to build one, reply to this email — we'd love to talk.",
    },
  },
  {
    slug: "seo-playbook-2026",
    issue: "Issue #23",
    tag: "SEO",
    date: "Feb 24, 2026",
    title: "The 2026 SEO Playbook: What Changed, What Died, What Works",
    excerpt:
      "Core updates shifted the landscape again. Here's how to navigate the new search reality without burning your rankings.",
    image: "/assets/newsletters/seo.jpg",
    readTime: "6 min read",
    content: {
      intro:
        "Google's March 2026 core update was a watershed moment. Sites that had been riding on thin AI-generated content got obliterated. At the same time, a new class of sites — those combining genuine expertise with smart AI assistance — shot to the top. Here's what you actually need to know.",
      sections: [
        {
          heading: "What Died: Thin AI Content at Scale",
          body: "The sites that published thousands of AI-generated articles with minimal human input and no genuine subject-matter expertise saw catastrophic drops. Google's improved ability to detect 'people-less' content — content that lacks firsthand experience, original research, or genuine editorial judgment — is now definitively real.",
        },
        {
          heading: "What Survived: AI-Assisted Expert Content",
          body: "Here's the nuance most SEOs are missing: AI content didn't die, lazy content died. Sites where humans with genuine expertise used AI as a drafting and research tool — then added original insights, proprietary data, and real opinions — are thriving. The signal Google is chasing is experience and expertise, not the absence of AI.",
        },
        {
          heading: "The New Entity Strategy",
          body: "Knowledge Graph entities are more important than ever. Brands that have established strong entity relationships — through Wikipedia entries, authoritative backlinks, podcast appearances, and press mentions — are seeing significant ranking protection even when content quality signals are ambiguous. Entity building is the new link building.",
        },
        {
          heading: "Technical SEO: The INP Reckoning",
          body: "Interaction to Next Paint (INP) is now firmly embedded in Google's Page Experience signals, and it's separating well-engineered sites from mediocre ones. React-heavy SPAs without proper optimization are particularly vulnerable. If your INP is above 500ms, you have a problem — and it's affecting your rankings.",
        },
      ],
      conclusion:
        "The 2026 playbook is simple in principle but hard in execution: genuine expertise, real experience, original research, and technically excellent websites. AI accelerates the production; humans provide the substance. Get that ratio right, and you'll be standing while others fall.",
    },
  },
  {
    slug: "poster-design-ai-techniques",
    issue: "Issue #22",
    tag: "Design",
    date: "Feb 17, 2026",
    title: "Poster Design in the Age of AI: 10 Techniques We Swear By",
    excerpt:
      "Our creative team's actual workflow for producing campaign posters that stop the scroll, with AI at the centre of each technique.",
    image: "/assets/newsletters/design.jpg",
    readTime: "5 min read",
    content: {
      intro:
        "We've produced over 400 posters in the past 18 months. Not all of them were great — but through iteration and experimentation, we've developed a workflow that reliably produces campaign-quality visuals. Here are the 10 techniques we actually use every week.",
      sections: [
        {
          heading: "1. Brief Deconstruction with GPT-4o",
          body: "Before touching a single design tool, we feed the creative brief into a structured prompt that extracts: target emotion, key visual metaphors, typography personality, and color story. This 10-minute exercise has eliminated more creative dead ends than any other single change we've made.",
        },
        {
          heading: "2. Midjourney for Concept Exploration, Not Final Output",
          body: "We never use Midjourney images directly. We use them as concept sketches — rapid explorations of a visual direction that we then recreate properly in Photoshop or Figma. The AI gives us 20 directions in 5 minutes; we pick the best and execute it with craft.",
        },
        {
          heading: "3. The 3-Layer Typography System",
          body: "Every poster we design uses exactly three type layers: a hero statement (large, bold, kinetic), a supporting line (medium weight, creates contrast), and a utility layer (small, functional). This structure creates instant visual hierarchy and makes posters readable at any size, from billboard to Instagram story.",
        },
        {
          heading: "4. AI-Generated Texture Overlays",
          body: "One of our signature techniques: we generate abstract texture images in Midjourney using prompts focused on material properties (weathered concrete, oil paint, film grain) rather than representational subjects. These get blended at low opacity over photography to add tactility that pure digital design lacks.",
        },
      ],
      conclusion:
        "The common thread in all ten techniques: AI handles the exploration and the grunt work, humans make the decisions and add the craft. That's the collaboration model that produces work people actually respond to.",
    },
  },
  {
    slug: "ai-video-production-budgets",
    issue: "Issue #21",
    tag: "Video",
    date: "Feb 10, 2026",
    title: "Why AI Video Is Eating Traditional Production Budgets",
    excerpt:
      "We ran the numbers across 50 projects. The results will make every marketing director re-evaluate their production line.",
    image: "/assets/newsletters/video.jpg",
    readTime: "7 min read",
    content: {
      intro:
        "Last quarter, we analyzed the production costs, turnaround times, and performance metrics across 50 video projects — 25 produced with traditional methods, 25 using our AI-augmented pipeline. The findings were stark enough that we're sharing them publicly.",
      sections: [
        {
          heading: "The Numbers: A Summary",
          body: "Average cost of traditional 60-second brand video: $18,400. Average cost of AI-augmented equivalent: $4,200. Average turnaround, traditional: 3.5 weeks. AI-augmented: 5 days. Performance metrics (CTR, completion rate, social engagement): no statistically significant difference. In several categories, AI-produced videos outperformed traditional ones.",
        },
        {
          heading: "What's Actually Driving the Cost Reduction",
          body: "The savings don't come from one magic tool — they come from eliminating or compressing multiple expensive phases: pre-production planning, location scouting, talent casting, day-of production, and post-production editing. AI doesn't eliminate these stages; it collapses them. What took a 10-person team two weeks can now be done by 2 people in 3 days.",
        },
        {
          heading: "Where Traditional Production Still Wins",
          body: "Authenticity-driven content — testimonials, behind-the-scenes, live events — still benefits from traditional production values. And for luxury brands where craft is part of the product story, hand-crafted production remains important. But for the vast majority of marketing video needs, the ROI case for AI production is now overwhelming.",
        },
      ],
      conclusion:
        "If you're still allocating $15-25k for a single brand video, ask your agency what percentage of that budget is genuinely necessary in 2026. The answer might surprise you — and free up significant budget for distribution.",
    },
  },
  {
    slug: "core-web-vitals-2026",
    issue: "Issue #20",
    tag: "Web",
    date: "Feb 3, 2026",
    title: "Core Web Vitals in 2026: The Performance Bar Just Moved Up",
    excerpt:
      "INP is now live. Page Experience signals are stronger. Here's a practical checklist to keep your site in Google's good books.",
    image: "/assets/newsletters/web.jpg",
    readTime: "5 min read",
    content: {
      intro:
        "The Google PageSpeed Insights score you obsessed over last year is now table stakes. In 2026, the performance bar has shifted significantly — particularly with INP now fully integrated into ranking signals. Here's your practical guide to staying competitive.",
      sections: [
        {
          heading: "Understanding INP: The New Performance Metric That Matters",
          body: "Interaction to Next Paint measures the time from any user interaction (click, tap, keypress) to when the browser visually responds. Unlike its predecessor FID, INP considers all interactions throughout a page visit, not just the first one. This makes it a much more representative measure of real-world responsiveness — and significantly harder to game.",
        },
        {
          heading: "The Practical INP Checklist",
          body: "To improve INP: (1) Audit and eliminate long JavaScript tasks — anything over 50ms that blocks the main thread. (2) Use web workers for heavy computation. (3) Implement proper code splitting so only necessary JS loads. (4) Audit third-party scripts — analytics, chat widgets, and ad scripts are common INP killers. (5) Consider moving from client-side React to server components where interaction-heavy rendering isn't needed.",
        },
        {
          heading: "LCP: The Goalposts Moved Again",
          body: "The threshold for a 'good' LCP score is now under 2.0 seconds (previously 2.5s). For hero images — the most common LCP element — this means: proper next-gen formats (WebP or AVIF), explicit width/height to prevent layout shift, priority loading for above-the-fold images, and proper CDN configuration. Most sites we audit fail on at least two of these.",
        },
      ],
      conclusion:
        "Core Web Vitals are no longer a technical nice-to-have. They're a direct ranking input and a proxy for user experience. If your site scores in the 'Needs Improvement' range on any metric, you're leaving ranking potential on the table. Need help auditing? Our web team can run a full performance audit in 48 hours.",
    },
  },
  {
    slug: "multimodal-ai-single-channel-campaign",
    issue: "Issue #19",
    tag: "AI Trends",
    date: "Jan 27, 2026",
    title: "Multimodal AI and the Death of the Single-Channel Campaign",
    excerpt:
      "When your AI can see, hear, and write — your marketing strategy has to keep up. We unpack what that means in practice.",
    image: "/assets/newsletters/ai-trends.jpg",
    readTime: "9 min read",
    content: {
      intro:
        "For most of the last decade, 'multi-channel marketing' meant copying the same message into different formats. A blog post became a tweet became an email subject line. The channels were different; the strategy was the same. Multimodal AI has broken this entirely — and in the best possible way.",
      sections: [
        {
          heading: "What Multimodal AI Actually Enables",
          body: "Models like GPT-4o and Gemini Ultra can now process and generate text, images, audio, and video simultaneously. This isn't just a technical milestone — it changes what's possible in a marketing workflow. A campaign brief can now generate: a long-form article, a social caption, an image concept, a video script, and an audio ad — all from the same input, all maintaining brand consistency.",
        },
        {
          heading: "The Channel-Native Strategy",
          body: "The winning approach isn't 'adapt content for each channel' — it's 'generate content native to each channel from the same strategic input.' This requires a different kind of creative direction: less about craft (which AI handles) and more about strategy, brand voice, and audience understanding.",
        },
        {
          heading: "Real Campaign Architecture in 2026",
          body: "Here's how we're structuring campaigns: (1) Human strategists define the audience, core message, and desired outcome. (2) AI generates channel-native content variants simultaneously. (3) Human creatives review, select, and refine. (4) AI optimizes each variant for platform-specific performance signals. (5) Humans review performance data and refine strategy. The loop runs continuously.",
        },
      ],
      conclusion:
        "The single-channel campaign isn't just inefficient anymore — it's a signal that a brand isn't serious about competing in 2026. The brands winning are running 6-8 channel campaigns simultaneously, at the quality level that used to require a 30-person team, with 3-4 strategically-minded humans and the right AI infrastructure.",
    },
  },
  {
    slug: "brand-voice-ai-era",
    issue: "Issue #18",
    tag: "Strategy",
    date: "Jan 20, 2026",
    title: "Brand Voice in the AI Era: How to Stay Human When Machines Write",
    excerpt:
      "Brand authenticity is the new moat. Here's how top companies are maintaining voice while scaling content with AI tools.",
    image: "/assets/newsletters/strategy.jpg",
    readTime: "6 min read",
    content: {
      intro:
        "Here's the paradox every content team is facing: AI makes it easier to produce more content, but more content produced without genuine voice and perspective makes brands sound more generic. The brands navigating this well aren't using less AI — they're using it differently.",
      sections: [
        {
          heading: "Why Generic AI Content Is a Brand-Killing Problem",
          body: "ChatGPT-style writing has a distinctive, recognizable cadence that audiences are increasingly attuned to. 'Delve,' 'tapestry,' 'groundbreaking' — the tells are everywhere. More fundamentally, AI trained on the internet defaults to the average of everything it's read. Your brand shouldn't sound like the average of everything on the internet.",
        },
        {
          heading: "Building a Brand Voice Model That Actually Works",
          body: "The solution isn't to avoid AI — it's to fine-tune it. The practical approach: (1) Compile 50-100 pieces of your best existing content — the pieces that best represent your voice. (2) Extract specific voice attributes: sentence rhythm, vocabulary preferences, humor style, formality level, and perspective. (3) Create a voice guide written in your actual voice. (4) Use this as the system prompt for every AI content generation task.",
        },
        {
          heading: "The Human Edit Pass That Makes the Difference",
          body: "Every piece of AI-generated content that goes out under a brand name should have a human edit pass — not for grammar, but for voice. The question isn't 'is this correct?' but 'does this sound like us?' This edit pass is where brand personality is injected and where AI's tendency toward the generic is corrected.",
        },
        {
          heading: "The Authenticity Indicators That Actually Matter",
          body: "The content that performs best in 2026 shares common attributes: it contains specific data or examples that couldn't have been made up, it expresses a clear point of view (not 'on one hand... on the other hand'), it acknowledges nuance without hiding behind it, and it sounds like it was written by a specific person with opinions. None of these require abandoning AI — they just require humans staying in the loop.",
        },
      ],
      conclusion:
        "Brand voice isn't a style guide section. It's a strategic asset that compounds over time. The brands investing in genuine voice — and using AI to scale that voice rather than replace it — are building a moat that's increasingly hard to cross.",
    },
  },
];

export function getNewsletterBySlug(slug: string): NewsletterIssue | undefined {
  return newsletterIssues.find((n) => n.slug === slug);
}
