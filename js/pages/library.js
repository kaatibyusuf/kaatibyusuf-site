document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("[data-library-list]");
  if (!el) return;
  const categories = ["All", "Qur'an", "Tafsir", "Hadith", "Fiqh", "Aqidah", "Arabic", "Seerah", "Education", "Psychology", "Business", "Technology", "Writing", "Personal Development", "Finance"];
  const present = categories.filter((c) => c === "All" || CONTENT.libraryItems.some((i) => i.category === c));

  function renderList(items) {
    return items
      .map(
        (i) => `
      <div class="library-item">
        <div class="library-item__title">${escapeHtml(i.title)}</div>
        ${i.author ? `<div class="library-item__author">${escapeHtml(i.author)}</div>` : ""}
        <span class="tag" style="margin-top: 0.4rem; display:inline-block">${escapeHtml(i.category)}</span>
        <span class="status-pill" style="margin-left: 0.4rem">${escapeHtml(i.status)}</span>
        <p class="library-item__note">${escapeHtml(i.note)}</p>
      </div>`
      )
      .join("");
  }

  initCategoryFilter({
    containerSelector: "[data-filter-bar]",
    listSelector: "[data-library-list]",
    categories: present,
    items: CONTENT.libraryItems,
    renderList,
    emptyMessage: "Nothing catalogued in this category yet.",
  });
});
