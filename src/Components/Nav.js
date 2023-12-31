import React from 'react';
import logo from "../Assets/logo.svg";
import hamburger from "../Assets/Hamburger Menu.svg";


const Nav = () => {
  return (
      <nav className="nav-box flex list-none justify-between gap-4 md:ml-20 md:mr-28 md:gap-20 lg:gap-20 my-5 ml-12 mr-16 lg:mx-20">
        <div className="home flex items-center justify-evenly gap-2 lg:gap-4">
          <a href="/">
            <img src={ logo } alt="logo" className="logo w-30" />
          </a>
          <ul className="hidden lg:block">
            <li class="lg:mt-1">Home</li>
           </ul>
        </div>
        <div className="user-account flex items-center justify-evenly gap-2 lg:gap-4 lg:mr-8">
          <img src={ hamburger } alt="" className="lg:hidden" />
          <ul class="list-none hidden lg:block">
            <li>Login</li>
          </ul>
          <button class="cta py-2 px-6 rounded text-white bg-black hidden lg:block">Create an account</button>
        </div>
      </nav>
  );
};


export default Nav;
