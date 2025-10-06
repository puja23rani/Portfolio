"use client";

import { useState } from "react";

const experiences = [
  {
    company: "Upstatement",
    role: "Engineer",
    range: "May 2018 - Present",
    responsibilities: [
      "Write modern, performant, maintainable code...",
      "Work with different languages, platforms, frameworks...",
      "Communicate with multi-disciplinary teams..."
    ]
  },
  // Add other companies if needed
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-heading">Where I've Worked</h2>
        <div className="experience-tabs">
          <div className="tab-list">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                className={`tab-button ${active === idx ? "active" : ""}`}
                onClick={() => setActive(idx)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          <div className="tab-panels">
            <div className="tab-panel">
              <h3>{experiences[active].role} <span className="company">@ {experiences[active].company}</span></h3>
              <p className="range">{experiences[active].range}</p>
              <ul>
                {experiences[active].responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
