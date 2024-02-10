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

/*console.log(Boolean(null));
console.log(typeof null);
let x = 10;
function foo() {
  let x = 20;
  console.log(x);
}
foo();
console.log(x);
let arr = [1, 2, 3, 4];
arr.map((x) => x * 2);
console.log(arr);
let x = 10;
function changeX() {
  let x = 20;
}
changeX();
console.log(x);*/
let x = 1;
function foo() {
  let x = 2;
  console.log(x);
}
foo();
console.log(x);
