// ============================================================
// SITE SETTINGS — edit these values and every page updates.
// ============================================================
const SITE = {
  name: "Your Lab Name",          // shown in the header
  accent: "Lab",                  // last word highlighted in gold (optional)
  email: "you@university.edu",
  institution: "Your University",
  address: ["Building / Room", "City, Country"],
  year: new Date().getFullYear(),
};

const NAV = [
  { label: "Home", href: "index.html" },
  { label: "Research", href: "research.html" },
  {
    label: "People",
    children: [
      { label: "Current Members", href: "people.html" },
      { label: "Alumni", href: "alumni.html" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Transcriptomic resources", href: "transcriptomic.html" },
      { label: "Genomic resources", href: "genomic.html" },
    ],
  },
  { label: "Publications", href: "publications.html" },
  { label: "News", href: "news.html" },
  { label: "Photos", href: "photos.html" },
];

(function () {
  const here = location.pathname.split("/").pop() || "index.html";

  const link = (i) =>
    `<a href="${i.href}" class="${i.href === here ? "active" : ""}">${i.label}</a>`;

  const items = NAV.map((i) =>
    i.children
      ? `<li class="has-dropdown">
           <button class="dropdown-toggle" aria-haspopup="true">${i.label} ▾</button>
           <ul class="dropdown">${i.children.map((c) => `<li>${link(c)}</li>`).join("")}</ul>
         </li>`
      : `<li>${link(i)}</li>`
  ).join("");

  const words = SITE.name.trim().split(" ");
  const brandHtml = SITE.accent && SITE.name.endsWith(SITE.accent)
    ? `${SITE.name.slice(0, -SITE.accent.length)}<span>${SITE.accent}</span>`
    : SITE.name;

  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container header-inner">
        <a class="brand" href="index.html">${brandHtml}</a>
        <button class="menu-btn" aria-label="Toggle menu">☰</button>
        <ul class="nav">${items}</ul>
      </div>`;
    header.querySelector(".menu-btn").addEventListener("click", () =>
      header.querySelector(".nav").classList.toggle("open")
    );
    header.querySelectorAll(".dropdown-toggle").forEach((b) =>
      b.addEventListener("click", () => b.parentElement.classList.toggle("open"))
    );
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container footer-inner">
        <div>© ${SITE.year} ${SITE.name} · ${SITE.institution}</div>
        <div><a href="mailto:${SITE.email}">${SITE.email}</a></div>
      </div>`;
  }

  document.querySelectorAll("[data-site]").forEach((el) => {
    const v = SITE[el.dataset.site];
    el.innerHTML = Array.isArray(v) ? v.join("<br>") : v;
  });
})();
