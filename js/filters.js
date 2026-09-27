/* ==========================================================================
   Category filtering (Writing archive)
   Reflects state in the URL (?category=) so filtered views stay shareable.
   ========================================================================== */

function initCategoryFilter({ containerSelector, listSelector, categories, items, renderItem, renderList: customRenderList, emptyMessage }) {
  const bar = document.querySelector(containerSelector);
  const list = document.querySelector(listSelector);
  if (!bar || !list) return;

  const params = new URLSearchParams(window.location.search);
  let active = params.get("category") || "All";
  if (!categories.includes(active)) active = "All";

  function renderChips() {
    bar.innerHTML = categories
      .map(
        (c) => `<button type="button" class="filter-chip" data-cat="${escapeHtml(c)}" aria-pressed="${c === active}">${escapeHtml(c)}</button>`
      )
      .join("");
  }

  function renderList() {
    const filtered = active === "All" ? items : items.filter((i) => i.category === active);
    if (!filtered.length) {
      list.innerHTML = emptyStateHtml(emptyMessage);
      return;
    }
    list.innerHTML = customRenderList ? customRenderList(filtered) : filtered.map(renderItem).join("");
  }

  function setActive(cat) {
    active = cat;
    const url = new URL(window.location.href);
    if (cat === "All") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", cat);
    }
    window.history.replaceState({}, "", url);
    renderChips();
    renderList();
  }

  bar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    setActive(btn.getAttribute("data-cat"));
  });

  renderChips();
  renderList();
}
