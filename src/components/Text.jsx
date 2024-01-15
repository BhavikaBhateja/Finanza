import React from "react";

const Text = () => {
  return (
    <div className="tk">
      <div>
        <h1>Formula to calculate personal loan EMI</h1>
        <div className="flexx">
          <p>The formula for calculating EMI is as follows:</p>
          <p className="p">
            E ={" "}
            <span className="formu">
              <span className="borr"> P x R x {"(1+R)"}^N </span>
              <span>{"[(1+R)^N-1]"}</span>
            </span>
          </p>
          <p>
            <span className="span">P - the principal amount that </span>
            is borrowed
          </p>
          <p>
            <span className="span">R - the rate of interest </span>
            imposed
          </p>
          <p className="span">N - tenure in the number of months</p>
          <p>For example -</p>
          <ul>
            <li>Rs. 10 Lakhs is the amount borrowed {"(P)"}</li>
            <li>10.5% is the annual rate of interest imposed</li>
            <li>60 months is the tenure {"(n)"}</li>
          </ul>
          <p>Then the EMI to be paid using the above formula will be:</p>
          <div className="p">
            <p className="formu">
              <span className="borr">{"10 Lakhs x 0.00875 x (1+0.00875)^60 "}</span>
              <span>{"[(1+0.00875)^60-1] "}</span>
            </p>
            <p>= Rs.10,747</p>
          </div>
          <p>
            {
              "Note: The rate of interest (R) is calculated monthly i.e. it is calculated as (Annual Rate of interest/12/100) in this case (10.5/12/100 = 0.00875)"
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Text;
