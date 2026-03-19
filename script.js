const skills = {
  Testing: [
    "Manual Testing",
    "Test Case Design",
    "Bug Reporting",
    "Regression Testing",
    "Exploratory Testing"
  ],
  Automation: ["Playwright", "Cypress", "pytest"],
  Tools: ["GitHub", "Git", "Jira", "Postman", "GitHub Copilot"],
  Database: ["SQL", "MongoDB"],
  Development: ["React", "Node.js", "Express", "JavaScript", "TypeScript", "HTML", "CSS"],
  Concepts: ["SDLC", "STLC", "Agile", "CI/CD", "REST APIs", "Cross-browser Testing"],
  Other: ["Salesforce", "Pandas", "openpyxl", "Excel", "Gemini"]
};

const projects = [
  {
    title: "Payroll System Testing & Validation",
    type: "QA Project",
    stack: "Python, pytest, Pandas, Excel",
    github: "https://github.com/IsmaelB47/Payroll-System-Testing-Validation-",
    summary:
      "Designed and executed unit, integration, and manual tests for a payroll processing system, covering calculations, validation, outputs, and error handling.",
    highlights: [
      "Built automated tests with pytest for input validation, calculations, and error handling",
      "Tested key modules including Security, Pay Calculation, and Data Output",
      "Validated payroll accuracy for overtime, taxes, and net pay",
      "Verified Excel output generation using Pandas and openpyxl",
      "Covered normal, edge, and invalid scenarios"
    ]
  },
  {
    title: "Web Automation Testing Project",
    type: "QA Automation",
    stack: "Playwright, JavaScript/TypeScript",
    github: "https://github.com/IsmaelB47/playwright-automation",
    summary:
      "Developed end-to-end web automation tests for core application workflows to improve reliability and reduce manual effort.",
    highlights: [
      "Automated login, navigation, and form interaction flows",
      "Implemented element locators, assertions, and reusable scripts",
      "Ran cross-browser tests to validate consistent UI behavior",
      "Debugged failures and improved test stability"
    ]
  },
  {
    title: "Song Manager App",
    type: "Final Team Project",
    stack: "React, Node.js, Express, MongoDB",
    github: "https://github.com/SDEV_255_Final_Project_Team3",
    summary:
      "Built a full-stack MERN application that allows users to manage songs with a responsive interface and RESTful API integration.",
    highlights: [
      "Created a responsive front end with React",
      "Built RESTful APIs with Node.js and Express",
      "Managed application data with MongoDB",
      "Implemented CRUD functionality and focused on smooth user experience",
      "Collaborated in a team workflow using GitHub"
    ]
  }
];

const skillsGrid = document.getElementById("skillsGrid");
const projectsWrap = document.getElementById("projectsWrap");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderSkills() {
  Object.entries(skills).forEach(([category, items]) => {
    const box = document.createElement("div");
    box.className = "skill-box";
    box.innerHTML = `
      <h3>${category}</h3>
      <div class="skill-tags">
        ${items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
      </div>
    `;
    skillsGrid.appendChild(box);
  });
}

function renderProjects(filter = "all") {
  projectsWrap.innerHTML = "";

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  filtered.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-top">
        <div>
          <span class="pill">${project.type}</span>
          <h3 class="project-title">${project.title}</h3>
          <div class="project-stack">${project.stack}</div>
        </div>
        <a class="project-link" href="${project.github}" target="_blank" rel="noopener noreferrer">Repository</a>
      </div>
      <p class="project-summary">${project.summary}</p>
      <div class="highlights">
        ${project.highlights.map((item) => `<div class="highlight">${item}</div>`).join("")}
      </div>
    `;
    projectsWrap.appendChild(card);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderSkills();
renderProjects();