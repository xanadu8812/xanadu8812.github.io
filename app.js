const PROJECTS = [
  {
    slug: "wekall-web",
    title: "WeKall",
    image: "assets/project-shots/wekall-home.png",
    brandImage: "assets/project-brands/wekall.svg",
    theme: "wekall",
    imagePosition: "50% 0%",
    type: "Conversational AI",
    url: "https://www.wekall.co/",
    summary: "Plataforma de IA conversacional para voz y chat en la nube.",
    details:
      "Sitio corporativo orientado a producto, posicionamiento comercial y comunicación clara de soluciones para voz, chat e IA aplicada."
  },
  {
    slug: "wekall-admin",
    title: "WeKall Admin",
    image: "assets/project-shots/wekall-admin.png",
    brandImage: "assets/project-brands/wekall.svg",
    theme: "wekall-admin",
    imagePosition: "50% 14%",
    type: "Admin Portal",
    url: "https://admin.wekall.co",
    summary: "Portal administrativo para telefonía, reportes y control operativo.",
    details:
      "Experiencia de acceso y administración para el servicio de telefonía, con foco en gestión operativa, reportes y funciones internas del producto."
  },
  {
    slug: "microimpulso-web",
    title: "Microimpulso",
    image: "assets/project-shots/microimpulso-home.png",
    brandImage: "assets/project-brands/microimpulso.png",
    theme: "microimpulso",
    imagePosition: "50% 0%",
    type: "Fintech Website",
    url: "https://microimpulso.co",
    summary: "Landing fintech para microcréditos con simulación y solicitud rápida.",
    details:
      "Sitio público para adquisición y comunicación de producto financiero, con énfasis en claridad de oferta, confianza y conversión."
  },
  {
    slug: "microimpulso-app",
    title: "Microimpulso App",
    image: "assets/project-shots/microimpulso-app.png",
    brandImage: "assets/project-brands/microimpulso.png",
    theme: "microimpulso-app",
    imagePosition: "50% 18%",
    type: "Client Access",
    url: "https://app.microimpulso.co",
    summary: "Portal de acceso para clientes y flujos privados de Microimpulso.",
    details:
      "Interfaz de autenticación y acceso a flujos internos de usuario para la operación digital del producto financiero."
  },
  {
    slug: "devil-tv",
    title: "Media Evaluation Platform Static",
    image: "assets/project-shots/devil-tv.png",
    brandImage: "assets/project-brands/devil-tv.png",
    theme: "devil-tv",
    imagePosition: "50% 0%",
    type: "Static Web App",
    url: "https://lerna-admin.github.io/media-evaluation-platform-static",
    summary: "Plataforma web para descubrimiento y evaluación de contenido.",
    details:
      "Aplicación estática con búsqueda avanzada, vistas de detalle y trabajo iterativo en UX, navegación y estabilidad del flujo."
  },
  {
    slug: "campus-ccc",
    title: "Campus CCC",
    image: "assets/project-shots/campus-ccc.png",
    brandImage: "assets/project-brands/campus.gif",
    theme: "campus",
    imagePosition: "42% 0%",
    type: "Institutional Access",
    url: "https://campus.ccc.org.co/",
    summary: "Acceso institucional a campus y plataforma formativa.",
    details:
      "Proyecto de acceso y experiencia de campus institucional, con foco en autenticación, soporte al usuario y operación de plataforma formativa."
  }
];

const PROFILE = {
  name: "Henry Gomez",
  role: "Senior Product & Platform Engineer",
  specialty: "Full Stack Architecture · Scalable Systems · Digital Execution",
  location: "Colombia",
  email: "henry8812@gmail.com",
  calendly: "https://calendly.com/henry-lernagroup/30min",
  portfolioLabel: "xanadu8812"
};

