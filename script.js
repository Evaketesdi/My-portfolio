document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("animated-text");

  setTimeout(function () {
    textElement.style.opacity = "1";
    textElement.style.transform = "translateY(0)";
  }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
