import React from "react";

const Header = () => {
  // Menu toggle functions
  const openMenu = () => {
    document.getElementById("sidemenu").style.right = "0";
  };

  const closeMenu = () => {
    document.getElementById("sidemenu").style.right = "-200px";
  };

  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src="../../public/logo.png" alt="Logo" className="logo" />
          <ul id="sidemenu">
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#port">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <i className="fas fa-times" onClick={closeMenu}></i>
          </ul>
          <i className="fas fa-bars" onClick={openMenu}></i>
        </nav>

        <div className="header-text">
          <p>Web/Game DEVELOPER</p>
          <h1>
            Hi, this is <span>Saurabh</span> <br />
            from Uttarakhand
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
