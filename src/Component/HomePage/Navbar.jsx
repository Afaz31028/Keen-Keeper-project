import React from "react";
import navImg from "../../assets/logo.png";
import { NavLink } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between items-center container mx-auto py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex gap-5 items-center"
          >
                 <NavLink to={"/"} className={({isActive})=>
                `flex gap-2 items-center btn shadow-sm ${isActive ? "bg-green-900 text-base-100" : ""
            }`
        }>
            <IoHomeOutline />
            <p>Home</p>
            </NavLink>
            <NavLink to={"/timeline"} className={({isActive})=>
                `flex gap-2 items-center btn shadow-lg ${isActive ? "bg-green-900 text-base-100" : " "}`

            }>
                <CiClock2 />
                <p>Timeline</p>
            </NavLink>
            <NavLink to={"/stat"} className={({isActive})=>
                `flex gap-2 items-center btn shadow-lg ${isActive ? "bg-green-900 text-base-100" : ""}`
            }>
                <TfiStatsUp />
                <p>Stat</p>
            </NavLink>
            
          </ul>
        </div>
        <div>
            <img src={navImg} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5 items-center">
          <NavLink to={"/"} className={({isActive})=>
                `flex gap-2 items-center btn shadow-sm ${isActive ? "bg-green-900 text-base-100" : ""
            }`
        }>
            <IoHomeOutline />
            <p>Home</p>
            </NavLink>
            <NavLink to={"/timeline"} className={({isActive})=>
                `flex gap-2 items-center btn shadow-lg ${isActive ? "bg-green-900 text-base-100" : " "}`

            }>
                <CiClock2 />
                <p>Timeline</p>
            </NavLink>
            <NavLink to={"/stat"} className={({isActive})=>
                `flex gap-2 items-center btn shadow-lg ${isActive ? "bg-green-900 text-base-100" : ""}`
            }>
                <TfiStatsUp />
                <p>Stat</p>
            </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
