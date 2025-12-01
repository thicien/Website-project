// import contactPagePopulation from "./contacts.js";

export const loadComponent = (id, url, callback = setupMobileMenu) => {
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
  loadComponent("navbar", "src/sections/Navbar.html", () => {
    setupMobileMenu();
    test();
  });
  loadComponent("hero-section", "src/sections/HeroSection.html");
  loadComponent("about-us", "src/sections/AboutUs.html", aboutUsServices);
  loadComponent("service", "src/sections/services.html", servicesContent);
  loadComponent("footer", "src/sections/footer.html", populateFooter);
  //   loadComponent(
  //   "contact-us",
  //   "src/sections/contact.html",
  //   contactPagePopulation
  // );
});
export function test() {
  const links = [{
    linkName:"About", url: "#"}, {linkName: "Services", url:"#"}, {linkName: "References", url:"#"}, {linkName: "Contact", url:"/src/sections/contact.html"}
  ];
  const smallScreensLinks = document.querySelector(
    "[data-id = large-devices-screens]"
  );
  const largeScreensLinks = document.querySelector(
    "[data-id = small-screens-links]"
  );

  smallScreensLinks.innerHTML = ``;
  largeScreensLinks.innerHTML = ``;

  links.forEach((link) => {
    const {linkName, url} = link;
    smallScreensLinks.innerHTML += `<a href="${url}" class="font-Outfit lg:hover:bg-transparent lg:mx-2"
        >${linkName}</a
      >`;

    largeScreensLinks.innerHTML += `<a href="${url}" class="font-Outfit lg:hover:bg-transparent lg:mx-2"
        >${linkName}</a
      >`;
  });
}
export function setupMobileMenu() {
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
export function populateFooter() {
  const footerContent = {
    companyName: "Agentur Baumeister",
    street: "Bockhstraße 13",
    cityZip: "10967 Berlin",
    email: "hallo@neue-agentur.com",
    phone: "+49 (0)30 - 555 123 45",

    patternImageSrc: "/images/pattern.png",
    linkedinUrl: "https://www.linkedin.com/company/new-baumeister",
    instagramUrl: "https://www.instagram.com/new-baumeister",
    impressumUrl: "/legal/imprint",
    datenschutzUrl: "/legal/privacy",

    linkedinText: "LinkedIn",
    instagramText: "Instagram",
    impressumText: "Impressum",
    datenschutzText: "Datenschutz",
  };
  const patternImage = document.getElementById("pattern-image");
  if (patternImage) {
    patternImage.src = footerContent.patternImageSrc;
    patternImage.alt = footerContent.companyName + " Pattern";
  }

  const desktopAdd1 = document.getElementById("desktop1");
  const desktopAdd2 = document.getElementById("desktop2");
  const desktopAdd3 = document.getElementById("desktop3");
  if (desktopAdd1) desktopAdd1.textContent = footerContent.companyName;
  if (desktopAdd2) desktopAdd2.textContent = footerContent.street;
  if (desktopAdd3) desktopAdd3.textContent = footerContent.cityZip;

  const desktopEmailLink = document.getElementById("desktop-email-link");
  const desktopPhone = document.getElementById("desktop-phone");
  if (desktopEmailLink) {
    desktopEmailLink.textContent = footerContent.email;
    desktopEmailLink.href = "mailto:" + footerContent.email;
  }
  if (desktopPhone) desktopPhone.textContent = footerContent.phone;

  const desktopLinkedIn = document.getElementById("desktop-linkedin-link");
  const desktopInstagram = document.getElementById("desktop-instagram-link");
  if (desktopLinkedIn) {
    desktopLinkedIn.href = footerContent.linkedinUrl;
    desktopLinkedIn.textContent = footerContent.linkedinText;
  }
  if (desktopInstagram) {
    desktopInstagram.href = footerContent.instagramUrl;
    desktopInstagram.textContent = footerContent.instagramText;
  }

  const desktopImpressum = document.getElementById("desktop-impressum-link");
  const desktopDatenschutz = document.getElementById(
    "desktop-datenschutz-link"
  );
  if (desktopImpressum) {
    desktopImpressum.href = footerContent.impressumUrl;
    desktopImpressum.textContent = footerContent.impressumText;
  }
  if (desktopDatenschutz) {
    desktopDatenschutz.href = footerContent.datenschutzUrl;
    desktopDatenschutz.textContent = footerContent.datenschutzText;
  }

  const mobileAdd1 = document.getElementById("mobile-address-line1");
  const mobileAdd2 = document.getElementById("mobile-address-line2");
  const mobileAdd3 = document.getElementById("mobile-address-line3");
  if (mobileAdd1) mobileAdd1.textContent = footerContent.companyName;
  if (mobileAdd2) mobileAdd2.textContent = footerContent.street;
  if (mobileAdd3) mobileAdd3.textContent = footerContent.cityZip;

  const mobileEmailLink = document.getElementById("mobile-email-link");
  const mobilePhone = document.getElementById("mobile-phone");
  if (mobileEmailLink) {
    mobileEmailLink.textContent = footerContent.email;
    mobileEmailLink.href = "mailto:" + footerContent.email;
  }
  if (mobilePhone) mobilePhone.textContent = footerContent.phone;

  const mobileLinkedIn = document.getElementById("mobile-linkedin-link");
  const mobileInstagram = document.getElementById("mobile-instagram-link");
  if (mobileLinkedIn) {
    mobileLinkedIn.href = footerContent.linkedinUrl;
    mobileLinkedIn.textContent = footerContent.linkedinText;
  }
  if (mobileInstagram) {
    mobileInstagram.href = footerContent.instagramUrl;
    mobileInstagram.textContent = footerContent.instagramText;
  }
  const mobileImpressum = document.getElementById("mobile-impressum-link");
  const mobileDatenschutz = document.getElementById("mobile-datenschutz-link");
  if (mobileImpressum) {
    mobileImpressum.href = footerContent.impressumUrl;
    mobileImpressum.textContent = footerContent.impressumText;
  }
  if (mobileDatenschutz) {
    mobileDatenschutz.href = footerContent.datenschutzUrl;
    mobileDatenschutz.textContent = footerContent.datenschutzText;
  }
}
function servicesContent() {
  const services = [
    {
      name: "Ace Hotel",
      link: "https://acehotel.com/",
    },
    { name: "ARMEDANGELS", link: "https://www.armedangels.com/en" },
    {
      name: "BERLIN DESIGN WEEK",
      link: "https://berlindesignweek.com/",
    },
    { name: "Berliner Berg", link: "https://berlinerberg.com/" },
    {
      name: "BITE CLUB",
      link: "https://www.instagram.com/biteclubberlin/?hl=de",
    },
    {
      name: "Budweiser Budvar",
      link: "https://budweiserbudvar.com/?redirect_from=de&redirect_code=3",
    },
    {
      name: "ChungKing Noodles",
      link: "https://www.instagram.com/chungkingnoodles/?hl=de",
    },
    {
      name: "Designpreis Brandenburg",
      link: "https://designpreis-brandenburg.de/",
    },
    { name: "Die Techniker", link: "https://www.tk.de/techniker" },
    {
      name: "European Street Food Awards",
      link: "https://europeanstreetfood.com/",
    },
    {
      name: "Grundmann Dentistry",
      link: "https://www.grundmann-dentistry.de/",
    },
    {
      name: "HORNBACH Werkstück",
      link: "https://www.hornbach.de/aktuelles/werkstueck-edition/",
    },
    {
      name: "HORNBACH macht Schule",
      link: "https://www.hornbach.de/nachhaltigkeit/hornbach-macht-schule/",
    },
    {
      name: "iF Design",
      link: "https://ifdesign.com/de/",
    },
    { name: "Kopka", link: "https://designpreis-brandenburg.de/" },
    {
      name: "KLH Maßschuhe",
      link: "https://budweiserbudvar.com/?redirect_from=de&redirect_code=3",
    },
    {
      name: "Lode & Stijn",
      link: "https://www.instagram.com/chungkingnoodles/?hl=de",
    },
    { name: "Luya", link: "https://berlindesignweek.com/" },
    { name: "MEISSEN", link: "https://berlinerberg.com/" },
    {
      name: "Motel Beer & Coffee",
      link: "https://www.instagram.com/biteclubberlin/?hl=de",
    },
    {
      name: "PAPER & TEA",
      link: "https://budweiserbudvar.com/?redirect_from=de&redirect_code=3",
    },
    { name: "rocket & basil", link: "https://designpreis-brandenburg.de/" },
    { name: "Seeberger Gruppe", link: "https://designpreis-brandenburg.de/" },
    { name: "Shiori", link: "https://www.tk.de/techniker" },
    { name: "SPOC Magazin", link: "https://europeanstreetfood.com/" },
    {
      name: "stocubo",
      link: "https://www.hornbach.de/aktuelles/werkstueck-edition/",
    },
    {
      name: "STUR",
      link: "https://www.hornbach.de/nachhaltigkeit/hornbach-macht-schule/",
    },
    {
      name: "World of Coffee",
      link: "https://www.hornbach.de/nachhaltigkeit/hornbach-macht-schule/",
    },
    { name: "yamo", link: "https://ifdesign.com/de/" },
  ];

  const container = document.getElementById("servicesContainer");

  services.forEach((item) => {
    const link = document.createElement("a");
    link.textContent = item.name;
    link.href = item.link;
    link.target = "_blank";

    link.className = "block cursor-pointer text-right transition-all";

    container.appendChild(link);
  });
}
