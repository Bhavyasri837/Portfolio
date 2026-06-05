import React from "react";
import "./Footer.css";
import gmail from "../assets/gmail.png";
import github from "../assets/github.png";
import leetcode from "../assets/leetcode.png";
import linkedin from "../assets/linkedin.png";
import codechef from "../assets/codechef.jpeg";

export default function Footer() {
  const links = [
    { href: "mailto:nsbhavyasri24@gmail.com", img: gmail, alt: "Gmail" },
    { href: "https://github.com/Bhavyasri837", img: github, alt: "GitHub" },
    { href: "https://leetcode.com/u/Bhavyasri_ns/", img: leetcode, alt: "LeetCode" },
    { href: "https://www.linkedin.com/in/n-s-bhavyasri-7692642a6/", img: linkedin, alt: "LinkedIn" },
    { href: "https://www.codechef.com/users/bhavyasri837", img: codechef, alt: "CodeChef" },
  ];

  return (
    <footer className="foot">
      <span>© 2026 N S Bhavyasri</span>
      <ul className="social-links">
        {links.map((link) => (
          <li key={link.alt}>
            <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.alt}>
              <img src={link.img} alt={link.alt} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
