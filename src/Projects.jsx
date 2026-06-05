import React from "react";
import "./Project.css";

export default function Projects() {
  const projects = [
    {
      title: "Online Clinic System",
      type: "React + Spring Boot + MySQL",
      desc: "A full stack healthcare booking platform with doctor management, patient login, appointment booking, admin dashboard and deployment using Vercel, Render and Railway.",
      link: "https://ocs-frontend-six.vercel.app/",
      tags: ["React", "Spring Boot", "MySQL", "REST API"]
    },
    {
      title: "Task Management Application",
      type: "Frontend Project",
      desc: "A responsive to-do/task manager with add, edit, delete, filter and localStorage persistence using React Hooks.",
      link: "https://task-flow-pearl-mu.vercel.app/",
      tags: ["React", "Hooks", "CSS", "localStorage"]
    },
    {
      title: "Portfolio Website",
      type: "Personal Website",
      desc: "Single-page smooth scrolling portfolio showcasing education, skills, projects, resume, certificates and contact links.",
      link: "#home",
      tags: ["React", "CSS", "Responsive UI"]
    }
  ];

  return (
    <div className="section-card projects-card">
      <p className="section-label">Projects</p>
      <h2 className="section-title">Projects that show my learning and practical skills.</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <span>{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag) => <small key={tag}>{tag}</small>)}
            </div>
            <a href={project.link} target={project.link.startsWith("http") ? "_blank" : "_self"} rel="noreferrer">
              View Project →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
