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
const formErrorContainer = document.createElement("small");
formErrorContainer.className = "form-error";
formErrorContainer.style.color = "red";

function showError(input, message, errorContainer) {
  errorContainer.innerText = message;
  input.parentNode.appendChild(errorContainer);
  input.classList.add("error");
  input.style.borderColor = "red";
}

function removeError(input, errorContainer) {
  if (errorContainer.parentNode === input.parentNode) {
    input.parentNode.removeChild(errorContainer);
    input.classList.remove("error");
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let hasError = false;
  if (fullName.value.trim() === "") {
    showError(fullName, "Please enter your name", nameErrorContainer);
    hasError = true;
  } else {
    removeError(fullName, nameErrorContainer);
    fullName.style.borderColor = "green";
  }
  const emailValue = email.value.trim();
  if (emailValue === "") {
    showError(email, "Please enter your email address", emailErrorContainer);
    hasError = true;
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    showError(email, "Please enter a valid email address", emailErrorContainer);
    hasError = true;
  } else if (emailValue.toLowerCase() !== emailValue) {
    showError(email, "Email must be in lowercase", emailErrorContainer);
    hasError = true;
  } else {
    removeError(email, emailErrorContainer);
    email.style.borderColor = "green";
  }
  if (hasError) {
    formErrorContainer.innerText = "Please fix the errors before submitting";
    form.appendChild(formErrorContainer);
  } else {
    if (formErrorContainer.parentNode === form) {
      form.removeChild(formErrorContainer);
    }
    form.submit();
  }
});
