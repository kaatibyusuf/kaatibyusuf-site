/* ==========================================================================
   Newsletter landing page
   Introduces the newsletter and sends visitors to Substack. This site does
   not host newsletter content or a subscription system — Substack remains
   the source of truth. Featured posts (if any) are manually curated in
   CONTENT.newsletterPosts (see js/data.js) and always link out to Substack.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("[data-newsletter-root]");
  if (!root) return;

  const n = CONTENT.newsletter;
  const posts = CONTENT.newsletterPosts || [];

  const topicsHtml = n.topics && n.topics.length
    ? `<div class="about-block">
         <h2>What I write about</h2>
         <div class="about-list">
           ${n.topics.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
         </div>
       </div>`
    : "";

  const postsHtml = posts.length
    ? `<div class="about-block">
         <h2>Featured from the newsletter</h2>
         <div style="display:flex; flex-direction:column; gap: var(--space-4)">
           ${posts.map((p) => `<div style="padding-block: var(--space-3); border-top: var(--border-hair)">${newsletterPostHtml(p)}</div>`).join("")}
         </div>
       </div>`
    : "";

  root.innerHTML = `
    <div class="article-header" style="max-width:none; padding:0; margin-bottom: var(--space-5)">
      <div class="article-category">Newsletter</div>
      <h1 class="article-title">${escapeHtml(n.headline)}</h1>
      <p class="article-dek">${escapeHtml(n.intro)}</p>
      <div style="margin-top: var(--space-4)">
        <a class="btn btn-primary" href="${escapeHtml(SUBSTACK_URL)}" target="_blank" rel="noopener noreferrer">${escapeHtml(n.ctaLabel)}</a>
      </div>
    </div>
    ${topicsHtml}
    ${postsHtml}
  `;
});