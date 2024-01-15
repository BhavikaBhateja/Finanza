// import React from "react";
// import star from "../assets/star.svg";
// import profile1 from "../assets/profile1.png";

// const Test = ({text}) => {
//   return (
//     <section className="card-cont">
//       <div className="card-wrap">
//         <div className="profilee">
//           <img src={profile1} alt="" />
//           <div>
//             <h2>Collen Robert</h2>
//             <p>Businessman</p>
//           </div>
          
          
//         </div>
        
//         <div>
//           <img src={star} alt="" />
//           <img src={star} alt="" />
//           <img src={star} alt="" />
//           <img src={star} alt="" />
//           <img src={star} alt="" />
//         </div>
//         <div className="texti">
//           <p>
//             {text}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Test;

import React from "react";
import star from "../assets/star.svg";
import profile1 from "../assets/profile1.png";

const Test = ({text,profile,title1,title2}) => {
  return (
    <section className="card-cont">
      <div className="card-wrap">
        <div className="profilee">
          <img src={profile} alt="" />
          <div>
            <h2>{title1}</h2>
            <p>{title2}</p>
          </div>
        </div>
        <div>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
        <div className="texti">
          <p>
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Test;