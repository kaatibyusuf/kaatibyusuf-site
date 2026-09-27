/* ==========================================================================
   Shared render + formatting helpers
   ========================================================================== */

function formatDateLong(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
}

function formatDateShort(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { day: "numeric", month: "short" }).toUpperCase();
}

function yearOf(iso) {
  return iso.slice(0, 4);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function findBySlug(collection, slug) {
  return collection.find((item) => item.slug === slug);
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/* --- Article content block renderer --- */
function renderArticleBlocks(blocks) {
  if (!blocks || !blocks.length) {
    return '<p class="placeholder">This piece is still being written.</p>';
  }
  return blocks
    .map((b) => {
      switch (b.type) {
        case "h2":
          return `<h2>${escapeHtml(b.text)}</h2>`;
        case "h3":
          return `<h3>${escapeHtml(b.text)}</h3>`;
        case "quote":
          return `<blockquote>${escapeHtml(b.text)}</blockquote>`;
        case "list":
          return `<ul>${b.items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`;
        case "p":
        default:
          return `<p>${escapeHtml(b.text)}</p>`;
      }
    })
    .join("\n");
}

/* --- List item card renderers (return HTML strings) --- */

function editorialItemHtml(article) {
  return `
    <a class="editorial-item" href="article.html?slug=${encodeURIComponent(article.slug)}">
      <span class="editorial-item__date">${formatDateShort(article.date)}</span>
      <span>
        <span class="editorial-item__title">${escapeHtml(article.title)}</span>
        <span class="editorial-item__meta">${escapeHtml(article.category)} &middot; ${article.readingTime} min read</span>
        <span class="editorial-item__excerpt">${escapeHtml(article.excerpt)}</span>
      </span>
      <span class="editorial-item__read" aria-hidden="true">Read &rarr;</span>
    </a>`;
}

function journalPreviewHtml(entry) {
  return `
    <a class="journal-preview" href="journal-entry.html?slug=${encodeURIComponent(entry.slug)}" style="display:block">
      <div class="journal-preview__date">${formatDateLong(entry.date).toUpperCase()}</div>
      <div class="journal-preview__title">${escapeHtml(entry.title)}</div>
      <div class="journal-preview__excerpt">${escapeHtml(entry.excerpt)}</div>
    </a>`;
}

function projectItemHtml(project) {
  return `
    <a class="project-item" href="project.html?slug=${encodeURIComponent(project.slug)}">
      <div class="project-item__top">
        <span class="project-item__title">${escapeHtml(project.title)}</span>
        <span class="status-pill">${escapeHtml(project.status)}</span>
      </div>
      <p class="project-item__desc">${escapeHtml(project.oneLiner)}</p>
      <div class="project-item__meta">
        <span>${escapeHtml(project.role)}</span>
        <span>${escapeHtml(project.year)}</span>
      </div>
    </a>`;
}

/* ==========================================================================
   Book helpers
   Books are looked up from CONTENT.books (see js/data.js). Each book has
   an `images` object with `cover` and `back` slots — either may be "" if
   no file has been uploaded yet, in which case a labeled placeholder box
   renders instead of a broken <img>.
   ========================================================================== */

function getBookBySlug(slug) {
  return findBySlug(CONTENT.books, slug);
}

/* Up to `count` other books, most recent first, excluding this one. */
function getRelatedBooks(book, count) {
  return CONTENT.books.filter((b) => b.slug !== book.slug).slice(0, count);
}

/* All books in display order: Published first, then Coming Soon, then
   Writing, then Archived — newest year first within each group. Used by
   the books archive page. */
function getSortedBooks() {
  const statusOrder = { Published: 0, "Coming Soon": 1, Writing: 2, Archived: 3 };
  return [...CONTENT.books].sort((a, b) => {
    const orderDiff = (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99);
    if (orderDiff !== 0) return orderDiff;
    return (b.year || 0) - (a.year || 0);
  });
}

/* A book's own purchaseUrl if it has one, else the general storefront. */
function resolveSelarUrl(book) {
  return book.purchaseUrl && book.purchaseUrl.trim() !== "" ? book.purchaseUrl : SELAR_STORE_URL;
}

/* Whether this book has its own product link (vs. falling back to the
   general storefront) — used to decide whether to show the "links to the
   general storefront" note on the book page. */
function isSelarUrlIndividual(book) {
  return Boolean(book.purchaseUrl && book.purchaseUrl.trim() !== "");
}

/* Single labeled image box — used for both the cover and the back cover.
   Falls back to a labeled placeholder if no src, and also falls back if
   the image fails to load. */
function bookImageBoxHtml(src, label) {
  if (src) {
    return `<div class="book-image-box">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(label)}" loading="lazy"
           onerror="this.closest('.book-image-box').classList.add('book-image-box--placeholder'); this.remove();">
      <span class="book-image-box__fallback-text">${escapeHtml(label)}</span>
    </div>`;
  }
  return `<div class="book-image-box book-image-box--placeholder"><span class="book-image-box__fallback-text">${escapeHtml(label)}</span></div>`;
}

/* The two-box cover + back image row, used on both the book card and the
   book detail hero. */
function bookImagesHtml(book, wrapperClass) {
  const images = book.images || {};
  return `<div class="${wrapperClass || "book-images"}">
    ${bookImageBoxHtml(images.cover, `Cover of ${book.title}`)}
    ${bookImageBoxHtml(images.back, "Back cover")}
  </div>`;
}

/* Bibliography card for the books archive / homepage — entire card links
   to the book's own page. Purchasing never happens from this card. */
function bookCardHtml(book) {
  return `
    <a class="book-card" href="book.html?slug=${encodeURIComponent(book.slug)}">
      ${bookImagesHtml(book, "book-images")}
      <div>
        <div class="tag-row" style="margin-bottom: 0.5rem">
          <span class="status-pill">${escapeHtml(book.status)}</span>
        </div>
        <div class="book-title">${escapeHtml(book.title)}</div>
        ${book.subtitle ? `<div class="book-meta">${escapeHtml(book.subtitle)}</div>` : ""}
        ${book.description ? `<p class="book-desc">${escapeHtml(book.description)}</p>` : ""}
        <p class="link-arrow" style="margin-top: var(--space-2)">View Book <span class="arrow" aria-hidden="true">&rarr;</span></p>
      </div>
    </a>`;
}

/* Returns { label, href, disabled } describing the purchase CTA for a
   book's current status. Used on the individual book page. */
function bookCtaState(book) {
  switch (book.status) {
    case "Published":
      return { label: "Get the Book", href: resolveSelarUrl(book), disabled: false };
    case "Coming Soon":
      return { label: "Coming Soon", href: "", disabled: true };
    case "Writing":
      return { label: "In Progress", href: "", disabled: true };
    case "Archived":
      return { label: "No Longer Available", href: "", disabled: true };
    default:
      return { label: "", href: "", disabled: true };
  }
}

/* Featured newsletter post — links straight out to the Substack post,
   never to a page on this site. */
function newsletterPostHtml(post) {
  return `
    <a class="journal-preview" href="${escapeHtml(post.url)}" target="_blank" rel="noopener noreferrer" style="display:block">
      <div class="journal-preview__date">${formatDateLong(post.date).toUpperCase()}</div>
      <div class="journal-preview__title">${escapeHtml(post.title)}</div>
      <div class="journal-preview__excerpt">${escapeHtml(post.excerpt)}</div>
      <span class="link-arrow" style="margin-top: var(--space-2); display:inline-block">Read <span class="arrow" aria-hidden="true">&rarr;</span></span>
    </a>`;
}

function thinkingNoteHtml(note) {
  return `<div class="thinking-note">${escapeHtml(note.text)}</div>`;
}

function emptyStateHtml(message) {
  return `
    <div class="empty-state">
      <p>Nothing here yet.</p>
      <p>${escapeHtml(message || "I'm probably writing it.")}</p>
    </div>`;
}