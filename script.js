// TITLE
const title = document.getElementById("title");
// TITLE
// NAV
const navbar = document.getElementById("nav");
// NAV

// TRIPLE IMAGES
const histoire = document.getElementById("histoire");
const histoire1 = document.getElementById("histoire1");
const histoire2 = document.getElementById("histoire2");
// END TRIPLE IMAGES
// BURGER MENU
const burgerbutton = document.getElementById("burgerbutton");
const burgerButtonImg = document.getElementById("burgerbuttonimg");
const burgerMenu = document.getElementById("burgermenu");

const burgerButtons = burgerMenu.querySelectorAll("a");
// END BURGER MENU

// NOS PLATS
const plat1 = document.getElementById("plat1");
const plat2 = document.getElementById("plat2");
const plat3 = document.getElementById("plat3");
const plat4 = document.getElementById("plat4");

// END NOS PLAT

// PLAISIR CULINAIRE
const plaisir1 = document.getElementById("plaisir1");
const plaisir2 = document.getElementById("plaisir2");
// END PLAISIR CULINAIRE

// NAV
const nav = document.getElementById("nav");
// END NAV
// SCROLLING EVENTS
window.onunload = function () {
  window.scrollTo(0, 0);
};

let scrollPosition = 0;

document.addEventListener("scroll", (e) => {
  const percentageScroll =
    window.scrollY / (document.body.offsetHeight - window.innerHeight); // Position verticale du scroll
  console.log(percentageScroll.toFixed(2));
  if (percentageScroll > 0.03) {
    title.style.opacity = "0";
  } else if (scrollY < 0.03) {
    title.style.opacity = "1";
  }
  if (percentageScroll > 0.06) {
    histoire1.style.opacity = "1";
    histoire1.style.transform = "translateX(0)";
    histoire2.style.opacity = "1";
    histoire2.style.transform = "translateX(0)";
  }
  if (percentageScroll > 0.32) {
    plat1.style.transform = "translateX(0)";
    plat2.style.transform = "translateX(0)";
    plat1.style.opacity = "1";
    plat2.style.opacity = "1";
  }
  if (percentageScroll > 0.4) {
    plat3.style.transform = "translateX(0)";
    plat4.style.transform = "translateX(0)";
    plat3.style.opacity = "1";
    plat4.style.opacity = "1";
  }
  if (percentageScroll > 0.74) {
    plaisir1.style.transform = "translateX(0)";
    plaisir2.style.transform = "translateX(0)";
    plaisir1.style.opacity = "1";
    plaisir2.style.opacity = "1";
  }
  // NAV
  if (window.scrollY < scrollPosition) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-200px";
  }
  scrollPosition = window.scrollY;
  // END NAV
});

// END SCROLLING EVENTS

// CLICK EVENTS

// BURGER BUTTON
burgerbutton.addEventListener("click", (e) => {
  const isActive = burgerButtonImg.style.transform === "rotate(360deg)";
  if (isActive) {
    burgerButtonImg.style.transform = "";
  } else {
    burgerButtonImg.style.transform = "rotate(360deg)";
  }
  burgerButtonImg.classList.toggle("fa-burger");
  burgerButtonImg.classList.toggle("fa-minus");
  const isVisible = !burgerMenu.classList.contains("invisible");
  if (isVisible) {
    burgerMenu.classList.add("invisible");
    burgerMenu.style.transform = "translateX(100%)";
  } else {
    burgerMenu.classList.remove("invisible");
    burgerMenu.style.transform = "translateX(0)";
  }
});

burgerButtons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    burgerButtonImg.classList.toggle("fa-burger");
    burgerButtonImg.classList.toggle("fa-minus");
    const isVisible = !burgerMenu.classList.contains("invisible");
    if (isVisible) {
      burgerMenu.classList.add("invisible");
      burgerMenu.style.transform = "translateX(100%)";
    } else {
      burgerMenu.classList.remove("invisible");
      burgerMenu.style.transform = "translateX(0)";
    }
  })
);

// END BURGER BUTTON
// END CLICK EVENTS
