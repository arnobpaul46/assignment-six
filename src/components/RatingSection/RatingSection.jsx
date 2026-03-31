import React from 'react';

const StatsSection = () => {
    return (
        <div className="bg-blue-950 py-12 lg:py-20 mt-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-row justify-around items-center gap-8 md:gap-0">
                    
                    {/* Item 1 */}
                    <div className="text-center flex-1">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">50K+</h2>
                        <p className="text-violet-100 text-sm lg:text-base font-medium opacity-80 ">Active Users</p>
                    </div>

                    {/* Vertical Divider 1 (Hidden on Mobile) */}
                    <div className="  w-[1px]  md:h-16 bg-white/30"></div>

                    {/* Item 2 */}
                    <div className="text-center flex-1">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">200+</h2>
                        <p className="text-violet-100 text-sm lg:text-base font-medium opacity-80">Premium Tools</p>
                    </div>

                    {/* Vertical Divider 2 (Hidden on Mobile) */}
                    <div className="hidden md:block w-[1px] h-16 bg-white/30"></div>

                    {/* Item 3 */}
                    <div className="text-center flex-1">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">4.9</h2>
                        <p className="text-violet-100 text-sm lg:text-base font-medium opacity-80">Rating</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StatsSection;