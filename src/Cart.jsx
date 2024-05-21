import useCart from "./store.js";
export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart((state) => ({
    cart: state.cart,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));
  return (
    <>
      <h2>your cart</h2>
      {cart.map((cartItem) => (
        <div key={cartItem.id}>
          {cartItem.name}
          <button onClick={() => removeFromCart(cartItem.id)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </>
  );
}
