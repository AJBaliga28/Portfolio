document.addEventListener("DOMContentLoaded", function () {
  // Handle navigation links
  const navLinks = document.querySelectorAll(".navbar ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });

  // Handle menu toggle
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.addEventListener("click", toggleMenu);

  // Handle active link highlighting
  document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  });
});

function toggleMenu() {
  console.log("Called toggleMenu(). ");
  document.querySelector(".nav-list").classList.toggle("active");
  console.log(document.querySelector(".nav-list").classList.value);
}
