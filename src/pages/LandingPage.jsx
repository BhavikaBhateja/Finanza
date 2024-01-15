import React from "react";
import {
  EMI,
  Footer,
  Grid,
  Header,
  Loan,
  Questions,
  Reasons,
  SecondSection,
  Testimonial,
} from "../components";

const LandingPage = () => {
  return (
    <div className="main">
      <Header flag={true} />
      <SecondSection />
      <Grid />
      <Testimonial />
      <EMI />
      <Loan />
      <Reasons />
      <Questions />
      <Footer />
    </div>
  );
};

export default LandingPage;
