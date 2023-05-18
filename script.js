const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuItem = document.querySelectorAll(".mobile-menu-item");

function toggleMobileMenu() {
  mobileMenu.style.display = "flex";
}

function closeMobileMenu() {
  mobileMenu.style.display = "none";
}

function handleMobileMenuItemClick(event) {
  const { target } = event;
  const sectionId = target.getAttribute("href").substring(1);

  closeMobileMenu();

  document.querySelector(sectionId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

menuButton.addEventListener("click", toggleMobileMenu);
closeButton.addEventListener("click", closeMobileMenu);

mobileMenuItem.forEach((item) => {
  item.addEventListener("click", handleMobileMenuItemClick);
});

// Form Validation
const form = document.getElementById("contactForm");
const { fullName } = form.elements;
const { email } = form.elements;
const emailErrorContainer = document.createElement("small");
emailErrorContainer.style.color = "red";
const nameErrorContainer = document.createElement("small");
nameErrorContainer.style.color = "red";
// Create another errorContainer element for the form
const formErrorContainer = document.createElement("small");
formErrorContainer.className = "form-error";
formErrorContainer.style.color = "red";

// Show an error message
function showError(input, message, errorContainer) {
  errorContainer.innerText = message;
  // Append the errorContainer to the input's parent node
  input.parentNode.appendChild(errorContainer);
  input.classList.add("error");
  input.style.borderColor = "red";
}

// Remove the error message
function removeError(input, errorContainer) {
  if (errorContainer.parentNode === input.parentNode) {
    input.parentNode.removeChild(errorContainer);
    input.classList.remove("error");
  }
}
