import React, { useState, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import ShowCard from './components/ShowCard/ShowCard';
import CartSection from './components/CartSection/CartSection';
import { toast } from 'react-toastify';
import HomePage from './components/HomePage/HomePage';
import RatingSection from './components/RatingSection/RatingSection'
import GetStarted from './components/GetStarted/GetStarted';

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
      toast.success("Item Add to Cart Successfully ")
    }
  };
  
  const [activeTab, setActiveTab] = useState("Products");

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.warning("Item Remove Successfully ")
};

const handleCheckout = () => {
    setCart([]); 
    toast.success("Payment successful")
};

  return (
    <>
      <Navbar cartCount={cart.length} />
      <HomePage/>
      <RatingSection/>

      <Suspense fallback={<div className="text-center mt-20">Loading Products...</div>}>
        <ShowCard 
          getApiCardPromies={getApiCardPromies} 
          cart={cart} 
          setCart={setCart}
          handleCart={handleAddToCart} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Suspense>

      {activeTab === "cart" && <CartSection cart={cart} setCart={setCart} handleRemove={handleRemove} handleCheckout={handleCheckout}/>}

      <GetStarted/>
      
    </>
  );
};

export default App;