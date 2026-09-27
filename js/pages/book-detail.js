/* ==========================================================================
   Individual book page
   Renders from CONTENT.books (see js/data.js) based on ?slug=. One template
   for every book — adding a book to the data file is enough to get a
   working page here, with correct SEO and a working Selar CTA.
   ========================================================================== */

function setMetaTag(selector, attr, value) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const match = selector.match(/meta\[(\w+)="([^"]+)"\]/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function injectBookJsonLd(book) {
  const data = { "@context": "https://schema.org", "@type": "Book" };
  data.name = book.title;
  data.author = { "@type": "Person", name: CONTENT.site.author };
  if (book.images && book.images.cover) data.image = book.images.cover;
  if (book.description) data.description = book.description;
  if (book.year) data.datePublished = String(book.year);

  const existing = document.querySelector("script[data-book-jsonld]");
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-book-jsonld", "true");
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

function bookSectionHtml(heading, content) {
  if (!content) return "";
  return `<div class="about-block"><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(content)}</p></div>`;
}

function bookInfoRow(label, value) {
  if (!value) return "";
  return `<div><div class="timeline-cat__label">${escapeHtml(label)}</div><p>${escapeHtml(String(value))}</p></div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const slug = getQueryParam("slug");
  const book = getBookBySlug(slug);
  const root = document.querySelector("[data-book-root]");
  if (!root) return;

  if (!book) {
    root.innerHTML = `<div class="container-narrow">${emptyStateHtml("That book doesn't exist. Try the books archive.")}<p style="margin-top:1rem"><a class="link-arrow" href="books.html">Back to books <span class="arrow" aria-hidden="true">&rarr;</span></a></p></div>`;
    document.title = "Book not found — Kaatib Yusuf";
    return;
  }

  /* ---- SEO ---- */
  const title = `${book.title} | Kaatib Yusuf`;
  const description = book.description || `${book.title}, by ${CONTENT.site.author}.`;
  document.title = title;
  setMetaTag('meta[name="description"]', "content", description);
  setCanonical(`https://kaatibyusuf.com/book.html?slug=${encodeURIComponent(book.slug)}`);
  setMetaTag('meta[property="og:title"]', "content", title);
  setMetaTag('meta[property="og:description"]', "content", description);
  if (book.images && book.images.cover) setMetaTag('meta[property="og:image"]', "content", book.images.cover);
  injectBookJsonLd(book);

  /* ---- CTA ---- */
  const cta = bookCtaState(book);
  const ctaHtml = cta.disabled
    ? `<span class="btn btn-secondary book-cta" data-disabled="true" aria-disabled="true">${escapeHtml(cta.label)}</span>`
    : `<a class="btn btn-primary book-cta" href="${cta.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(cta.label)}</a>
       ${!isSelarUrlIndividual(book) ? `<p class="text-muted" style="font-size: var(--text-xs); margin-top: 0.5rem">Links to the general Selar storefront — an individual product link hasn't been added for this title yet.</p>` : ""}`;

  /* ---- Book information (only fields with values) ---- */
  const infoRows = [
    bookInfoRow("Author", CONTENT.site.author),
    bookInfoRow("Publication year", book.year),
    bookInfoRow("Status", book.status),
    bookInfoRow("Reader count", book.readers),
  ]
    .filter(Boolean)
    .join("");

  /* ---- Related books ---- */
  const related = getRelatedBooks(book, 4);

  root.innerHTML = `
    <div class="container-narrow">
      <div class="breadcrumb"><a href="books.html">Books</a><span>/</span><span>${escapeHtml(book.title)}</span></div>

      <div class="detail-hero detail-hero--book">
        ${bookImagesHtml(book, "book-images")}
        <div>
          <div class="tag-row" style="margin-bottom: 0.5rem">
            <span class="status-pill">${escapeHtml(book.status)}</span>
          </div>
          <h1 class="book-title" style="font-size: var(--text-2xl)">${escapeHtml(book.title)}</h1>
          ${book.subtitle ? `<p class="text-muted" style="margin-top: var(--space-1)">${escapeHtml(book.subtitle)}</p>` : ""}
          ${book.description ? `<p style="margin-top: var(--space-2)">${escapeHtml(book.description)}</p>` : ""}
          <div style="margin-top: var(--space-3)">${ctaHtml}</div>
        </div>
      </div>

      ${bookSectionHtml("About the book", book.aboutTheBook)}
      ${bookSectionHtml("Why I wrote it", book.whyIWroteIt)}
      ${bookSectionHtml("What readers will find", book.whatReadersWillFind)}
      ${
        book.excerpt
          ? `<div class="about-block"><h2>Excerpt</h2><blockquote style="border-left:2px solid var(--color-border-strong); padding-left: var(--space-3); font-family: var(--font-serif); font-size: var(--text-lg)">${escapeHtml(book.excerpt)}</blockquote></div>`
          : ""
      }
      ${
        infoRows
          ? `<div class="about-block"><h2>Book information</h2><div class="timeline-grid">${infoRows}</div></div>`
          : ""
      }
      ${
        related.length
          ? `<div class="about-block">
              <h2>More books</h2>
              <div style="display:flex; flex-direction:column; gap: var(--space-4)">
                ${related.map((b) => `<div style="padding-block: var(--space-3); border-top: var(--border-hair)">${bookCardHtml(b)}</div>`).join("")}
              </div>
            </div>`
          : ""
      }
    </div>
  `;
});