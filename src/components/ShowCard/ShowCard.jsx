import React, { use } from 'react';
import ProductsCard from './ProductsCard'; 

const ShowCard = ({ getApiCardPromies, cart, handleCart }) => {
    const showCards = use(getApiCardPromies);

    return (
        <div className='flex flex-col justify-center items-center w-[80%] mx-auto mt-10'>
            <div className='flex flex-col justify-center md:items-center space-y-3'>
                <h1 className='text-4xl md:text-5xl font-semibold'>Premium Digital Tools</h1>
                <p className='md:text-center md:w-xl text-gray-400'>
                    Choose from our curated collection of premium digital products.
                </p>
                <div className='flex gap-2'>
                    <button className='btn p-5 btn-primary rounded-2xl'>Products</button>
                    <button className='btn rounded-2xl bg-gray-800 text-white px-6'>
                        Cart (<span>{cart.length}</span>)
                    </button>
                </div>
            </div>

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
        </div>
    );
};

export default ShowCard;