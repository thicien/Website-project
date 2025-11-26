const loadComponent = (id, url, callback = setupMobileMenu) => {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load ${url}`);
      return res.text();
    })
    .then((html) => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    })
    .catch((err) => console.error(err));
};

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "src/sections/Navbar.html", setupMobileMenu);
  loadComponent("hero-section", "src/sections/HeroSection.html");
  loadComponent("about-us", "src/sections/AboutUs.html", aboutUsServices);
});

function setupMobileMenu() {
  const menuIcon = document.getElementById("mobileMenuIcon");
  const menu = document.getElementById("mobileMenu");

  if (!menuIcon || !menu) return;

  let isMenuOpen = false;

  menuIcon.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    menu.classList.toggle("hidden");

    if (isMenuOpen) {
      menuIcon.innerHTML = `
        <img src="./images/closeButton.png" alt="Close menu icon" class="w-full h-full object-contain">
      `;
    } else {
      menuIcon.innerHTML = `
        <img src="./images/openButton.png" alt="Open menu icon" class="w-full h-full object-contain">
      `;
    }
  });
}

function aboutUsServices() {
  const services = document.getElementById("services");
  const aboutUsServicesContent = {
    "about-us-text": `We are a Berlin-based communications agency specialising in helping companies and brands find their voice and position themselves. Whether it's brand building, identity sharpening, or communication strategy, we bring a fresh perspective to established structures, develop tailor-made communication solutions, and ensure that messages resonate. With over a decade of experience, we have honed our skills in giving brands their unmistakable identity and making them visible in the long term.`,
    "strategy-approach": `Our strategic approach is a collaborative journey that starts with analysing the initial situation and leads to messages that cut through the information overload. We take care of content production and maintain relationships with multipliers to position your brand in the best possible way. From analysis to implementation, we accompany you every step of the way, ensuring that every measure is effective.`,
  };
  Object.entries(aboutUsServicesContent).forEach(([id, text]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = text;
    }
  });

  const allServices = [
    "Brand strategy",
    "Corporate Identity & Website development",
    "SEO & copywriting",
    "Media Relations",
    "Digital marketing & content production",
    "Influencer relations",
  ];
  services.innerHTML = allServices
    .map((service) => `<h2>${service}</h2>`)
    .join("");
}
