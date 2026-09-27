/* ==========================================================================
   Content data
   Edit this file to add, remove or update content. Nothing else in the
   site needs to change when content changes — pages read from here.

   To add a new article: add an object to `articles`. `content` is an
   array of blocks (see ARTICLE CONTENT BLOCKS below). Slugs must be
   unique within their own collection (articles, books, projects,
   journalEntries).

   BOOK IMAGES
   Each book has an `images` object with two slots: `cover` and `back`.
   Leave a slot as "" until you have a real file — the card and detail
   page render a labeled placeholder box instead of a broken <img>.
   ========================================================================== */

/* ---- ARTICLE CONTENT BLOCKS ----
   { type: "p", text }
   { type: "h2", text }
   { type: "h3", text }
   { type: "quote", text }
   { type: "list", items: [] }
*/

const SELAR_STORE_URL = "https://selar.com/m/Kaaatib"; // fallback when a book has no purchaseUrl yet
const SUBSTACK_URL = "https://kaatibyuusuf.substack.com/";

const SITE = {
  author: "Kaatib Yusuf",
  role: "Writer. Builder. Student of knowledge.",
  location: "Ilorin, Nigeria",
  email: "hello@kaatibyusuf.com", // EDITABLE PLACEHOLDER — replace with real address
  socials: [
    { label: "Email", url: "mailto:hello@kaatibyusuf.com" },
    { label: "Instagram", url: "#" },
    { label: "X", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "GitHub", url: "#" },
  ],
  currently: [
    {
      label: "Writing",
      body: "Working through a long-form piece on institutions that outlive their founders.",
    },
    {
      label: "Building",
      body: "Himaayah Schools, and the next stage of Su'āl.",
    },
    {
      label: "Learning",
      body: "Software engineering, and the mathematics I skipped the first time around.",
    },
    {
      label: "Thinking",
      body: "Institution-building, education, faith, family, and how they hold together.",
    },
  ],
};

const NEWSLETTER = {
  headline: "Ideas worth keeping.",
  intro: "A personal newsletter about faith, marriage, education, personal development, writing, building, and the things I'm learning along the way.",
  ctaLabel: "Read the Newsletter",
  topics: [
    "Faith",
    "Marriage & family",
    "Education",
    "Personal development",
    "Writing",
    "Building institutions",
    "Technology",
    "Ideas I'm still thinking through",
  ],
  homepage: {
    eyebrow: "The Newsletter",
    headline: "Occasionally, I send things worth reading.",
    body: "Essays, observations, ideas, and things I'm learning about faith, life, writing and building.",
    ctaLabel: "Read the Newsletter",
  },
};

/* Manually curated — add a featured post here whenever you publish
   something on Substack worth surfacing on the site. Not an automatic
   mirror of the full archive; keep this to 3-5 posts. */
const newsletterPosts = [
  // { title: "Post Title", date: "2026-09-26", excerpt: "Short excerpt of the post.", url: "https://yoursubstack.substack.com/p/post-slug" },
];

