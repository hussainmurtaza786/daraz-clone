import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import SlidingGallery from './Components/Sliding-Images/SlidingGallery';
import Items from './Components/ShoppingItems/Items';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import Cart from './Components/Cart/Cart';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <SlidingGallery />
      <Items />
    </CartProvider>

  );
}

export default App;
