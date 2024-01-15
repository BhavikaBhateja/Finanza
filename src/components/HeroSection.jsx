import React, { useState } from "react";
import hero1 from '../assets/hero1.png';

const HeroSection = () => {
  const regex1 = /^(?!\s*$).+/;
  const regex2 = /^[0-9]{10}$/;
  // const regex3 = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  const regex4 = /^[A-Za-z\s]{10,200}$/;

  const [values, setValues] = useState({
    name: "",
    email: "",
    number: 0,
    message: "",
  });

  const [err, setError] = useState({
    name: false,
    email: false,
    number: false,
    message: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);
  };

  const handleSubmit = () => {
    if (!regex1.test(values.name)) {
      setError({ ...err, ["name"]: true });
    } else {
      setError({ ...err, ["name"]: false });
    }
    if (!regex2.test(values.email)) {
      setError({ ...err, ["email"]: true });
    } else {
      setError({ ...err, ["email"]: false });
    }
    if (!regex4.test(values.message)) {
      setError({ ...err, ["message"]: true });
    } else {
      setError({ ...err, ["message"]: false });
    }
    if (!regex1.test(values.number)) {
      setError({ ...err, ["number"]: true });
    } else {
      setError({ ...err, ["number"]: false });
      alert("Message Sent Successfully!!!");
      setValues({ name: "", email: "", number: 0, message: "" });
    }
  };

  return (
    <section className="cont">
      <div className="wra3"></div>
      <div className="wra1">
        <img src={hero1} alt="" />
      </div>
      <div className="wra2">
        <div className="dik">
          <h1 className="dik1">
            Leave <span className="col">Money Problem</span> to us
          </h1>
          <h1 className="dik2">
            and just <span className="col">focus on you Business</span>
          </h1>
        </div>
        <div className="dic">
          <div className="your-class">
            <h1 className="dic1">Leave your number and we</h1>
            <h1 className="dic1 ">will call you back</h1>
          </div>
          <p className="your-class2">Get up to $5000* within 10 minutes**</p>
          <div className="dic3">
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`input1 ${
                err.name ? "input-border1" : "input-border2"
              }`}
            />
            <div className="diif1">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                className={`input1 ${
                  err.email ? "input-border1" : "input-border2"
                }`}
              />
              <input
                type="number"
                name="number"
                value={values.number}
                onChange={handleChange}
                placeholder="Phone"
                className={`input1 ${
                  err.number ? "input-border1" : "input-border2"
                }`}
              />
            </div>
            <textarea
              id=""
              cols="30"
              rows="7"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
              className={`input1 ${
                err.message ? "input-border1" : "input-border2"
              }`}
            ></textarea>
            <div className="diif2">
              <button className="btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <p className="colr2">
              {" "}
              * We don’t share your personal info with anyone.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
