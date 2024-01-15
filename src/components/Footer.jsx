import React from "react";
import bg4 from "../assets/bg4.png";
import img1 from "../assets/image_2.png";
import img2 from "../assets/image_3.png";

const Footer = () => {
  return (
    <div className="cllsss" style={{ backgroundImage: `url(${bg4})` }}>
      <div className="foot1">
        <h1>Customer Support</h1>
        <div>
          <p>care@finanza.in</p>
          <p>080 6939 0476</p>
        </div>
      </div>
      <div className="foot2">
        <div className="foot21">
          <h1>The Company</h1>
          <div>
            <p>About</p>
            <p>Founding Member: DLAI</p>
            <p>Security</p>
            <p>Blog</p>
            <p>FAQs</p>
            <p>Contact Us</p>
            <p>Media Coverage</p>
            <p>Careers</p>
            <p>Sitemap</p>
          </div>
        </div>
        <div className="foot21">
          <h1>Loans App</h1>
          <div>
            <p>Home</p>
            <p>Lending Partners</p>
            <p>Business Partners</p>
            <p>Privacy Policy</p>
            <p>Grievance Redressal</p>
            <p>Terms & Conditions</p>
            <p>Collection Agencies</p>
            <p>Code of Conduct</p>
          </div>
        </div>
        <div className="foot21">
          <div className="foot21">
            <h1>Our Products</h1>
            <div>
              <p>Personal Loan</p>
              <p>Credit Tracker</p>
              <p>Savings Account</p>
              <p>Coming Soon</p>
            </div>
          </div>
          <div className="foot21">
            <h1>Banking</h1>
            <div>
              <p>Banking Partners</p>
              <p>Banking Grievance Redressal</p>
            </div>
          </div>
        </div>
        <div className="foot21">
          <h1>Learn More</h1>
          <div>
            <p>Personal Loans</p>
            <p>Loan for Salaried</p>
            <p>Loan for Self-Employed</p>
            <p>EMI Calculator</p>
          </div>
        </div>
      </div>
      <div>
        <p>©2023 WhizDM Innovations Pvt. Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
