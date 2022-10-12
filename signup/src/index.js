import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Image from "./bg.jpg";
import Logo from "./fb.png";
import Bg from "./twitter.png";


function Signup() {
  return (
    <div className="main">
      <div className="image">
        <img src={Image} alt="logo" />
      </div>
      <div className="wrapper">
        <h1>Login to continue</h1>
        <form>
          <div className="email">
            <input type="text" placeholder="Email" />
          </div>
          <div className="password">
          <input type="password" placeholder="Password" />
          </div>
          <p>
            <span>
              <input type="checkbox" /> Remember me
            </span>
           <span className="pass">Forget Password?</span> 
          </p>
          <button>Login</button>
          <div className="links">
            <p>or sign up using</p>
            <span className="images">
              <img src={Logo} alt="logo"/>
              <img src={Bg} alt="logo"/>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

ReactDOM.render(<Signup />, document.querySelector("#root"));