const ROUTES = {
  home: {
    label: "Home",
    renderDesktop: () => `
      <section class="ui">
        ${renderMeta()}
        <div class="side-icons" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="content">
          <div class="home-copy">
            <p class="home-eyebrow">- I am</p>
            <h1 class="home-title">${PROFILE.name}</h1>
            <p class="home-subtitle">${PROFILE.specialty}</p>
          </div>
        </div>
        ${renderFooter("16 Years")}
        ${renderNav("home")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="home-copy">
            <p class="home-eyebrow">- I am</p>
            <h1 class="home-title">${PROFILE.name}</h1>
            <p class="home-subtitle">${PROFILE.specialty}</p>
          </div>
        </div>
        ${renderFooter("16 Years", true)}
        ${renderNav("home", true)}
      </section>
    `
  },
  projects: {
    label: "Projects",
    renderDesktop: () => `
      <section class="ui">
        ${renderMeta()}
        <div class="content">
          <div class="projects-view">
            <h1 class="projects-title">Projects Showcase</h1>
            ${renderProjectsCarousel("desktop")}
          </div>
        </div>
        ${renderFooter("Live Work")}
        ${renderNav("projects")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="projects-view">
            <h1 class="projects-title">Projects Showcase</h1>
            ${renderProjectsCarousel("mobile")}
          </div>
        </div>
        ${renderFooter("Live Work", true)}
        ${renderNav("projects", true)}
      </section>
    `
  },
  about: {
    label: "About",
    renderDesktop: () => `
      <section class="ui">
        ${renderMeta()}
        <div class="content">
          <div class="about-copy">
            <h1 class="about-title">About</h1>
            <p class="about-body">
              I&apos;m an engineer with 16 years of experience building digital products,
              operational platforms and technical environments that need to perform beyond the interface.
              My work connects product engineering, full stack delivery, CMS ecosystems and
              platform operations to solve real business and technical demands.
            </p>
          </div>
        </div>
        ${renderFooter("Profile")}
        ${renderNav("about")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="about-copy">
            <h1 class="about-title">About</h1>
            <p class="about-body">
              Senior engineer focused on digital products, full stack delivery, CMS ecosystems
              and platform operations with a practical approach to systems that need to work in production.
            </p>
          </div>
        </div>
        ${renderFooter("Profile", true)}
        ${renderNav("about", true)}
      </section>
    `
  },
  skills: {
    label: "Skills",
    renderDesktop: () => `
      <section class="ui skills-ui">
        ${renderMeta()}
        <div class="content">
          <div class="skills-view">
            <div class="skills-header">
              <h1 class="skills-title">Skills</h1>
              <p class="skills-copy">
                Core technologies and operating areas used across web products, CMS ecosystems,
                platform operations and production-grade delivery.
              </p>
            </div>
            <div class="skills-groups">
              <article class="skills-card">
                <p class="skills-card-index">01</p>
                <h3>Frontend</h3>
                <div class="skills-meter-list">
                  ${renderSkillMeter("React", 90)}
                  ${renderSkillMeter("Next.js", 86)}
                  ${renderSkillMeter("JavaScript", 94)}
                  ${renderSkillMeter("TypeScript", 80)}
                  ${renderSkillMeter("HTML / CSS", 92)}
                </div>
              </article>
              <article class="skills-card">
                <p class="skills-card-index">02</p>
                <h3>Backend & CMS</h3>
                <div class="skills-meter-list">
                  ${renderSkillMeter("Node.js", 84)}
                  ${renderSkillMeter("PHP", 82)}
                  ${renderSkillMeter("REST APIs", 88)}
                  ${renderSkillMeter("WordPress", 90)}
                  ${renderSkillMeter("Integrations", 86)}
                </div>
              </article>
              <article class="skills-card">
                <p class="skills-card-index">03</p>
                <h3>DevOps & Infra</h3>
                <div class="skills-meter-list">
                  ${renderSkillMeter("Proxmox", 86)}
                  ${renderSkillMeter("Linux", 84)}
                  ${renderSkillMeter("Asterisk", 80)}
                  ${renderSkillMeter("VoIP", 82)}
                  ${renderSkillMeter("Deployment", 78)}
                </div>
              </article>
            </div>
          </div>
        </div>
        ${renderFooter("Capabilities")}
        ${renderNav("skills")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui skills-ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="skills-view">
            <div class="skills-header">
              <h1 class="skills-title">Skills</h1>
              <p class="skills-copy">
                Full stack, CMS, DevOps and platform capabilities grouped in one view.
              </p>
            </div>
            <div class="skills-groups">
              <article class="skills-card">
                <p class="skills-card-index">01</p>
                <h3>Frontend</h3>
                <div class="skills-meter-list">
                  ${renderSkillMeter("React", 90)}
                  ${renderSkillMeter("Next.js", 86)}
                  ${renderSkillMeter("JavaScript", 94)}
                  ${renderSkillMeter("TypeScript", 80)}
                </div>
              </article>
              <article class="skills-card">
                <p class="skills-card-index">02</p>
                <h3>Backend & CMS</h3>
                <div class="skills-meter-list">
                  ${renderSkillMeter("Node.js", 84)}
                  ${renderSkillMeter("PHP", 82)}
                  ${renderSkillMeter("WordPress", 90)}
                  ${renderSkillMeter("REST APIs", 88)}
                </div>
              </article>
              <article class="skills-card">
                <p class="skills-card-index">03</p>
                <h3>DevOps & Infra</h3>
                <div class="skills-meter-list">
                  ${renderSkillMeter("Proxmox", 86)}
                  ${renderSkillMeter("Asterisk", 80)}
                  ${renderSkillMeter("VoIP", 82)}
                  ${renderSkillMeter("Linux", 84)}
                </div>
              </article>
            </div>
          </div>
        </div>
        ${renderFooter("Capabilities", true)}
        ${renderNav("skills", true)}
      </section>
    `
  },
  contact: {
    label: "Contact",
    renderDesktop: () => `
      <section class="ui">
        ${renderMeta()}
        <div class="content">
          <div class="contact-layout">
            <div>
              <h1 class="contact-title">LET&apos;S MAKE SOMETHING AMAZING!</h1>
              <div class="contact-person">
                <div class="avatar-fallback">H</div>
                <div>
                  <strong>${PROFILE.name}</strong>
                  <span>${PROFILE.role}</span>
                </div>
              </div>
              <p class="contact-copy">
                If you want to talk about digital products, web platforms, CMS ecosystems
                or complex technical delivery, schedule a meeting directly.
              </p>
              <div class="contact-actions">
                <a class="contact-cta" href="${PROFILE.calendly}" target="_blank" rel="noreferrer">Book 30 Minutes</a>
                <a class="contact-secondary" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
              </div>
            </div>
            <div class="contact-panel">
              <div class="contact-panel-head">Primary Contact</div>
              <div class="contact-panel-body">
                <p><strong>Calendly</strong><span>30-minute scheduling link for direct conversations.</span></p>
                <p><strong>E-Mail</strong><span>${PROFILE.email}</span></p>
                <p><strong>Location</strong><span>${PROFILE.location}</span></p>
              </div>
            </div>
          </div>
        </div>
        ${renderFooter("Calendly")}
        ${renderNav("contact")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="contact-layout">
            <div>
              <h1 class="contact-title">LET&apos;S MAKE SOMETHING AMAZING!</h1>
              <div class="contact-person">
                <div class="avatar-fallback">H</div>
                <div>
                  <strong>${PROFILE.name}</strong>
                  <span>${PROFILE.role}</span>
                </div>
              </div>
              <p class="contact-copy">
                Book a direct call to discuss product engineering, platform delivery or complex technical builds.
              </p>
              <div class="contact-actions">
                <a class="contact-cta" href="${PROFILE.calendly}" target="_blank" rel="noreferrer">Book 30 Minutes</a>
                <a class="contact-secondary" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
              </div>
            </div>
            <div class="contact-panel">
              <div class="contact-panel-head">Primary Contact</div>
              <div class="contact-panel-body">
                <p><strong>Calendly</strong><span>30-minute scheduling link.</span></p>
                <p><strong>E-Mail</strong><span>${PROFILE.email}</span></p>
                <p><strong>Location</strong><span>${PROFILE.location}</span></p>
              </div>
            </div>
          </div>
        </div>
        ${renderFooter("Calendly", true)}
        ${renderNav("contact", true)}
      </section>
    `
  },
  project: {
    label: "Project",
    renderDesktop: () => `
      <section class="ui">
        ${renderMeta()}
        <div class="content">
          ${renderProjectDetail(false)}
        </div>
        ${renderFooter("Case Study")}
        ${renderNav("projects")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          ${renderProjectDetail(true)}
        </div>
        ${renderFooter("Case Study", true)}
        ${renderNav("projects", true)}
      </section>
    `
  },
  notfound: {
    label: "404",
    renderDesktop: () => `
      <section class="ui">
        ${renderMeta()}
        <div class="content">
          <div class="not-found">
            <div class="not-found-art">404</div>
            <div class="not-found-note">Page not found</div>
          </div>
        </div>
        ${renderFooter("404")}
        ${renderNav("contact")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="not-found">
            <div class="not-found-art">404</div>
            <div class="not-found-note">Page not found</div>
          </div>
        </div>
        ${renderFooter("404", true)}
        ${renderNav("contact", true)}
      </section>
    `
  }
};

