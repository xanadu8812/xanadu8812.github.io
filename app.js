const PROJECTS = [
  {
    slug: "wekall-web",
    title: "WeKall",
    image: "assets/project-shots/wekall-home.png",
    brandImage: "assets/project-brands/wekall.svg",
    theme: "wekall",
    imagePosition: "50% 0%",
    type: "AI Cloud Communications",
    url: "https://www.wekall.co/",
    summary: "Plataforma de IA conversacional para voz, chat e integraciones empresariales en la nube.",
    details:
      "Plataforma de comunicación empresarial con IA aplicada a voz, chat, transcripción, automatización e integraciones CRM. La propuesta actual del producto se apoya fuertemente en servicios cloud y operación escalable sobre AWS."
  },
  {
    slug: "wekall-admin",
    title: "WeKall Admin",
    image: "assets/project-shots/wekall-admin.png",
    brandImage: "assets/project-brands/wekall.svg",
    theme: "wekall-admin",
    imagePosition: "50% 14%",
    type: "Operations Portal",
    url: "https://admin.wekall.co",
    summary: "Portal operativo para telefonía, reportes, grabaciones y administración del servicio.",
    details:
      "Portal administrativo orientado a la operación del producto: acceso, control de funcionalidades, reportes de llamadas, grabaciones y gestión diaria del servicio para clientes y equipos internos."
  },
  {
    slug: "microimpulso-web",
    title: "Microimpulso",
    image: "assets/project-shots/microimpulso-home.png",
    brandImage: "assets/project-brands/microimpulso.png",
    theme: "microimpulso",
    imagePosition: "50% 0%",
    type: "Fintech Acquisition",
    url: "https://microimpulso.co",
    summary: "Sitio fintech enfocado en captación, simulación de crédito y solicitud rápida.",
    details:
      "Experiencia pública orientada a adquisición para un producto de microcrédito: propuesta clara, confianza, simulación simple y embudo digital para acelerar la conversión."
  },
  {
    slug: "microimpulso-app",
    title: "Microimpulso App",
    image: "assets/project-shots/microimpulso-app.png",
    brandImage: "assets/project-brands/microimpulso.png",
    theme: "microimpulso-app",
    imagePosition: "50% 18%",
    type: "Client Portal",
    url: "https://app.microimpulso.co",
    summary: "Portal privado de acceso para clientes y continuidad del flujo digital financiero.",
    details:
      "Aplicación de acceso para clientes que extiende la operación digital del producto financiero con autenticación, continuidad de proceso y flujos privados asociados al servicio."
  },
  {
    slug: "devil-tv",
    title: "Media Evaluation Platform Static",
    image: "assets/project-shots/devil-tv.png",
    brandImage: "assets/project-brands/devil-tv.png",
    theme: "devil-tv",
    imagePosition: "50% 0%",
    type: "Media Discovery App",
    url: "https://lerna-admin.github.io/media-evaluation-platform-static",
    summary: "Aplicación web para descubrimiento, evaluación y exploración de contenido audiovisual.",
    details:
      "Aplicación web centrada en UX de catálogo, búsqueda avanzada, filtros, vistas de detalle, releases iterativos y estabilidad de navegación dentro de una experiencia frontend estática."
  },
  {
    slug: "campus-ccc",
    title: "Campus CCC",
    image: "assets/project-shots/campus-ccc.png",
    brandImage: "assets/project-brands/campus.gif",
    theme: "campus",
    imagePosition: "42% 0%",
    type: "E-Learning Platform",
    url: "https://campus.ccc.org.co/",
    summary: "Plataforma corporativa de acceso, formación y soporte para usuarios de campus virtual.",
    details:
      "Plataforma corporativa de e-learning con autenticación, autoregistro, recuperación, soporte y operación continua para formación virtual. La solución se apoya en una base cloud fuerte y, según tu experiencia directa, en infraestructura sobre AWS."
  }
];

const PROFILE = {
  name: "Henry Gomez",
  role: "Technical Lead · Product & Platform Engineering",
  specialty: "Architecture · Scalable Delivery · Technical Leadership",
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
        ${renderFooter("Colombia / Remote", "Available for Projects")}
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
        ${renderFooter("Colombia / Remote", "Available", true)}
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
        ${renderFooter("Selected Work", "Live Products")}
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
        ${renderFooter("Selected Work", "Live")}
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
              I lead the design and delivery of digital products, operational platforms and technical
              systems that need to hold up in production. Over 16 years, I&apos;ve worked across product
              engineering, architecture, full stack execution, CMS ecosystems, cloud environments and
              platform operations, turning business demands into stable systems, clear user experiences
              and technical roadmaps that teams can actually operate and scale.
            </p>
          </div>
        </div>
        ${renderFooter("16+ Years", "Architecture to Delivery")}
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
              I lead product, platform and cloud delivery with a focus on architecture,
              production readiness and technical execution that supports real business goals.
            </p>
          </div>
        </div>
        ${renderFooter("16+ Years", "Leadership", true)}
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
                cloud environments, platform operations and production-grade delivery.
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
                <h3>Cloud, DevOps & Infra</h3>
                <div class="skills-meter-list">
                  ${renderSkillMeter("AWS", 88)}
                  ${renderSkillMeter("Google Cloud", 84)}
                  ${renderSkillMeter("Proxmox", 86)}
                  ${renderSkillMeter("Linux", 84)}
                  ${renderSkillMeter("Asterisk", 80)}
                  ${renderSkillMeter("VoIP", 82)}
                </div>
              </article>
            </div>
          </div>
        </div>
        ${renderFooter("Execution Stack", "Frontend · Backend · Cloud")}
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
                Full stack, CMS, cloud and platform capabilities grouped in one view.
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
                <h3>Cloud, DevOps & Infra</h3>
                <div class="skills-meter-list">
                  ${renderSkillMeter("AWS", 88)}
                  ${renderSkillMeter("Google Cloud", 84)}
                  ${renderSkillMeter("Proxmox", 86)}
                  ${renderSkillMeter("Asterisk", 80)}
                  ${renderSkillMeter("VoIP", 82)}
                  ${renderSkillMeter("Linux", 84)}
                </div>
              </article>
            </div>
          </div>
        </div>
        ${renderFooter("Execution Stack", "Stack", true)}
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
                If you want to talk about digital products, AWS or Google Cloud advisory,
                CMS ecosystems or complex technical delivery, schedule a meeting directly.
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
        ${renderFooter("Book 30 Minutes", PROFILE.email)}
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
                Book a direct call to discuss cloud advisory, product engineering or platform delivery.
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
        ${renderFooter("Book 30 Min", "Direct Contact", true)}
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
        ${renderFooter("Project Breakdown", "Live Review")}
        ${renderNav("projects")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          ${renderProjectDetail(true)}
        </div>
        ${renderFooter("Project Breakdown", "Live", true)}
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
        ${renderFooter("Not Found", "Back to Work")}
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
        ${renderFooter("Not Found", "Retry", true)}
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

function renderFooter(left, right, isMobile = false) {
  return `
    <div class="footer-left">${left}</div>
    <div class="footer-right">${right}</div>
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