const articles = [
  {
    slug: "why-good-writers-read-aggressively",
    title: "Why Good Writers Read Aggressively",
    subtitle: "Reading well is not a leisure activity. It is the raw material of everything you will later write.",
    category: "Writing",
    tags: ["writing", "reading"],
    date: "2026-09-25",
    readingTime: 8,
    featured: true,
    excerpt: "Most people read to pass time. Writers who last read to steal — structure, rhythm, the architecture of an argument.",
    content: [
      { type: "p", text: "There is a difference between reading and reading like a writer. Most people read a sentence and absorb its meaning. A writer reads a sentence and also asks why it works — why the clause broke where it did, why the writer chose that word over the three synonyms sitting nearby." },
      { type: "p", text: "This is not a natural way to read. It has to be trained, and it slows you down at first. But it is the only kind of reading that actually builds a writer's instincts, because instincts are just patterns you have absorbed so many times you no longer notice you are using them." },
      { type: "h2", text: "Reading for structure, not just content" },
      { type: "p", text: "When I read an essay I admire, I go back through it a second time with a different question in mind. Not \"what did this say\" but \"how was this built.\" Where did the writer place the claim. How long did they wait before the first example. What did they cut." },
      { type: "quote", text: "You cannot borrow a writer's voice, but you can borrow their architecture." },
      { type: "p", text: "This is why aggressive reading is uncomfortable. It asks you to interrupt your own enjoyment of a piece to study its machinery. Do it enough, and the machinery becomes part of your own instincts." },
      { type: "h2", text: "What this looks like in practice" },
      { type: "list", items: [
        "Read the piece once for pleasure, without notes.",
        "Read it again and mark every place the writer changes gear — a shift in tone, pace, or scale.",
        "Ask what the piece would lose if the weakest paragraph were removed.",
        "Write one sentence describing the shape of the whole piece, not its content.",
      ]},
      { type: "p", text: "None of this replaces writing itself. But writing without this kind of reading is like building without ever having walked through a building you admired. You can still build something. It will just take you far longer to discover what you already could have learned by looking closely at someone else's work." },
    ],
  },
  {
    slug: "things-parents-forget-about-children",
    title: "The Things Parents Forget About Children",
    subtitle: "Somewhere between infancy and adolescence, we stop remembering what it felt like to be small.",
    category: "Parenting",
    tags: ["parenting", "family"],
    date: "2026-09-22",
    readingTime: 6,
    featured: true,
    excerpt: "Children are not adults who happen to be shorter. Most of our frustration with them comes from forgetting that.",
    content: [
      { type: "p", text: "A child's sense of time is different from an adult's. Five minutes feels enormous to a four-year-old and negligible to their parent, and much of the daily friction between them is really a disagreement about the size of five minutes." },
      { type: "p", text: "We forget this because forgetting is efficient. An adult who fully remembered the texture of being small — the confusion, the powerlessness, the way a raised voice can occupy an entire afternoon — might find it harder to function as an authority figure. But the cost of that efficient forgetting is a kind of blindness to what parenting actually requires." },
      { type: "h2", text: "What gets lost" },
      { type: "p", text: "Three things, mainly. That children cannot yet regulate what they feel, only express it. That their world is genuinely smaller, so a disappointment we would consider minor can be the largest thing that has ever happened to them that day. And that they are constantly testing whether the rules are real, not because they are defiant, but because that is how a small person learns what is stable." },
      { type: "p", text: "None of this means indulging every demand. It means locating your patience in accurate memory rather than in willpower alone, because willpower runs out and accurate memory does not." },
    ],
  },
  {
    slug: "dont-let-parenthood-erase-the-marriage",
    title: "Don't Let Parenthood Erase the Marriage Underneath It",
    subtitle: "A marriage does not automatically survive the arrival of children. It has to be maintained on purpose.",
    category: "Marriage",
    tags: ["marriage", "family"],
    date: "2026-09-18",
    readingTime: 6,
    featured: true,
    excerpt: "Two people can spend a decade co-parenting well and still lose the marriage that made the parenting possible.",
    content: [
      { type: "p", text: "There is a quiet substitution that happens in a lot of marriages after children arrive. The relationship between husband and wife slowly becomes a logistics partnership — a shared calendar, a shared budget, a shared set of anxieties about the children — and the parts of the marriage that were not about logistics get pushed to whatever time is left over, which is usually none." },
      { type: "h2", text: "The substitution is reasonable, and still costly" },
      { type: "p", text: "It happens for good reasons. Children have real needs and those needs are loud. But a marriage that has been fully absorbed into parenting has quietly stopped being a marriage in the fuller sense, even while both people would still describe themselves as happily married." },
      { type: "p", text: "The correction is not complicated, though it is inconvenient. It is protecting small amounts of time that belong to the marriage and not to the household — conversation that is not about the children, attention that is not divided by a task list. The inconvenience is the point. Anything that survives only when it is convenient will not survive very long." },
    ],
  },
  {
    slug: "institutions-that-outlive-their-founders",
    title: "Institutions Should Outlive Their Founders",
    subtitle: "Most institutions quietly die with the person who built them. That is a design failure, not fate.",
    category: "Education",
    tags: ["education", "institutions"],
    date: "2026-09-10",
    readingTime: 7,
    featured: true,
    excerpt: "A founder's presence is often the thing keeping an institution alive, which means it is also the thing that will eventually kill it.",
    content: [
      { type: "p", text: "There is a particular kind of institution that runs entirely on the founder's memory, judgment, and relationships. Everything works while they are present, because they are quietly compensating for every gap in the system with their own attention. The moment they step back, the gaps become visible all at once." },
      { type: "h2", text: "What it means to build past yourself" },
      { type: "p", text: "Building an institution that can survive its founder means writing down the judgment that currently lives only in your head. It means training people to make the decisions you currently make, before you are forced to hand those decisions over under pressure. It is slower than simply doing the work yourself, and it feels, for a long time, like it is producing nothing." },
      { type: "quote", text: "The founder's job is to make their own presence optional." },
      { type: "p", text: "This is uncomfortable for anyone who built something precisely because they wanted to be needed. But an institution that requires its founder forever has not actually been built. It has been extended — a longer version of one person's effort, wearing the shape of an organisation." },
    ],
  },
  {
    slug: "the-architecture-of-a-meaningful-life",
    title: "The Architecture of a Meaningful Life",
    subtitle: "Meaning is rarely found. It is usually built, slowly, out of a small number of deliberate commitments.",
    category: "Personal Development",
    tags: ["growth", "faith"],
    date: "2026-08-30",
    readingTime: 9,
    featured: true,
    excerpt: "A meaningful life is less like a discovery and more like a building — it has a foundation, load-bearing walls, and rooms you add over time.",
    content: [
      { type: "p", text: "People talk about finding meaning as though it were an object misplaced somewhere in the world, waiting to be located. I think this framing does more harm than good, because it encourages searching where building is actually required." },
      { type: "h2", text: "Foundation before rooms" },
      { type: "p", text: "A life built on a stable foundation — a clear relationship with what you believe, a small number of people you are genuinely committed to, work that is connected to something larger than your own advancement — can absorb a great deal of difficulty without collapsing. A life without that foundation can look impressive from the outside and still feel unstable from within." },
      { type: "p", text: "The rooms come after. Career, creative work, community contribution — these matter, but they are not load-bearing. Too many people renovate the rooms of their life while the foundation is cracking, because the rooms are more visible and more immediately rewarding to work on." },
    ],
  },
  {
    slug: "on-teaching-what-you-are-still-learning",
    title: "On Teaching What You Are Still Learning",
    subtitle: "You do not need to have arrived somewhere to be useful to someone earlier on the path.",
    category: "Education",
    tags: ["education", "growth"],
    date: "2026-08-14",
    readingTime: 5,
    featured: false,
    excerpt: "There is a false idea that teaching requires mastery. Often it only requires being a few steps ahead, and honest about the distance still to go.",
    content: [
      { type: "p", text: "A student ten steps behind you does not need someone who has finished the journey. They need someone who remembers what step three felt like, clearly enough to describe it accurately." },
      { type: "p", text: "This is why some of the best teachers are not the most advanced practitioners in a field — they are the ones close enough to the beginning to still remember its shape, and honest enough to admit they are teaching from inside the process rather than from outside it." },
    ],
  },
];

