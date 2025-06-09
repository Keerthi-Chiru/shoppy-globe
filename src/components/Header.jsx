import { useSelector } from "react-redux"; // To access Redux state
import { Link } from "react-router";       // For client-side navigation between routes
import logo from '../assets/logo.png';     // Logo image import
import cartIcon from '../assets/cart.png'; // Cart icon image import

export default function Header() {
    // Get the number of items in the cart from Redux store
    const quantity = useSelector((state) => state.cart.items.length);

    return (
        // Header container with background color, sticky positioning, padding, shadow, and flex layout
        <header className="navigation-container bg-[#78d2fa] sticky top-0 z-50 flex items-center justify-between p-4 lg:h-20 h-10 md:h-15 shadow-2xl">
            
            {/* Logo section positioned absolutely with responsive sizing and hover rotation animation */}
            <div className="logo w-15 h-15 absolute p-1 pt-7 justify-left md:w-20 md:h-20 lg:w-30 lg:h-30 hover:rotate-y-360 transition-transform duration-500 ease-in-out">
                {/* Link to homepage wrapping the logo image */}
                <Link to="/">
                    <img src={logo} alt="Shoppy Globe Logo" className="shadow-2xl rounded-full" />
                </Link>
            </div>

            {/* Brand name next to the logo with responsive font size and padding */}
            <div>
                <h1 className="text-md font-bold text-black pl-25 lg:text-2xl text-shadow-lg lg:pl-35">
                    Shoppy Globe
                </h1>
            </div>

            {/* Navigation menu, hidden on smaller screens, with flex layout and hover effects on links */}
            <nav className="navigation mr-45 text-xl hidden md:inline-block font-semibold text-shadow-lg">
                <ul className="flex gap-4 md:text-sm lg:text-xl">
                    <li className="hover:scale-105 transition-transform duration-50 ease-in-out active:scale-90">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:scale-105 transition-transform duration-50 ease-in-out active:scale-90">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="hover:scale-105 transition-transform duration-50 ease-in-out active:scale-90">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Cart icon with quantity badge, wrapped in a Link to the cart page */}
            <Link to="/cart">
                <div className="cart flex gap-4 mr-4 hover:scale-105 transition-transform duration-50 ease-in-out active:scale-90">
                    <img src={cartIcon} alt="Cart Icon" className="w-7 h-7" />
                    <span className="cart-coun text-xl font-bold">({quantity})</span>
                </div>
            </Link>
        </header>
    );
}
