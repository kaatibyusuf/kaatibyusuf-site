/* ==========================================================================
   Theme (light/dark) handling
   ========================================================================== */

const THEME_KEY = "ky-theme"; // "light" | "dark" | absent = follow system

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch (e) {
    return null;
  }
}

function setStoredTheme(value) {
  try {
    if (value) {
      localStorage.setItem(THEME_KEY, value);
    } else {
      localStorage.removeItem(THEME_KEY);
    }
  } catch (e) {
    /* storage unavailable — theme just won't persist */
  }
}

function applyTheme(theme) {
  if (theme === "light" || theme === "dark") {
    document.documentElement.setAttribute("data-theme", theme);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  updateThemeToggleLabel();
}

function currentEffectiveTheme() {
  const stored = getStoredTheme();
  if (stored) return stored;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function toggleTheme() {
  const next = currentEffectiveTheme() === "dark" ? "light" : "dark";
  setStoredTheme(next);
  applyTheme(next);
}

function updateThemeToggleLabel() {
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;
  const isDark = currentEffectiveTheme() === "dark";
  btn.setAttribute("aria-pressed", String(isDark));
  btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  const icon = btn.querySelector("[data-theme-icon]");
  if (icon) icon.textContent = isDark ? "\u2600" : "\u263D"; // sun / moon
}

function initTheme() {
  applyTheme(getStoredTheme());
  const btn = document.querySelector("[data-theme-toggle]");
  if (btn) btn.addEventListener("click", toggleTheme);
}

document.addEventListener("DOMContentLoaded", initTheme);
