document.addEventListener("DOMContentLoaded", function(event) {
  let burgerElement = document.querySelector(".burger-container");
  let navigationMenu = document.querySelector("nav ul#menu-list");

  burgerElement.onclick = function() {
    burgerElement.classList.toggle("active");
    navigationMenu.classList.toggle("active");
  };
});
