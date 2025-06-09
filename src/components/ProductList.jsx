import ProductItem from './ProductItem';
// Change this to 'react-router-dom' for typical React Router usage in web apps
import { Link } from 'react-router-dom';

export default function ProductList({ products }) {
    return (
        // Container with grid layout for products, responsive columns, padding, and background color
        <div className="product-list grid grid-cols-1 items-center justify-center w-auto m-auto pl-25 pb-10 pt-10 bg-[#a5dc69]/100 md:grid-cols-2 lg:grid-cols-3 lg:pt-15 gap-10 px-10 pointer">
            {products.map((product) => (
                // Each product wrapped in a Link to the product details page using product id as param
                <Link to={`/product/${product.id}`} key={product.id}>
                    <ProductItem product={product} />
                </Link>
            ))}
        </div>
    );
}
