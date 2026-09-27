/* ==========================================================================
   Article page: render + reading features
   ========================================================================== */

function renderArticlePage() {
  const slug = getQueryParam("slug");
  const article = findBySlug(CONTENT.articles, slug);
  const root = document.querySelector("[data-article-root]");
  if (!root) return;

  if (!article) {
    root.innerHTML = `
      <div class="container-narrow">
        ${emptyStateHtml("That piece doesn't exist, or its slug has changed. Try the writing archive.")}
        <p style="margin-top:1rem"><a class="link-arrow" href="writing.html">Back to writing <span class="arrow" aria-hidden="true">&rarr;</span></a></p>
      </div>`;
    document.title = "Not found — Kaatib Yusuf";
    return;
  }

  document.title = `${article.title} — Kaatib Yusuf`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", article.excerpt);

  const idx = CONTENT.articles.findIndex((a) => a.slug === slug);
  const prev = CONTENT.articles[idx + 1];
  const next = CONTENT.articles[idx - 1];

  const bodyHtml = renderArticleBlocks(article.content);

  root.innerHTML = `
    <div class="reading-progress" data-progress-bar></div>

    <header class="article-header container-narrow">
      <div class="breadcrumb">
        <a href="writing.html">Writing</a><span>/</span><span>${escapeHtml(article.category)}</span>
      </div>
      <div class="article-category">${escapeHtml(article.category)}</div>
      <h1 class="article-title">${escapeHtml(article.title)}</h1>
      <p class="article-dek">${escapeHtml(article.subtitle)}</p>
      <div class="article-meta">
        <span>${formatDateLong(article.date)}</span>
        <span>&middot;</span>
        <span>${article.readingTime} min read</span>
      </div>
    </header>

    <div class="container">
      <div class="article-layout article-layout--with-toc" data-toc-layout>
        <article class="article-body" data-article-body>
          ${bodyHtml}
        </article>
        <aside class="toc-sidebar" data-toc-sidebar></aside>
      </div>
      <details class="toc-mobile" data-toc-mobile-wrap>
        <summary>Contents</summary>
        <div class="toc" data-toc-mobile></div>
      </details>
    </div>

    <div class="container-narrow article-foot">
      <div class="tag-row">
        ${(article.tags || []).map((t) => `<span class="tag">#${escapeHtml(t)}</span>`).join("")}
      </div>
      <div class="share-row" style="margin-top: 1.5rem">
        <button type="button" data-copy-link>Copy link</button>
        <a href="https://wa.me/?text=${encodeURIComponent(article.title + " — ")}${encodeURIComponent(window.location.href)}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}" target="_blank" rel="noopener noreferrer">X</a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div class="author-profile" style="margin-top: 2rem">
        <div class="author-profile__avatar" aria-hidden="true"></div>
        <div>
          <div class="author-profile__name">${escapeHtml(CONTENT.site.author)}</div>
          <div class="author-profile__role">${escapeHtml(CONTENT.site.role)} <a href="about.html">About</a></div>
        </div>
      </div>
    </div>

    <nav class="article-nav" aria-label="Article navigation">
      ${
        prev
          ? `<a href="article.html?slug=${prev.slug}"><div class="nav-label">Previous</div><div class="nav-title">${escapeHtml(prev.title)}</div></a>`
          : "<span></span>"
      }
      ${
        next
          ? `<a class="article-nav--next" href="article.html?slug=${next.slug}"><div class="nav-label">Next</div><div class="nav-title">${escapeHtml(next.title)}</div></a>`
          : "<span></span>"
      }
    </nav>
  `;

  buildTOC();
  initReadingProgress();
  initCopyLink();
}

function buildTOC() {
  const body = document.querySelector("[data-article-body]");
  const sidebar = document.querySelector("[data-toc-sidebar]");
  const mobile = document.querySelector("[data-toc-mobile]");
  const mobileWrap = document.querySelector("[data-toc-mobile-wrap]");
  if (!body) return;

  const headings = body.querySelectorAll("h2, h3");
  if (!headings.length) {
    if (mobileWrap) mobileWrap.style.display = "none";
    return;
  }

  const items = [];
  headings.forEach((h, i) => {
    const id = `section-${i}`;
    h.id = id;
    items.push({ id, text: h.textContent, level: h.tagName });
  });

  const listHtml = `<div class="toc-title">Contents</div><ul>${items
    .map((i) => `<li><a href="#${i.id}" data-toc-link="${i.id}">${escapeHtml(i.text)}</a></li>`)
    .join("")}</ul>`;

  if (sidebar) sidebar.innerHTML = `<div class="toc">${listHtml}</div>`;
  if (mobile) mobile.innerHTML = listHtml;

  const links = document.querySelectorAll("[data-toc-link]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          const active = document.querySelector(`[data-toc-link="${entry.target.id}"]`);
          if (active) active.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-20% 0px -70% 0px" }
  );
  headings.forEach((h) => observer.observe(h));
}

function initReadingProgress() {
  const bar = document.querySelector("[data-progress-bar]");
  const body = document.querySelector("[data-article-body]");
  if (!bar || !body) return;
  function update() {
    const rect = body.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  }
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initCopyLink() {
  const btn = document.querySelector("[data-copy-link]");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      const original = btn.textContent;
      btn.textContent = "Copied";
      setTimeout(() => (btn.textContent = original), 1500);
    } catch (e) {
      /* clipboard unavailable — silently ignore */
    }
  });
}

document.addEventListener("DOMContentLoaded", renderArticlePage);
