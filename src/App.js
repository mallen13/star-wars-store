import { useState } from 'react';
import { useEffect } from 'react';
import { Routes,Route } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { 
  findInCart,
  deepClone, 
  addToCart, 
  subtractFromCart, 
  removeFromCart  
} from './cartHelpers';
import Header from './Components/Header';
import CartDrawer from './Components/cart/CartDrawer';
import ProductGrid from "./Components/products/ProductGrid";
import { useSuccessToast } from './hooks';
import CheckoutPage from './Components/checkout/CheckoutPage';

function App() {

  //state
  const [cart,setCart] = useState({items: [], numItems: 0, subtotal: 0});

  //hooks
  const toast = useSuccessToast();

  //get cart from local storage
  useEffect( ()=> {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) setCart(cart)
},[])

  //cart drawer controls
  const {isOpen,onOpen,onClose} = useDisclosure();

  //modify cart
  const modifyCart = (product,action) => {
    const index = findInCart(cart,product);
    const clone = deepClone(cart);
    
    //add,subract,or remove
    let newCart;

    switch (action) {
      case 'add' :
        newCart = addToCart(clone,product,index);
        toast('Cart','Item Added.');
        break;
      case 'subtract' :
        newCart = subtractFromCart(clone,product,index);
        toast('Cart','Item Removed.');
        break;
      case 'remove' :
        newCart = removeFromCart(clone,product,index);
        toast('Cart','Item Removed.');
        break;
      default: return null;
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));

  }

  //clear cart
  const clearCart = () => {
    setCart({items: [], numItems: 0, subtotal: 0});
    localStorage.removeItem('cart');
  }

  return (
    <>
        {/* Header */}
        <Header openCart={onOpen} cartCount={cart.numItems}/>

        {/* Routes */}
        <Routes>
          <Route path='/star-wars-store/' element={<ProductGrid cart={cart} modifyCart={modifyCart} />} />
          <Route path='/star-wars-store/checkout' element={
            <CheckoutPage cart={cart} clearCart={clearCart} modifyCart={modifyCart} />
          } />
        </Routes>

        {/* Cart Drawer */}
        <CartDrawer 
          isOpen={isOpen}
          onClose={onClose}
          cart={cart}
          numItems={cart.numItems}
          modifyCart={modifyCart}
        />
    </>
  );
}

export default App;
