// import React from 'react';

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
      function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      }

    const { user, logOut } = useContext(AuthContext)
    // console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user looged out'))
            .catch(error => console.error(error))
    }

    const items = <>
        <li className="text-xl font-semibold"><NavLink to='/'>Home</NavLink></li>
        <li className="text-xl font-semibold"><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li className="text-xl font-semibold"><NavLink to='/myCart'>My Cart</NavLink></li>
        <li className="text-xl font-semibold"><NavLink to='/login'>Login</NavLink></li>
        <li className="text-xl font-semibold"><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
      <div className="navbar bg-base-100 lg:px-10 px-3 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {items}
            </ul>
          </div>
          <img
            src="https://i.ibb.co/61pxZXq/images.png"
            className=" w-12"
            alt=""
          />
          <a className="btn btn-ghost normal-case text-3xl font-bold font-serif">
            Automotive
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img className="w-10 h-10 rounded-full" src={user.photoURL} />
              <span className="mx-3 bg-gray-300 px-2 py-3 rounded lg">
                {user.displayName}
              </span>
              <a onClick={handleLogOut} className="btn font-semibold">
                Sign Out
              </a>
            </>
          ) : (
            <>
              <button className="mr-3 bg-gray-300 px-3 py-2 rounded-lg text-xl font-semibold" onClick={myFunction}>
                dark mode
              </button>
              <Link to="/login">
                <button className="btn font-semibold">Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    );
};

export default Navbar;