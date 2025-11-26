const loadComponent = (id, url, callback) => {
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
  loadComponent("services", "src/sections/services.html", servicesContent);
});

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
