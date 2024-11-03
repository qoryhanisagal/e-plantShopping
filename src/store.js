import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the cartReducer from CartSlice

const store = configureStore({
  reducer: {
    cart: cartReducer, // Assign cartReducer to manage the 'cart' slice of state
  },
});
export default store; // Export the store for use in the application
