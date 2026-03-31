import React from 'react';

const Navbar = ({ cartCount }) => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar w-[80%] mx-auto justify-between">
                <div className="text-primary">
                    <a className="btn btn-ghost text-2xl hover:bg-blue-900">DigiTools</a>
                </div>
                <div>
                    <ul className="flex justify-between gap-4">
                        <li><a className="hover:border-b" href="#">Products</a></li>
                        <li><a className="hover:border-b" href="#">Features</a></li>
                        <li><a className="hover:border-b" href="#">Pricing</a></li>
                        <li><a className="hover:border-b" href="#">Testimonials</a></li>
                        <li><a className="hover:border-b" href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span className="badge badge-sm indicator-item">{cartCount}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex ml-1 gap-2">
                        <button className='btn px-3'>Login</button>
                        <button className='btn btn-primary rounded-2xl'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;