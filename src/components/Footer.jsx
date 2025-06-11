import { Link } from "react-router";


export default function Footer() {
    return (
        // Footer section with blue background, black text, padding, centered text, and strong shadow
        <footer className="bg-[#78d2fa] text-black p-4 text-center shadow-2xl">
            
            {/* Container to center content and limit max width */}
            <div className="container mx-auto">
                
                {/* Copyright text with responsive font size */}
                <p className="text-sm md:text-lg">© 2023 Shoppy Globe. All rights reserved.</p>
                
                {/* Navigation links with margin top and horizontal spacing */}
                <div className="mt-2">
                    {/* Anchor links with horizontal margin and underline on hover */}
                    <Link to="/" className="mx-2 hover:underline">Home</Link>
                    <Link to="/about" className="mx-2 hover:underline">About Us</Link>
                    <Link to="/contact" className="mx-2 hover:underline">Contact</Link>
                </div>
            </div>
        </footer>
    );
}
