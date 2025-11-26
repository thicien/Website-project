import contactPagePopulation from "./contacts.js";

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
  loadComponent(
    "contact-us",
    "src/sections/contact.html",
    contactPagePopulation
  );
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
