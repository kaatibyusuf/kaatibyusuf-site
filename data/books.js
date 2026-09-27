/* ==========================================================================
   Books data source
   This is the ONLY file you need to edit to add, remove, reorder, or
   update a book. Every book page, the books archive, the homepage
   "Books" section, search, and the sitemap all read from BOOKS below.

   Load order matters: this file must be included BEFORE js/data.js in
   every HTML page's script list, since data.js reads BOOKS from here.

   ---- FIELD NOTES ----
   id / slug        Keep these identical for each book. Used in the URL
                     (book.html?slug=...) and must be unique.
   cover            Path to a local image, e.g.
                     "assets/images/books/facing-the-dreams-you-let-die-cover.jpg"
                     Leave "" if you don't have a cover yet — the site
                     falls back to a plain typographic placeholder.
   backCoverImage   Path to a back-cover image, if you have one. Not
                     currently displayed anywhere on the site — stored here
                     so it isn't lost. Say the word if you want it shown
                     somewhere on the book page.
   status           One of: "Published", "Coming Soon", "Writing", "Archived"
                     Controls the CTA shown on the book's page.
   selarUrl         The individual Selar product page for this book.
                     Leave "" to fall back to the main storefront
                     (SELAR_STORE_URL below) — the site marks that
                     fallback clearly rather than pretending it's a
                     dedicated product link.
   featured         true = shown in the homepage "Books" section.
   displayOrder     Lower numbers appear first, on both the homepage and
                     the books archive.
   relatedBooks     Optional array of other books' `slug` values, in the
                     order you want them shown. If omitted, related books
                     are chosen automatically by matching category/tags.
   Any field left as "" or [] is simply skipped when the page renders —
   nothing fake is shown in its place.
   ========================================================================== */

const SELAR_STORE_URL = "https://selar.com/m/Kaaatib";

