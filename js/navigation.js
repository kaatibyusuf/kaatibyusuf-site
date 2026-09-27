/* ==========================================================================
   Navigation: mobile menu, sticky header state, active link
   ========================================================================== */

function initMobileNav() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const panel = document.querySelector("[data-mobile-nav]");
  const closeBtn = document.querySelector("[data-menu-close]");
  if (!toggle || !panel) return;

  function open() {
    panel.classList.add("is-open");
    document.body.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
    const firstLink = panel.querySelector("a");
    if (firstLink) firstLink.focus();
  }

  function close() {
    panel.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  }

  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.contains("is-open");
    isOpen ? close() : open();
  });

  if (closeBtn) closeBtn.addEventListener("click", close);

  panel.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel.classList.contains("is-open")) close();
  });
}

function initStickyHeaderState() {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("is-condensed", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function markActiveNavLink() {
  const current = document.body.getAttribute("data-page");
  if (!current) return;
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    if (link.getAttribute("data-nav-link") === current) {
      link.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initStickyHeaderState();
  markActiveNavLink();
});
