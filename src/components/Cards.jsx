import React from "react";
import Card from "./Card";
import hero1 from "../assets/hero1.png";
import Loan from "../assets/loan.webp";
import offer from"../assets/offers.jpg";
import money from "../assets/money1.jpg";
import easy from"../assets/easy.jpg";
const Grid = () => {
  return (
    <div className="grid-container">
      <div className="text-head">
        <h1>What makes</h1>
        <h1>us better</h1>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <Card

            title1={"Highest"}
            title2={"loan amount"}
            
            text={
              "Our credit model generates the best personalized offer for you. "
            }
            card1={Loan}
            style={"plum"}
          />
        </div>
        <div className="grid-item">
          <Card
            title1={"Most affordable"}
            title2={"offers"}
            text={
              "Enjoy flexible loan tenures from 3 months to 60 months; choose a plan you like!"
            }
            card1={offer}
            style={"orange"}
          />
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <Card
            title1={"No surprises,"}
            title2={"100% transparent"}
            text={
              "Check interest rate, total repayment & terms beforehand - leave no room for doubt or surprises"
            }
            card1={money}
            style={"bg"}
          />
        </div>
        <div className="grid-item">
          <Card
            title1={"Hassle-free,"}
            title2={"easy to use"}
            text={
              "The power of human experience & technology - all packed into our app to simplify lengthy processes just with a tap"
            }
            card1={easy}
            style={"blue"}
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
