/* ==========================================================================
   Main: small behaviors shared by every page
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