const projects = [
  {
    slug: "himaayah-schools",
    title: "Himaayah Schools",
    type: "Institution",
    status: "Building",
    role: "Founder",
    year: "2021 — present",
    location: "Ilorin, Nigeria",
    oneLiner: "An educational institution combining Islamic education, conventional academics, and technology.",
    overview: "Himaayah Schools exists to raise students who are grounded in their faith and academically capable, without treating those two goals as being in tension. It started as a small madrasah and has grown into a fuller institution with its own digital presence and operating systems.",
    whyItExists: "Too many educational options force a choice between religious grounding and academic rigor, as though a child could only be given one. Himaayah was built to close that gap rather than choose a side.",
    whatIBuilt: "Full ownership of the school's public-facing website and web presence, including a complete rebranding across the site's core pages — madrasah information, enrollment, the academy track, and student success stories — into a coherent visual identity.",
    whatHappened: "The rebrand consolidated a set of pages that had grown inconsistently into a single, coherent presentation of the school to parents and prospective students.",
    whatILearned: "That institutional identity is not decoration — a school's website is often a parent's first real impression of whether the institution is serious, and inconsistency there reads as inconsistency everywhere else.",
    currentState: "Active and growing.",
    links: [],
  },
  {
    slug: "sual",
    title: "Su'āl",
    type: "Product",
    status: "Building",
    role: "Builder",
    year: "2024 — present",
    location: "Remote",
    oneLiner: "A React-based Islamic education platform with quizzes, flashcards, and a growing content library.",
    overview: "Su'āl is a learning application built around active recall — quiz systems and flashcard decks — layered over a growing base of Islamic studies content, including hadith datasets with verification annotations.",
    whyItExists: "Knowledge that is only read is knowledge that is mostly forgotten. Su'āl exists to turn passive study into active, testable recall.",
    whatIBuilt: "The core quiz and flashcard system, a multi-collection content simulator, fixes to answer-position bias using proper randomization, and a feedback pipeline where user reports are triaged automatically and routed into a tracked backlog.",
    whatHappened: "The platform moved from a simple quiz tool toward a fuller product — including infrastructure for payments, course sales, and a support pipeline that doesn't require manual triage of every incoming message.",
    whatILearned: "That the unglamorous infrastructure — feedback handling, data integrity, fixing subtle bias in how questions get served — matters as much to a learning product's trustworthiness as the content itself.",
    currentState: "Actively developed, with a course marketplace feature in progress.",
    links: [],
  },
  {
    slug: "one-growth",
    title: "One Growth",
    type: "Institution",
    status: "Active",
    role: "Director",
    year: "2022 — present",
    location: "Nigeria",
    oneLiner: "A mentorship and personal development organisation, and a coaching practice.",
    overview: "One Growth is where the family-coaching and mentorship side of my work lives — structured programmes, coaching engagements, and the operational work of running them properly.",
    whyItExists: "People are willing to invest in their careers and their finances, and far less willing to invest structured effort into their families and their own development. One Growth exists to make that investment feel as serious and as supported as any other.",
    whatIBuilt: "Coaching programme materials and documentation, and the operational backbone needed to run the business day to day.",
    whatHappened: "The organisation has grown enough to require real operational rigor — proper documentation, resolved payment infrastructure, and materials built to be reused rather than improvised each time.",
    whatILearned: "That the credibility of coaching work rests heavily on the professionalism of what surrounds it — the documents, the systems, the follow-through — not only on the quality of the advice itself.",
    currentState: "Active.",
    links: [],
  },
  {
    slug: "miftah",
    title: "Miftāḥ",
    type: "Experiment",
    status: "Building",
    role: "Architect",
    year: "2026",
    location: "Remote",
    oneLiner: "A blueprint for an e-learning platform for Arabic and Islamic studies, built RTL-first.",
    overview: "Miftāḥ is currently a comprehensive architectural blueprint for a platform serving Arabic-language and Islamic-studies learners, designed from the ground up for right-to-left content rather than treating RTL as an afterthought.",
    whyItExists: "Most learning platforms are built left-to-right first and adapted for Arabic later, which shows in small but constant friction for the learner. Miftāḥ inverts that.",
    whatIBuilt: "The technical architecture, including a video delivery approach suited to the content and a payment integration designed for MENA-region learners rather than a single Western processor.",
    whatHappened: "Still at the blueprint stage — the architecture is settled, the build is ahead.",
    whatILearned: "That designing for a market properly means designing for its infrastructure realities — payment rails, language direction, video delivery costs — not retrofitting a Western default.",
    currentState: "Blueprint stage.",
    links: [],
  },
];

