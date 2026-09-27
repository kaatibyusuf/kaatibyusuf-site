document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("[data-journey-list]");
  if (!el) return;
  const sorted = [...CONTENT.journey].sort((a, b) => (a.year < b.year ? 1 : -1));
  el.innerHTML = sorted.length
    ? sorted
        .map(
          (y) => `
      <div class="timeline-year">
        <div class="timeline-year__label">${escapeHtml(y.year)}</div>
        <div class="timeline-grid">
          <div><div class="timeline-cat__label">Built</div><p>${escapeHtml(y.built)}</p></div>
          <div><div class="timeline-cat__label">Written</div><p>${escapeHtml(y.written)}</p></div>
          <div><div class="timeline-cat__label">Studied</div><p>${escapeHtml(y.studied)}</p></div>
          <div><div class="timeline-cat__label">Learned</div><p>${escapeHtml(y.learned)}</p></div>
        </div>
      </div>`
        )
        .join("")
    : emptyStateHtml();
});
