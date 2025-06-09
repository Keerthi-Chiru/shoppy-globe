import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

export default function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Update filteredProducts whenever products or searchTerm changes
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="bg-[#a5dc69]/100 flex justify-center items-center flex-col">
      {/* Search Input Field */}
      <input
        type="text"
        placeholder="Search Products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input bg-white border-2 my-4 w-80 p-2 rounded-xl shadow-md text-center"
      />


      <div className="product-list grid grid-cols-1 items-center justify-center w-auto m-auto pb-10 pt-5 bg-[#a5dc69]/100 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            
              <ProductItem key={product.id} product={product} />

          ))
        ) : (
          <p className="text-xl text-red-600 font-semibold mt-5">No products found.</p>
        )}
      </div>
    </div>
  );
}
