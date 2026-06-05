import React from "react";
import "./Contact.css";

export default function Contact() {
  const contacts = [
    { label: "Email", value: "nsbhavyasri24@gmail.com", href: "mailto:nsbhavyasri24@gmail.com" },
    { label: "GitHub", value: "Bhavyasri837", href: "https://github.com/Bhavyasri837" },
    { label: "LinkedIn", value: "N S Bhavyasri", href: "https://www.linkedin.com/in/n-s-bhavyasri-7692642a6/" },
    { label: "LeetCode", value: "Bhavyasri_ns", href: "https://leetcode.com/u/Bhavyasri_ns/" },
    { label: "CodeChef", value: "bhavyasri837", href: "https://www.codechef.com/users/bhavyasri837" },
    {label:"address", value:"kuppam,chittoor"}
  ];

  return (
    <div className="section-card contact-card">
      <p className="section-label">Contact</p>
      <h2 className="section-title">Let’s connect for internships, projects and developer opportunities.</h2>
      <p className="section-text">
        I am open to Java Full Stack Developer internships, software developer opportunities and project collaborations.
      </p>

      <div className="contact-grid">
        {contacts.map((item) => (
          <a className="contact-item" key={item.label} href={item.href} target="_blank" rel="noreferrer">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </a>
        ))}
      </div>
    </div>
  );
}
