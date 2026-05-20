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
            <h1 class="home-title">Jaspinder Singh</h1>
            <p class="home-subtitle">Frontend Developer</p>
          </div>
        </div>
        ${renderFooter("Next Js")}
        ${renderNav("home")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="home-copy">
            <p class="home-eyebrow">- I am</p>
            <h1 class="home-title">Jaspinder Singh</h1>
            <p class="home-subtitle">Frontend Developer</p>
          </div>
        </div>
        ${renderFooter("Next Js", true)}
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
        ${renderFooter("Next Js")}
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
        ${renderFooter("Next Js", true)}
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
              I&apos;m a creative frontend developer focused on building thoughtful digital products.
              My process blends interactive systems, clean interfaces, and practical user journeys to
              create work that feels modern, lightweight, and purposeful.
            </p>
          </div>
        </div>
        ${renderFooter("Next Js")}
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
              I&apos;m a creative frontend developer building modern interfaces and lightweight digital
              experiences with a strong sense of structure and clarity.
            </p>
          </div>
        </div>
        ${renderFooter("Next Js", true)}
        ${renderNav("about", true)}
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
                <div class="avatar-fallback">J</div>
                <div>
                  <strong>Jaspinder Singh</strong>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
            <form class="contact-form">
              <input type="text" value="Name" aria-label="Name" />
              <input type="email" value="Email" aria-label="Email" />
              <textarea aria-label="Message">Message</textarea>
              <button type="button">Send</button>
            </form>
          </div>
        </div>
        ${renderFooter("Next Js")}
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
                <div class="avatar-fallback">J</div>
                <div>
                  <strong>Jaspinder Singh</strong>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
            <form class="contact-form">
              <input type="text" value="Name" aria-label="Name" />
              <input type="email" value="Email" aria-label="Email" />
              <textarea aria-label="Message">Message</textarea>
              <button type="button">Send</button>
            </form>
          </div>
        </div>
        ${renderFooter("Next Js", true)}
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
          <div class="single-project">
            <div class="single-thumb">
              <img src="assets/project-fintech.svg" alt="" />
            </div>
            <div class="single-copy">
              <h1>Designing for a startup, creating a practical product language.</h1>
              <p>
                A focused case study around structure, interface rhythm, and product clarity. The
                desktop and mobile compositions stay consistent while the information hierarchy adapts
                to each frame.
              </p>
              <div class="single-tags">
                <span>Ui Ux</span>
                <span>Case Study</span>
                <span>Mobile</span>
              </div>
            </div>
          </div>
        </div>
        ${renderFooter("Next Js")}
        ${renderNav("projects")}
      </section>
    `,
    renderMobile: () => `
      <section class="ui">
        ${renderMeta(true)}
        <div class="content">
          <div class="single-project">
            <div class="single-thumb">
              <img src="assets/project-fintech.svg" alt="" />
            </div>
            <div class="single-copy">
              <h1>Designing for a startup, creating a practical product language.</h1>
              <p>
                Desktop and mobile remain aligned while the information hierarchy compresses
                into a simpler flow for smaller screens.
              </p>
              <div class="single-tags">
                <span>Ui Ux</span>
                <span>Mobile</span>
              </div>
            </div>
          </div>
        </div>
        ${renderFooter("Next Js", true)}
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
        ${renderFooter("Next Js")}
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
        ${renderFooter("Next Js", true)}
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
        <strong>Jaspinder Singh</strong>
        <span>${isMobile ? "Dev" : "Frontend Developer"}</span>
      </div>
    </div>
  `;
}

function renderFooter(left, isMobile = false) {
  return `
    <div class="footer-left">${left}</div>
    <div class="footer-right">${isMobile ? "J.Singh" : "Jaspinder Singh.com"}</div>
  `;
}

function renderNav(active, isMobile = false) {
  const items = [
    ["home", "Home"],
    ["projects", "Projects"],
    ["about", "About"],
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

function renderProjectCard(image, label, href) {
  return `
    <a class="project-card" href="${href}">
      <div class="project-thumb"><img src="assets/${image}" alt="" /></div>
      <span class="project-name">${label}</span>
    </a>
  `;
}

function renderProjectsCarousel(kind) {
  return `
    <div class="projects-carousel" data-carousel="${kind}">
      <button class="carousel-arrow carousel-arrow-prev" type="button" aria-label="Previous project">‹</button>
      <div class="project-track" data-track>
        ${renderProjectCard("project-ph.svg", "Startup Dashboard", "#/project")}
        ${renderProjectCard("project-fintech.svg", "Remote Max", "#/project")}
        ${renderProjectCard("project-navo.svg", "Product Mockup", "#/project")}
      </div>
      <button class="carousel-arrow carousel-arrow-next" type="button" aria-label="Next project">›</button>
    </div>
  `;
}

function getRouteKey() {
  const raw = window.location.hash.replace(/^#\/?/, "").trim();
  if (!raw) return "home";
  if (ROUTES[raw]) return raw;
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
