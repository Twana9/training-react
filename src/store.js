import { create } from "zustand";

const useCart = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productID) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productID),
    })),
  clearCart: () => set({ cart: [] }),
}));
export default useCart;
