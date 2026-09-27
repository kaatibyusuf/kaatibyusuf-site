/* ==========================================================================
   Homepage Newsletter teaser
   Small section pointing visitors to the newsletter page / Substack.
   Kept separate from home.js so the newsletter module stays self-contained
   (see js/pages/newsletter.js and js/data.js for the rest of it).
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("[data-newsletter-home]");
  if (!el) return;

  const h = CONTENT.newsletter.homepage;

  el.innerHTML = `
    <div class="section-head">
      <div>
        <h2 id="newsletter-home-heading">${escapeHtml(h.headline)}</h2>
        <p class="section-lede">${escapeHtml(h.body)}</p>
      </div>
    </div>
    <a class="btn btn-primary" href="${escapeHtml(SUBSTACK_URL)}" target="_blank" rel="noopener noreferrer">${escapeHtml(h.ctaLabel)}</a>
  `;
});