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

// JavaScript array to store project information
const projects = [
  {
    featuredImage: "./assets/Snapshoot Portfolio1.png",
    title: "Keeping track of hundreds of components",
    liveLink: "https://www.google.com",
    githubLink: "https://www.github.com",
    technologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Sass",
      "CodePen",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Ruby on Rails"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is",
    project_Image: "./assets/Snapshoot Portfolio.png",
    desktop: "./assets/Snapshoot Portfolio.png",
    mobile: "./assets/Snapshoot Portfolio1-mobile (2).png",
  },
  {
    featuredImage: "./assets/Snapshoot Portfolio 2.png",
    title: "Keeping track of hundreds of components",
    liveLink: "https://www.google.com",
    githubLink: "https://www.github.com",
    technologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Sass",
      "CodePen",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Ruby on Rails"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    project_Image: "./assets/Snapshoot Portfolio.png",
    desktop: "./assets/Snapshoot Portfolio1.png",
    mobile: "./assets/Snapshoot Portfolio1-mobile.png",
  },
  {
    featuredImage: "./assets/Snapshoot Portfolio 3.png",
    title: "Keeping track of hundreds of components",
    liveLink: "https://www.google.com",
    githubLink: "https://www.github.com",
    technologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Sass",
      "CodePen",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Ruby on Rails"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    project_Image: "./assets/Snapshoot Portfolio.png",
    desktop: "./assets/Snapshoot Portfolio1.png",
    mobile: "./assets/Snapshoot Portfolio1-mobile.png",
  },
  {
    featuredImage: "./assets/Snapshoot Portfolio 4.png",
    title: "Keeping track of hundreds of components",
    liveLink: "https://www.google.com",
    githubLink: "https://www.github.com",
    technologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Sass",
      "CodePen",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Ruby on Rails"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    project_Image: "./assets/Snapshoot Portfolio.png",
    desktop: "./assets/Snapshoot Portfolio1.png",
    mobile: "./assets/Snapshoot Portfolio1-mobile.png",
  },
  {
    featuredImage: "./assets/Snapshoot Portfolio 5.png",
    title: "Keeping track of hundreds of components",
    liveLink: "https://www.google.com",
    githubLink: "https://www.github.com",
    technologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Sass",
      "CodePen",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Ruby on Rails"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    project_Image: "./assets/Snapshoot Portfolio.png",
    desktop: "./assets/Snapshoot Portfolio1.png",
    mobile: "./assets/Snapshoot Portfolio1-mobile.png",
  },
  {
    featuredImage: "./assets/Snapshoot Portfolio 6.png",
    title: "Keeping track of hundreds of components",
    liveLink: "https://www.google.com",
    githubLink: "https://www.github.com",
    technologies: [
      "Codekit",
      "GitHub",
      "JavaScript",
      "Bootstrap",
      "Sass",
      "CodePen",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Ruby on Rails"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    project_Image: "./assets/Snapshoot Portfolio.png",
    desktop: "./assets/Snapshoot Portfolio1.png",
    mobile: "./assets/Snapshoot Portfolio1-mobile.png",
  },
];

const projectSection = document.getElementById("projects");
projectSection.className = "works-samples-container";

const projectsHeading = document.createElement("h2");
projectsHeading.className = "works-samples-heading";
projectsHeading.textContent = "My Recent Works";
projectSection.appendChild(projectsHeading);

function closePopup(popup) {
  document.body.removeChild(popup);
}

function showProjectDetails(project) {
  const popup = document.createElement("div");
  popup.className = "popup";

  const popupWindow = document.createElement("section");
  popupWindow.className = "popup-window";

  const closeButton = document.createElement("button");
  closeButton.className = "close-popup-button";
  closeButton.textContent = "X";
  closeButton.addEventListener("click", () => {
    closePopup(popup);
  });
  popupWindow.appendChild(closeButton);

  const projectImage = document.createElement("img");
  projectImage.className = "projectImage";

  const isMobile = window.innerWidth <= 768;

  projectImage.src = isMobile
    ? "./assets/SnapshootMobile.png"
    : "./assets/SnapshootDesktop.png";

  projectImage.alt = project.title;
  popupWindow.appendChild(projectImage);

  if (window.innerWidth >= 1308) {
    projectImage.style.height = "60%";
    projectImage.style.marginTop = "10em";
  }

  const projectContent = document.createElement("div");
  projectContent.className = "project-content";
  popupWindow.appendChild(projectContent);

  const projectTitle = document.createElement("h2");
  projectTitle.className = "project-heading";
  projectTitle.textContent = project.title;
  projectContent.appendChild(projectTitle);

  const projectLinks = document.createElement("div");
  projectLinks.className = "project-links";
  projectContent.appendChild(projectLinks);

  const liveLink = document.createElement("a");
  liveLink.href = project.liveLink;
  liveLink.textContent = "See Live";
  projectLinks.appendChild(liveLink);

  const liveImg = document.createElement("img");
  liveImg.className = "live-img";
  liveImg.src = "./assets/SeeLive.png";
  liveImg.alt = "live";
  liveLink.appendChild(liveImg);

  const githubLink = document.createElement("a");
  githubLink.href = project.githubLink;
  githubLink.textContent = "See Source";
  projectLinks.appendChild(githubLink);

  const githubImg = document.createElement("img");
  githubImg.className = "github-img";
  githubImg.src = "./assets/SeeSource-GitHub.png";
  githubImg.alt = "github";
  githubLink.appendChild(githubImg);

  const isDesktop = window.matchMedia("(min-width: 650px)").matches;

  const technologiesList = document.createElement("ul");
  const technologyItem = document.createElement("li");

  if (isDesktop) {
    // Desktop code
    technologiesList.className = "technologies-list";
    project.technologies.forEach((technology) => {
      technologyItem.textContent = technology;
      technologiesList.appendChild(technologyItem.cloneNode(true));
    });
    popupWindow.appendChild(technologiesList);
  } else {
    // Mobile code
    technologiesList.className = "tech-list";
    project.tech.forEach((technology) => {
      technologyItem.className = "tech-item";
      technologyItem.textContent = technology;
      technologiesList.appendChild(technologyItem.cloneNode(true));
    });
    popupWindow.appendChild(technologiesList);
  }

  const projectDescription = document.createElement("p");
  projectDescription.className = "project-description";
  projectDescription.textContent = project.description;
  popupWindow.appendChild(projectDescription);

  popup.appendChild(popupWindow);
  document.body.appendChild(popup);
}

projects.forEach((project) => {
  const projectTile = document.createElement("div");
  projectTile.className = "project-tile";

  const image = document.createElement("img");
  image.className = "project-image";
  image.src = project.featuredImage;
  image.alt = project.title;
  projectTile.appendChild(image);

  const title = document.createElement("h3");
  title.className = "project-title";
  title.textContent = project.title;
  projectTile.appendChild(title);

  const technologiesList = document.createElement("ul");
  technologiesList.className = "tech-list";
  project.tech.forEach((technology) => {
    const technologyItem = document.createElement("li");
    technologyItem.className = "tech-item";
    technologyItem.textContent = technology;
    technologiesList.appendChild(technologyItem);
  });
  projectTile.appendChild(technologiesList);

  const seeProjectButton = document.createElement("button");
  seeProjectButton.className = "see-project btn";
  seeProjectButton.textContent = "See Project";
  projectTile.appendChild(seeProjectButton);

  seeProjectButton.addEventListener("click", () => {
    showProjectDetails(project);
  });

  projectSection.appendChild(projectTile);
});
