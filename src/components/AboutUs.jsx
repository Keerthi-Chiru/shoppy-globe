export default function AboutUs() {
  return (
    // Container div with padding, background color, centered content, and minimum full screen height
    <div className="p-8 bg-[#a5dc69] text-center min-h-screen flex flex-col justify-center items-center">
      
      {/* Company logo image with fixed width, height and bottom margin */}
      <img
        src="./src/assets/logo.png"
        alt="Shoppy Globe Logo"
        className="w-24 h-24 mb-6"
      />
      
      {/* Main heading for About Us section */}
      <h1 className="text-4xl font-bold mb-4">About Shoppy Globe</h1>
      
      {/* Paragraph describing the company's values and goals */}
      <p className="max-w-3xl text-lg leading-relaxed">
        At <strong>Shoppy Globe</strong>, we believe shopping should be simple, exciting, and personal. 
        Our goal is to bring you handpicked products at affordable prices, 
        while keeping design, quality, and experience at the heart of everything we do.
      </p>
      
      {/* Additional paragraph about the company's mission and product range */}
      <p className="mt-4 max-w-2xl text-md ">
        Founded by passionate creators, our mission is to redefine how people experience e-commerce. 
        Whether it's fashion, lifestyle, or daily essentials — you’ll find something unique here.
      </p>
    </div>
  );
}
