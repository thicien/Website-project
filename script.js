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
  loadComponent("footer", "src/section/footer.html");
});
fetch("footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer-placeholder").innerHTML = html;
    })
        .catch(err => console.error("Footer load failed:", err));


document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.createElement("div");
    wrapper.className = "flex flex-col min-h-screen";

    const footer = document.createElement("footer");
    footer.className = "bg-slate-50 font-semibold mt-auto";

    const topDiv = document.createElement("div");
    topDiv.className = "flex justify-center px-4 py-10";

    const imageContainer = document.createElement("div");
    imageContainer.className = "w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem]";

    const img = document.createElement("img");
    img.src = "/images/pattern.png";
    img.alt = "Pattern";
    img.className = "w-full h-full object-contain";

    imageContainer.appendChild(img);
    topDiv.appendChild(imageContainer);

    const desktopFooter = document.createElement("div");
    desktopFooter.className = "hidden lg:flex justify-between text-[24px] mx-10 mb-8 flex-wrap";

    const block1 = document.createElement("div");
    ["Agentur Baumeister", "Bockhstraße 13", "10967 Berlin"].forEach(text => {
      const p = document.createElement("p");
      p.textContent = text;
      block1.appendChild(p);
    });

    const block2 = document.createElement("div");
    const email = document.createElement("p");
    email.className = "underline";
    email.textContent = "hallo@agentur-baumeister.com";

    const phone = document.createElement("p");
    phone.textContent = "+49 (0)30 - 490 827 87";
    block2.appendChild(email);
    block2.appendChild(phone);

    const block3 = document.createElement("div");
    block3.className = "flex gap-8";
    ["LinkedIn", "Instagram"].forEach(name => {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = name;
      a.className = "hover:underline";
      block3.appendChild(a);
    });

    const block4 = document.createElement("div");
    block4.className = "flex flex-col";
    ["Impressum", "Datenschutz"].forEach(name => {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = name;
      a.className = "hover:underline";
      block4.appendChild(a);
    });

    desktopFooter.appendChild(block1);
    desktopFooter.appendChild(block2);
    desktopFooter.appendChild(block3);
    desktopFooter.appendChild(block4);

    const mobileFooter = document.createElement("div");
    mobileFooter.className = "lg:hidden mb-8 mx-5 md:text-[16px]";

    const mobileTop = document.createElement("div");
    mobileTop.className = "md:flex md:justify-between mb-8 space-y-5 md:space-y-0";

    const mBlock1 = document.createElement("div");
    ["Agentur Baumeister", "Bockhstraße 13", "10967 Berlin"].forEach(text => {
      const p = document.createElement("p");
      p.textContent = text;
      mBlock1.appendChild(p);
    });

    const mBlock2 = document.createElement("div");
    const mEmail = document.createElement("p");
    mEmail.className = "underline";
    mEmail.textContent = "hallo@agentur-baumeister.com";

    const mPhone = document.createElement("p");
    mPhone.textContent = "+49 (0)30 - 490 827 87";
    mBlock2.appendChild(mEmail);
    mBlock2.appendChild(mPhone);
    mobileTop.appendChild(mBlock1);
    mobileTop.appendChild(mBlock2);

    const mobileBottom = document.createElement("div");
    mobileBottom.className = "flex flex-row justify-between";
    const mobileLinks = [
      { text: "LinkedIn", class: "order-4 md:order-1" },
      { text: "Instagram", class: "order-3 md:order-2" },
      { text: "Impressum", class: "order-2 md:order-3" },
      { text: "Datenschutz", class: "order-1 md:order-4" }
    ];

    mobileLinks.forEach(link => {
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = link.text;
      a.className = `${link.class} hover:underline`;
      mobileBottom.appendChild(a);
    });

    mobileFooter.appendChild(mobileTop);
    mobileFooter.appendChild(mobileBottom);
    footer.appendChild(topDiv);
    footer.appendChild(desktopFooter);
    footer.appendChild(mobileFooter);

    wrapper.appendChild(footer);
    document.body.appendChild(wrapper);
  });



