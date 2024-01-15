import React from "react";
import PhoneNumberInput from "./PhoneInput.jsx";
import c1 from "../assets/c1.webp";
import c2 from "../assets/c2.webp";
import c3 from "../assets/c3.webp";
import c4 from "../assets/c4.webp";

const EndSection = () => {
  return (
    <section className="phon-cont">
      <div className="phn-wrap">
        <div className="wrp1">
          <PhoneNumberInput />
          <button>Check Instantly</button>
        </div>
        <div className="wrp1">
          <input type="checkbox" name="" id="" />
          <p>
            By proceeding, you agree to our Terms & Conditions & Privacy Policy
          </p>
        </div>
        <div className="grid11">
          <h1>Credit Tracker Features</h1>
          <div className="gri">
            <div>
              <img src={c1} alt="" className="im" />
              <div>
                <p>Monthly Free</p>
                <p>Reports</p>
              </div>
            </div>
            <div>
              <img src={c2} alt="" className="im" />
              <div>
                <p>Detailed Analysis</p>
                <p>of Report</p>
              </div>
            </div>
            <div>
              <img src={c3} alt="" className="im" />
              <div>
                <p>Tips on</p>
                <p>Improving Score</p>
              </div>
            </div>
            <div>
              <img src={c4} alt="" className="im" />
              <div>
                <p>Pre-approved</p>
                <p>Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndSection;
