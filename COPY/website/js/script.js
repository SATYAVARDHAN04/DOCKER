// toglling element

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".mobile-menu-toggle");

  const items = document.querySelector(".mobile-menu-item");

  toggle.addEventListener("click", function () {
    items.classList.toggle("active");
  });
});

//navbar color fix
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (this.window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
