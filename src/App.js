import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import SlidingGallery from './Components/Sliding-Images/SlidingGallery';
import Items from './Components/ShoppingItems/Items';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    console.log('value is true ==>', showCartHandler)
    setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }


  return (
    <CartProvider>
      <Header />
      <SlidingGallery />
      <Items />
    </CartProvider>

  );
}

export default App;
