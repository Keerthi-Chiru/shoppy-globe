import { Link } from "react-router-dom";  // Import Link for client-side navigation

export default function NotFound() {
  return (
    // Full viewport height container with light red background, centered content, and padding
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center text-center p-8">
      
      {/* Large, bold red "404" NotFound code */}
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
      
      {/* Subheading explaining the NotFound */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      
      {/* Descriptive paragraph about the missing page */}
      <p className="text-md text-gray-600 mb-6">
        Oops! The page you’re looking for doesn't exist or has been moved.
      </p>
      
      {/* Link styled as a button to navigate back to the homepage */}
      <Link
        to="/"
        className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
