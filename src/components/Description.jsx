import React from "react";
import ic1 from "../assets/ic1.png";
import ic2 from "../assets/ic2.png";
import contactb from "../assets/contactb.png";

const Description = () => {
  return (
    <section className="disc-cont">
      <div className="disc-wrap">
        <div className="contt">
          <h1>Get in touch with us</h1>
          <p>
            Please write to us at care@finanza.in for any service-related
            queries or feedback.  We generally respond
            within 24-48 working hours.
          </p>
          <h3>
            Timings: Monday to Saturday - 9 am to 6 pm - Excluding public
            holidays
          </h3>
        </div>
        <div className="contact">
          <div className="card1">
            <img src={ic1} alt="" />
            <div>
              <h1>Contact Number</h1>
              <p>080 6939 0476</p>
            </div>
          </div>
          <div className="card1">
            <img src={ic2} alt="" />
            <div>
              <h1>Customer Support</h1>
              <p>care@Finanza.in</p>
            </div>
          </div>
          <div>
            <img src={contactb} alt="" className="conta" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
