import React, { useEffect, useRef, useState } from 'react'
import TypingEffect from './TypingEffect';

const Header = () => {
   const themes = [ '#ff004f' , '#ff4f00', '#4f00ff' ,'#007bff', '#32cd32','#00ff4f',  '#ffea00', '#ffc300' ] ;
   //  #00ff4f #4fff00 '#00ffff', #00ffff'#ffea00','#ffd700' #87ceeb #39ff14 #fff700 #ffc300 #00ff66 #98ff98
   const [ index, setIndex ] = useState (0) ;

   const nextTheme = () => {
      setIndex( (prev) => ( prev+1) % themes.length ) ;
   };

   useEffect( () => {
      document.documentElement.style.setProperty
         ("--themeCol", themes[index]) ;
   }, [index]) ;

   const sideMenuRef = useRef(null) ;

   const openMenu = () => {
      sideMenuRef.current.style.right = "0" ;
   };

   const closeMenu = () => {
      sideMenuRef.current.style.right = "-200px" ;
   };

  return (
    <div id="header">
            <nav>
                <h1>Resume <span  className="logo"> Portfolio</span> </h1>
                <ul id="sidemenu" ref={sideMenuRef} >
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#port">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i className="fas fa-times" onClick={closeMenu}></i>
                </ul>
                  <i className="fa-solid fa-adjust fa-xl" onClick={nextTheme}> </i> 
                  <i className="fas fa-bars" onClick={openMenu}></i>
            </nav>
        <div className="container">
            <div className="header-text">
                <TypingEffect /> 
                <h1>Hi, this is <span id="naam">Saurabh</span> <br />
                from Uttarakhand</h1>
            </div>
        </div>
    </div>
  )
}

export default Header
