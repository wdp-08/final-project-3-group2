const hamburger = document.querySelector(".hamburger");

const showNavbar = () => {
  const menus = document.querySelector(".menus");
  const contact = document.querySelector(".contact");
  const button = document.querySelector(".button-banner");


  menus.classList.toggle("hide");
  contact.classList.toggle("hide");
  button.classList.toggle("hide");
};

hamburger.addEventListener("click", (e) => {
  showNavbar();
});
