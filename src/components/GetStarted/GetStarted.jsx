import React from 'react';
import menImg from "../../assets/user.png"
import pakageImg from "../../assets/package.png"
import rocketImg from "../../assets/rocket.png"

const GetStarted = () => {
    return (
        <div className="py-20 bg-gray-900 mt-30">
            <div className="max-w-6xl mx-auto px-6">
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 font-sans">Get Started In 3 Steps</h2>
                    <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    

                    <div className="relative bg-blue-900 p-12 rounded-[40px] shadow-sm  text-center">
                        <div className="absolute top-6 right-6 bg-gray-900 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
                            01
                        </div>
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8 text-[#8b3dff]">
                            <img src={menImg} alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Create Account</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    
                    <div className="relative bg-blue-900 p-12 rounded-[40px] shadow-sm  text-center">
                        <div className="absolute top-6 right-6 bg-gray-900 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
                            02
                        </div>
                        <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-8 text-[#8b3dff]">
                            <img src={pakageImg} alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Choose Products</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    
                    <div className="relative bg-blue-900 p-12 rounded-[40px] shadow-sm  text-center">
                        <div className="absolute top-6 right-6 bg-gray-900 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
                            03
                        </div>
                        <div className="w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mb-8 text-[#8b3dff]">
                            <img src={rocketImg} alt="" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Start Creating</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GetStarted;