function renderMeta(isMobile = false) {
  return `
    <div class="meta-row">
      <div>
        <strong>Long 2008</strong>
        <span>Lat 1993</span>
      </div>
      <div>
        <strong>${PROFILE.name}</strong>
        <span>${isMobile ? "Full Stack" : PROFILE.role}</span>
      </div>
    </div>
  `;
}

function renderFooter(left, isMobile = false) {
  return `
    <div class="footer-left">${left}</div>
    <div class="footer-right">${isMobile ? PROFILE.portfolioLabel : `${PROFILE.portfolioLabel}.github.io`}</div>
  `;
}

function renderNav(active, isMobile = false) {
  const items = [
    ["home", "Home"],
    ["projects", "Projects"],
    ["about", "About"],
    ["skills", "Skills"],
    ["contact", "Contact"]
  ];
  return `
    <nav class="bottom-nav" aria-label="${isMobile ? "Mobile navigation" : "Desktop navigation"}">
      ${items
        .map(
          ([key, label]) =>
            `<a href="#/${key}" class="${active === key ? "active" : ""}">${label}</a>`
        )
        .join("")}
    </nav>
  `;
}

function renderProjectBrand(project) {
  if (project.brandImage) {
    return `<img class="project-brand" src="${project.brandImage}" alt="${project.title}" />`;
  }
  return `<span class="project-brand project-brand-text">${project.title}</span>`;
}

