import React from "react";
import { ques } from "../database/data";

const Questions = () => {
  return (
    <section className="questions-container">
      <div className="questions-wrapper">
        <div className="questions-list">
          {ques?.map((qa, ind) => (
            <div className="question" key={ind}>
              <div className="question-title">{qa.ques}</div>
              <div className="icon">{"^"}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
