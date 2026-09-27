document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("[data-work-list]");
  if (!el) return;
  const groups = ["Institution", "Product", "Community", "Experiment"];
  const groupLabels = { Institution: "Institutions", Product: "Products", Community: "Communities", Experiment: "Experiments" };
  let html = "";
  groups.forEach((g) => {
    const inGroup = CONTENT.projects.filter((p) => p.type === g);
    if (!inGroup.length) return;
    html += `<div class="work-group-label">${groupLabels[g]}</div><div class="project-list">${inGroup.map(projectItemHtml).join("")}</div>`;
  });
  el.innerHTML = html || emptyStateHtml();
});
