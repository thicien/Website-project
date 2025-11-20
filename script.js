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
  loadComponent("services", "src/section/services.html");
});

document.addEventListener("DOMContentLoaded", () => {
  
  const services = [
    "Ace Hotel",
    "ARMEDANGELS",
    "BERLIN DESIGN WEEK",
    "Berliner Berg",
    "BITE CLUB",
    "Budweiser Budvar",
    "ChungKing Noodles",
    "Designpreis Brandenburg",
    "Die Techniker",
    "European Street Food Awards",
    "Grundmann Dentistry",
    "HORNBACH Werkstück",
    "HORNBACH macht Schule",
    "iF Design",
    "Kopka",
    "KLH Maßschuhe",
    "Lode & Stijn",
    "Luya",
    "MEISSEN",
    "Motel Beer & Coffee",
    "PAPER & TEA",
    "rocket & basil",
    "Seeberger Gruppe",
    "Shiori",
    "SPOC Magazin",
    "stocubo",
    "STUR",
    "World of Coffee",
    "yamo"
  ];

  const container = document.getElementById("servicesContainer");

  const list = document.createElement("div");
  list.className =
    "text-right space-y-1 text-black text-sm md:text-base font-semibold mr-32 pt-20 pb-20";

  services.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item;
    list.appendChild(p);
  });

  container.appendChild(list);

});



