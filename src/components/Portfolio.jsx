import React from 'react'

const Portfolio = () => {
  return (
    <div id="portfolio">
    <div className="container" id="port">
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
                        <a href="https://vyapaar-crypto-trader.vercel.app/" title="GitHub Link" >
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
                        <a href="https://vyapaar-crypto-trader.vercel.app/" title="GitHub Link" >
                              <i className="fa-brands fa-github fa-xl"></i>
                        </a>
                        <a href="https://nitw-dispensary-frontend-one.vercel.app/Landingpage/index.html"  title="Live Link" >
                              <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                     </div>
                </div>
            </div>

            <div className="work">
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
                        <a href="https://github.com/Saurabh2002rawat/EnterTheMatrix" title="Live Link" >
                              <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                     </div>
                </div>
            </div>
            

            <div className="work hidden">
            <img src="/ticTacToe.png" />
                <div className="layer">
                    <h3>Tic-Tac-Toe</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.
                    </p>
                    <div className="links" >
                        <a href="https://saurabh2002rawat.github.io/TicTacToe/" title="GitHub Link" >
                              <i className="fa-brands fa-github fa-xl"></i>
                        </a>
                        <a href="https://github.com/Saurabh2002rawat/EnterTheMatrix" title="Live Link" >
                              <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                     </div>
                </div>
            </div>

            <div className="work hidden" >
                <img src="/chutkula.jpeg" />
                    <div className="layer">
                        <h3>HasyaRas Jokes Generator</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.
                        </p>
                        <div className="links" >
                        <a href="https://saurabh2002rawat.github.io/Vyanga/" title="GitHub Link" >
                              <i className="fa-brands fa-github fa-xl"></i>
                        </a>
                        <a href="https://github.com/Saurabh2002rawat/EnterTheMatrix" title="Live Link" >
                              <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                     </div>
                    </div>
            </div>

            <div className="work hidden">
                <img src="/portfolio.png" />
                    <div className="layer">
                        <h3>Resume-Portfolio</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.
                        </p>
                        <div className="links" >
                        <a href="https://vyapaar-crypto-trader.vercel.app/" title="GitHub Link" >
                              <i className="fa-brands fa-github fa-xl"></i>
                        </a>
                        <a href="https://github.com/Saurabh2002rawat/EnterTheMatrix" title="Live Link" >
                              <i className="fa-solid fa-up-right-from-square"></i>
                        </a>
                     </div>
                    </div>
            </div>
                        
        </div>
        <a className="btn" id="seeMore" onClick="more()">See More</a>
    </div>
</div>
  )
}

export default Portfolio
