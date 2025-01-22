// Project data
const projects = [
    {
        title: "FoodBridge",
        description: "FoodBridge is a web application designed to connect food donors with food recipients in need. It leverages modern web technologies to ensure a dynamic and responsive user interface.",
        image: "assets/images/foodbridgelanding.png",
        category: "web",
        tags: ["Python", "Flask", "Javascript", "React Redux", "Postgres"],
        link: "https://foodbridge.sbtl.dev/"
    },
    {
        title: "TaskFlow",
        description: "A full-stack task management application that enables users to create, organize, update, and delete tasks efficiently. Developed using Python and Flask for the backend, React with Redux for state management on the frontend, and styled with CSS for a polished user experience.",
        image: "assets/images/taskflow.png",
        category: "web",
        tags: ["Python","Flask", "SQLAlchemy", "React Redux"],
        link: "https://taskflow.sbtl.dev/"
    },
  
     {
        title: "TrailHome",
        description: "TrailHome is a web application designed to cater to hiking enthusiasts looking for rental bungalows and houses surrounded by nature trails. Built with JavaScript, Node.js, Express, React, and Sequelize, it leverages modern web technologies to ensure a dynamic and responsive user interface.",
        image: "assets/images/trailhome.png",
        category: "web",
        tags: ["Javascript","Express","React", "Postgres"],
        link: "https://trail-home-b1bs.onrender.com/"
    }
];

// Populate projects
function displayProjects(category = 'all') {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card animate';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <p>${project.description}</p>
                <a href="${project.link}" class="cta-button">View Project</a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Project filtering
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter projects
        displayProjects(button.dataset.filter);
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections and project cards
document.querySelectorAll('section, .project-card').forEach(element => {
    observer.observe(element);
});

// Initialize
window.addEventListener('load', () => {
    displayProjects();
});
