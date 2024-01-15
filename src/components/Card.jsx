import React from "react";

const Card = ({ title1, title2, text, style,card1 }) => {
  return (
    <div className={`cardStyle ${style}`}>
      <div>
        <h2 className="card-title">{title1}</h2>
        <h2 className="card-subtitle">{title2}</h2>
        <p className="card-description">{text}</p>
        <div className="heee">
          <img

            className="imageStyle"
            // src="https://picsum.photos/400/400"
            // src={"https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9hbnxlbnwwfHwwfHx8MA%3D%3D"}
           
          
           
            // alt="Random"
           src= {card1} alt="" 
           
          />
         
          
        </div>
      </div>
    </div>
  );
};

export default Card;
