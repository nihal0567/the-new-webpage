import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="nav flex gap-8 py-3.5 justify-center">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    );
};

export default Navbar;