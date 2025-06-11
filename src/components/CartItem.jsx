import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice"; // Redux action to remove an item from cart


export default function CartItem({ product }) {


  // Calculate total price for the item based on its quantity
  const totalPrice = product.price * product.quantity;

  // Get dispatch function to trigger Redux actions
  const dispatch = useDispatch();

  // Handler function to remove one quantity of this item from the cart
  function handleClick() {
    dispatch(removeItem(product.id));
  }

  return (
    <div className="flex justify-center">
      {/* Cart item container */}
      <div className="grid grid-cols-2 items-center p-6 border-b w-150 bg-[#a5dc69]">
        {/* Product image */}
        <img
          src={product.images}
          alt={product.title}
          className="w-30 h-30 object-cover rounded-md"
        />

        {/* Product details */}
        <div className="flex flex-col ml-4">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="">Price: ₹{product.price.toFixed(2)}</p>
          <p className="">Quantity: {product.quantity}</p>
          <p className="">Total: ₹{totalPrice.toFixed(2)}</p>

          {/* Remove button */}
          <button
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
            onClick={handleClick}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
