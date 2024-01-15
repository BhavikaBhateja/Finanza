// import React from "react";
import Test from "./Test";
import profile1 from "../assets/profile1.png";
import bu1 from "../assets/bu1.webp";

const Testimonial = () => {
  return (
    <>
      <section className="con">
        <div className="text-head abbb">
          <h1>The most loved</h1>
          <h1>financial app</h1>
        </div>
        <div className="wrap">
          <Test
          profile={bu1}
          title1={"Lily Williams"}
            title2={"Manager"}
            text={
              "Thank you so much for the service! Your app claim fast loan approval. Got the amount in minutes."
              
            }
            className="oval-image"
          />
          <Test
          profile={profile1}  
          title1={"Robert James"}
            title2={"Businessman"}
            text={
              "Had a great experience regarding credit. They just provide you instant credit in times of need. Thanks a lot 😊 for helping me."
            }
            className="round-image"
          />
        </div>
      </section>
      
    </>
  );
};

export default Testimonial;