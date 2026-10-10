import React from "react";
import "./Project.css";

const projectGroups = [
  {
    category: "Java Full Stack Development",
    subtitle: "Full-stack applications built with modern backend and database technologies.",
    projects: [
      {
        title: "Online Clinic Management System",
        type: "Full Stack Web Application",
        desc: "A healthcare booking platform featuring patient authentication, doctor management, appointment booking, and an admin dashboard. Built with React, Spring Boot, MySQL, and REST APIs.",
        link: "https://ocs-frontend-six.vercel.app/",
        tags: ["React", "Spring Boot", "MySQL", "REST API"],
      },
      {
        title: "EdTech Learning Platform",
        type: "Full Stack Web Application",
        desc: "An online learning platform featuring course management, student authentication, course enrollment, Razorpay payment integration, and an admin dashboard.",
        link: "https://courseacademy-frontend.vercel.app/",
        tags: ["React", "Spring Boot", "MySQL", "Razorpay"],
      },
      {
        title: "MailOps AI",
        type: "AI-Powered Application",
        desc: "An AI-powered email productivity project focused on streamlining email-related workflows and improving productivity through automation.",
        link: "https://mailops-ai.vercel.app",
        tags: ["AI", "Web Development"],
      },
      {
        title: "Fooood – Food Ordering Website",
        type: "Full Stack Web Application",
        desc: "A food ordering and delivery application designed to provide a convenient food browsing and ordering experience. Project development is in progress.",
        link: null,
        tags: ["React", "Spring Boot", "MySQL"],
      },
    ],
  },
  {
    category: "MERN Stack Development",
    subtitle: "Interactive web applications using MongoDB, Express.js, React, and Node.js.",
    projects: [
      {
        title: "Hostel Mart",
        type: "MERN Stack Application",
        desc: "A campus-focused marketplace connecting students with nearby stores and sellers for convenient ordering and quick delivery. Includes student-facing shopping features and backend APIs.",
        link: "https://hostel-mart-six.vercel.app",
        tags: ["MongoDB", "Express.js", "React", "Node.js"],
      },
      {
        title: "Task Tracker",
        type: "MERN Stack Application",
        desc: "A task management application designed to organize daily activities, manage tasks, and track progress through a web-based interface.",
        link: "https://task-tracker-one-snowy.vercel.app",
        tags: ["MongoDB", "Express.js", "React", "Node.js"],
      },
    ],
  },
  {
    category: "Frontend Development",
    subtitle: "Responsive, interactive, and visually engaging user interfaces.",
    projects: [
      {
        title: "Portfolio Website",
        type: "Personal Website",
        desc: "A personal portfolio showcasing education, technical skills, projects, resume, certificates, and contact information with a responsive interface.",
        link: "#home",
        tags: ["React", "CSS", "Responsive UI"],
      },
      {
        title: "To-Do Application",
        type: "React Application",
        desc: "A responsive task manager featuring task creation, editing, deletion, filtering, and localStorage persistence using React Hooks.",
        link: "https://task-flow-pearl-mu.vercel.app/",
        tags: ["React", "Hooks", "CSS", "localStorage"],
      },
      {
        title: "Hospital Website",
        type: "Frontend Web Development",
        desc: "A responsive hospital website featuring medical services, doctor profiles, appointment information, navigation, and contact sections.",
        link: "https://hospital-application-five.vercel.app/",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Zym Fitness",
        type: "Fitness Website",
        desc: "A fitness-focused website designed to present workout programs, fitness services, and gym information through a modern, responsive interface.",
        link: "https://zym-fitness-first.vercel.app",
        tags: ["React", "CSS", "Responsive UI"],
      },
      {
        title: "Luxe Beauty Store",
        type: "Beauty & Cosmetics Website",
        desc: "A modern beauty and cosmetics storefront for women, designed to showcase beauty products through an attractive, user-friendly shopping interface.",
        link: "https://luxe-beauty-cosmetics.vercel.app/",
        tags: ["React", "CSS", "E-commerce UI"],
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="section-card projects-card" id="projects">
      <p className="section-label">MY WORK</p>

      <h2 className="section-title">
        Projects that turn ideas into reality.
      </h2>

      <p className="projects-intro">
        Explore my work across Java full stack development, MERN stack
        applications, and frontend development.
      </p>

      {projectGroups.map((group) => (
        <section className="project-group" key={group.category}>
          <div className="project-group-heading">
            <h3>{group.category}</h3>
            <p>{group.subtitle}</p>
          </div>

          <div className="projects-grid">
            {group.projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top">
                  <span className="project-type">{project.type}</span>
                  <span className="project-indicator" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <h4>{project.title}</h4>

                <p className="project-description">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>

                <div className="project-action">
                  {project.link ? (
                    <a
                      href={project.link}
                      target={
                        project.link.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        project.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      View Project <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <span className="project-coming-soon">
                      Coming Soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
