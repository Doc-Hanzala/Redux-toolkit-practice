import Navbar from "./components/Navbar";
import ItemsContiner from "./components/ItemsContiner";
import { calculateTotal } from "./features/cart/cart";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <ItemsContiner />
    </main>
  );
}
export default App;
