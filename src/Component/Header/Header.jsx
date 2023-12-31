import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/donate">Donation</NavLink></li>
    <li><NavLink to="/statistic">Statistic</NavLink></li>
    </>

    return (
        <div className="navbar bg-gray-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {links}
                    </ul>
                </div>
                
                    <img className="w-2/5" src= {'https://i.ibb.co/PWYrZYm/Logo.png'} alt="" />
            </div>
            
            <div className="navbar-end">
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Header;