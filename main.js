const body = document.querySelector("body");
sidebar = body.querySelector(".sidebar");
toggle = body.querySelector(".toggle");
searchBtn = body.querySelector(".search-box");
modeSwitch = body.querySelector(".toggle-switch");
modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

sidebar.addEventListener("click", () => {
  body.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light Mode";
  } else {
    modeText.innerText = "dark Mode";
  }
});

window.addEventListener("resize", () => {
  if (window.matchMedia("only screen and (max-width: 768px)").matches) {
    sidebar.classList.add("close");
  } else {
    sidebar.classList.remove("close");
  }
});
