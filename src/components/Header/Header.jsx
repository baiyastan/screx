import React from "react";
import "./header.css";
import logo from"../../assets/logo(1).svg"


function Header() {
  return <div>

    <section className="header">
      <div className="logo">
        <img src={logo} alt="" />
        <h1>Scorex</h1>
      </div>

      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>About Us</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="register">
        <button>Login</button>
        <button>Register</button>
      </div>
    </section>
    
   


  </div>;
}


export default Header;
