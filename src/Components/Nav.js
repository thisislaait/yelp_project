// Nav.js

import React from 'react';
import logo from "../Assets/logo.svg";

function Nav() {
  return (
    <nav className="nav-box flex list-none justify-between gap-20 my-5 mx-20">
      <div className="home flex items-center justify-evenly gap-4">
        <a href="/">
          <img src={logo} alt="logo" className="logo w-30" />
        </a>
        <ul>
          <li className="mt-1">Home</li>
        </ul>
      </div>
      <div className="user-account flex items-center justify-evenly gap-4">
        <ul className="list-none">
          <li>Login</li>
        </ul>
        <button className="cta py-2.5 px-8 rounded text-white bg-black">Create an account</button>
      </div>
    </nav>
  );
}

export default Nav;
