(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector(".nav-links");

    if (toggle && navLinks) {
      toggle.addEventListener("click", function () {
        toggle.classList.toggle("open");
        navLinks.classList.toggle("open");
      });

      navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          toggle.classList.remove("open");
          navLinks.classList.remove("open");
        });
      });
    }

    var currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(function (link) {
      var href = link.getAttribute("href").split("/").pop();
      if (href === currentPath) {
        link.classList.add("active");
      }
    });
  });
})();
