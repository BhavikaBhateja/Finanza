import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    msg: "",
  });
  const onchnge = (e) => {
    const { name, value } = e;
    setData({ ...data, [name]: value });
  };
  const onsubmit = () => {
    window.alert("Message Sent");
  };
  return (
    <div class="start-cont">
      <div class="contact-page-form">
        <h2>Get in Touch</h2>
        <form onSubmit={onsubmit}>
          <div class="gre">
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="single-input-field">
                <input
                  type="text"
                  className="input"
                  placeholder="Your Name"
                  onChange={onchnge}
                  name="name"
                  required
                />
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
              <div class="single-input-field">
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  onChange={onchnge}
                  required
                  className="input"
                />
              </div>
            </div>
            <div class="col-md-12 message-input">
              <div class="single-input-field">
                <textarea
                  placeholder="Write Your Message"
                  required
                  name="msg"
                  onChange={onchnge}
                ></textarea>
              </div>
            </div>
            <div class="single-input-fieldsbtn submit">
              <input type="submit" value="Send Now" className="inp" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
