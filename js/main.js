document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
});

// Food Banner Slider
const foodSlides = document.querySelectorAll('.food-slide');

let currentFoodSlide = 0;

if (foodSlides.length > 0) {

    setInterval(() => {

        // Hide current image
        foodSlides[currentFoodSlide].classList.remove('active');

        // Move to next image
        currentFoodSlide =
            (currentFoodSlide + 1) % foodSlides.length;

        // Show next image
        foodSlides[currentFoodSlide].classList.add('active');

    }, 2000); // 2000 milliseconds = 2 seconds

}

/* =========================================
   MATCHA BAR - GATE OPENING
========================================= */

const matchaHero = document.getElementById("matchaHero");

if (matchaHero) {
  setTimeout(() => {
    matchaHero.classList.add("gate-open");
  }, 2000);
}


document.addEventListener("DOMContentLoaded", () => {

    // Your existing navigation code
    // Your existing slider code


    /* ===== Menu Opening Banner ===== */

    const menuOpeningBanner =
        document.getElementById("menuOpeningBanner");

    if (menuOpeningBanner) {

        setTimeout(() => {
            menuOpeningBanner.classList.add("open");
        }, 2000);

    }

});