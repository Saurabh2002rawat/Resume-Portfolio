import React from "react";

// Data for Services
const serviceData = [
  {
    icon: "fa-solid fa-code",
    title: "DSA ",
    description: "Creating responsive and user-friendly web designs for modern applications.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.",
    link: "#",
  },
  {
    icon: "fa-solid fa-crop",
    title: "Web Design",
    description: "Providing insightful content and technical documentation for learning.",
    link: "#",
  },
  {
    icon: "fa-brands fa-app-store-ios",
    title: "Game Development",
    description: "Organizing adventurous treks and outdoor experiences for enthusiasts.",
    link: "#",
  },
];

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub">My Services</h1>
        <div className="services-list">
          {serviceData.map((service, index) => (
            <div key={index} className="service-card">
              <i className={service.icon}></i>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              {/* <button onClick={() => window.location.href = service.link}>Learn More</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
