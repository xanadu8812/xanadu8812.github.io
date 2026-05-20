const CONFIG = {
  email: "henry8812@gmail.com",
  github: "https://github.com/xanadu8812",
  linkedin: "https://www.linkedin.com/in/henry-gomez-98a954b1/"
};

const I18N = {
  es: {
    pageTitle: "Henry Gomez · Portfolio",
    metaDescription: "Portfolio bilingue de Henry Gomez, ingeniero de desarrollo full stack enfocado en telecomunicaciones e infraestructura.",
    sidebarRole: "Ingeniero de desarrollo full stack",
    navHome: "Inicio",
    navProjects: "Proyecto",
    navAbout: "Perfil",
    navServices: "Stack",
    heroRole: "Ingeniero full stack",
    availability: "Disponible para proyectos ( Colombia / Remoto )",
    heroLines: [
      "INGENIERO FULL STACK",
      "PARA PRODUCTOS DIGITALES",
      "SISTEMAS DE TELECOM",
      "E INFRAESTRUCTURA"
    ],
    heroBody: "Combino 16 anos de experiencia en desarrollo full stack, plataformas CMS, telecomunicaciones e infraestructura para construir soluciones web estables, operables y alineadas con objetivos reales de negocio.",
    copyEmail: "Copiar correo",
    copied: "Correo copiado",
    ctaPrimary: "Ver proyecto destacado",
    ctaSecondary: "Abrir LinkedIn",
    projectsTitle: ["PROYECTO DESTACADO,", "TRABAJO DIGITAL ACTUAL."],
    capabilitiesTitle: ["CAPACIDADES CLAVE,", "ENFOQUE TECNICO REAL"],
    aboutTitle: "LISTO PARA CONSTRUIR?",
    aboutSlashline: "// full stack // cms // telecom // infraestructura //",
    aboutPoints: [
      "✦ Desarrollo web full stack con enfoque practico y orientado a resultados.",
      "✦ Experiencia con WordPress y otros CMS para entornos administrables.",
      "✦ Operacion de infraestructura, virtualizacion, VoIP y servicios tecnicos.",
      "✦ Perfil util para productos que necesitan construir y operar al mismo tiempo."
    ],
    contactCta: "Contactar",
    footerConnectLabel: "Conectar",
    footerGithub: "Hablar conmigo en GitHub",
    footerThirdLabel: "Ubicacion",
    footerThirdValue: "Colombia",
    footerCopy: "©2026 Henry Gomez",
    footerLegal: "Portafolio personal en evolucion continua. El contenido se actualiza de forma progresiva para reflejar proyectos reales, stack tecnico y capacidad operativa en desarrollo, telecomunicaciones e infraestructura.",
    footerLinkedin: "Ver perfil de LinkedIn",
    projectLink: "Ver proyecto",
    projects: [
      {
        tags: ["JavaScript", "UX/UI", "UX de busqueda", "GitHub Pages", "Flujo de releases"],
        title: "Media Evaluation Platform Static",
        support: "Plataforma web para descubrimiento y evaluacion de contenido con mejoras en busqueda, UX, estabilidad y control de versiones.",
        image: "assets/project-fintech.svg",
        url: "https://lerna-admin.github.io/media-evaluation-platform-static/"
      }
    ],
    capabilities: [
      {
        name: "Desarrollo web full stack",
        role: "React, Next.js, JavaScript, TypeScript, Node.js y APIs.",
        quote: "Desarrollo interfaces y logica de negocio con foco en estabilidad, mantenibilidad y entrega real."
      },
      {
        name: "CMS y plataformas",
        role: "WordPress y otros CMS para entornos administrables.",
        quote: "Trabajo con sitios corporativos, comerciales y flujos de contenido donde la operacion diaria importa tanto como el codigo."
      },
      {
        name: "Infraestructura y telecom",
        role: "Proxmox, VoIP con Asterisk, virtualizacion y soporte tecnico.",
        quote: "Puedo moverme entre producto digital e infraestructura para resolver necesidades operativas completas."
      }
    ]
  },
  en: {
    pageTitle: "Henry Gomez · Portfolio",
    metaDescription: "Bilingual portfolio of Henry Gomez, a full stack development engineer focused on telecommunications and infrastructure.",
    sidebarRole: "Full stack development engineer",
    navHome: "Homepage",
    navProjects: "Project",
    navAbout: "Profile",
    navServices: "Stack",
    heroRole: "Full stack engineer",
    availability: "Available for projects ( Colombia / Remote )",
    heroLines: [
      "FULL STACK ENGINEER",
      "FOR DIGITAL PRODUCTS",
      "TELECOM SYSTEMS",
      "& INFRASTRUCTURE"
    ],
    heroBody: "I combine 16 years of experience in full stack development, CMS platforms, telecommunications and infrastructure to build web solutions that are stable, operational and aligned with real business goals.",
    copyEmail: "Copy e-mail",
    copied: "E-mail copied",
    ctaPrimary: "View featured project",
    ctaSecondary: "Open LinkedIn",
    projectsTitle: ["FEATURED PROJECT,", "CURRENT DIGITAL WORK."],
    capabilitiesTitle: ["CORE CAPABILITIES,", "REAL TECHNICAL FOCUS"],
    aboutTitle: "READY TO BUILD?",
    aboutSlashline: "// full stack // cms // telecom // infrastructure //",
    aboutPoints: [
      "✦ Full stack web development with a practical, results-oriented mindset.",
      "✦ Experience with WordPress and other CMS solutions for manageable environments.",
      "✦ Infrastructure operations, virtualization, VoIP and technical services.",
      "✦ Useful profile for products that need both delivery and operations."
    ],
    contactCta: "Contact",
    footerConnectLabel: "Connect",
    footerGithub: "Talk to me on GitHub",
    footerThirdLabel: "Location",
    footerThirdValue: "Colombia",
    footerCopy: "©2026 Henry Gomez",
    footerLegal: "Personal portfolio in continuous evolution. The content is updated progressively to reflect real projects, technical stack and operating capability across development, telecommunications and infrastructure.",
    footerLinkedin: "View LinkedIn profile",
    projectLink: "View project",
    projects: [
      {
        tags: ["JavaScript", "UX/UI", "Search UX", "GitHub Pages", "Release Flow"],
        title: "Media Evaluation Platform Static",
        support: "Web platform for content discovery and evaluation with ongoing improvements in search, UX, stability and version control.",
        image: "assets/project-fintech.svg",
        url: "https://lerna-admin.github.io/media-evaluation-platform-static/"
      }
    ],
    capabilities: [
      {
        name: "Full Stack Web",
        role: "React, Next.js, JavaScript, TypeScript, Node.js and APIs.",
        quote: "I build interfaces and business logic with a focus on stability, maintainability and practical delivery."
      },
      {
        name: "CMS & Platforms",
        role: "WordPress and other CMS solutions for manageable environments.",
        quote: "I work on corporate and commercial sites where daily operation matters as much as the code itself."
      },
      {
        name: "Infrastructure & Telco",
        role: "Proxmox, Asterisk-based VoIP, virtualization and technical support.",
        quote: "I can move between digital product work and infrastructure to solve complete operational needs."
      }
    ]
  }
};