const books = [
  {
    slug: "facing-the-dreams-you-let-die",
    title: "Facing The Dreams You Let Die",
    subtitle: "A confrontation with complacency, and a roadmap back to the life you were meant to live.",
    status: "Published",
    year: 2025,
    readers: "200+",
    description: "A direct, unflinching call to stop settling — for anyone who has quietly stopped fighting for a dream they once held, and is ready to rebuild their life with discipline, honesty, and faith.",
    aboutTheBook: "There is a moment in every person's life when the weight of complacency becomes unbearable — when the quiet surrender to \"just getting by\" stings sharper than the fear of change, and you realize the dreams you once held so tightly slipped away not because they were impossible, but because you stopped fighting for them. This book is for that moment: a mirror held up to your life, reflecting the truth you've been avoiding, that nothing will change unless you decide it must.",
    whyIWroteIt: "Because too many people are living from the sidelines of their own lives, whispering \"maybe someday\" instead of acting with intention. This book exists to hand them brutal honesty instead of quick fixes, and a way back to the person they were meant to become.",
    whatReadersWillFind: "No easy answers or fluffy motivation — a journey through the discomfort where real growth happens, and a roadmap to rebuild your identity from the ground up, so you become someone who no longer tolerates mediocrity and acts decisively, every day, with intention and faith.",
    excerpt: "Nothing will change unless you decide it must.",
    purchaseUrl: "https://selar.com/69162i2p0r",
    images: { cover: "assets/images/books/facing-the-dreams-you-let-die-cover.jpg", back: "assets/images/books/facing-the-dreams-you-let-die-back.jpg" },
  },
  {
    slug: "before-your-wedding-night",
    title: "Before Your Wedding Night",
    subtitle: "On the myths that quietly break marriages, and the truth that should replace them.",
    status: "Published",
    year: 2024,
    readers: "1,000+",
    description: "An honest corrective to the fairy tales young couples carry into marriage — clarity on what a marriage actually requires, and a reminder of its sacredness as a lifelong partnership before Allah.",
    aboutTheBook: "There is a sadness that lingers in the air when we speak of marriage in today's world — born from expectations unmet, hearts misunderstood, and dreams turned into disillusionment. Too often, young men and women walk into marriage armed with fairy tales and the wrong information: told their spouse will \"complete them\" without being told they must be whole within themselves first, told marriage will bring endless joy without being prepared for the hardship that requires resilience, communication, and trust in Allah. When those illusions meet reality, hearts grow distant and what should have been a beautiful journey becomes a source of heartache.",
    whyIWroteIt: "To address these very issues — to offer clarity in a world filled with confusion, and to remind readers of the sacredness of marriage as a lifelong partnership in the sight of Allah. This book is less a guide than a heartfelt conversation meant to reshape how young couples approach marriage.",
    whatReadersWillFind: "",
    excerpt: "They are told their spouse will complete them, without being told they must be whole within themselves first.",
    purchaseUrl: "https://selar.com/h4111b",
    images: { cover: "", back: "" }, // no image uploaded yet
  },
  {
    slug: "after-your-wedding-night",
    title: "After Your Wedding Night",
    subtitle: "On the discipline that begins where the celebration ends.",
    status: "Published",
    year: 2026,
    readers: "200+",
    description: "A direct look at what actually sustains a marriage after the wedding ends — the discipline, roles, and tests that reveal what a home is truly built on.",
    aboutTheBook: "After Your Wedding Night takes a direct and honest look at what truly builds a home — the weight of responsibility that falls on both husband and wife, not as cultural expectation but as lived duty, and the shift from romance to routine, from excitement to structure, from dreams to daily effort. It walks into the often unspoken parts of married life: the pressure to lead, the challenge of submission, the confusion around roles, the reality of raising children with intention rather than guesswork, the strain of finances, the influence of families, and the emotional distance that grows when communication is neglected. And then, the tests — loss, delay, conflict, disappointment, the seasons where love must be chosen rather than felt.",
    whyIWroteIt: "",
    whatReadersWillFind: "Not a collection of soft advice but a call to maturity, for those preparing for marriage and those already in it — because a successful marriage is not found, it is built, carefully, consistently, and with accountability.",
    excerpt: "A successful marriage is not found. It is built.",
    purchaseUrl: "https://selar.com/67731161q9",
    images: { cover: "assets/images/books/after-your-wedding-night-cover.jpg", back: "assets/images/books/after-your-wedding-night-back.jpg" },
  },
  {
    slug: "prophetic-wisdom-for-family-life",
    title: "Prophetic Wisdom for Family Life",
    subtitle: "50 questions and answers on marriage, parenting, and family life, drawn from the lives of the Prophets.",
    status: "Published",
    year: 2026,
    readers: "30+",
    description: "Fifty practical questions and answers on marriage, parenting, and family conflict, drawn from the lives and teachings of the Prophets, peace be upon them.",
    aboutTheBook: "Marriage is not sustained by love alone. Families are not built by money alone. Children are not raised by rules alone. Prophetic Wisdom for Family Life is a collection of fifty questions and answers drawn from the lives and teachings of the Prophets, peace be upon them, covering marriage, parenting, family conflicts, emotional healing, and building a home rooted in faith.",
    whyIWroteIt: "",
    whatReadersWillFind: "Practical, prophetic guidance for modern family life — written to change how you see family, whether you are single, married, a parent, or preparing for the future.",
    excerpt: "Marriage is not sustained by love alone. Families are not built by money alone. Children are not raised by rules alone.",
    purchaseUrl: "https://selar.com/7b04aryx01",
    images: { cover: "", back: "" }, // no image uploaded yet
  },
  {
    slug: "mummy-i-am-in-love",
    title: "Mummy, I Am In Love",
    subtitle: "For the teenager working up the courage to tell their mother about a first attraction.",
    status: "Published",
    year: 2026,
    readers: "200+",
    description: "A book that takes a teenager's first attraction seriously, and walks through what it means, what Islam's boundaries around it protect, and how to talk to a parent about it honestly.",
    aboutTheBook: "Written to a teenager who might finally work up the courage to tell their mother, this book takes first attraction seriously instead of dismissing it as a phase to be laughed off or hidden. It walks through what that first feeling actually means, what boundaries Islam places around it and why those boundaries are mercy rather than punishment, and how a teenager might have this exact conversation with a parent honestly, without shame on either side of the exchange.",
    whyIWroteIt: "",
    whatReadersWillFind: "",
    excerpt: "Boundaries that are mercy rather than punishment.",
    purchaseUrl: "https://selar.com/28729762vf",
    images: { cover: "assets/images/books/mummy-i-am-in-love-cover.jpg", back: "assets/images/books/mummy-i-am-in-love-back.jpg" },
  },
  {
    slug: "before-you-become",
    title: "Before You Become",
    subtitle: "Four seasons of growing up, for the teenager caught between who they are and who they perform.",
    status: "Published",
    year: 2025,
    readers: "200+",
    description: "A guide for teenagers moving through identity, body, ambition, and faith — closing the gap between what they feel and what they've been taught to say out loud.",
    aboutTheBook: "This book walks the teenage reader through four seasons of the in-between age: discovering who they are beneath the version they perform for others, learning to live inside a changing body and its desires without shame, building a life of real ambition without treating faith and worldly success as enemies, and finally facing the quiet crises no one warns them about — doubt, grief, and loneliness in a crowded room.",
    whyIWroteIt: "",
    whatReadersWillFind: "Every chapter closes the distance between what a teenager feels and what they have been taught to say out loud.",
    excerpt: "Every chapter closes the distance between what a teenager feels and what they have been taught to say out loud.",
    purchaseUrl: "https://selar.com/00au4g60n6",
    images: { cover: "assets/images/books/before-you-become-cover.jpg", back: "assets/images/books/before-you-become-back.jpg" },
  },
  {
    slug: "parenting-before-you-say-yes",
    title: "Becoming A Parent Before You Say Yes",
    subtitle: "Five questions every hopeful spouse should answer before they say \"I do.\"",
    status: "Published",
    year: 2025,
    readers: "50+",
    description: "A wake-up call for anyone who hopes to marry — inviting them to weigh a spouse choice through the eyes of the children who don't exist yet, but whose future depends on it.",
    aboutTheBook: "Most people prepare for a wedding. Very few prepare for parenthood — which is why so many marriages struggle, not because love was absent, but because no one stopped to ask the questions that truly matter: What kind of father will you become? What kind of mother will your future children need? If your child were watching you choose a spouse today, would they thank you for your decision, or wish you had waited? Have you healed enough to raise a child without passing your wounds to them? This book challenges readers to look beyond attraction, chemistry, and wedding plans, and to see marriage through the eyes of the children whose future will be shaped by the choice being made today.",
    whyIWroteIt: "Because choosing a spouse is really choosing your children's future, and the greatest gift a parent can give is not wealth or inheritance, but the wisdom they exercised before their children were ever born.",
    whatReadersWillFind: "Why romance alone cannot sustain a family, how unresolved childhood wounds silently become a child's burden, and how to build a marriage that raises souls instead of merely raising children — meant to be read before engagement, discussed before the wedding, and revisited before the first child arrives.",
    excerpt: "The greatest gift you can ever give your children is not wealth, comfort, or inheritance. It is the wisdom you exercised before they were ever born.",
    purchaseUrl: "https://selar.com/7b04aryx01",
    images: { cover: "assets/images/books/parenting-before-you-say-yes-cover.jpg", back: "assets/images/books/parenting-before-you-say-yes-back.jpg" },
  },
  {
    slug: "letter-to-my-half-sibling",
    title: "Letter to My Half-Sibling",
    subtitle: "Letters of advice and du'aa from one Muslim teenager to another who shares the same faith, if not the same home.",
    status: "Published",
    year: 2026,
    readers: "200+",
    description: "A series of letters from an older sibling in Islam to a younger one they've never met — advice, du'aa, and honest counsel bound by shared faith rather than shared blood.",
    aboutTheBook: "The title is a metaphor rather than a literal family story. A half-sibling shares one parent while differing in almost everything else, and that is exactly the relationship this book addresses: the bond between one Muslim teenager and another who shares the same deen — the same Father in faith, so to speak — while coming from entirely different homes, cities, struggles, and circumstances. Written as a series of letters, the book treats every teenager reading it as kin bound by shared faith rather than shared blood, offering the guidance and prayer a real sibling would give if distance and circumstance had never separated them.",
    whyIWroteIt: "",
    whatReadersWillFind: "Advice, du'aa, and honest counsel carried across letters from an older sibling in Islam to a younger one they have never met but still claim as family.",
    excerpt: "The same Father in faith, so to speak.",
    purchaseUrl: "https://selar.com/68d851c8l6",
    images: { cover: "assets/images/books/letter-to-my-half-sibling-cover.jpg", back: "assets/images/books/letter-to-my-half-sibling-back.jpg" },
  },
  {
    slug: "adolescence-is-a-crime",
    title: "Adolescence Is A Crime",
    subtitle: "A defense of the teenager, and a case for the discipline that defense should never excuse.",
    status: "Published",
    year: 2026,
    readers: "200+",
    description: "A book that names the quiet way teenagers are treated as suspects before they've done anything wrong, and hands that experience back to them with dignity — and responsibility.",
    aboutTheBook: "The title is deliberately provocative, naming the quiet way many teenagers are treated as suspects before they have done anything wrong — punished for moods they did not choose, watched with suspicion for changes their own bodies imposed on them without permission. This book puts language to that experience and hands it back to the teenage reader with dignity, while also holding them accountable for the moments where the label, however unfair, still requires a mature response.",
    whyIWroteIt: "",
    whatReadersWillFind: "As much a defense of the teenager as a call toward the discipline that defense should never be used to avoid.",
    excerpt: "As much a defense of the teenager as it is a call toward the discipline that defense should never be used to avoid.",
    purchaseUrl: "https://selar.com/1z6pf46826",
    images: { cover: "assets/images/books/adolescence-is-a-crime-cover.jpg", back: "assets/images/books/adolescence-is-a-crime-back.jpg" },
  },
  {
    slug: "poetry-demystified",
    title: "Poetry Demystified",
    subtitle: "Unlocking the Meaning and Magic of Poetic Expression",
    status: "Published",
    year: 2024,
    readers: "20+",
    description: "A gentle, practical introduction to reading and writing poetry — for anyone who has ever thought it was a language reserved for a chosen few.",
    aboutTheBook: "For years, people have admired poetry from afar, believing it to be the language of a chosen few, inaccessible to those without a \"gift\" for words. But poetry is for everyone — a reflection of life itself, a mirror that reveals the beauty we often overlook in our everyday lives. This book takes you by the hand through the foundations of poetry, demystifying the structure, rhythm, and flow that give life to verse, simplifying what often feels complex.",
    whyIWroteIt: "",
    whatReadersWillFind: "How to craft your own poems and how to appreciate the beauty in those written by others — unlocking the poet within you, whether you've ever written a single line or not.",
    excerpt: "Poetry is a reflection of life itself.",
    purchaseUrl: "https://selar.com/Poetry%20Demystified",
    images: { cover: "assets/images/books/poetry-demystified-cover.jpg", back: "assets/images/books/poetry-demystified-back.jpg" },
  },
  {
    slug: "roots-and-covenant",
    title: "Roots and Covenant",
    subtitle: "A personal blueprint for building family, wealth, and faith on purpose.",
    status: "Writing",
    year: 2026,
    readers: "",
    description: "A working document — soon to be a book — covering spiritual development, building wealth through halal instruments, family architecture, and brotherhood, structured as a personal life blueprint.",
    aboutTheBook: "Still in progress. This page will be updated as the manuscript develops.",
    whyIWroteIt: "Because I wanted a single, honest document tying together the different parts of a life I am trying to build deliberately rather than by accident.",
    whatReadersWillFind: "",
    excerpt: "",
    purchaseUrl: "",
    images: { cover: "", back: "" }, // still in progress — no cover art yet
  },
];

