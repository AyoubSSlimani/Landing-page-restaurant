const title = document.getElementById("title");
const navbar = document.getElementById("nav");

const histoire = document.getElementById("histoire");
const histoire1 = document.getElementById("histoire1");
const histoire2 = document.getElementById("histoire2");
const burgerbutton = document.getElementById("burgerbutton");

// SCROLLING EVENTS
window.onunload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("scroll", (e) => {
  const percentageScroll =
    window.scrollY / (document.body.offsetHeight - window.innerHeight); // Position verticale du scroll
  console.log(percentageScroll.toFixed(2));
  if (percentageScroll > 0.03) {
    title.style.opacity = "0";
  } else if (scrollY < 0.03) {
    title.style.opacity = "1";
  }
  if (percentageScroll > 0.05) {
    histoire1.style.opacity = "1";
    histoire1.style.transform = "translateX(0)";
    histoire2.style.opacity = "1";
    histoire2.style.transform = "translateX(0)";
  }
});

// END SCROLLING EVENTS

// CLICK EVENTS


// END CLICK EVENTS
