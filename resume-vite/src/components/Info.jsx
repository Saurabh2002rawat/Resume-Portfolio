import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  // Function to handle tab switching
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">

          {/* Left Section - Image */}
          <div className="about-col-1">
            <img src="../../public/about.png" alt="About Me" />
          </div>

          {/* Right Section - Info */}
          <div className="about-col-2">
            <h1 className="sub">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolorem magnam voluptas quo culpa quia doloremque quod voluptates recusandae quidem nobis itaque, esse dicta quibusdam suscipit voluptatum laudantium rem fugiat voluptate at reprehenderit nam deleniti possimus!
            
            </p>

            {/* Tab Titles */}
            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                onClick={() => openTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === "exp" ? "active-link" : ""}`}
                onClick={() => openTab("exp")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === "hobbies" ? "active-link" : ""}`}
                onClick={() => openTab("hobbies")}
              >
                Hobbies
              </p>
            </div>

            {/* Tab Contents */}
            <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
              <ul>
                <li><span>UI/UX</span><br />Designing Interfaces</li>
                <li><span>React</span><br />Building Dynamic UIs</li>
                <li><span>JavaScript</span><br />Interactive Web Apps</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === "exp" ? "active-tab" : ""}`} id="exp">
              <ul>
                <li><span>Internship - ABC Corp</span><br />Frontend Developer (2023)</li>
                <li><span>Freelance</span><br />UI/UX Designer (2022-2024)</li>
                <li><span>Open Source</span><br />Contributing to React Projects</li>
              </ul>
            </div>

            <div className={`tab-contents ${activeTab === "hobbies" ? "active-tab" : ""}`} id="hobbies">
              <ul>
                <li><span>Gaming</span><br />Competitive eSports</li>
                <li><span>Traveling</span><br />Exploring new cultures</li>
                <li><span>Reading</span><br />Tech and Philosophy</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
