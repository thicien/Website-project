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
  loadComponent("services", "src/sections/service.html", populateServices);
  loadComponent("service", "src/sections/services.html", servicesContent);
  loadComponent("footer", "src/sections/footer.html", populateFooter);
  loadComponent("data-privacy", "src/sections/data-privacy.html");
});
export function test() {
  const links = [
    {
      linkName: "About",
      url: "#about-us",
    },
    { linkName: "Services", url: "#services" },
    { linkName: "References", url: "/src/sections/data-privacy.html" },
    { linkName: "Contact", url: "/src/sections/contact.html" },
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
    const { linkName, url } = link;
    smallScreensLinks.innerHTML += `<a href="${url}" class="font-Outfit lg:hover:bg-transparent lg:mx-2"
        >${linkName}</a
      >`;

    largeScreensLinks.innerHTML += `<a href="${url}" class="font-Outfit lg:hover:bg-transparent "
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
        <svg
  viewBox="0 0 39 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="w-full h-full"
>
  <path
    d="M1.10811 9.11842L0 19.1053L8.64865 28.3493L31.5135 30L39 19.0227L28 7L1.10811 9.11842Z"
    fill="black"
  />
  <path
    d="M21.072 24L17.52 19.008L17.112 18.624L12.624 12.6H15.24L18.48 17.04L18.888 17.376L23.688 24H21.072ZM12.408 24L17.112 17.664L18.336 19.248L14.952 24H12.408ZM19.056 18.6L17.808 17.064L20.952 12.6H23.472L19.056 18.6Z"
    fill="white"
  />
</svg>
      `;
    } else {
      menuIcon.innerHTML = `
        <svg
        viewBox="0 0 39 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full"
      >
        <path
          d="M1.10811 2.11842L0 12.1053L8.64865 21.3493L31.5135 23L39 12.0227L28 0L1.10811 2.11842Z"
          class="fill-current"
        />
        <line x1="10" y1="6" x2="26" y2="6" stroke="#EFECEA" stroke-width="2" />
        <line
          x1="10"
          y1="11"
          x2="26"
          y2="11"
          stroke="#EFECEA"
          stroke-width="2"
        />
        <line
          x1="10"
          y1="16"
          x2="26"
          y2="16"
          stroke="#EFECEA"
          stroke-width="2"
        />
      </svg>
      `;
    }
  });
}

function populateServices() {
  const strategyApproach = `Our strategic approach is a collaborative journey that starts with analysing the initial situation and leads to messages that cut through the information overload. We take care of content production and maintain relationships with multipliers to position your brand in the best possible way. From analysis to implementation, we accompany you every step of the way, ensuring that every measure is effective.`;

  const strategyApproachElement = document.getElementById("strategy-approach");
  const servicesContents = document.getElementById("services-content");

  strategyApproachElement.textContent = strategyApproach;
  const allServices = [
    "Brand strategy",
    "Corporate Identity & Website development",
    "SEO & copywriting",
    "Media Relations",
    "Digital marketing & content production",
    "Influencer relations",
  ];

  servicesContents.innerHTML = allServices
    .map((service) => `<h2>${service}</h2>`)
    .join("");
}

function aboutUsServices() {
  const aboutUsServicesContent = {
    "about-us-text": `We are a Berlin-based communications agency specialising in helping companies and brands find their voice and position themselves. Whether it's brand building, identity sharpening, or communication strategy, we bring a fresh perspective to established structures, develop tailor-made communication solutions, and ensure that messages resonate. With over a decade of experience, we have honed our skills in giving brands their unmistakable identity and making them visible in the long term.`,
  };

  Object.entries(aboutUsServicesContent).forEach(([id, text]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = text;
    }
  });
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
