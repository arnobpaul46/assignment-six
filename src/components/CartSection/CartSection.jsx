import React from 'react';

const CartSection = ({ cart, handleRemove, handleCheckout }) => {

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className=" w-[90%] md:w-[80%] mx-auto mt-10 p-6 ">
            <div className="bg-blue-950  rounded-3xl shadow-lg p-8 ">
                <h2 className="text-2xl font-bold mb-8 text-white">Your Cart</h2>

                <div className="space-y-6">
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <div 
                                key={item.id} 
                                className="flex items-center justify-between bg-blue-800 p-5 rounded-2xl transition-all hover:shadow-sm"
                            >
                                <div className="flex items-center gap-5">
                                    
                                    <div className="w-14 h-14 bg-gray-500 rounded-2xl flex items-center justify-center shadow-sm text-2xl border border-gray-300">
                                        {item.icon}
                                    </div>
                                    
                                    <div>
                                        
                                        <h3 className="font-bold text-white text-lg">{item.title}</h3>
                                        <p className="text-gray-300 font-medium">${item.price}</p>
                                    </div>
                                </div>
                                
                               
                                <button 
                                    onClick={() => handleRemove(item.id)}
                                    className="text-red-500 font-semibold hover:text-red-600 transition-colors px-3 py-1"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-16 ">
                            <p className="text-white text-4xl">Your cart is currently empty!</p>
                        </div>
                    )}
                </div>

                
                {cart.length > 0 && (
                    <div className="mt-10 pt-8 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-gray-200 font-semibold text-lg">Total Amount:</span>
                            <span className="text-3xl font-extrabold text-gray-200">${totalPrice}</span>
                        </div>

                        <button onClick={handleCheckout} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all shadow-md active:scale-[0.98]">
                            Proceed To Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartSection;