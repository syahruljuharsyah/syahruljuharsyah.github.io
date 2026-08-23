// =============================
// DATA PORTFOLIO
// =============================
const portfolio = {
  skills: [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Node.js", icon: "⬡" },
    { name: "JavaScript", icon: "JS" },
    { name: "MS. Word", icon: "W" },
    { name: "MS. Excel", icon: "X" },
    { name: "MS. Power Point", icon: "P" },
    { name: "GitHub", icon: "◉" }
  ],

  projects: [
    {
      type: "Web App",
      title: "Informasi Pengolahan Data Berbasis Website",
      description: "Informasi Pengolahan Data Bahan Produk – Produk di CV Kema Sejahtera Berbasis Website.",
      image: "assets/project.jpg",
      tags: ["Html", "PHP"],
      url: "https://archive.umsida.ac.id/index.php/archive/preprint/view/6647"
    }
  ]
};

const skillsGrid = document.querySelector("#skillsGrid");
const projectsGrid = document.querySelector("#projectsGrid");

skillsGrid.innerHTML = portfolio.skills.map(skill => `
  <div class="skill">
    <div class="skill-icon">${skill.icon}</div>
    <span>${skill.name}</span>
  </div>
`).join("");

projectsGrid.innerHTML = portfolio.projects.map(project => `
  <article class="project">
    <img src="${project.image}" alt="${project.title}">
    <div class="project-body">
      <span class="project-type">${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-bottom">
        <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
        <a class="project-link" href="${project.url}" target="_blank" rel="noopener">Lihat Proyek →</a>
      </div>
    </div>
  </article>
`).join("");

// Theme
const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;

function updateThemeIcon() {
  themeToggle.textContent = document.documentElement.dataset.theme === "light" ? "☀" : "☾";
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
  updateThemeIcon();
});

// Mobile menu
const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

// Reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Back to top
const backTop = document.querySelector("#backTop");
window.addEventListener("scroll", () => {
  backTop.style.display = window.scrollY > 500 ? "grid" : "none";
});
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Tahun otomatis
document.querySelector("#year").textContent = new Date().getFullYear();
