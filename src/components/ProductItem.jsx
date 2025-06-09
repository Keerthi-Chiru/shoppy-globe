import { addItem } from "../utils/cartSlice";  // Import action to add item to cart in Redux
import { useDispatch } from "react-redux";    // Hook to dispatch Redux actions
import { Link } from "react-router";

export default function ProductItem({ product }) {
    const dispatch = useDispatch();  // Initialize dispatch function

    // Function to handle click on Add to Cart button
    function handleClick() {
        console.log("Button clicked for product:", product.id);

        // Prepare the item object to add to cart, applying discount on price
        const item = {
            id: product.id,
            title: product.title,
            price: product.price - (product.discountPercentage / 100) * product.price,
            quantity: 1,
            images: product.images[0],
        };

        console.log("Adding item to cart:", item);

        // Dispatch the addItem action with the item payload
        dispatch(addItem(item));
    }

    return (
        <>
            {/* Product card container with styling and hover effects */}
            <div className="product-item bg-[#78d2fa] p-1 w-100 h-100 rounded-full shadow-2xl text-black flex flex-col items-center justify-center hover:scale-105 transition-transform duration-50 ease-in-out active:translate-y-1">
                
                {/* Product image */}
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-40 h-40 object-cover"
                />
                
                {/* Product title */}
                <h1 className="text-2xl font-semibold mb-2 text-center">{product.title}</h1>
                
                {/* Discounted price shown prominently */}
                <div className="text-2xl font-bold text-green-600">
                    ${((product.price - (product.discountPercentage / 100) * product.price)).toFixed(2)}
                </div>
                
                {/* Original price with strikethrough */}
                <span className="text-xl font-bold text-green-600 line-through">${product.price}</span>
                
                {/* Product rating */}
                <div className="text-lg text-black mb-2">★{product.rating}</div>


                <button
                    className="mt-1 bg-[#a5dc69] border border-black px-4 py-2 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-50 ease-in-out active:scale-90"
                    onClick={handleClick}
                >
                    Add to Cart
                </button>
                <Link to={`/product/${product.id}`} key={product.id} className="border m-2 p-1 ">See More</Link>

            </div>
        </>
    );
}
