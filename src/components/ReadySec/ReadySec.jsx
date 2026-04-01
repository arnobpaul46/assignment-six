import React from 'react';

const ReadySec = () => {
    return (
        <div className="bg-primary py-20 px-6 mt-10">
            <div className="w-full px-4 md:w-[80%] mx-auto text-center text-white">
                
                
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready To Transform Your Workflow?
                </h2>

                
                <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter. 
                    Start your free trial today.
                </p>

                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">

                    <button className="bg-white text-[#8b3dff] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all w-full sm:w-auto">
                        Explore Products
                    </button>
                    
                    
                    <button className="btn btn-outline border-white text-white hover:bg-white hover:text-[#8b3dff] px-8 py-4 rounded-full font-bold text-lg border-2 transition-all w-full sm:w-auto">
                        View Pricing
                    </button>
                </div>

                {/* Bottom Text */}
                <p className="text-sm opacity-70">
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </div>
    );
};

export default ReadySec;