import React, { useState, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import ShowCard from './components/ShowCard/ShowCard';


const getApiCards = async () => {
  const res = await fetch("/apiCard.json");
  return res.json();
};
const getApiCardPromies = getApiCards();

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (card) => {
    if (!cart.find(item => item.id === card.id)) {
      setCart([...cart, card]);
    }
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      
      <Suspense fallback={<div className="text-center mt-20">Loading Products...</div>}>
        <ShowCard 
          getApiCardPromies={getApiCardPromies} 
          cart={cart} 
          handleCart={handleAddToCart} 
        />
      </Suspense>
    </>
  );
};

export default App;