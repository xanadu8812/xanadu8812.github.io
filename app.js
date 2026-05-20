const LANG_STORAGE_KEY = "portfolio-lang";

const COPY = {
  es: {
    htmlLang: "es",
    title: "Henry Gomez | Portafolio",
    description:
      "Portafolio de Henry Gomez, con enfoque en liderazgo técnico, producto, plataformas, cloud y ejecución full stack.",
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      about: "Perfil",
      skills: "Skills",
      contact: "Contacto"
    },
    aria: {
      mobileNav: "Navegación móvil",
      desktopNav: "Navegación principal",
      prevProject: "Proyecto anterior",
      nextProject: "Siguiente proyecto"
    },
    home: {
      eyebrow: "- Soy",
      footerLeft: "Colombia / Remoto",
      footerRight: "Disponible para proyectos"
    },
    projects: {
      title: "Proyectos",
      footerLeft: "Trabajo seleccionado",
      footerRight: "Productos activos"
    },
    about: {
      title: "Perfil",
      bodyDesktop:
        "Lidero el diseño y la entrega de productos digitales, plataformas operativas y sistemas técnicos que necesitan sostenerse en producción. A lo largo de 16 años he trabajado entre ingeniería de producto, arquitectura, ejecución full stack, ecosistemas CMS, entornos cloud y operación de plataformas, convirtiendo necesidades de negocio en sistemas estables, experiencias claras y hojas de ruta técnicas que los equipos realmente pueden operar y escalar.",
      bodyMobile:
        "Lidero producto, plataforma y cloud con foco en arquitectura, operación en producción y ejecución técnica alineada con objetivos reales.",
      footerLeft: "16+ años",
      footerRight: "Arquitectura a entrega"
    },
    skills: {
      title: "Skills",
      copyDesktop:
        "Tecnologías y áreas operativas usadas en productos web, ecosistemas CMS, entornos cloud, operación de plataformas y entrega en producción.",
      copyMobile:
        "Capacidades full stack, CMS, cloud y plataforma reunidas en una sola vista.",
      frontend: "Frontend",
      backend: "Backend y CMS",
      cloud: "Cloud, DevOps e Infra",
      footerLeft: "Stack de ejecución",
      footerRight: "Frontend · Backend · Cloud"
    },
    contact: {
      title: "HABLEMOS DE ALGO GRANDE",
      copyDesktop:
        "Si quieres hablar de productos digitales, asesoría en AWS o Google Cloud, ecosistemas CMS o entrega técnica compleja, agenda una reunión directa.",
      copyMobile:
        "Agenda una llamada directa para hablar de cloud, ingeniería de producto o entrega de plataformas.",
      cta: "Agendar 30 minutos",
      panelHead: "Contacto principal",
      calendlyLabel: "Calendly",
      calendlyCopyDesktop: "Enlace directo para una reunión técnica de 30 minutos.",
      calendlyCopyMobile: "Enlace directo para una reunión de 30 minutos.",
      email: "Correo",
      location: "Ubicación",
      footerLeft: "Agendar 30 minutos",
      footerRight: "Contacto directo"
    },
    project: {
      liveProject: "Proyecto activo",
      portfolioTag: "Portafolio",
      webTag: "Web",
      openSite: "Abrir sitio",
      techStack: "Tecnologías",
      footerLeft: "Desglose del proyecto",
      footerRight: "Revisión activa"
    },
    notfound: {
      note: "Página no encontrada",
      footerLeft: "No encontrado",
      footerRight: "Volver al trabajo"
    },
    meta: {
      yearsLabel: "16+ años",
      focusLabel: "Producto · Cloud"
    }
  },
  en: {
    htmlLang: "en",
    title: "Henry Gomez | Portfolio",
    description:
      "Portfolio of Henry Gomez, focused on technical leadership, product, platforms, cloud and full stack delivery.",
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      skills: "Skills",
      contact: "Contact"
    },
    aria: {
      mobileNav: "Mobile navigation",
      desktopNav: "Main navigation",
      prevProject: "Previous project",
      nextProject: "Next project"
    },
    home: {
      eyebrow: "- I am",
      footerLeft: "Colombia / Remote",
      footerRight: "Available for projects"
    },
    projects: {
      title: "Projects",
      footerLeft: "Selected work",
      footerRight: "Live products"
    },
    about: {
      title: "About",
      bodyDesktop:
        "I lead the design and delivery of digital products, operational platforms and technical systems that need to hold up in production. Over 16 years, I have worked across product engineering, architecture, full stack execution, CMS ecosystems, cloud environments and platform operations, turning business demands into stable systems, clear user experiences and technical roadmaps that teams can actually operate and scale.",
      bodyMobile:
        "I lead product, platform and cloud delivery with a focus on architecture, production readiness and technical execution aligned with real business goals.",
      footerLeft: "16+ years",
      footerRight: "Architecture to delivery"
    },
    skills: {
      title: "Skills",
      copyDesktop:
        "Core technologies and operating areas used across web products, CMS ecosystems, cloud environments, platform operations and production-grade delivery.",
      copyMobile:
        "Full stack, CMS, cloud and platform capabilities grouped in one view.",
      frontend: "Frontend",
      backend: "Backend & CMS",
      cloud: "Cloud, DevOps & Infra",
      footerLeft: "Execution stack",
      footerRight: "Frontend · Backend · Cloud"
    },
    contact: {
      title: "LET'S BUILD SOMETHING STRONG",
      copyDesktop:
        "If you want to talk about digital products, AWS or Google Cloud advisory, CMS ecosystems or complex technical delivery, schedule a meeting directly.",
      copyMobile:
        "Book a direct call to discuss cloud advisory, product engineering or platform delivery.",
      cta: "Book 30 minutes",
      panelHead: "Primary contact",
      calendlyLabel: "Calendly",
      calendlyCopyDesktop: "Direct link for a 30-minute technical conversation.",
      calendlyCopyMobile: "Direct link for a 30-minute meeting.",
      email: "E-Mail",
      location: "Location",
      footerLeft: "Book 30 minutes",
      footerRight: "Direct contact"
    },
    project: {
      liveProject: "Live project",
      portfolioTag: "Portfolio",
      webTag: "Web",
      openSite: "Open site",
      techStack: "Technologies",
      footerLeft: "Project breakdown",
      footerRight: "Live review"
    },
    notfound: {
      note: "Page not found",
      footerLeft: "Not found",
      footerRight: "Back to work"
    },
    meta: {
      yearsLabel: "16+ years",
      focusLabel: "Product · Cloud"
    }
  }
};

