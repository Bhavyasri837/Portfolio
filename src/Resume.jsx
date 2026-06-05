import React from "react";
import "./Resume.css";
import resumePdf from "./assets/resume.pdf";
export default function Resume() {
  return (
    <div className="section-card resume-card">
      <p className="section-label">Resume</p>
      <h2 className="section-title">Ready for Java Full Stack Developer opportunities.</h2>
      <p className="section-text">
        My resume highlights my B.Tech CSE background, full stack projects, Java and React skills,
        internship certifications, problem-solving practice and deployment experience.
      </p>

      <div className="resume-highlights">
        <div><strong>Education</strong><span>B.Tech CSE, 2023–2027</span></div>
        <div><strong>Focus</strong><span>Java Full Stack Development</span></div>
        <div><strong>Projects</strong><span>Online Clinic System, Task Management Application, Portfolio</span></div>
      </div>

      <div className="buttons">
        <a href={resumePdf} target="_blank" rel="noreferrer">View Resume</a>
        <a href={resumePdf} download>Download Resume</a>
      </div>
    </div>
  );
}
