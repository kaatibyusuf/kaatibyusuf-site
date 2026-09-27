document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("[data-books-list]");
  if (!el) return;
  const sorted = getSortedBooks();
  el.innerHTML = sorted.length
    ? sorted.map((b) => `<div style="padding-block: var(--space-4); border-bottom: var(--border-hair)">${bookCardHtml(b)}</div>`).join("")
    : emptyStateHtml();
});
