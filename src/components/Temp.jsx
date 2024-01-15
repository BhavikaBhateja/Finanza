import React, { useState } from "react";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState({
    about: false,
    features: false,
    resources: false,
    company: false,
  });

  const handleHover = (name) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  const handleLeave = (name) => {
    setShowDropdown((prevState) => ({
      ...prevState,
      [name]: false,
    }));
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img src="" alt="Logo" className="logo" />
        </div>
        <ul className="navbar-links">
          <li
            onMouseEnter={() => handleHover("about")}
            onMouseLeave={() => handleLeave("about")}
            className="navbar-link"
          >
            About UIFry
            {showDropdown.about && (
              <div className="dropdown">
                <ul>
                  <li>About Item 1</li>
                  <li>About Item 2</li>
                  <li>About Item 3</li>
                </ul>
              </div>
            )}
          </li>
          {/* Similar li elements for Features, Resources, and Company */}
        </ul>
        <div className="navbar-buttons">
          <button className="demo-button">Get Demo</button>
          <button className="sales-button">Contact Sales</button>
          <img src="" alt="Search Icon" className="search-icon" />
        </div>
      </nav>
    </header>
  );
}
