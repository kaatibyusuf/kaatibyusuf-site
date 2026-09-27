document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("[data-journal-list]");
  if (!el) return;
  const sorted = [...CONTENT.journalEntries].sort((a, b) => (a.date < b.date ? 1 : -1));
  el.innerHTML = sorted.length ? sorted.map(journalPreviewHtml).join("") : emptyStateHtml();
});
