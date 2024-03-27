import { showModal, hideModal } from "../features/modal/modal";
import { clearCart } from "../features/cart/cart";

import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(hideModal());
            }}
            type="button"
            className="btn confirm-btn"
          >
            confirm
          </button>
          <button
            onClick={() => dispatch(hideModal())}
            type="button"
            className="btn clear-btn"
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
