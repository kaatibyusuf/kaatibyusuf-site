document.addEventListener("DOMContentLoaded", () => {
  // Currently
  const currentlyEl = document.querySelector("[data-currently]");
  if (currentlyEl) {
    currentlyEl.innerHTML = CONTENT.site.currently
      .map(
        (c) => `
      <div class="currently-item">
        <div class="currently-item__label">${c.label}</div>
        <div class="currently-item__body">${c.body}</div>
      </div>`
      )
      .join("");
  }

  // Selected writing (featured, max 5)
  const writingEl = document.querySelector("[data-selected-writing]");
  if (writingEl) {
    const featured = CONTENT.articles.filter((a) => a.featured).slice(0, 5);
    writingEl.innerHTML = featured.length
      ? `<div class="editorial-list">${featured.map(editorialItemHtml).join("")}</div>`
      : emptyStateHtml();
  }

  // Books — featured only, ordered by displayOrder (from /data/books.js)
  const booksEl = document.querySelector("[data-selected-books]");
  if (booksEl) {
    const selected = getFeaturedBooks();
    booksEl.innerHTML = selected.length ? selected.map(bookCardHtml).join("") : emptyStateHtml();
  }

  // Work (max 4)
  const workEl = document.querySelector("[data-selected-work]");
  if (workEl) {
    const selected = CONTENT.projects.slice(0, 4);
    workEl.innerHTML = `<div class="project-list">${selected.map(projectItemHtml).join("")}</div>`;
  }

  // Thinking (max 3)
  const thinkingEl = document.querySelector("[data-thinking]");
  if (thinkingEl) {
    const selected = CONTENT.thinkingNotes.slice(0, 3);
    thinkingEl.innerHTML = selected.map(thinkingNoteHtml).join("");
  }

  // Journal (latest 3)
  const journalEl = document.querySelector("[data-latest-journal]");
  if (journalEl) {
    const selected = CONTENT.journalEntries.slice(0, 3);
    journalEl.innerHTML = selected.map(journalPreviewHtml).join("");
  }
});
