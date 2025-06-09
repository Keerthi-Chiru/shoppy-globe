// React Router hook to get dynamic route params (product ID)
import { useParams, Link } from "react-router-dom";

// Custom hook to fetch product data from API
import { useFetch } from "../utils/useFetch";

// Redux hooks to dispatch an action
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function ProductDetail() {
  // Fetch product data from API
  const fetched = useFetch("https://dummyjson.com/products");

  // Get the product ID from the URL
  const { id } = useParams();

  // Initialize Redux dispatch
  const dispatch = useDispatch();

  // Handle adding the product to the cart
  function handleClick() {
    console.log("Button clicked for product:", product.id);

    // Construct the item object to be added to the cart
    const item = {
      id: product.id,
      title: product.title,
      price: product.price - (product.discountPercentage / 100) * product.price,
      quantity: 1,
      image: product.images[0],
    };

    dispatch(addItem(item)); // Dispatch action to update Redux store
    alert("Item added to cart successfully!");
  }

  // Show loading screen while fetching data
  if (fetched.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  // Show error message if fetch fails
  if (fetched.error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Error: {fetched.error}</h1>
      </div>
    );
  }

  // Find the specific product from fetched data
  const product = fetched.data.products.find(p => p.id === parseInt(id));

  return (
    <div className="justify-center flex-col items-center flex h-auto lg:py-15 bg-[#a5dc69]/100">
      {/* Product detail card */}
      <div className="product-detail flex w-300 items-center h-120 bg-white shadow-2xl rounded-2xl">
        {/* Product image */}
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-120 h-120 object-cover mb-4 rounded"
        />

        {/* Product details and Add to Cart */}
        <div className="bg-[#78d2fa] h-full flex flex-col justify-between p-10 px-15 items-center rounded-r-2xl">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="mb-4">{product.description}</p>
          <p className="mb-4 underline">{product.availabilityStatus}</p>

          {/* Price section */}
          <div className="flex gap-6">
            <div className="text-4xl font-bold text-green-600">
              ${((product.price - (product.discountPercentage / 100) * product.price)).toFixed(2)}
            </div>
            <span className="text-2xl font-bold text-green-600 line-through">
              ${product.price}
            </span>
          </div>

          {/* Rating and Cart Button */}
          <div className="flex gap-x-10 items-center justify-between">
            <div className="text-xl text-black">★{product.rating}</div>
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              onClick={handleClick}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Link to go back to Home page */}
      <Link to="/" className="mt-7 bg-[#78d2fa] p-2 border rounded-2xl">
        Go Back
      </Link>
    </div>
  );
}
