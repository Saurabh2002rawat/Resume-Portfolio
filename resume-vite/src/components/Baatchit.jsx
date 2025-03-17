import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Baatchit = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_yb1qecp", "template_e2cd9y7", formRef.current, "0k6kAWDUURHINjv27")
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset(); // Reset form after sending
      })
      .catch((error) => alert("Failed to send message: " + error.text));
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">

          {/* Left Section */}
          <div className="contact-left">
            <h1 className="sub">Contact Me</h1>
            <p>
              <i className="fas fa-paper-plane"></i> sr23mcf1r40@student.nitw.ac.in
            </p>
            <p>
              <i className="fas fa-phone-square-alt"></i> +91 9997545874
            </p>

            {/* Social Links */}
            <div className="social-icons">
              <a href="https://github.com/Saurabh2002rawat" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/-rawat-saurabh/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/saurabh2002rawat/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/saurabh.rawat.12764874/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.snapchat.com/add/saurabh202rawat?share_id=jtZoyK4dtS8&locale=en-IN" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter-square"></i>
              </a>
            </div>
            {/* CV Download Link (Place PDF in Public Folder) */}
            <a href="../../public/23MCF1R40.pdf" download className="btn btn2">
              Download CV
            </a>
          </div>

          {/* Right Section - Contact Form */}
          <div className="contact-right">
            <form id="contactForm" ref={formRef} onSubmit={sendEmail}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="abc@example.com" required />
              <input type="text" name="Subject" placeholder="Subject..." required />
              <textarea name="msg" rows="6" placeholder="Write Here..."></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
          </div>

        </div>
      </div>

      {/* Footer Section */}
      <div className="copyright">
        <p>
          Made with <i className="fas fa-heart"></i> by Torpedo
        </p>
      </div>
    </div>
  );
};

export default Baatchit;