const PROJECTS = [
  {
    slug: "wekall-web",
    title: "WeKall",
    image: "assets/project-shots/wekall-home.png",
    brandImage: "assets/project-brands/wekall.svg",
    theme: "wekall",
    imagePosition: "50% 0%",
    type: {
      es: "Comunicaciones cloud con IA",
      en: "AI Cloud Communications"
    },
    summary: {
      es: "Plataforma de IA conversacional para voz, chat e integraciones empresariales en la nube.",
      en: "Conversational AI platform for voice, chat and enterprise integrations in the cloud."
    },
    details: {
      es: "Plataforma de comunicación empresarial con IA aplicada a voz, chat, transcripción, automatización e integraciones CRM. La propuesta actual del producto se apoya fuertemente en servicios cloud y operación escalable sobre AWS.",
      en: "Enterprise communication platform with AI applied to voice, chat, transcription, automation and CRM integrations. The current product stack relies heavily on cloud services and scalable operations on AWS."
    },
    stack: ["JavaScript", "Webflow", "AWS", "CRM Integrations", "AI", "VoIP"],
    url: "https://www.wekall.co/"
  },
  {
    slug: "wekall-admin",
    title: "WeKall Admin",
    image: "assets/project-shots/wekall-admin.png",
    brandImage: "assets/project-brands/wekall.svg",
    theme: "wekall-admin",
    imagePosition: "50% 14%",
    type: {
      es: "Portal operativo",
      en: "Operations Portal"
    },
    summary: {
      es: "Portal operativo para telefonía, reportes, grabaciones y administración del servicio.",
      en: "Operations portal for telephony, reporting, recordings and service administration."
    },
    details: {
      es: "Portal administrativo orientado a la operación del producto: acceso, control de funcionalidades, reportes de llamadas, grabaciones y gestión diaria del servicio para clientes y equipos internos.",
      en: "Administrative portal focused on product operations: access control, feature management, call reporting, recordings and day-to-day service management for customers and internal teams."
    },
    stack: ["JavaScript", "Admin UI", "AWS", "Telephony", "Reporting"],
    url: "https://admin.wekall.co"
  },
  {
    slug: "microimpulso-web",
    title: "Microimpulso",
    image: "assets/project-shots/microimpulso-home.png",
    brandImage: "assets/project-brands/microimpulso.png",
    theme: "microimpulso",
    imagePosition: "50% 0%",
    type: {
      es: "Adquisición fintech",
      en: "Fintech Acquisition"
    },
    summary: {
      es: "Sitio fintech enfocado en captación, simulación de crédito y solicitud rápida.",
      en: "Fintech site focused on acquisition, credit simulation and fast application flow."
    },
    details: {
      es: "Experiencia pública orientada a adquisición para un producto de microcrédito: propuesta clara, confianza, simulación simple y embudo digital para acelerar la conversión.",
      en: "Public acquisition experience for a microcredit product: clear proposition, trust signals, simple simulation and a digital funnel built to improve conversion."
    },
    stack: ["HTML", "CSS", "JavaScript", "Fintech UX", "Lead Generation"],
    url: "https://microimpulso.co"
  },
  {
    slug: "microimpulso-app",
    title: "Microimpulso App",
    image: "assets/project-shots/microimpulso-app.png",
    brandImage: "assets/project-brands/microimpulso.png",
    theme: "microimpulso-app",
    imagePosition: "50% 18%",
    type: {
      es: "Portal cliente",
      en: "Client Portal"
    },
    summary: {
      es: "Portal privado de acceso para clientes y continuidad del flujo digital financiero.",
      en: "Private access portal for customers and continuity of the digital financial flow."
    },
    details: {
      es: "Aplicación de acceso para clientes que extiende la operación digital del producto financiero con autenticación, continuidad de proceso y flujos privados asociados al servicio.",
      en: "Customer access application that extends the digital operation of the financial product with authentication, process continuity and private service-related flows."
    },
    stack: ["Next.js", "Authentication", "Client Portal", "Forms"],
    url: "https://app.microimpulso.co"
  },
  {
    slug: "devil-tv",
    title: "Media Evaluation Platform Static",
    image: "assets/project-shots/devil-tv.png",
    brandImage: "assets/project-brands/devil-tv.png",
    theme: "devil-tv",
    imagePosition: "50% 0%",
    type: {
      es: "App de descubrimiento multimedia",
      en: "Media Discovery App"
    },
    summary: {
      es: "Aplicación web para descubrimiento, evaluación y exploración de contenido audiovisual.",
      en: "Web application for discovery, evaluation and exploration of audiovisual content."
    },
    details: {
      es: "Aplicación web centrada en UX de catálogo, búsqueda avanzada, filtros, vistas de detalle, releases iterativos y estabilidad de navegación dentro de una experiencia frontend estática.",
      en: "Web application centered on catalog UX, advanced search, filters, detail views, iterative releases and navigation stability inside a static frontend experience."
    },
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Release Flow"],
    url: "https://lerna-admin.github.io/media-evaluation-platform-static"
  },
  {
    slug: "campus-ccc",
    title: "Campus CCC",
    image: "assets/project-shots/campus-ccc.png",
    brandImage: "assets/project-brands/campus.gif",
    theme: "campus",
    imagePosition: "42% 0%",
    type: {
      es: "Plataforma e-learning",
      en: "E-Learning Platform"
    },
    summary: {
      es: "Plataforma corporativa de acceso, formación y soporte para usuarios de campus virtual.",
      en: "Corporate platform for access, training and support for virtual campus users."
    },
    details: {
      es: "Plataforma corporativa de e-learning con autenticación, autoregistro, recuperación, soporte y operación continua para formación virtual. La solución se apoya en una base cloud fuerte y, según tu experiencia directa, en infraestructura sobre AWS.",
      en: "Corporate e-learning platform with authentication, self-registration, recovery, support and continuous operation for virtual training. The solution relies on a strong cloud base and, from your direct experience, infrastructure on AWS."
    },
    stack: ["PHP", "AWS", "LMS", "Authentication", "Support Flows"],
    url: "https://campus.ccc.org.co/"
  }
];

