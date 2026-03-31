import React, { use } from 'react';
import ProductsCard from './ProductsCard';

const ShowCard = ({ getApiCardPromies, cart,  handleCart, activeTab, setActiveTab }) => {
    const showCards = use(getApiCardPromies);

    return (
        <div className='flex flex-col justify-center items-center w-[80%] mx-auto mt-10'>
            <div className='flex flex-col justify-center md:items-center space-y-3'>
                <h1 className='text-4xl md:text-5xl font-semibold'>Premium Digital Tools</h1>
                <p className='md:text-center md:w-xl text-gray-400'>
                    Choose from our curated collection of premium digital products.
                </p>
                
                
                <div className="tabs justify-center    tabs-box bg-blue-900 p-1 rounded-2xl">
                    <input 
                        type="radio" 
                        name="my_tabs_1" 
                        className="tab rounded-2xl" 
                        aria-label="Products" 
                        checked={activeTab === "Products"} 
                        onClick={() => setActiveTab("Products")} 
                    />
                    <input 
                        type="radio" 
                        name="my_tabs_1" 
                        className="tab rounded-2xl" 
                        aria-label={`Cart (${cart.length})`} 
                        checked={activeTab === "cart"} 
                        onClick={() => setActiveTab("cart")} 
                    />
                </div>
            </div>

            {activeTab === "Products" && (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                    {showCards?.map((card) => (
                        <ProductsCard
                            key={card.id}
                            card={card}
                            addToCart={handleCart}
                            isInCart={cart.some(item => item.id === card.id)}
                        />
                    ))}
                </div>
            )}

            
        </div>
    );
};

export default ShowCard;