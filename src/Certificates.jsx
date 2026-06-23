import React, { useState } from "react";
import "./Certificates.css";

import nec from "./assets/nec.jpeg";
import infosys from "./assets/infosys_java.jpeg";
import tcs1 from "./assets/tcs_career.jpeg";
import tcs2 from "./assets/tcs_presentation.jpeg";
import edu1 from "./assets/aiml.jpeg";
import edu2 from "./assets/android.jpeg";
import skilldzire from "./assets/skilldzire.jpeg";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {img: skilldzire ,title:"Java FullStack virtual Internship", tag:"Internship"},
    { img: nec, title: "NEC 2025 Basic Track", tag: "Entrepreneurship" },
    { img: tcs1, title: "TCS iON Career Edge", tag: "Career Skills" },
    { img: tcs2, title: "TCS Presentation Skills", tag: "Communication" },
    { img: infosys, title: "Infosys Core Java", tag: "Java" },
    { img: edu2, title: "Eduskills Android", tag: "Virtual Internship" },
    { img: edu1, title: "Eduskills AI-ML", tag: "Virtual Internship" },
  ];

  return (
    <div className="section-card certificates-card">
      <p className="section-label">Certificates</p>
      <h2 className="section-title">Learning proof through internships and skill programs.</h2>
      <p className="section-text">Double-click any certificate card to view it larger.</p>

      <div className="cert-grid">
        {certs.map((cert) => (
          <div key={cert.title} className="cert-card" onDoubleClick={() => setSelectedCert(cert.img)}>
            <img src={cert.img} alt={cert.title} />
            <div>
              <span>{cert.tag}</span>
              <p>{cert.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="modal" onClick={() => setSelectedCert(null)}>
          <img src={selectedCert} alt="Certificate full view" />
        </div>
      )}
    </div>
  );
}