const PROFILE = {
  name: "Henry Gomez",
  role: {
    es: "Líder técnico · Ingeniería de producto y plataformas",
    en: "Technical Lead · Product & Platform Engineering"
  },
  specialty: {
    es: "Arquitectura · Entrega escalable · Liderazgo técnico",
    en: "Architecture · Scalable Delivery · Technical Leadership"
  },
  location: "Colombia",
  email: "henry8812@gmail.com",
  calendly: "https://calendly.com/henry-lernagroup/30min"
};

let currentLang = getStoredLanguage();

function getStoredLanguage() {
  const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
  if (saved === "es" || saved === "en") return saved;
  return "es";
}

function t(path) {
  return path.split(".").reduce((acc, key) => acc?.[key], COPY[currentLang]) ?? path;
}

function localize(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[currentLang] ?? value.es ?? value.en ?? "";
  }
  return value ?? "";
}

function setLanguage(nextLang) {
  if (nextLang !== "es" && nextLang !== "en") return;
  currentLang = nextLang;
  window.localStorage.setItem(LANG_STORAGE_KEY, nextLang);
  render();
}

const ROUTES = {
  home: {
    renderDesktop: () => `
      <section class="ui">
        ${renderMeta()}
        <div class="side-icons" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="content">
          <div class="home-copy">
            <p class="home-eyebrow">${t("home.eyebrow")}</p>
            <h1 class="home-title">${PROFILE.name}</h1>
            <p class="home-subtitle">${localize(PROFILE.specialty)}</p>
          </div>
        </div>
        ${renderFooter(t("home.footerLeft"), t("home.footerRight"))}
        ${renderNav("home")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="home-copy">
            <p class="home-eyebrow">${t("home.eyebrow")}</p>
            <h1 class="home-title">${PROFILE.name}</h1>
            <p class="home-subtitle">${localize(PROFILE.specialty)}</p>
          </div>
        </div>
        ${renderFooter(t("home.footerLeft"), t("home.footerRight"), true)}
        ${renderNav("home", true)}
      </section>
    `
  },
  projects: {
    renderDesktop: () => `
      <section class="ui">
        ${renderMeta()}
        <div class="content">
          <div class="projects-view">
            <h1 class="projects-title">${t("projects.title")}</h1>
            ${renderProjectsCarousel("desktop")}
          </div>
        </div>
        ${renderFooter(t("projects.footerLeft"), t("projects.footerRight"))}
        ${renderNav("projects")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="projects-view">
            <h1 class="projects-title">${t("projects.title")}</h1>
            ${renderProjectsCarousel("mobile")}
          </div>
        </div>
        ${renderFooter(t("projects.footerLeft"), t("projects.footerRight"), true)}
        ${renderNav("projects", true)}
      </section>
    `
  },
  about: {
    renderDesktop: () => `
      <section class="ui">
        ${renderMeta()}
        <div class="content">
          <div class="about-copy">
            <h1 class="about-title">${t("about.title")}</h1>
            <p class="about-body">${t("about.bodyDesktop")}</p>
          </div>
        </div>
        ${renderFooter(t("about.footerLeft"), t("about.footerRight"))}
        ${renderNav("about")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="about-copy">
            <h1 class="about-title">${t("about.title")}</h1>
            <p class="about-body">${t("about.bodyMobile")}</p>
          </div>
        </div>
        ${renderFooter(t("about.footerLeft"), t("about.footerRight"), true)}
        ${renderNav("about", true)}
      </section>
    `
  },
  skills: {
    renderDesktop: () => `
      <section class="ui skills-ui">
        ${renderMeta()}
        <div class="content">
          <div class="skills-view">
            <div class="skills-header">
              <h1 class="skills-title">${t("skills.title")}</h1>
              <p class="skills-copy">${t("skills.copyDesktop")}</p>
            </div>
            <div class="skills-groups">
              <article class="skills-card">
                <p class="skills-card-index">01</p>
                <h3>${t("skills.frontend")}</h3>
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
                <h3>${t("skills.backend")}</h3>
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
                <h3>${t("skills.cloud")}</h3>
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
        ${renderFooter(t("skills.footerLeft"), t("skills.footerRight"))}
        ${renderNav("skills")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui skills-ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="skills-view">
            <div class="skills-header">
              <h1 class="skills-title">${t("skills.title")}</h1>
              <p class="skills-copy">${t("skills.copyMobile")}</p>
            </div>
            <div class="skills-groups">
              <article class="skills-card">
                <p class="skills-card-index">01</p>
                <h3>${t("skills.frontend")}</h3>
                <div class="skills-meter-list">
                  ${renderSkillMeter("React", 90)}
                  ${renderSkillMeter("Next.js", 86)}
                  ${renderSkillMeter("JavaScript", 94)}
                  ${renderSkillMeter("TypeScript", 80)}
                </div>
              </article>
              <article class="skills-card">
                <p class="skills-card-index">02</p>
                <h3>${t("skills.backend")}</h3>
                <div class="skills-meter-list">
                  ${renderSkillMeter("Node.js", 84)}
                  ${renderSkillMeter("PHP", 82)}
                  ${renderSkillMeter("WordPress", 90)}
                  ${renderSkillMeter("REST APIs", 88)}
                </div>
              </article>
              <article class="skills-card">
                <p class="skills-card-index">03</p>
                <h3>${t("skills.cloud")}</h3>
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
        ${renderFooter(t("skills.footerLeft"), t("skills.footerRight"), true)}
        ${renderNav("skills", true)}
      </section>
    `
  },
  contact: {
    renderDesktop: () => `
      <section class="ui">
        ${renderMeta()}
        <div class="content">
          <div class="contact-layout">
            <div>
              <h1 class="contact-title">${t("contact.title")}</h1>
              <div class="contact-person">
                <div class="avatar-fallback">H</div>
                <div>
                  <strong>${PROFILE.name}</strong>
                  <span>${localize(PROFILE.role)}</span>
                </div>
              </div>
              <p class="contact-copy">${t("contact.copyDesktop")}</p>
              <div class="contact-actions">
                <a class="contact-cta" href="${PROFILE.calendly}" target="_blank" rel="noreferrer">${t("contact.cta")}</a>
                <a class="contact-secondary" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
              </div>
            </div>
            <div class="contact-panel">
              <div class="contact-panel-head">${t("contact.panelHead")}</div>
              <div class="contact-panel-body">
                <p><strong>${t("contact.calendlyLabel")}</strong><span>${t("contact.calendlyCopyDesktop")}</span></p>
                <p><strong>${t("contact.email")}</strong><span>${PROFILE.email}</span></p>
                <p><strong>${t("contact.location")}</strong><span>${PROFILE.location}</span></p>
              </div>
            </div>
          </div>
        </div>
        ${renderFooter(t("contact.footerLeft"), PROFILE.email)}
        ${renderNav("contact")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="contact-layout">
            <div>
              <h1 class="contact-title">${t("contact.title")}</h1>
              <div class="contact-person">
                <div class="avatar-fallback">H</div>
                <div>
                  <strong>${PROFILE.name}</strong>
                  <span>${localize(PROFILE.role)}</span>
                </div>
              </div>
              <p class="contact-copy">${t("contact.copyMobile")}</p>
              <div class="contact-actions">
                <a class="contact-cta" href="${PROFILE.calendly}" target="_blank" rel="noreferrer">${t("contact.cta")}</a>
                <a class="contact-secondary" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
              </div>
            </div>
            <div class="contact-panel">
              <div class="contact-panel-head">${t("contact.panelHead")}</div>
              <div class="contact-panel-body">
                <p><strong>${t("contact.calendlyLabel")}</strong><span>${t("contact.calendlyCopyMobile")}</span></p>
                <p><strong>${t("contact.email")}</strong><span>${PROFILE.email}</span></p>
                <p><strong>${t("contact.location")}</strong><span>${PROFILE.location}</span></p>
              </div>
            </div>
          </div>
        </div>
        ${renderFooter(t("contact.footerLeft"), t("contact.footerRight"), true)}
        ${renderNav("contact", true)}
      </section>
    `
  },
  project: {
    renderDesktop: () => `
      <section class="ui">
        ${renderMeta()}
        <div class="content">${renderProjectDetail(false)}</div>
        ${renderFooter(t("project.footerLeft"), t("project.footerRight"))}
        ${renderNav("projects")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">${renderProjectDetail(true)}</div>
        ${renderFooter(t("project.footerLeft"), t("project.footerRight"), true)}
        ${renderNav("projects", true)}
      </section>
    `
  },
  notfound: {
    renderDesktop: () => `
      <section class="ui">
        ${renderMeta()}
        <div class="content">
          <div class="not-found">
            <div class="not-found-art">404</div>
            <div class="not-found-note">${t("notfound.note")}</div>
          </div>
        </div>
        ${renderFooter(t("notfound.footerLeft"), t("notfound.footerRight"))}
        ${renderNav("contact")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="not-found">
            <div class="not-found-art">404</div>
            <div class="not-found-note">${t("notfound.note")}</div>
          </div>
        </div>
        ${renderFooter(t("notfound.footerLeft"), t("notfound.footerRight"), true)}
        ${renderNav("contact", true)}
      </section>
    `
  }
};

