import React, { useState } from 'react'

const Portfolio = () => {

   const [showMore, setShowMore] = useState () ;

   const toggleMore = () => {
      setShowMore ( prev => !prev ) ;
   }

   const hiddenClass = showMore ? 'hidden show' : 'hidden' ;
   return (
      
      <div id="portfolio">
   <div className="container">   {/*  id="port" */}
        <h1 className="sub">Project Work</h1>
        <div className="work-list">

            <div className="work">
                <img src="/vyapaar.jpg" />
                <div className="layer">
                    <h3>Vyapaar CryptoTrader App</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.
                    </p>
                    <div className="links" >
                        <a href="https://github.com/Saurabh2002rawat/Vyapaar-CryptoTrader.git" title="GitHub Link" >
                           <i className="fa-brands fa-github fa-xl"></i>
                        </a>
                        <a href="https://vyapaar-crypto-trader.vercel.app/" title="Live Link" >
                           <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                     </div>
                </div>
            </div>

            <div className="work">
                <img src="/nitw_D.png" />
                <div className="layer">
                    <h3>NITW Chikitsalaya Booking</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.
                    </p>
                    <div className="links" >
                        <a href="https://github.com/Saurabh2002rawat/Chikatsalaya-NITW-Clinic.git" title="GitHub Link" >
                           <i className="fa-brands fa-github fa-xl"></i>
                        </a>
                        <a href="https://chikitsalaya-vercel-frontend.vercel.app/"  title="Live Link" >
                           <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                     </div>
                </div>
            </div>

             <div className="work" >
                <img src="/snake.png" />
                    <div className="layer">
                        <h3>Snake Game</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.
                        </p>
                        <div className="links" >
                        <a href="https://github.com/Saurabh2002rawat/SnakeGame.git" title="GitHub Link" >
                           <i className="fa-brands fa-github fa-xl"></i>
                        </a>
                        <a href="https://snake-game-hazel-seven.vercel.app/" title="Live Link" >
                           <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                     </div>
                    </div>
            </div>

            <div className={`work ${hiddenClass}`}>
            <img src="/ticTacToe.png" />
                <div className="layer">
                    <h3>Tic-Tac-Toe</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.
                    </p>
                    <div className="links" >
                        <a href="https://github.com/Saurabh2002rawat/TicTacToe.git" title="GitHub Link" >
                           <i className="fa-brands fa-github fa-xl"></i>
                        </a>
                        <a href="https://tic-tac-toe-ruddy-sigma.vercel.app/" title="Live Link" >
                           <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                     </div>
                </div>
            </div>

            <div className={`work ${hiddenClass}`} >
                <img src="/chutkula.jpeg" />
                    <div className="layer">
                        <h3>Vyanga Jokes Generator</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.
                        </p>
                        <div className="links" >
                        <a href="https://github.com/Saurabh2002rawat/Vyanga.git" title="GitHub Link" >
                           <i className="fa-brands fa-github fa-xl"></i>
                        </a>
                        <a href="https://vyanga.vercel.app/" title="Live Link" >
                           <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                     </div>
                    </div>
            </div>

             <div className={`work ${hiddenClass}`}>
                <img src="/etm.png" />
                <div className="layer">
                    <h3>Enter The Matrix</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.
                    </p>
                    <div className="links" >
                        <a href="https://github.com/Saurabh2002rawat/EnterTheMatrix" title="GitHub Link" >
                           <i className="fa-brands fa-github fa-xl"></i>
                        </a>
                        {/* <a href="https://github.com/Saurabh2002rawat/EnterTheMatrix" title="Live Link" >
                           <i className="fa-solid fa-up-right-from-square"></i>
                        </a> */}
                     </div>
                </div>
            </div>
            
            <div className={`work ${hiddenClass}`}>
                <img src="/stupack.jpg" />
                    <div className="layer">
                        <h3>Stu-Pack App</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.
                        </p>
                        <div className="links" >
                        <a href="https://github.com/Saurabh2002rawat/StuPack.git" title="GitHub Link" >
                           <i className="fa-brands fa-github fa-xl"></i>
                        </a>
                     </div>
                    </div>
            </div>
            
            <div className={`work ${hiddenClass}`}>
                <img src="/resume.png" />
                    <div className="layer">
                        <h3>Resume-Portfolio</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.
                        </p>
                        <div className="links" >
                        <a href="https://github.com/Saurabh2002rawat/Resume-Portfolio.git" title="GitHub Link" >
                           <i className="fa-brands fa-github fa-xl"></i>
                        </a>
                        <a href="https://resume-portfolio-blond-five.vercel.app/" title="Live Link" >
                           <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                     </div>
                    </div>
            </div>

        </div>
        <a className="btn" id="showMore" onClick={toggleMore}> { showMore ? "Show Less" : "Show More" } </a>
    </div>
</div>
  )
}

export default Portfolio
