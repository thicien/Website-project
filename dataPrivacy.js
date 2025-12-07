import { populateFooter, setupMobileMenu, test } from "./script.js";
import { loadComponent } from "./script.js";

loadComponent("data-privacy-nav", "/src/sections/navbar.html", () => {
  setupMobileMenu();
  test();
});
loadComponent("data-privacy-footer", "/src/sections/footer.html", populateFooter);
