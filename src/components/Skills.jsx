import React from 'react'

const Skills = () => {
  return (
    <div id="services">
    <div className="container">
        <h1 className="sub">My Skills</h1>
        <div className="services-list">
            <div>
                <i className="fa-solid fa-code"></i>
                <h2>Web Design</h2>
                <p>
                  React, Express JS, NodeJS, MongoDB, Firebase, HTML, CSS, JavaScript
                </p>
                <a href="#">Learn More</a>
            </div>
            <div>
                <i className="fa-solid fa-crop"></i>
                <h2>Coding</h2>
                <p>
                  Java, C++, C, Python, Data Structures and Algorithms
                </p>
                <a href="#">Learn More</a>
            </div>
            <div>
                <i className="fa-brands fa-app-store-ios"></i>
                <h2>UI/UX Design</h2>
                <p>
                  Full Stack Developer
                </p>
                <a href="#">Learn More</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Skills
