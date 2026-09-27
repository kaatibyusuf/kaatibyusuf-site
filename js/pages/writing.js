document.addEventListener("DOMContentLoaded", () => {
  const categories = ["All", "Faith", "Marriage", "Parenting", "Education", "Personal Development", "Society", "Writing", "Technology", "Life"];
  const sorted = [...CONTENT.articles].sort((a, b) => (a.date < b.date ? 1 : -1));

  function renderGroupedByYear(items) {
    const years = [...new Set(items.map((a) => yearOf(a.date)))];
    return years
      .map((y) => {
        const inYear = items.filter((a) => yearOf(a.date) === y);
        return `<div class="year-divider">${y}</div><div class="editorial-list">${inYear.map(editorialItemHtml).join("")}</div>`;
      })
      .join("");
  }

  
  initCategoryFilter({
    containerSelector: "[data-filter-bar]",
    listSelector: "[data-writing-list]",
    categories,
    items: sorted,
    renderList: renderGroupedByYear,
    emptyMessage: "Nothing in this category yet.",
  });
});