function renderProjectVisual(project, detail = false) {
  const detailClass = detail ? " project-visual-detail" : "";
  const image = project.image
    ? `<div class="project-shot-frame">
        <img src="${project.image}" alt="" style="object-position:${project.imagePosition || "50% 50%"}" />
      </div>`
    : `<div class="project-shot-frame project-thumb-fallback"><span>${project.title}</span></div>`;
  return `
    <div class="project-visual project-theme-${project.theme}${detailClass}">
      <div class="project-visual-head">
        <div>
          <span class="project-visual-kicker">${project.type}</span>
          <strong class="project-visual-title">${project.title}</strong>
        </div>
        ${renderProjectBrand(project)}
      </div>
      ${image}
    </div>
  `;
}

function renderProjectCard(project, href) {
  return `
    <a class="project-card" href="${href}">
      ${renderProjectVisual(project)}
      <span class="project-name">${project.title}</span>
    </a>
  `;
}

function renderProjectsCarousel(kind) {
  return `
    <div class="projects-carousel" data-carousel="${kind}">
      <button class="carousel-arrow carousel-arrow-prev" type="button" aria-label="Previous project">‹</button>
      <div class="project-track" data-track>
        ${PROJECTS.map((project) => renderProjectCard(project, `#/project/${project.slug}`)).join("")}
      </div>
      <button class="carousel-arrow carousel-arrow-next" type="button" aria-label="Next project">›</button>
    </div>
  `;
}

function getSelectedProject() {
  const raw = window.location.hash.replace(/^#\/?/, "").trim();
  const parts = raw.split("/");
  const slug = parts[1];
  return PROJECTS.find((project) => project.slug === slug) || PROJECTS[0];
}

function renderProjectDetail(isMobile) {
  const project = getSelectedProject();
  return `
    <div class="single-project">
      <div class="single-thumb">${renderProjectVisual(project, true)}</div>
      <div class="single-copy">
        <h1>${project.title}</h1>
        <p>${project.details}</p>
        <div class="single-tags">
          <span>${project.type}</span>
          <span>Live Project</span>
          <span>${isMobile ? "Web" : "Portfolio"}</span>
        </div>
        <a class="single-link" href="${project.url}" target="_blank" rel="noreferrer">Open Site</a>
      </div>
    </div>
  `;
}

function renderSkillMeter(label, level) {
  return `
    <div class="skill-meter">
      <div class="skill-meter-head">
        <span>${label}</span>
        <strong>${level}%</strong>
      </div>
      <div class="skill-meter-track">
        <span class="skill-meter-fill" style="width:${level}%"></span>
      </div>
    </div>
  `;
}

function getRouteKey() {
  const raw = window.location.hash.replace(/^#\/?/, "").trim();
  if (!raw) return "home";
  const base = raw.split("/")[0];
  if (ROUTES[base]) return base;
  return "notfound";
}

function render() {
  const key = getRouteKey();
  const route = ROUTES[key];
  document.getElementById("desktopScreen").innerHTML = route.renderDesktop();
  document.getElementById("mobileScreen").innerHTML = route.renderMobile();
  bindProjectCarousels();
}

function bindProjectCarousels() {
  const carousels = document.querySelectorAll("[data-carousel]");
  for (const carousel of carousels) {
    const track = carousel.querySelector("[data-track]");
    const prev = carousel.querySelector(".carousel-arrow-prev");
    const next = carousel.querySelector(".carousel-arrow-next");
    if (!track || !prev || !next) continue;

    const step = () => Math.max(track.clientWidth * 0.82, 220);
    prev.addEventListener("click", () => {
      track.scrollBy({ left: -step(), behavior: "smooth" });
    });
    next.addEventListener("click", () => {
      track.scrollBy({ left: step(), behavior: "smooth" });
    });
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
