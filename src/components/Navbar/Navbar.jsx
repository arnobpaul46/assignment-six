import React from 'react';

const Navbar = ({ cartCount }) => {
    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar w-full px-4 md:w-[80%] mx-auto px-2 lg:px-0">
                
                {/* Navbar Start: Mobile Menu & Brand */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1">
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-lg lg:text-2xl text-primary font-bold px-1 lg:px-4">DigiTools</a>
                </div>

                {/* Navbar Center: Desktop Menu (Hidden on Mobile) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 font-medium text-gray-200">
                        <li><a className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1" href="#">Products</a></li>
                        <li><a className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1" href="#">Features</a></li>
                        <li><a className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1" href="#">Pricing</a></li>
                        <li><a className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1" href="#">Testimonials</a></li>
                        <li><a className="hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1" href="#">FAQ</a></li>
                    </ul>
                </div>

                {/* Navbar End: Cart & Buttons */}
                <div className="navbar-end gap-1 sm:gap-2">
                    {/* Cart Icon */}
                    <div className="indicator mr-1 lg:mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="badge badge-xs lg:badge-sm badge-primary indicator-item">{cartCount}</span>
                    </div>

                    {/* Action Buttons (Login & Get Started) */}
                    <div className="flex items-center gap-1 lg:gap-2">
                        {/* Login Button - Now visible on all screens */}
                        <button className='btn btn-ghost btn-xs sm:btn-sm lg:btn-md font-medium'>Login</button>
                        
                        <button className='btn btn-primary btn-xs sm:btn-sm lg:btn-md rounded-lg lg:rounded-2xl'>Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;