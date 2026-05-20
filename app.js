const CONFIG = {
  email: "henry8812@gmail.com",
  github: "https://github.com/xanadu8812",
  linkedin: "https://www.linkedin.com/in/henry-gomez-98a954b1/",
  calendly: "https://calendly.com/henry-lernagroup/30min"
};

const I18N = {
  es: {
    pageTitle: "Henry Gomez · Portfolio",
    metaDescription: "Portfolio bilingüe de Henry Gomez, software developer full stack enfocado en telecomunicaciones, infraestructura y productos digitales.",
    navHome: "Inicio",
    navProjects: "Proyectos",
    navFocus: "Perfil",
    navContact: "Contacto",
    heroIntro: "Hola, soy Henry,",
    heroLines: [
      "SOFTWARE",
      "DEVELOPER",
      "FULL STACK,",
      "TELCO & INFRA"
    ],
    heroBody: "Combino 16 años de experiencia en desarrollo full stack, plataformas CMS, telecomunicaciones e infraestructura para construir soluciones digitales estables, operables y alineadas con objetivos reales.",
    copyEmail: "Copiar correo",
    copied: "Correo copiado",
    bookCall: "Agendar 30 minutos",
    metaExperienceLabel: "Experiencia",
    metaExperienceValue: "16 años",
    metaExperienceBody: "Años resolviendo producto, operación y continuidad técnica.",
    metaSpecialtyLabel: "Especialidad",
    metaSpecialtyValue: "Full stack, telco, infraestructura",
    metaSpecialtyBody: "Desarrollo web, CMS, VoIP, virtualización e infraestructura.",
    metaLocationLabel: "Ubicación",
    metaLocationValue: "Colombia",
    metaLocationBody: "Perfil técnico útil para construir y operar al mismo tiempo.",
    projectsKicker: "Proyecto destacado",
    projectsTitle: "Trabajo reciente con foco en producto, búsqueda y estabilidad.",
    projectLink: "Ver proyecto",
    projectRepo: "Abrir GitHub",
    projects: [
      {
        title: "Media Evaluation Platform Static",
        description: "Plataforma web para descubrimiento y evaluación de contenido, con trabajo reciente en UX de búsqueda, control de versiones, consistencia de datos y estabilidad general de la interfaz.",
        tags: ["JavaScript", "UX de búsqueda", "GitHub Pages", "Releases", "UI state"],
        image: "assets/project-fintech.svg",
        url: "https://lerna-admin.github.io/media-evaluation-platform-static/",
        repo: "https://github.com/lerna-admin/media-evaluation-platform-static"
      }
    ],
    focusKicker: "Enfoque actual",
    focusTitle: "Desarrollo, operación y continuidad técnica en un mismo perfil.",
    focusCards: [
      {
        title: "Software development con criterio operativo",
        body: "Trabajo frontend, backend y lógica de producto con foco en estabilidad, claridad técnica y entrega útil."
      },
      {
        title: "CMS para entornos reales",
        body: "También cubro WordPress y otras plataformas administrables donde la operación diaria importa tanto como el código."
      },
      {
        title: "Telecom e infraestructura",
        body: "Puedo moverme desde producto digital hacia VoIP, virtualización, servicios técnicos y soporte operativo sin romper continuidad."
      }
    ],
    stackKicker: "Stack principal",
    stackTitle: "Tecnologías con las que puedo construir, integrar y operar.",
    stackCol1Title: "Desarrollo web",
    stackCol1Body: "JavaScript, TypeScript, React, Next.js, Node.js, APIs REST, interfaces administrativas y flujos de negocio.",
    stackCol2Title: "CMS y contenido",
    stackCol2Body: "WordPress y otras plataformas administrables para sitios corporativos, comerciales y de operación diaria.",
    stackCol3Title: "Infraestructura y telco",
    stackCol3Body: "Proxmox, Asterisk, VoIP, virtualización, Linux, redes, soporte técnico y servicios operativos.",
    contactKicker: "Contacto",
    contactTitle: "Si necesitas construir o estabilizar un producto, podemos hablar.",
    contactBody: "El portafolio seguirá creciendo con proyectos reales. Por ahora, este sitio presenta el enfoque, stack y la línea de trabajo con la que estoy operando.",
    contactCall: "Agendar llamada",
    contactLink: "Abrir LinkedIn",
    footerEmailLabel: "Correo",
    footerGithubLabel: "GitHub",
    footerLinkedinLabel: "LinkedIn"
  },
  en: {
    pageTitle: "Henry Gomez · Portfolio",
    metaDescription: "Bilingual portfolio of Henry Gomez, a full stack software developer focused on telecommunications, infrastructure and digital products.",
    navHome: "Home",
    navProjects: "Projects",
    navFocus: "Profile",
    navContact: "Contact",
    heroIntro: "Hi, I'm Henry,",
    heroLines: [
      "SOFTWARE",
      "DEVELOPER",
      "FULL STACK,",
      "TELCO & INFRA"
    ],
    heroBody: "I combine 16 years of experience in full stack development, CMS platforms, telecommunications and infrastructure to build digital solutions that are stable, operable and aligned with real business goals.",
    copyEmail: "Copy e-mail",
    copied: "E-mail copied",
    bookCall: "Book 30 minutes",
    metaExperienceLabel: "Experience",
    metaExperienceValue: "16 years",
    metaExperienceBody: "Years solving product, operations and technical continuity.",
    metaSpecialtyLabel: "Specialty",
    metaSpecialtyValue: "Full stack, telco, infrastructure",
    metaSpecialtyBody: "Web development, CMS, VoIP, virtualization and infrastructure.",
    metaLocationLabel: "Location",
    metaLocationValue: "Colombia",
    metaLocationBody: "A technical profile useful for building and operating at the same time.",
    projectsKicker: "Featured project",
    projectsTitle: "Recent work centered on product, search and stability.",
    projectLink: "View project",
    projectRepo: "Open GitHub",
    projects: [
      {
        title: "Media Evaluation Platform Static",
        description: "Web platform for content discovery and evaluation, with recent work around search UX, release control, data consistency and overall interface stability.",
        tags: ["JavaScript", "Search UX", "GitHub Pages", "Releases", "UI state"],
        image: "assets/project-fintech.svg",
        url: "https://lerna-admin.github.io/media-evaluation-platform-static/",
        repo: "https://github.com/lerna-admin/media-evaluation-platform-static"
      }
    ],
    focusKicker: "Current focus",
    focusTitle: "Development, operations and technical continuity in a single profile.",
    focusCards: [
      {
        title: "Software development with operational judgment",
        body: "I work across frontend, backend and product logic with a focus on stability, technical clarity and useful delivery."
      },
      {
        title: "CMS for real environments",
        body: "I also cover WordPress and other manageable platforms where daily operation matters as much as the code."
      },
      {
        title: "Telecom and infrastructure",
        body: "I can move from digital product work into VoIP, virtualization, technical services and operational support without breaking continuity."
      }
    ],
    stackKicker: "Primary stack",
    stackTitle: "Technologies I can use to build, integrate and operate.",
    stackCol1Title: "Web development",
    stackCol1Body: "JavaScript, TypeScript, React, Next.js, Node.js, REST APIs, admin interfaces and business workflows.",
    stackCol2Title: "CMS and content",
    stackCol2Body: "WordPress and other manageable platforms for corporate, commercial and operational web properties.",
    stackCol3Title: "Infrastructure and telco",
    stackCol3Body: "Proxmox, Asterisk, VoIP, virtualization, Linux, networking, technical support and operational services.",
    contactKicker: "Contact",
    contactTitle: "If you need to build or stabilize a product, we can talk.",
    contactBody: "This portfolio will keep growing with real projects. For now, it presents the focus, stack and working line I am currently operating with.",
    contactCall: "Book a call",
    contactLink: "Open LinkedIn",
    footerEmailLabel: "E-mail",
    footerGithubLabel: "GitHub",
    footerLinkedinLabel: "LinkedIn"
  }
};

