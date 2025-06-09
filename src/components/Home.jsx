import { useFetch } from "../utils/useFetch"; // Custom hook to fetch product data
import ProductList from "./ProductList"; // Component to display all products

export default function Home() {
  // Call the custom fetch hook with API endpoint
  const fetched = useFetch('https://dummyjson.com/products');

  return (
    <>
      {/* Hero / Welcome section */}
      <div className="flex flex-col items-center bg-[#a5dc69] border-b-3 p-10 justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg">
          Explore our products around the globe and add them to your cart!
        </p>
      </div>

      {/* Conditional rendering based on fetch state */}
      {fetched.loading ? (
        // If data is still loading
        <div className="Loading">
          <h1 className="text-center py-10 text-lg">Your Products are Loading....</h1>
        </div>
      ) : fetched.error ? (
        // If there is an error while fetching
        <div className="Error">
          <h1>Error: {fetched.error}</h1>
        </div>
      ) : fetched.data && fetched.data.products ? (
        // If data is fetched successfully and contains products
        <ProductList products={fetched.data.products} />
      ) : (
        // If no products are found (edge case)
        <div className="NoData">
          <h1>No Products Available</h1>
        </div>
      )}
    </>
  );
}
