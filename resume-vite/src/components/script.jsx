import React, { useState, useRef } from "react";

const ExternalScript = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const tabRefs = useRef({ links: [], contents: [] });

  // Open specific tab
  const openTab = (tabname) => {
    tabRefs.current.links.forEach((tab) => tab?.classList.remove("active-link"));
    tabRefs.current.contents.forEach((content) => content?.classList.remove("active-tab"));

    const activeTab = tabRefs.current.links.find((tab) => tab?.dataset.tab === tabname);
    const activeContent = document.getElementById(tabname);

    if (activeTab && activeContent) {
      activeTab.classList.add("active-link");
      activeContent.classList.add("active-tab");
    }
  };

  // Toggle Side Menu
  const toggleMenu = () => setMenuOpen((prev) => !prev);


  return (
    <div>
      {/* Tab Links */}
      <div>
        {["tab1", "tab2", "tab3"].map((tabname, index) => (
          <button
            key={index}
            ref={(el) => {
              if (el) tabRefs.current.links[index] = el;
            }}
            data-tab={tabname}
            onClick={() => openTab(tabname)}
            className="tab-links"
          >
            {tabname}
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      {["tab1", "tab2", "tab3"].map((tabname, index) => (
        <div
          key={index}
          id={tabname}
          ref={(el) => {
            if (el) tabRefs.current.contents[index] = el;
          }}
          className="tab-contents"
        >
          Content for {tabname}
        </div>
      ))}

      {/* Side Menu */}
      <div id="sidemenu" className={`sidemenu ${menuOpen ? "menu-open" : "menu-closed"}`}>
        <button onClick={toggleMenu}>{menuOpen ? "Close Menu" : "Open Menu"}</button>
      </div>

      {/* See More / See Less */}
      <div>
        {showMore && <div className="extra-content">Extra Content Here</div>}
        <button id="seeMore" onClick={toggleMore}>
          {showMore ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default ExternalScript;
