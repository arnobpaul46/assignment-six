import React from "react";

const ProductsCard = () => {
    return (
        <div className="w-[300px] bg-blue-950 rounded-2xl shadow-md p-6 relative mt-5">

            <div className="absolute top-0 left-0 w-full h-3  rounded-t-2xl"></div>

            <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">
                Best Seller
            </div>

            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                📄
            </div>

            <h2 className="text-xl font-bold mb-2">AI Writing Pro</h2>


            <p className="text-gray-400 text-sm mb-4">
                Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.
            </p>


            <h3 className="text-2xl font-bold mb-4">
                $29 <span className="text-sm text-gray-400">/Mo</span>
            </h3>

            <ul className="text-sm text-gray-400 mb-6 space-y-2">
                <li>✔ Unlimited AI generations</li>
                <li>✔ 50+ writing templates</li>
                <li>✔ Grammar checker</li>
            </ul>

            <button className="w-full py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition">
                Buy Now
            </button>
        </div>
    );
};

export default ProductsCard;