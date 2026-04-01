import React from 'react';

const Pricing = () => {
    return (
        <div className="py-20 ">
            <div className="max-w-6xl mx-auto px-6">
                
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-gray-300">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    
                    
                    <div className="bg-blue-900 p-8 rounded-3xl shadow-sm ">
                        <h3 className="text-3xl font-bold text-white">Starter</h3>
                        <p className="text-gray-400 text-sm mb-6">Perfect for getting started</p>
                        <div className="text-4xl font-bold text-gray-100 mb-6">
                            $0<span className="text-lg font-medium text-gray-400">/Month</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray-100 font-medium">
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Access to 10 free tools</li>
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Basic templates</li>
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Community support</li>
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> 1 project per month</li>
                        </ul>
                        <button className="w-full bg-[#8b3dff] text-white py-3 rounded-2xl font-bold hover:opacity-90 transition-all mt-19">
                            Get Started Free
                        </button>
                    </div>

                    
                    <div className="relative bg-blue-950 p-10 rounded-3xl shadow-xl transform md:scale-105 z-10 text-white">
                        
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-bold shadow-sm">
                            Most Popular
                        </div>
                        <h3 className="text-4xl font-bold">Pro</h3>
                        <p className="opacity-80 text-sm mb-6">Best for professionals</p>
                        <div className="text-4xl font-bold mb-6">
                            $29<span className="text-lg font-medium opacity-80">/Month</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm font-medium">
                            <li className="flex items-center gap-2"><span>✔</span> Access to all premium tools</li>
                            <li className="flex items-center gap-2"><span>✔</span> Unlimited templates</li>
                            <li className="flex items-center gap-2"><span>✔</span> Priority support</li>
                            <li className="flex items-center gap-2"><span>✔</span> Unlimited projects</li>
                            <li className="flex items-center gap-2"><span>✔</span> Cloud sync</li>
                            <li className="flex items-center gap-2"><span>✔</span> Advanced analytics</li>
                        </ul>
                        <button className="w-full bg-white text-[#8b3dff] py-3 rounded-2xl font-bold hover:bg-gray-100 transition-all">
                            Start Pro Trial
                        </button>
                    </div>

                    
                    <div className="bg-blue-900 p-8 rounded-3xl shadow-sm ">
                        <h3 className="text-3xl font-bold text-white">Enterprise</h3>
                        <p className="text-gray-400 text-sm mb-6">For teams and businesses</p>
                        <div className="text-4xl font-bold text-gray-200 mb-6">
                            $99<span className="text-lg font-medium text-gray-400">/Month</span>
                        </div>
                        <ul className="space-y-4 mb-8 text-sm text-gray-200 font-medium">
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Everything in Pro</li>
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Team collaboration</li>
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Custom integrations</li>
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Dedicated support</li>
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> SLA guarantee</li>
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Custom branding</li>
                        </ul>
                        <button className="w-full bg-[#8b3dff] text-white py-3 rounded-2xl font-bold hover:opacity-90 transition-all">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;