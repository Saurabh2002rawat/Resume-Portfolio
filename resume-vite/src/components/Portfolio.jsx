import React, { useState } from "react";

const Portfolio = () => {
  const [showMore, setShowMore] = useState(false);

  // Toggle "See More / See Less"
  const toggleMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div id="portfolio">
      <div className="container" id="port">
        <h1 className="sub">Workz</h1>

        {/* Main Work Grid */}
        <div className={`work-list ${showMore ? "expanded" : ""}`}>
          {/* Always Visible Projects */}
          <div className="work">
            <img src="../../public/nitw_D.png" alt="NITW Dispensary Booking" />
            <div className="layer">
              <h3>NITW Dispensary Booking</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.</p>
              <a href="https://nitw-dispensary-frontend-one.vercel.app/Landingpage/index.html" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="work">
            <img src="../../public/baatChit.png" alt="BaatChit Chatting App" />
            <div className="layer">
              <h3>BaatChit Chatting App</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.</p>
              <a href="https://baat-chit-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="work">
            <img src="../../public/etm.png" alt="Obstacle-Runner Game" />
            <div className="layer">
              <h3>Obstacle-Runner Game</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.</p>
              <a href="https://github.com/Saurabh2002rawat/EnterTheMatrix" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>

          {/* Hidden Projects - Now inside the grid */}
          <div className={`hidden-projects ${showMore ? "show" : ""}`}>
            <div className="work">
              <img src="../../public/ticTacToe.png" alt="Tic-Tac-Toe" />
              <div className="layer">
                <h3>Tic-Tac-Toe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.</p>
                <a href="https://saurabh2002rawat.github.io/TicTacToe/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img src="../../public/chutkula.jpeg" alt="HasyaRas Jokes Generator" />
              <div className="layer">
                <h3>HasyaRas Jokes Generator</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.</p>
                <a href="https://saurabh2002rawat.github.io/Vyanga/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="work">
              <img src="../../public/portfolio.png" alt="Resume-Portfolio" />
              <div className="layer">
                <h3>Resume-Portfolio</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt.</p>
                <a href="https://saurabh2002rawat.github.io/Resume-Portfolio/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* See More / See Less Button */}
        <button className="btn" onClick={toggleMore}>
          {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