const BOOKS = [
  {
    id: "facing-the-dreams-you-let-die",
    slug: "facing-the-dreams-you-let-die",
    title: "Facing The Dreams You Let Die",
    subtitle: "A confrontation with complacency, and a roadmap back to the life you were meant to live.",
    author: "Kaatib Yusuf",
    cover: "assets/images/books/facing-the-dreams-you-let-die-cover.jpg",
    backCoverImage: "assets/images/books/facing-the-dreams-you-let-die-back.jpg",
    shortSummary: "A direct, unflinching call to stop settling — for anyone who has quietly stopped fighting for a dream they once held, and is ready to rebuild their life with discipline, honesty, and faith.",
    description: "There is a moment in every person's life when the weight of complacency becomes unbearable — when the quiet surrender to \"just getting by\" stings sharper than the fear of change, and you realize the dreams you once held so tightly slipped away not because they were impossible, but because you stopped fighting for them. This book is for that moment: a mirror held up to your life, reflecting the truth you've been avoiding, that nothing will change unless you decide it must.",
    whyIWroteIt: "Because too many people are living from the sidelines of their own lives, whispering \"maybe someday\" instead of acting with intention. This book exists to hand them brutal honesty instead of quick fixes, and a way back to the person they were meant to become.",
    whoItsFor: "",
    whatYoullFind: "No easy answers or fluffy motivation — a journey through the discomfort where real growth happens, and a roadmap to rebuild your identity from the ground up, so you become someone who no longer tolerates mediocrity and acts decisively, every day, with intention and faith.",
    category: "Personal Development",
    tags: ["personal development", "growth", "purpose"],
    status: "Published",
    publicationYear: 2025,
    readerCount: "200+",
    featured: true,
    selarUrl: "https://selar.com/69162i2p0r",
    excerpt: "Nothing will change unless you decide it must.",
    relatedBooks: ["before-you-become"],
    displayOrder: 1,
  },
  {
    id: "before-your-wedding-night",
    slug: "before-your-wedding-night",
    title: "Before Your Wedding Night",
    subtitle: "On the myths that quietly break marriages, and the truth that should replace them.",
    author: "Kaatib Yusuf",
    cover: "", // no image uploaded yet
    backCoverImage: "",
    shortSummary: "An honest corrective to the fairy tales young couples carry into marriage — clarity on what a marriage actually requires, and a reminder of its sacredness as a lifelong partnership before Allah.",
    description: "There is a sadness that lingers in the air when we speak of marriage in today's world — born from expectations unmet, hearts misunderstood, and dreams turned into disillusionment. Too often, young men and women walk into marriage armed with fairy tales and the wrong information: told their spouse will \"complete them\" without being told they must be whole within themselves first, told marriage will bring endless joy without being prepared for the hardship that requires resilience, communication, and trust in Allah. When those illusions meet reality, hearts grow distant and what should have been a beautiful journey becomes a source of heartache.",
    whyIWroteIt: "To address these very issues — to offer clarity in a world filled with confusion, and to remind readers of the sacredness of marriage as a lifelong partnership in the sight of Allah. This book is less a guide than a heartfelt conversation meant to reshape how young couples approach marriage.",
    whoItsFor: "",
    whatYoullFind: "",
    category: "Marriage",
    tags: ["marriage", "wedding"],
    status: "Published",
    publicationYear: 2024,
    readerCount: "1,000+",
    featured: true,
    selarUrl: "https://selar.com/h4111b",
    excerpt: "They are told their spouse will complete them, without being told they must be whole within themselves first.",
    relatedBooks: ["after-your-wedding-night", "prophetic-wisdom-for-family-life"],
    displayOrder: 2,
  },
  {
    id: "after-your-wedding-night",
    slug: "after-your-wedding-night",
    title: "After Your Wedding Night",
    subtitle: "On the discipline that begins where the celebration ends.",
    author: "Kaatib Yusuf",
    cover: "assets/images/books/after-your-wedding-night-cover.jpg",
    backCoverImage: "assets/images/books/after-your-wedding-night-back.jpg",
    shortSummary: "A direct look at what actually sustains a marriage after the wedding ends — the discipline, roles, and tests that reveal what a home is truly built on.",
    description: "After Your Wedding Night takes a direct and honest look at what truly builds a home — the weight of responsibility that falls on both husband and wife, not as cultural expectation but as lived duty, and the shift from romance to routine, from excitement to structure, from dreams to daily effort. It walks into the often unspoken parts of married life: the pressure to lead, the challenge of submission, the confusion around roles, the reality of raising children with intention rather than guesswork, the strain of finances, the influence of families, and the emotional distance that grows when communication is neglected. And then, the tests — loss, delay, conflict, disappointment, the seasons where love must be chosen rather than felt.",
    whyIWroteIt: "",
    whoItsFor: "",
    whatYoullFind: "Not a collection of soft advice but a call to maturity, for those preparing for marriage and those already in it — because a successful marriage is not found, it is built, carefully, consistently, and with accountability.",
    category: "Marriage",
    tags: ["marriage", "wedding"],
    status: "Published",
    publicationYear: 2026,
    readerCount: "200+",
    featured: true,
    selarUrl: "https://selar.com/67731161q9",
    excerpt: "A successful marriage is not found. It is built.",
    relatedBooks: ["before-your-wedding-night", "prophetic-wisdom-for-family-life"],
    displayOrder: 3,
  },
  {
    id: "prophetic-wisdom-for-family-life",
    slug: "prophetic-wisdom-for-family-life",
    title: "Prophetic Wisdom for Family Life",
    subtitle: "50 questions and answers on marriage, parenting, and family life, drawn from the lives of the Prophets.",
    author: "Kaatib Yusuf",
    cover: "", // no image uploaded yet
    backCoverImage: "",
    shortSummary: "Fifty practical questions and answers on marriage, parenting, and family conflict, drawn from the lives and teachings of the Prophets, peace be upon them.",
    description: "Marriage is not sustained by love alone. Families are not built by money alone. Children are not raised by rules alone. Prophetic Wisdom for Family Life is a collection of fifty questions and answers drawn from the lives and teachings of the Prophets, peace be upon them, covering marriage, parenting, family conflicts, emotional healing, and building a home rooted in faith.",
    whyIWroteIt: "",
    whoItsFor: "",
    whatYoullFind: "Practical, prophetic guidance for modern family life — written to change how you see family, whether you are single, married, a parent, or preparing for the future.",
    category: "Family",
    tags: ["family", "marriage", "parenting", "faith"],
    status: "Published",
    publicationYear: 2026,
    readerCount: "30+",
    featured: true,
    selarUrl: "https://selar.com/7b04aryx01",
    excerpt: "Marriage is not sustained by love alone. Families are not built by money alone. Children are not raised by rules alone.",
    relatedBooks: ["before-your-wedding-night", "after-your-wedding-night", "parenting-before-you-say-yes"],
    displayOrder: 4,
  },
  {
    id: "mummy-i-am-in-love",
    slug: "mummy-i-am-in-love",
    title: "Mummy, I Am In Love",
    subtitle: "For the teenager working up the courage to tell their mother about a first attraction.",
    author: "Kaatib Yusuf",
    cover: "assets/images/books/mummy-i-am-in-love-cover.jpg",
    backCoverImage: "assets/images/books/mummy-i-am-in-love-back.jpg",
    shortSummary: "A book that takes a teenager's first attraction seriously, and walks through what it means, what Islam's boundaries around it protect, and how to talk to a parent about it honestly.",
    description: "Written to a teenager who might finally work up the courage to tell their mother, this book takes first attraction seriously instead of dismissing it as a phase to be laughed off or hidden. It walks through what that first feeling actually means, what boundaries Islam places around it and why those boundaries are mercy rather than punishment, and how a teenager might have this exact conversation with a parent honestly, without shame on either side of the exchange.",
    whyIWroteIt: "",
    whoItsFor: "",
    whatYoullFind: "",
    category: "Family",
    tags: ["family", "teenagers", "faith"],
    status: "Published",
    publicationYear: 2026,
    readerCount: "200+",
    featured: false,
    selarUrl: "https://selar.com/28729762vf",
    excerpt: "Boundaries that are mercy rather than punishment.",
    relatedBooks: ["before-you-become", "parenting-before-you-say-yes"],
    displayOrder: 5,
  },
  {
    id: "before-you-become",
    slug: "before-you-become",
    title: "Before You Become",
    subtitle: "Four seasons of growing up, for the teenager caught between who they are and who they perform.",
    author: "Kaatib Yusuf",
    cover: "assets/images/books/before-you-become-cover.jpg",
    backCoverImage: "assets/images/books/before-you-become-back.jpg",
    shortSummary: "A guide for teenagers moving through identity, body, ambition, and faith — closing the gap between what they feel and what they've been taught to say out loud.",
    description: "This book walks the teenage reader through four seasons of the in-between age: discovering who they are beneath the version they perform for others, learning to live inside a changing body and its desires without shame, building a life of real ambition without treating faith and worldly success as enemies, and finally facing the quiet crises no one warns them about — doubt, grief, and loneliness in a crowded room.",
    whyIWroteIt: "",
    whoItsFor: "",
    whatYoullFind: "Every chapter closes the distance between what a teenager feels and what they have been taught to say out loud.",
    category: "Personal Development",
    tags: ["personal development", "teenagers", "identity"],
    status: "Published",
    publicationYear: 2025,
    readerCount: "200+",
    featured: false,
    selarUrl: "https://selar.com/00au4g60n6",
    excerpt: "Every chapter closes the distance between what a teenager feels and what they have been taught to say out loud.",
    relatedBooks: ["facing-the-dreams-you-let-die", "mummy-i-am-in-love"],
    displayOrder: 6,
  },
  {
    id: "parenting-before-you-say-yes",
    slug: "parenting-before-you-say-yes",
    title: "Becoming A Parent Before You Say Yes",
    subtitle: "Five questions every hopeful spouse should answer before they say \"I do.\"",
    author: "Kaatib Yusuf",
    cover: "assets/images/books/parenting-before-you-say-yes-cover.jpg",
    backCoverImage: "assets/images/books/parenting-before-you-say-yes-back.jpg",
    shortSummary: "A wake-up call for anyone who hopes to marry — inviting them to weigh a spouse choice through the eyes of the children who don't exist yet, but whose future depends on it.",
    description: "Most people prepare for a wedding. Very few prepare for parenthood — which is why so many marriages struggle, not because love was absent, but because no one stopped to ask the questions that truly matter: What kind of father will you become? What kind of mother will your future children need? If your child were watching you choose a spouse today, would they thank you for your decision, or wish you had waited? Have you healed enough to raise a child without passing your wounds to them? This book challenges readers to look beyond attraction, chemistry, and wedding plans, and to see marriage through the eyes of the children whose future will be shaped by the choice being made today.",
    whyIWroteIt: "Because choosing a spouse is really choosing your children's future, and the greatest gift a parent can give is not wealth or inheritance, but the wisdom they exercised before their children were ever born.",
    whoItsFor: "",
    whatYoullFind: "Why romance alone cannot sustain a family, how unresolved childhood wounds silently become a child's burden, and how to build a marriage that raises souls instead of merely raising children — meant to be read before engagement, discussed before the wedding, and revisited before the first child arrives.",
    category: "Parenting",
    tags: ["parenting", "marriage"],
    status: "Published",
    publicationYear: 2025,
    readerCount: "50+",
    featured: false,
    selarUrl: "https://selar.com/7b04aryx01",
    excerpt: "The greatest gift you can ever give your children is not wealth, comfort, or inheritance. It is the wisdom you exercised before they were ever born.",
    relatedBooks: ["mummy-i-am-in-love", "prophetic-wisdom-for-family-life"],
    displayOrder: 7,
  },
  {
    id: "letter-to-my-half-sibling",
    slug: "letter-to-my-half-sibling",
    title: "Letter to My Half-Sibling",
    subtitle: "Letters of advice and du'aa from one Muslim teenager to another who shares the same faith, if not the same home.",
    author: "Kaatib Yusuf",
    cover: "assets/images/books/letter-to-my-half-sibling-cover.jpg",
    backCoverImage: "assets/images/books/letter-to-my-half-sibling-back.jpg",
    shortSummary: "A series of letters from an older sibling in Islam to a younger one they've never met — advice, du'aa, and honest counsel bound by shared faith rather than shared blood.",
    description: "The title is a metaphor rather than a literal family story. A half-sibling shares one parent while differing in almost everything else, and that is exactly the relationship this book addresses: the bond between one Muslim teenager and another who shares the same deen — the same Father in faith, so to speak — while coming from entirely different homes, cities, struggles, and circumstances. Written as a series of letters, the book treats every teenager reading it as kin bound by shared faith rather than shared blood, offering the guidance and prayer a real sibling would give if distance and circumstance had never separated them.",
    whyIWroteIt: "",
    whoItsFor: "",
    whatYoullFind: "Advice, du'aa, and honest counsel carried across letters from an older sibling in Islam to a younger one they have never met but still claim as family.",
    category: "Family",
    tags: ["family", "faith", "teenagers"],
    status: "Published",
    publicationYear: 2026,
    readerCount: "200+",
    featured: false,
    selarUrl: "https://selar.com/68d851c8l6",
    excerpt: "The same Father in faith, so to speak.",
    relatedBooks: ["mummy-i-am-in-love", "adolescence-is-a-crime"],
    displayOrder: 8,
  },
  {
    id: "adolescence-is-a-crime",
    slug: "adolescence-is-a-crime",
    title: "Adolescence Is A Crime",
    subtitle: "A defense of the teenager, and a case for the discipline that defense should never excuse.",
    author: "Kaatib Yusuf",
    cover: "assets/images/books/adolescence-is-a-crime-cover.jpg",
    backCoverImage: "assets/images/books/adolescence-is-a-crime-back.jpg",
    shortSummary: "A book that names the quiet way teenagers are treated as suspects before they've done anything wrong, and hands that experience back to them with dignity — and responsibility.",
    description: "The title is deliberately provocative, naming the quiet way many teenagers are treated as suspects before they have done anything wrong — punished for moods they did not choose, watched with suspicion for changes their own bodies imposed on them without permission. This book puts language to that experience and hands it back to the teenage reader with dignity, while also holding them accountable for the moments where the label, however unfair, still requires a mature response.",
    whyIWroteIt: "",
    whoItsFor: "",
    whatYoullFind: "As much a defense of the teenager as a call toward the discipline that defense should never be used to avoid.",
    category: "Parenting",
    tags: ["parenting", "adolescence", "teenagers"],
    status: "Published",
    publicationYear: 2026,
    readerCount: "200+",
    featured: false,
    selarUrl: "https://selar.com/1z6pf46826",
    excerpt: "As much a defense of the teenager as it is a call toward the discipline that defense should never be used to avoid.",
    relatedBooks: ["parenting-before-you-say-yes", "before-you-become"],
    displayOrder: 9,
  },
  {
    id: "poetry-demystified",
    slug: "poetry-demystified",
    title: "Poetry Demystified",
    subtitle: "Unlocking the Meaning and Magic of Poetic Expression",
    author: "Kaatib Yusuf",
    cover: "assets/images/books/poetry-demystified-cover.jpg",
    backCoverImage: "assets/images/books/poetry-demystified-back.jpg",
    shortSummary: "A gentle, practical introduction to reading and writing poetry — for anyone who has ever thought it was a language reserved for a chosen few.",
    description: "For years, people have admired poetry from afar, believing it to be the language of a chosen few, inaccessible to those without a \"gift\" for words. But poetry is for everyone — a reflection of life itself, a mirror that reveals the beauty we often overlook in our everyday lives. This book takes you by the hand through the foundations of poetry, demystifying the structure, rhythm, and flow that give life to verse, simplifying what often feels complex.",
    whyIWroteIt: "",
    whoItsFor: "",
    whatYoullFind: "How to craft your own poems and how to appreciate the beauty in those written by others — unlocking the poet within you, whether you've ever written a single line or not.",
    category: "Writing",
    tags: ["writing", "poetry"],
    status: "Published",
    publicationYear: 2024,
    readerCount: "20+",
    featured: false,
    selarUrl: "https://selar.com/Poetry%20Demystified",
    excerpt: "Poetry is a reflection of life itself.",
    relatedBooks: [],
    displayOrder: 10,
  },
  {
    id: "roots-and-covenant",
    slug: "roots-and-covenant",
    title: "Roots and Covenant",
    subtitle: "A personal blueprint for building family, wealth, and faith on purpose.",
    author: "Kaatib Yusuf",
    cover: "", // still in progress — no cover art yet
    backCoverImage: "",
    shortSummary: "A working document — soon to be a book — covering spiritual development, building wealth through halal instruments, family architecture, and brotherhood, structured as a personal life blueprint.",
    description: "Still in progress. This page will be updated as the manuscript develops.",
    whyIWroteIt: "Because I wanted a single, honest document tying together the different parts of a life I am trying to build deliberately rather than by accident.",
    whoItsFor: "",
    whatYoullFind: "",
    category: "Personal Development",
    tags: ["personal development", "faith", "finance", "family"],
    status: "Writing",
    publicationYear: null,
    readerCount: "",
    featured: false,
    selarUrl: "",
    excerpt: "",
    relatedBooks: ["facing-the-dreams-you-let-die"],
    displayOrder: 11,
  },
];

/* ---- Helpers used by the page scripts ---- */

function resolveSelarUrl(book) {
  return book.selarUrl || SELAR_STORE_URL;
}

function isSelarUrlIndividual(book) {
  return Boolean(book.selarUrl);
}

function getSortedBooks() {
  return [...BOOKS].sort((a, b) => (a.displayOrder || 999) - (b.displayOrder || 999));
}

function getFeaturedBooks() {
  return getSortedBooks().filter((b) => b.featured);
}

function getBookBySlug(slug) {
  return BOOKS.find((b) => b.slug === slug);
}

function getRelatedBooks(book, max) {
  max = max || 4;
  if (book.relatedBooks && book.relatedBooks.length) {
    return book.relatedBooks
      .map((slug) => getBookBySlug(slug))
      .filter((b) => b && b.slug !== book.slug)
      .slice(0, max);
  }
  const sameCategory = getSortedBooks().filter(
    (b) => b.slug !== book.slug && (b.category === book.category || (b.tags || []).some((t) => (book.tags || []).includes(t)))
  );
  return sameCategory.slice(0, max);
}