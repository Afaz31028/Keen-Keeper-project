import React from 'react';
import navImg from '../../assets/logo.png'
import { NavLink } from 'react-router';
import { IoHomeOutline } from 'react-icons/io5';
import { CiClock2 } from 'react-icons/ci';
import { TfiStatsUp } from 'react-icons/tfi';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center container mx-auto py-6'>
            <div>
                <img src={navImg} alt="" />
            </div>
            <div className='flex gap-5 items-center'>
                <NavLink to={"/"} className="flex gap-2 items-center btn">
                    <IoHomeOutline />
                    <p>Home</p>
                </NavLink>
                <NavLink to={"/timeline"} className="flex gap-2 items-center btn">
                    <CiClock2 />
                    <p>Timeline</p>
                </NavLink>
                <NavLink to={"/"} className="flex gap-2 items-center btn">
                    <TfiStatsUp />
                    <p>Stat</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;