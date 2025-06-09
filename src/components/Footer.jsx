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
                    <a href="#home" className="mx-2 hover:underline">Home</a>
                    <a href="#about" className="mx-2 hover:underline">About Us</a>
                    <a href="#contact" className="mx-2 hover:underline">Contact</a>
                </div>
            </div>
        </footer>
    );
}