function $(selector) { return document.querySelector(selector); }

function escapeHtml(text) {
  return String(text ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
}

function getLanguage() {
  const stored = localStorage.getItem("portfolio_lang");
  return I18N[stored] ? stored : "es";
}

async function copyEmail(button) {
  try {
    await navigator.clipboard.writeText(CONFIG.email);
    if (button) button.textContent = I18N[getLanguage()].copied;
    window.setTimeout(() => {
      if (button) button.textContent = I18N[getLanguage()].copyEmail;
    }, 1200);
  } catch {
    window.location.href = `mailto:${CONFIG.email}`;
  }
}

function renderProjects(lang) {
  const root = $("#projectGrid");
  if (!root) return;
  root.innerHTML = I18N[lang].projects.map((project) => {
    const tags = project.tags.map((tag) => `<span class="ptag">${escapeHtml(tag)}</span>`).join("");
    const support = project.support ? `<div class="psub">${escapeHtml(project.support)}</div>` : "";
    return `
      <article class="pcard">
        <div class="pmedia"><img src="${escapeHtml(project.image)}" alt="" /></div>
        <div class="pbody">
          <div class="ptags">${tags}</div>
          <div class="ptitle">${escapeHtml(project.title)}</div>
          ${support}
          <a class="pcta" href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer">${escapeHtml(I18N[lang].projectLink)}</a>
        </div>
      </article>
    `;
  }).join("");
}

function renderCapabilities(lang) {
  const root = $("#testimonialGrid");
  if (!root) return;
  root.innerHTML = I18N[lang].capabilities.map((item) => `
    <article class="tcard">
      <div class="ttext">“${escapeHtml(item.quote)}”</div>
      <div class="tperson">
        <img class="tavatar" src="assets/avatar-01.svg" alt="" />
        <div>
          <div class="tname">${escapeHtml(item.name)}</div>
          <div class="trole">${escapeHtml(item.role)}</div>
        </div>
      </div>
    </article>
  `).join("");
}

function applyContent(lang) {
  const copy = I18N[lang];
  document.documentElement.lang = lang;
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", copy.metaDescription);

  $("#sidebarRole").textContent = copy.sidebarRole;
  $("#navHome").textContent = copy.navHome;
  $("#navProjects").textContent = copy.navProjects;
  $("#navAbout").textContent = copy.navAbout;
  $("#navServices").textContent = copy.navServices;
  $("#heroRole").textContent = copy.heroRole;
  $("#availabilityText").textContent = copy.availability;
  $("#heroLine1").textContent = copy.heroLines[0];
  $("#heroLine2").textContent = copy.heroLines[1];
  $("#heroLine3").textContent = copy.heroLines[2];
  $("#heroLine4").textContent = copy.heroLines[3];
  $("#heroBody").textContent = copy.heroBody;
  $("#copyEmailA").textContent = copy.copyEmail;
  $("#copyEmailB").textContent = copy.copyEmail;
  $("#copyEmailC").textContent = copy.copyEmail;
  $("#bookCallA").textContent = copy.ctaPrimary;
  $("#contactLinkA").textContent = copy.ctaSecondary;
  $("#projectsLine1").textContent = copy.projectsTitle[0];
  $("#projectsLine2").textContent = copy.projectsTitle[1];
  $("#capabilitiesLine1").textContent = copy.capabilitiesTitle[0];
  $("#capabilitiesLine2").textContent = copy.capabilitiesTitle[1];
  $("#aboutTitle").textContent = copy.aboutTitle;
  $("#aboutSlashline").textContent = copy.aboutSlashline;
  $("#aboutPoint1").textContent = copy.aboutPoints[0];
  $("#aboutPoint2").textContent = copy.aboutPoints[1];
  $("#aboutPoint3").textContent = copy.aboutPoints[2];
  $("#aboutPoint4").textContent = copy.aboutPoints[3];
  $("#bookCallB").textContent = copy.contactCta;
  $("#footerConnectLabel").textContent = copy.footerConnectLabel;
  $("#footerGithub").textContent = copy.footerGithub;
  $("#footerThirdLabel").textContent = copy.footerThirdLabel;
  $("#footerThirdValue").textContent = copy.footerThirdValue;
  $("#footerCopy").textContent = copy.footerCopy;
  $("#footerLegal").textContent = copy.footerLegal;
  $("#footerLinkedin").textContent = copy.footerLinkedin;
  document.querySelectorAll(".foot-label")[0].textContent = lang === "es" ? "Correo" : "E-mail";

  $("#bookCallA").href = "#projects";
  $("#bookCallB").href = "#contact";
  $("#contactLinkA").href = CONFIG.linkedin;
  $("#footerGithub").href = CONFIG.github;
  $("#footerLinkedin").href = CONFIG.linkedin;
  $("#footerEmail").textContent = CONFIG.email;

  renderProjects(lang);
  renderCapabilities(lang);
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
}

function bindButtons() {
  [$("#copyEmailA"), $("#copyEmailB"), $("#copyEmailC")].filter(Boolean).forEach((button) => {
    button.addEventListener("click", () => copyEmail(button));
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang || "es";
      localStorage.setItem("portfolio_lang", lang);
      applyContent(lang);
    });
  });
}

function bindNavState() {
  const links = [...document.querySelectorAll(".s-nav a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href") || ""))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const id = `#${visible.target.id}`;
    links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === id));
  }, { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.3, 0.5, 0.75] });

  sections.forEach((section) => observer.observe(section));
}

bindButtons();
bindNavState();
applyContent(getLanguage());
