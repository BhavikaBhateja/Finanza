import React, { useState } from "react";
import {Header} from "../components";

const SignIn = ({ flag }) => {
  const [data, setData] = useState({
    user: "",
    pass: "",
    email: "",
  });

  const onchnge = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <>
     <Header flag={false} />
    <div class="container1111">
      

      <div class="card">
        <div class="card_title">
          <h1>Create Account</h1>
          <span>
            {
              flag ? "Not have Account? " : "Already have an account? "
            }
            {flag ? (
              <a href="sign-up">Sign Up</a>
            ) : (
              <a href="sign-in">Sign In</a>
            )}
          </span>
        </div>
        <div class="form">
          <form action="/register" method="post">
            <input
              type="text"
              name="user"
              id="username"
              onChange={(e) => onchnge(e)}
              placeholder="UserName"
            />
            {flag ? (
              <></>
            ) : (
              <input
                type="email"
                name="email"
                onChange={(e) => onchnge(e)}
                placeholder="Email"
                id="email"
              />
            )}
            <input
              type="password"
              name="pass"
              onChange={(e) => onchnge(e)}
              placeholder="Password"
              id="password"
            />
            <button>{flag ? "Sign In" : "Sign Up"}</button>
          </form>
        </div>
        <div className="data1">
          <h3>User Data</h3>
          <p>name:{data.user}</p>
          {!flag && <p>email:{data.email}</p>}
        </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;
