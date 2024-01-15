import React from "react";
import emi from "../assets/emi.png";
import { useNavigate } from "react-router-dom";

const EMI = () => {
  const navigate = useNavigate();
  return (
    <section className="bg1">
      <div>
        <div className="grid1">
          <img src={emi} alt="" className="img" />
        </div>
        <div className="grid2">
          <div>
            <div className="heads">
              <h1 className="">Our EMI calculator</h1>
              <h1 className="">makes it easier</h1>
            </div>
            <p className="texti">
              Use our easy EMI calculator to plan your loan's EMI, interest &
              repayment schedule
            </p>
          </div>
          <div className="end" onClick={() => navigate('/emi')}>
            <p>
              Calculate your EMI{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 -3 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.854 7.354a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L10.293 7H1.5a.5.5 0 0 0 0 1h8.793l-3.147 3.146a.5.5 0 1 0 .708.708l4-4z"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMI;
