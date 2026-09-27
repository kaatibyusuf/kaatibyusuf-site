/* ==========================================================================
   Scroll reveal
   Fades + slides in elements as they enter the viewport. Applies to any
   element with the `data-reveal` attribute — add it to individual elements,
   or call initScrollReveal(selector) to tag a whole group at once.

   Respects prefers-reduced-motion: if the visitor has that OS setting on,
   everything is shown immediately with no animation.
   ========================================================================== */

(function () {
  const REVEAL_SELECTOR = "[data-reveal]";

  // Elements that should automatically get the reveal treatment without
  // needing data-reveal added by hand on every page. Extend this list as
  // needed — it only matches elements that exist on the current page.
  const AUTO_SELECTORS = [
    ".section",
    ".editorial-item",
    ".book-card",
    ".project-item",
    ".journal-preview",
    ".thinking-note",
    ".about-block",
    ".timeline-year",
  ];

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function tagAutoElements() {
    AUTO_SELECTORS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
      });
    });
  }

  function initScrollReveal() {
    tagAutoElements();
    const targets = document.querySelectorAll(REVEAL_SELECTOR);
    if (!targets.length) return;

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
  }

  document.addEventListener("DOMContentLoaded", initScrollReveal);
})();