function renderLanguageSwitch() {
  return `
    <div class="lang-switch" role="group" aria-label="Language switch">
      <button type="button" class="lang-btn ${currentLang === "es" ? "active" : ""}" data-lang="es">ES</button>
      <button type="button" class="lang-btn ${currentLang === "en" ? "active" : ""}" data-lang="en">EN</button>
    </div>
  `;
}

function renderMeta(isMobile = false) {
  return `
    <div class="meta-row">
      <div>
        <strong>${t("meta.yearsLabel")}</strong>
        <span>${t("meta.focusLabel")}</span>
      </div>
      <div class="meta-profile">
        <strong>${PROFILE.name}</strong>
        <span>${isMobile ? "Full Stack" : localize(PROFILE.role)}</span>
      </div>
      ${renderLanguageSwitch()}
    </div>
  `;
}

function renderFooter(left, right) {
  return `
    <div class="footer-left">${left}</div>
    <div class="footer-right">${right}</div>
  `;
}

function renderNav(active, isMobile = false) {
  const items = [
    ["home", t("nav.home")],
    ["projects", t("nav.projects")],
    ["about", t("nav.about")],
    ["skills", t("nav.skills")],
    ["contact", t("nav.contact")]
  ];
  return `
    <nav class="bottom-nav" aria-label="${isMobile ? t("aria.mobileNav") : t("aria.desktopNav")}">
      ${items
        .map(([key, label]) => `<a href="#/${key}" class="${active === key ? "active" : ""}">${label}</a>`)
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

function renderProjectStack(project, compact = false) {
  const items = compact ? project.stack.slice(0, 4) : project.stack;
  return `<div class="project-stack">${items
    .map((item) => `<span>${item}</span>`)
    .join("")}</div>`;
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
          <span class="project-visual-kicker">${localize(project.type)}</span>
          <strong class="project-visual-title">${project.title}</strong>
        </div>
        ${renderProjectBrand(project)}
      </div>
      ${image}
      ${renderProjectStack(project, !detail)}
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
      <button class="carousel-arrow carousel-arrow-prev" type="button" aria-label="${t("aria.prevProject")}">‹</button>
      <div class="project-track" data-track>
        ${PROJECTS.map((project) => renderProjectCard(project, `#/project/${project.slug}`)).join("")}
      </div>
      <button class="carousel-arrow carousel-arrow-next" type="button" aria-label="${t("aria.nextProject")}">›</button>
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
        <p class="single-summary">${localize(project.summary)}</p>
        <p>${localize(project.details)}</p>
        <div class="single-tags">
          <span>${localize(project.type)}</span>
          <span>${t("project.liveProject")}</span>
          <span>${isMobile ? t("project.webTag") : t("project.portfolioTag")}</span>
        </div>
        <div class="single-tech-block">
          <strong>${t("project.techStack")}</strong>
          ${renderProjectStack(project)}
        </div>
        <a class="single-link" href="${project.url}" target="_blank" rel="noreferrer">${t("project.openSite")}</a>
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

function updateDocumentCopy() {
  document.documentElement.lang = t("htmlLang");
  document.title = t("title");
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", t("description"));
}

function bindLanguageSwitches() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

function render() {
  updateDocumentCopy();
  const key = getRouteKey();
  const route = ROUTES[key];
  document.getElementById("desktopScreen").innerHTML = route.renderDesktop();
  document.getElementById("mobileScreen").innerHTML = route.renderMobile();
  bindProjectCarousels();
  bindLanguageSwitches();
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
