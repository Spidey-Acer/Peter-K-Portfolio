const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuItem = document.querySelectorAll(".mobile-menu-item");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("show");
}

function handleMobileMenuItemClick(event) {
  const target = event.target;
  const sectionId = target.getAttribute("href");

  toggleMobileMenu();

  document.querySelector(sectionId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

menuButton.addEventListener("click", toggleMobileMenu);
closeButton.addEventListener("click", toggleMobileMenu);

mobileMenuItem.forEach((item) => {
  item.addEventListener("click", handleMobileMenuItemClick);
});
