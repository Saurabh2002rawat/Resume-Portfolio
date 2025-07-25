import React from 'react'

const Header = () => {
  return (
    <div id="header">
        <div className="container">
            <nav>
                <img src="/logo.png" className="logo" />
                <ul id="sidemenu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#port">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i className="fas fa-times" onClick="closemenu()"></i>
                </ul>
                <i className="fas fa-bars" onClick="openmenu()"></i>
            </nav>
            <div className="header-text">
                <p>Web/Game DEVELOPER </p>
                <h1>Hi, this is <span>Saurabh</span> <br />
                from Uttarakhand</h1>
            </div>
        </div>
    </div>
  )
}

export default Header