function $(selector) {
  return document.querySelector(selector);
}

function escapeHtml(text) {
  return String(text ?? "").replace(/[&<>"']/g, (char) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]
  ));
}

function getLanguage() {
  const stored = localStorage.getItem("portfolio_lang");
  return I18N[stored] ? stored : "es";
}

async function copyEmail(button) {
  try {
    await navigator.clipboard.writeText(CONFIG.email);
    if (button) {
      button.textContent = I18N[getLanguage()].copied;
      window.setTimeout(() => {
        button.textContent = I18N[getLanguage()].copyEmail;
      }, 1200);
    }
  } catch {
    window.location.href = `mailto:${CONFIG.email}`;
  }
}

function renderFocusCards(lang) {
  const root = $("#focusGrid");
  if (!root) return;
  root.innerHTML = I18N[lang].focusCards.map((card) => `
    <article class="focus-card">
      <h3>${escapeHtml(card.title)}</h3>
      <p>${escapeHtml(card.body)}</p>
    </article>
  `).join("");
}

function renderProjects(lang) {
  const root = $("#projectGrid");
  if (!root) return;
  root.innerHTML = I18N[lang].projects.map((project) => `
    <article class="project-card">
      <div class="project-media">
        <img src="${escapeHtml(project.image)}" alt="" />
      </div>
      <div class="project-copy">
        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <div class="project-actions">
          <a href="${escapeHtml(project.url)}" target="_blank" rel="noreferrer">${escapeHtml(I18N[lang].projectLink)}</a>
          <a href="${escapeHtml(project.repo)}" target="_blank" rel="noreferrer">${escapeHtml(I18N[lang].projectRepo)}</a>
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

  $("#navHome").textContent = copy.navHome;
  $("#navProjects").textContent = copy.navProjects;
  $("#navFocus").textContent = copy.navFocus;
  $("#navContact").textContent = copy.navContact;
  $("#heroIntro").textContent = copy.heroIntro;
  $("#heroLine1").textContent = copy.heroLines[0];
  $("#heroLine2").textContent = copy.heroLines[1];
  $("#heroLine3").textContent = copy.heroLines[2];
  $("#heroLine4").textContent = copy.heroLines[3];
  $("#heroBody").textContent = copy.heroBody;
  $("#copyEmailA").textContent = copy.copyEmail;
  $("#copyEmailB").textContent = copy.copyEmail;
  $("#bookCallA").textContent = copy.bookCall;
  $("#bookCallB").textContent = copy.contactCall;
  $("#metaExperienceLabel").textContent = copy.metaExperienceLabel;
  $("#metaExperienceValue").textContent = copy.metaExperienceValue;
  $("#highlightExperienceBody").textContent = copy.metaExperienceBody;
  $("#metaSpecialtyLabel").textContent = copy.metaSpecialtyLabel;
  $("#metaSpecialtyValue").textContent = copy.metaSpecialtyValue;
  $("#highlightFocusBody").textContent = copy.metaSpecialtyBody;
  $("#metaLocationLabel").textContent = copy.metaLocationLabel;
  $("#metaLocationValue").textContent = copy.metaLocationValue;
  $("#highlightAvailabilityBody").textContent = copy.metaLocationBody;
  $("#projectsKicker").textContent = copy.projectsKicker;
  $("#projectsTitle").textContent = copy.projectsTitle;
  $("#focusKicker").textContent = copy.focusKicker;
  $("#focusTitle").textContent = copy.focusTitle;
  $("#stackKicker").textContent = copy.stackKicker;
  $("#stackTitle").textContent = copy.stackTitle;
  $("#stackCol1Title").textContent = copy.stackCol1Title;
  $("#stackCol1Body").textContent = copy.stackCol1Body;
  $("#stackCol2Title").textContent = copy.stackCol2Title;
  $("#stackCol2Body").textContent = copy.stackCol2Body;
  $("#stackCol3Title").textContent = copy.stackCol3Title;
  $("#stackCol3Body").textContent = copy.stackCol3Body;
  $("#contactKicker").textContent = copy.contactKicker;
  $("#contactTitle").textContent = copy.contactTitle;
  $("#contactBody").textContent = copy.contactBody;
  $("#contactLinkA").textContent = copy.contactLink;
  $("#footerEmailLabel").textContent = copy.footerEmailLabel;
  $("#footerGithubLabel").textContent = copy.footerGithubLabel;
  $("#footerLinkedinLabel").textContent = copy.footerLinkedinLabel;

  $("#bookCallA").href = CONFIG.calendly;
  $("#bookCallB").href = CONFIG.calendly;
  $("#contactLinkA").href = CONFIG.linkedin;
  $("#githubTop").href = CONFIG.github;
  $("#linkedinTop").href = CONFIG.linkedin;
  $("#footerEmail").href = `mailto:${CONFIG.email}`;
  $("#footerEmail").textContent = CONFIG.email;
  $("#footerGithub").href = CONFIG.github;
  $("#footerGithub").textContent = "xanadu8812";
  $("#footerLinkedin").href = CONFIG.linkedin;
  $("#footerLinkedin").textContent = "Henry Gomez";

  renderProjects(lang);
  renderFocusCards(lang);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
}

function bindButtons() {
  [$("#copyEmailA"), $("#copyEmailB")].filter(Boolean).forEach((button) => {
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

bindButtons();
applyContent(getLanguage());
