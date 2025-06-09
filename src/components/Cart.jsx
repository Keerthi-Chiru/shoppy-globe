import { useSelector } from "react-redux";  // Hook to access Redux store state
import CartItem from "./cartItem.jsx";      // Component to render each cart item
import { useDispatch } from "react-redux";  // Hook to dispatch Redux actions
import { clearCart } from "../utils/cartSlice.js";  // Action to clear the cart items

export default function Cart() {
    const dispatch = useDispatch();  // Get dispatch function to send actions to the store

    // Get cart items array from Redux store state
    const cartItems = useSelector((state) => state.cart.items);

    // If cart is empty, render a message informing the user
    if(cartItems.length == 0) {
        return (
            <div className="h-140 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
                <p className="text-lg">Your cart is currently empty.</p>
            </div>
        );
    };

    // Handler function to clear all items from cart by dispatching clearCart action
    function handleClear() {
        dispatch(clearCart());
    }

    // Render list of cart items and a Clear Cart button
    return (
        <div className="mt-10">
            {/* Map through cart items and render a CartItem component for each */}
            {cartItems.map((item) => (
                <CartItem key={item.id} product={item} />
            ))}

            {/* Button to clear the entire cart */}
            <div className="justify-center flex items-center">
                <button
                    className="bg-[#78d2fa] rounded-md hover:bg-blue-600 transition-colors duration-200 p-2 items-center my-10"
                    onClick={handleClear}
                >
                    Clear Cart 
                </button> 
            </div>
        </div>
    );
}
