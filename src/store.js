import { create } from "zustand";
import { produce } from "immer";

const initialState = {
  user: {
    id: "user123",
    friends: ["jack", "jessica", "colin", "paulo"],
    profile: {
      name: "twana",
      email: "twana@gmail.com",
      address: {
        street: "123 mainst",
        city: "oldTown",
        zipcode: "12345",
      },
    },
  },
};

export const useStore2 = create((set) => ({
  ...initialState,
  updateAdressStreet: (street) =>
    set(
      produce((state) => {
        state.user.profile.address.street = street;
      })
    ),
}));

export const useStore = create((set) => ({
  ...initialState,
  updateAdressStreet: (street) =>
    set((state) => ({
      user: {
        ...state.user,
        profile: {
          ...state.user.profile,
          address: { ...state.user.profile.address, street: street },
        },
      },
    })),
}));
//////Cart Stuff //////////////////////////////////////////////////
const useCart = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      if (!state.cart.some((item) => item.id === product.id))
        return { cart: [...state.cart, product] };
      return state;
    }),
  removeFromCart: (productID) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productID),
    })),
  clearCart: () => set({ cart: [] }),
}));
export default useCart;
