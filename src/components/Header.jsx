import React, { useRef, useState } from "react";
import HeroSection from "./HeroSection.jsx";
import bg1 from "../assets/bg1.png";
import ham from "../assets/ham.svg";
import closeIcon from "../assets/close.svg";
import { useNavigate } from "react-router-dom";

const Header = ({ flag }) => {
  const [showDropdown, setShowDropdown] = useState({
    loans: false,
    calculator: false,
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
  const navigate = useNavigate();

  const ref = useRef(null);
  const toggleSidebar = () => {
    ref.current.classList.toggle("show-sidebar");
  };

  return (
    <div className="divv" style={{ backgroundImage: `url(${bg1})` }}>
      <header className="">
        <nav className="di">
          <div className="flex flex-col justify-center items-center">
            <p
              className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold italic"
              onClick={() => navigate("/")}
            >
              Finanza
            </p>
          </div>
          <div className="nav-items">
            <ul className="navb">
              <li
                onMouseEnter={() => handleHover("loans")}
                onMouseLeave={() => handleLeave("loans")}
                className="navbar-link fleee"
              >
                Loans <span className="icon">{"^"}</span>
                {showDropdown.loans && (
                  <div className="dropdown">
                    <ul>
                      <li className="hoverr">Interest Rates</li>
                      <li className="hoverr">Eligibility Criteria</li>
                      <li className="hoverr">Documents Required</li>
                      <li className="hoverr">How to Apply</li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                onMouseEnter={() => handleHover("calculator")}
                onMouseLeave={() => handleLeave("calculator")}
                className="navbar-link fleee"
              >
                EMI Calculator <span className="icon">{"^"}</span>
                {showDropdown.calculator && (
                  <div className="dropdown">
                    <ul>
                      <li className="hoverr">Personal Loan</li>
                      <li className="hoverr">Education Loan</li>
                      <li className="hoverr">Bike Loan</li>
                      <li className="hoverr">Car Loan</li>
                      <li className="hoverr">Business Loan</li>
                      <li className="hoverr">Home Loan</li>
                      <li className="hoverr">Mortgage Loan</li>
                      <li className="hoverr">Gold Loan</li>
                    </ul>
                  </div>
                )}
              </li>
              <li onClick={() => navigate("/credit-score")}>Credit Tracker</li>
              <li onClick={() => navigate("/contact-us")}>Contact Us</li>
            </ul>
            <div className="ffle">
              <div>
                <p className="lg:text-2xl md:text-xl text-lg font-semibold">
                  {/* Call us now */}
                </p>
                <p className="lg:text-2xl md:text-xl text-lg font-semibold">
                  {/* +44 00 000 123 */}
                </p>
              </div>
              <div>
                <img
                  src={ham}
                  alt=""
                  className="hamd"
                  onClick={toggleSidebar}
                />
              </div>
            </div>
            <div className="navb">
              <p onClick={() => navigate("/sign-in")}>Sign In</p>
              <p onClick={() => navigate("/sign-up")}>Sign Up</p>
            </div>
          </div>
        </nav>
      </header>
      {flag && (
        <>
          <HeroSection />
          <div className="extra"></div>
        </>
      )}
      <div className="sidebar" ref={ref}>
        <div className="close-sidebar" onClick={toggleSidebar}>
          {" "}
          {/* Close sidebar on click */}
          <img src={closeIcon} alt="" className="close-icon" />
        </div>
        <div>
          <a href="">Loans</a>
          <a href="">EMI Calculator</a>
          <a onClick={() => navigate("/credit-score")}>Credit Tracker</a>
          <a onClick={() => navigate("/contact-us")}>Contact Us</a>
          <a onClick={() => navigate("/sign-in")}>Sign In</a>
          <a onClick={() => navigate("/sign-up")}>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
