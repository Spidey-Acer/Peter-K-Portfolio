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
// Validate the form on submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Use a variable to keep track of whether any input is invalid or empty
  let hasError = false;
  // Validate full name
  if (fullName.value.trim() === '') {
    showError(fullName, 'Please enter your name', nameErrorContainer);
    // Set the variable to true if the input is invalid or empty
    hasError = true;
  } else {
    removeError(fullName, nameErrorContainer);
    fullName.style.borderColor = 'green';
  }
  // Validate email address
  const emailValue = email.value.trim();
  if (emailValue === '') {
    showError(email, 'Please enter your email address', emailErrorContainer);
    // Set the variable to true if the input is invalid or empty
    hasError = true;
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    showError(email, 'Please enter a valid email address', emailErrorContainer);
    // Set the variable to true if the input is invalid or empty
    hasError = true;
  } else if (emailValue.toLowerCase() !== emailValue) {
    showError(email, 'Email must be in lowercase', emailErrorContainer);
    // Set the variable to true if the input is invalid or empty
    hasError = true;
  } else {
    removeError(email, emailErrorContainer);
    email.style.borderColor = 'green';
  }
  // Check if the form has any error before submitting it
  if (hasError) {
    // Show an error message near the submit button
    formErrorContainer.innerText = 'Please fix the errors before submitting';
    form.appendChild(formErrorContainer);
  } else {
    // Hide the error message if there is no error
    if (formErrorContainer.parentNode === form) {
      form.removeChild(formErrorContainer);
    }
    // Submit the form
    form.submit();
  }
});