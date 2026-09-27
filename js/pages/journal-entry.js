document.addEventListener("DOMContentLoaded", () => {
  const slug = getQueryParam("slug");
  const entry = findBySlug(CONTENT.journalEntries, slug);
  const root = document.querySelector("[data-journal-entry-root]");
  if (!root) return;

  if (!entry) {
    root.innerHTML = `<div class="container-narrow">${emptyStateHtml("That entry doesn't exist. Try the journal.")}<p style="margin-top:1rem"><a class="link-arrow" href="journal.html">Back to journal <span class="arrow" aria-hidden="true">&rarr;</span></a></p></div>`;
    return;
  }

  document.title = `${entry.title} — Journal — Kaatib Yusuf`;

  const sorted = [...CONTENT.journalEntries].sort((a, b) => (a.date < b.date ? 1 : -1));
  const idx = sorted.findIndex((e) => e.slug === slug);
  const prev = sorted[idx + 1];
  const next = sorted[idx - 1];

  root.innerHTML = `
    <div class="container-narrow">
      <div class="breadcrumb"><a href="journal.html">Journal</a></div>
      <div class="article-category">${formatDateLong(entry.date)}</div>
      <h1 class="article-title" style="font-size: var(--text-2xl)">${escapeHtml(entry.title)}</h1>
      <div class="article-body" style="margin-top: var(--space-4)">
        ${renderArticleBlocks(entry.content)}
      </div>
    </div>
    <nav class="article-nav" aria-label="Journal navigation">
      ${prev ? `<a href="journal-entry.html?slug=${prev.slug}"><div class="nav-label">Previous entry</div><div class="nav-title">${escapeHtml(prev.title)}</div></a>` : "<span></span>"}
      ${next ? `<a class="article-nav--next" href="journal-entry.html?slug=${next.slug}"><div class="nav-label">Next entry</div><div class="nav-title">${escapeHtml(next.title)}</div></a>` : "<span></span>"}
    </nav>
  `;
});
