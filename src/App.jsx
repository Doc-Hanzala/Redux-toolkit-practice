import Navbar from "./components/Navbar";
import ItemsContiner from "./components/ItemsContiner";
import { calculateTotal, getCartItems } from "./features/cart/cart";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <ItemsContiner />
    </main>
  );
}
export default App;