const journalEntries = [
  {
    slug: "on-building-institutions-that-survive-their-founders",
    title: "On building institutions that can survive their founders",
    date: "2026-09-26",
    excerpt: "Spent the morning thinking through what Himaayah looks like without me in the room for every decision.",
    content: [
      { type: "p", text: "Spent the morning thinking through what Himaayah looks like without me in the room for every decision. Wrote down, for the first time, the judgment calls I make automatically that nobody else currently has access to — enrollment edge cases, how we talk to a parent who is upset, what actually makes a teacher a good fit here beyond the interview." },
      { type: "p", text: "None of it is dramatic. All of it currently lives only in my head, which means none of it currently exists anywhere the institution could rely on if I disappeared for a month." },
      { type: "p", text: "Next step is turning the list into something a new staff member could actually read and use, rather than a private note to myself." },
    ],
  },
  {
    slug: "a-slow-week-with-suals-feedback-pipeline",
    title: "A slow week with Su'āl's feedback pipeline",
    date: "2026-09-20",
    excerpt: "The automatic triage is working better than I expected, but it surfaced how much of the backlog was noise.",
    content: [
      { type: "p", text: "The automatic triage on Su'āl's feedback pipeline is working better than I expected — reports get read, categorized, and turned into tracked items without me manually reading every email. What it surfaced, though, is how much of the historical backlog was noise: duplicate reports, one-off confusions rather than real bugs." },
      { type: "p", text: "Worth remembering: automating the sorting doesn't reduce the judgment required, it just moves the judgment to deciding what counts as signal in the first place." },
    ],
  },
  {
    slug: "reading-notes-mid-september",
    title: "Reading notes, mid-September",
    date: "2026-09-14",
    excerpt: "Two unrelated books this week kept circling the same idea about attention and scarcity.",
    content: [
      { type: "p", text: "Two unrelated books this week kept circling the same idea from different directions: that attention behaves like a genuinely scarce resource only once you stop pretending you can multitask your way around the scarcity." },
      { type: "p", text: "Nothing conclusive yet. Just noting it before I lose the thread." },
    ],
  },
];

