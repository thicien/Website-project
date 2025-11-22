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
