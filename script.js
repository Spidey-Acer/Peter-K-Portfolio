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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
];

const projectSection = document.getElementById("projects");
projectSection.className = "works-samples-container";

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

  const seeProjectButton = document.createElement("button");
  seeProjectButton.className = "see-project btn";
  seeProjectButton.textContent = "See Project";
  projectTile.appendChild(seeProjectButton);

  seeProjectButton.addEventListener("click", () => {
    showProjectDetails(project);
  });

  projectSection.appendChild(projectTile);
});

function showProjectDetails(project) {
  const popup = document.createElement("div");
  popup.className = "popup";
  const closeButton = document.createElement("button");
  closeButton.className = "close-button";
  closeButton.textContent = "X";
  closeButton.addEventListener("click", () => {
    closePopup(popup);
  });
  popup.appendChild(closeButton);
  const projectImage = document.createElement("img");
  projectImage.className = "projectImage";
  projectImage.src = project.featuredImage;
  projectImage.alt = project.title;
  popup.appendChild(projectImage);
  const projectContent = document.createElement("div");
  projectContent.className = "project-content";
  popup.appendChild(projectContent);
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = project.title;
  projectContent.appendChild(projectTitle);
  const projectLinks = document.createElement("div");
  projectLinks.className = "project-links";
  projectContent.appendChild(projectLinks);
  const liveLink = document.createElement("a");
  liveLink.href = project.liveLink;
  liveLink.textContent = "View Live";
  projectLinks.appendChild(liveLink);
  const githubLink = document.createElement("a");
  githubLink.href = project.githubLink;
  githubLink.textContent = "View Code";
  projectLinks.appendChild(githubLink);
  const technologiesList = document.createElement("ul");
  technologiesList.className = "technologies-list";
  project.technologies.forEach((technology) => {
    const technologyItem = document.createElement("li");
    technologyItem.textContent = technology;
    technologiesList.appendChild(technologyItem);
  });
  popup.appendChild(technologiesList);
  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;
  popup.appendChild(projectDescription);
  document.body.appendChild(popup);
}
function closePopup(popup) {
  document.body.removeChild(popup);
}
