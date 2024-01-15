import React from "react";
import bg3 from "../assets/bg3.png";
import { data } from "../database/data";

const SecondSection = () => {
  return (
    <section
      className="cover"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <div className="diii">
        {data?.map((item, ind) => (
          <div
            key={ind}
            className="cover2"
          >
            <h1 className="">
              {item.title}
            </h1>
            <div className="borrder"></div>
            <div className="div2">
              <p>{item.text}</p>
              {item.text2 && <p>{item.text2}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
