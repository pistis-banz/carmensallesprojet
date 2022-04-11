const btnDarkMode = document.querySelector("#btn-darkmode");
const btnDarkModeText = document.querySelector("#btn-darkmode span");
const body = document.querySelector("body");

function themeCouleur() {
  if (body.className === "darkmode") {
    btnDarkModeText.innerHTML = "mode clair";
  } else {
    btnDarkModeText.innerHTML = "mode sombre";
  }

  if (localStorage.getItem("themeCouleur")) {
    if (localStorage.getItem("themeCouleur") === "darkmode") {
      body.classList.add("darkmode");
    } else {
      body.classList.add("lightmode");
    }
  } else {
    localStorage.setItem("themeCouleur", "lightmode");
  }
}

themeCouleur();

btnDarkMode.addEventListener("click", function () {
  if (body.className === "darkmode") {
    localStorage.setItem("themeCouleur", "lightmode");
    body.classList.remove("darkmode");
    body.classList.add("lightmode");
    btnDarkModeText.innerHTML = "mode clair";

    themeCouleur();
  } else {
    localStorage.setItem("themeCouleur", "darkmode");
    body.classList.remove("lightmode");
    body.classList.add("darkmode");
    btnDarkModeText.innerHTML = "mode sombre";

    themeCouleur();
  }
});

window.addEventListener("load", themeCouleur());
