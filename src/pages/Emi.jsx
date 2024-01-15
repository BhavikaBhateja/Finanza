import React from "react";
import Table from "../components/Table";
import { Footer, Header } from "../components";
import Text from "../components/Text";

const Emi = () => {
  return (
    <>
        <Header />
      <div className="test-head">
        <h1>EMI Schedule</h1>
      </div>
      <Table />
      <Text />
      <Footer />
    </>
  );
};

export default Emi;
