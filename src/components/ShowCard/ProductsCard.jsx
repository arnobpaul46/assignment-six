import React from 'react';

const ProductsCard = ({ card, addToCart, isInCart }) => {
    return (
        <div className="bg-blue-950 text-white rounded-2xl shadow-md p-6 relative flex flex-col justify-between">
            <div>
                <div className="absolute top-4 right-4 bg-yellow-700 text-white text-xs px-3 py-1 rounded-full">
                    {card.badge}
                </div>
                <div className="w-12 h-12 bg-gray-500 text-black rounded-full flex items-center justify-center mb-4">
                    {card.icon}
                </div>
                <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                <p className="text-gray-400 text-sm mb-4">{card.description}</p>
                <h3 className="text-2xl font-bold mb-4">${card.price} <span className="text-sm text-gray-400">/Mo</span></h3>
                <ul className="mb-5 space-y-2 text-sm text-gray-300">
                    {card.features.map((f, i) => <li key={i}>✔ {f}</li>)}
                </ul>
            </div>
            <button
                onClick={() => addToCart(card)}
                disabled={isInCart}
                className={`w-full py-3 rounded-full font-medium transition-all
                ${isInCart ? "bg-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-purple-500 to-indigo-500"}`}
            >
                {isInCart ? "Added to cart" : "Buy Now"}
            </button>
        </div>
    );
};

export default ProductsCard;