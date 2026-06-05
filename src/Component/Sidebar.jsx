import React from "react";
import "./Sidebar.css";
import me from "../assets/me.jpeg";

export default function Sidebar() {
  return (
    <aside className="side">
      <div className="profile-card">
        <div className="image-ring">
          <img src={me} alt="N S Bhavyasri" />
        </div>
        <h2>N S Bhavyasri</h2>
        <p>Java Full Stack Developer</p>
        <div className="profile-tags">
          <span>B.Tech CSE</span>
          <span>React</span>
          <span>Spring Boot</span>
          <span>Java</span>
        </div>
      </div>
    </aside>
  );
}
