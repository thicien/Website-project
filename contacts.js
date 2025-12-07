import { populateFooter, setupMobileMenu, test } from "./script.js";
import { loadComponent } from "./script.js";
const imprint = {
  "Agentur Baumeister": {
    contents: [
      "Katrein Baumeister",
      "Böckhstraße 13",
      "10967 Berlin",
    ],
  },
};


const contacts = {
  "": {
    contents: ["+49 (0)30 - 490 827 ", "87hallo@agentur-baumeister.com"],
  },
};

const ust = {
  "UST-IDNR.": {
    contents: ["DE 274 486 923"],
  },
};

const regOffice = {
  "REGISTERED OFFICE": {
    contents: ["Berlin, Deutschland"],
  },
};

const allContactDetails = [imprint, contacts, ust, regOffice];

const contactDetails = document.getElementById("contacts-details");
const disclaimerTextElement = document.getElementById("disclaimer-text");

loadComponent("contact-footer", "/src/sections/footer.html", populateFooter);
loadComponent("contact-nav", "/src/sections/navbar.html", () => {
  setupMobileMenu();
  test();
});

const disclaimer = `
                      Despite all due care, no liability can be accepted for the accuracy,
                      completeness and up to-dateness of the information provided. The same
                      applies to third-party websites to which www.agentur-baumeister.com refers
                      by means of hyperlinks. Katrein Baumeister, Agentur Baumeister accepts no
                      liability for the content of these websites.`;

allContactDetails.forEach((detail) => {
  contactDetailsSectionPopulation(detail);
});

contactDetails.insertAdjacentHTML(
  "afterbegin",
  '<h4 class="font-medium lg:text-4xl">IMPRINT</h4>'
);

function contactDetailsSectionPopulation(detail) {
  for (let key in detail) {
    const heading = key || "";
    const test = detail[key]?.contents
      .map((element) => `<p>${element}</p>`)
      .join("");
    contactDetails.innerHTML += `
                                  <h3 class="font-bold mt-4">${heading}</h3>
                                  <p>${test}</p>`;
  }
}

disclaimerTextElement.textContent = disclaimer;
