import { createSlice } from "@reduxjs/toolkit";

// Create the cart slice to manage cart state and actions
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],          // Array of cart items
        totalQuantity: 0,   // Total number of items in the cart
        totalPrice: 0,      // Total price of all items combined
    },
    reducers: {
        // Add an item to the cart or update quantity if it already exists
        addItem(state, action) {
            const newItem = action.payload;
            const quantity = newItem.quantity || 1;  // Default quantity is 1 if not provided

            // Check if item already exists in cart
            const existingItem = state.items.find(item => item.id === newItem.id);

            if (existingItem) {
                // If exists, increment the quantity and totalPrice of that item
                existingItem.quantity += quantity;
                existingItem.totalPrice += newItem.price * quantity;
            } else {
                // If not exists, add new item with quantity and totalPrice
                state.items.push({
                    ...newItem,
                    quantity: quantity,
                    totalPrice: newItem.price * quantity,
                });
            }

            // Update the overall cart totals
            state.totalQuantity += quantity;
            state.totalPrice += newItem.price * quantity;

            console.log("Updated total quantity:", state.totalQuantity);
        },

        // Remove an item completely from the cart by ID
        removeItem(state, action) {
  const id = action.payload;
  const existingItem = state.items.find(item => item.id === id);

  if (existingItem) {
    // Decrease quantity and totalPrice
    existingItem.quantity -= 1;
    existingItem.totalPrice -= existingItem.price;

    // Also update global totals
    state.totalQuantity -= 1;
    state.totalPrice -= existingItem.price;

    // If quantity becomes 0, remove the item from the cart
    if (existingItem.quantity === 0) {
      state.items = state.items.filter(item => item.id !== id);
    }
  }
},

        // Clear the entire cart
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
});

// Export actions for dispatching
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export reducer to be used in the store
export default cartSlice.reducer;
