document.addEventListener("DOMContentLoaded", () => {
  const slug = getQueryParam("slug");
  const project = findBySlug(CONTENT.projects, slug);
  const root = document.querySelector("[data-project-root]");
  if (!root) return;

  if (!project) {
    root.innerHTML = `<div class="container-narrow">${emptyStateHtml("That project doesn't exist. Try the work archive.")}<p style="margin-top:1rem"><a class="link-arrow" href="work.html">Back to work <span class="arrow" aria-hidden="true">&rarr;</span></a></p></div>`;
    return;
  }

  document.title = `${project.title} — Kaatib Yusuf`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", project.oneLiner);

  root.innerHTML = `
    <div class="container-narrow">
      <div class="breadcrumb"><a href="work.html">Work</a><span>/</span><span>${escapeHtml(project.title)}</span></div>
      <span class="status-pill">${escapeHtml(project.status)}</span>
      <h1 style="font-size: var(--text-2xl); margin-top: var(--space-2)">${escapeHtml(project.title)}</h1>
      <p class="text-muted" style="margin-top: var(--space-1); font-size: var(--text-md)">${escapeHtml(project.oneLiner)}</p>
      <div class="project-item__meta" style="margin-top: var(--space-3)">
        <span>Role: ${escapeHtml(project.role)}</span>
        <span>Timeline: ${escapeHtml(project.year)}</span>
        ${project.location ? `<span>${escapeHtml(project.location)}</span>` : ""}
      </div>

      <div class="about-block">
        <h2>Overview</h2>
        <p>${escapeHtml(project.overview)}</p>
      </div>
      <div class="about-block">
        <h2>Why it exists</h2>
        <p>${escapeHtml(project.whyItExists)}</p>
      </div>
      <div class="about-block">
        <h2>What I built</h2>
        <p>${escapeHtml(project.whatIBuilt)}</p>
      </div>
      <div class="about-block">
        <h2>What happened</h2>
        <p>${escapeHtml(project.whatHappened)}</p>
      </div>
      <div class="about-block">
        <h2>What I learned</h2>
        <p>${escapeHtml(project.whatILearned)}</p>
      </div>
      <div class="about-block">
        <h2>Current state</h2>
        <p>${escapeHtml(project.currentState)}</p>
        ${project.links && project.links.length ? `<div class="tag-row" style="margin-top: var(--space-2)">${project.links.map((l) => `<a class="tag" href="${l.url}">${escapeHtml(l.label)}</a>`).join("")}</div>` : ""}
      </div>
    </div>
  `;
});
