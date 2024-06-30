import useCart from "./store.js";

export default function ProductsList({ products }) {
  const addToCart = useCart((state) => state.addToCart);
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)}>Add chart</button>
        </div>
      ))}
    </>
  );
}