const libraryItems = [
  { title: "Reference text on iʿrāb and Arabic syntax", author: "", category: "Arabic", status: "Reading", note: "Working through the classical framing of caseendings and how it changes reading comprehension in practice." },
  { title: "A text on function theory and mathematical limits", author: "", category: "Technology", status: "Reading", note: "Revisiting injectivity, bijectivity and composite functions — mathematics I skipped the first time around and am now returning to properly." },
  { title: "Works on halal wealth-building instruments", author: "", category: "Finance", status: "Reference", note: "Background reading for the family-and-wealth sections of the current manuscript." },
  { title: "Texts on institutional design and succession", author: "", category: "Business", status: "Reference", note: "Directly informing how Himaayah and One Growth are being structured to outlast any one person." },
];

const thinkingNotes = [
  { text: "Generational patterns are rarely invisible because they are complicated. They are invisible because they are familiar." },
  { text: "The best way to understand iʿrāb is to understand context, not to memorize the rule in isolation from the sentence that needs it." },
  { text: "An institution that requires its founder forever has not actually been built. It has been extended." },
  { text: "A marriage absorbed entirely into logistics has quietly stopped being a marriage, even while both people would still call it one." },
];

const journey = [
  {
    year: "2026",
    built: "Continued build-out of Su'āl's feedback and marketplace infrastructure; rebranded Himaayah Schools' web presence.",
    written: "Academic papers under the Abdulsamad A. Yusuf name; ongoing work on Roots and Covenant.",
    studied: "Software engineering fundamentals; university-level mathematics.",
    learned: "That the unglamorous infrastructure work is often what determines whether a good idea survives contact with real users.",
  },
];

// Consolidated export used by page scripts
const CONTENT = {
  site: SITE,
  articles,
  projects,
  books,
  journalEntries,
  libraryItems,
  thinkingNotes,
  journey,
  newsletter: NEWSLETTER,
  newsletterPosts,
};