export default function Contact() {
  return (
    // Container div with padding, green background, centered content, and full screen height
    <div className="p-8 bg-[#a5dc69] text-center min-h-screen flex flex-col items-center justify-center">
      
      {/* Heading for the Contact Us page */}
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      
      {/* Introductory text encouraging users to get in touch */}
      <p className="text-lg mb-6">
        Have a question, suggestion, or just want to say hi? We’d love to hear from you!
      </p>

      {/* Contact form with max width and vertical spacing between elements */}
      <form className="w-full max-w-md space-y-4">
        {/* Text input for user's name */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {/* Email input for user's email */}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        {/* Textarea for user's message */}
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
        {/* Submit button styled with green background and hover effect */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition duration-200">
          Send Message
        </button>
      </form>
    </div>
  );
}
