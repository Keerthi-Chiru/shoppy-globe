🛒 Shoppy Globe – React E-commerce App
Shoppy Globe is a modern, responsive e-commerce web application built with React.js, Redux Toolkit, Tailwind CSS, and React Router. This project showcases how to manage global state (like a shopping cart), fetch data with a custom hook, and implement routing in a scalable React application.

🚀 Features
🧾 Product Listing Page

📦 Product Details Page

🛍️ Cart Page with Add/Remove/Clear functionality

🧠 Redux Toolkit for global state management

🌐 Custom useFetch hook for API data fetching

🎨 Styled with Tailwind CSS

❌ 404 Error Page

📄 About Us & Contact Us pages

📁 Project Structure
php
Copy
Edit
shoppy-globe/
│
├── public/
│   └── index.html
├── src/
│   ├── assets/               # Logo, cart icon, etc.
│   ├── components/           # Reusable components
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductList.jsx
│   │   └── ... 
│   ├── pages/                # Pages like About, Contact, Error
│   ├── utils/                # Redux slice and custom hooks
│   │   ├── cartSlice.js
│   │   └── useFetch.js
│   ├── App.jsx               # Main component
│   ├── main.jsx              # Entry point
│   └── store.js              # Redux store setup
├── tailwind.config.js
├── package.json
└── README.md

🛠️ Tech Stack
| Technology    | Purpose                 |
| ------------- | ----------------------- |
| React         | Frontend Framework      |
| Redux Toolkit | State Management        |
| React Router  | Routing between pages   |
| Tailwind CSS  | Styling                 |
| JavaScript    | Core language           |
| Vite          | Build tool & dev server |

🧩 Installation and Setup
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/Keerthi-Chiru/shoppy-globe.git
cd shoppy-globe
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the app
bash
Copy
Edit
npm run dev
4. Build for production
bash
Copy
Edit
npm run build

📌 Key Components Explained
Header.jsx
Displays site logo and nav links.

Cart icon shows dynamic item count from Redux.

Cart.jsx
Lists all cart items.

Allows clearing the cart using clearCart() action.

ProductItem.jsx
Displays individual product info.

Handles discounted price.

Dispatches addItem() when clicked.

ProductList.jsx
Loops through the product list and renders ProductItem components.

Each product links to its detail page.

useFetch.js
Custom hook to fetch data from API.

Returns data, loading, and error states.

cartSlice.js
Redux logic for adding, removing, and clearing cart items.

Also maintains totalQuantity and totalPrice.

🌍 API Used
You can use any open API that returns product data, for example:

arduino
Copy
Edit
https://dummyjson.com/products
Make sure to update the URL in your useFetch() call.


