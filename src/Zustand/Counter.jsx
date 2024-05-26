import { useCounterStore } from "./store.js";

export default function Counter() {
  const { count, increament, decrement, reset } = useCounterStore();

  return (
    <>
      <p>{count}</p>
      <button onClick={increament}>InCreament</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
