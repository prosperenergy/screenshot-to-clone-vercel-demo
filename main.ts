// Hero code tabs
const codeTabs = document.querySelectorAll<HTMLButtonElement>(".code-tab");
const codePanes = document.querySelectorAll<HTMLElement>("[data-pane]");

codeTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.tab;
    codeTabs.forEach((t) => t.classList.toggle("is-active", t === tab));
    codePanes.forEach((p) =>
      p.classList.toggle("is-hidden", p.dataset.pane !== key),
    );
  });
});

// Package-manager tabs (Install Dependencies step)
const pmTabs = document.querySelectorAll<HTMLButtonElement>(".pm-tab");
const pmPanes = document.querySelectorAll<HTMLElement>("[data-pm-pane]");

pmTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.pm;
    pmTabs.forEach((t) => t.classList.toggle("is-active", t === tab));
    pmPanes.forEach((p) =>
      p.classList.toggle("is-hidden", p.dataset.pmPane !== key),
    );
  });
});

// Hero overview tabs (visual only)
const overviewTabs = document.querySelectorAll<HTMLButtonElement>(
  ".hero__tabs .tab",
);
overviewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    overviewTabs.forEach((t) =>
      t.classList.toggle("is-active", t === tab),
    );
  });
});

// Mobile hamburger menu
const hamburger = document.querySelector<HTMLButtonElement>(".hamburger");
const mobileMenu = document.getElementById("mobile-menu");

const setMenu = (open: boolean) => {
  if (!hamburger || !mobileMenu) return;
  hamburger.classList.toggle("is-open", open);
  hamburger.setAttribute("aria-expanded", String(open));
  hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  if (open) {
    mobileMenu.removeAttribute("hidden");
    mobileMenu.dataset.open = "true";
    document.body.classList.add("menu-open");
  } else {
    mobileMenu.dataset.open = "false";
    mobileMenu.setAttribute("hidden", "");
    document.body.classList.remove("menu-open");
  }
};

hamburger?.addEventListener("click", () => {
  const isOpen = hamburger.classList.contains("is-open");
  setMenu(!isOpen);
});

// Close menu when a link inside it is clicked
mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Close menu when window grows past the mobile breakpoint
const mql = window.matchMedia("(min-width: 861px)");
mql.addEventListener("change", (e) => {
  if (e.matches) setMenu(false);
});

// Esc closes
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// Copy buttons — copy nearest <code> contents
document.querySelectorAll<HTMLButtonElement>(".icon-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const card = btn.closest(".code-card");
    if (!card) return;
    const visible = card.querySelector<HTMLElement>(
      ".code-body:not(.is-hidden) code",
    );
    if (!visible) return;
    try {
      await navigator.clipboard.writeText(visible.innerText);
      btn.classList.add("is-copied");
      setTimeout(() => btn.classList.remove("is-copied"), 1200);
    } catch {
      /* clipboard API can be unavailable in some contexts */
    }
  });
});
