'use client';

import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Women Rights PWA",
    description: "A Progressive Web App empowering women with knowledge of their legal rights. Features 30+ Indian laws, offline support, mobile-first design, and a contact form with Netlify Forms.",
    tech: ["React", "PWA", "Netlify", "Bootstrap", "Service Workers"],
    image: "/images/projects/women-rights/Home.png",
    liveUrl: "https://women-rights-wpa.netlify.app",
    githubUrl: "https://github.com/shivam-1072/women-rights"
  },
   {
    id: 2,
    title: "Construction Workforce Management System",  
    description: "A full-stack app to manage construction sites, worker attendance, payroll processing, and expenses with automated PDF payment slips and dynamic dashboards.",
    tech: ["Python", "DJango", "PostgreSQL"],  
    image: "/images/projects/construction-workforce-management-system/home.png",  
    liveUrl: "https://construction-workforce-tbrh.onrender.com",  
    githubUrl: "https://github.com/shivam-1072/cwms"  
  },
  {
    id: 3,
    title: "Hospital Management System",  
    description: "A web-based platform to manage patient registration, appointments, billing, and electronic health records with role-based access for doctors, nurses, and admins.",
    tech: ["Java", "Jsp", "Servlet", "PostgreSQL", "BootStrap"],  
    image: "/images/projects/hospital-management-system/Home_Page.png",  
    liveUrl: "https://hospital-management-system-8bqf.onrender.com",  
    githubUrl: "https://github.com/shivam-1072/hospital-management-system" 
  },
 
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of the projects I've built</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-thumbnail"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="tech-tags">
                  {project.tech.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live">
                    🔗 Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                    🐙 Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}