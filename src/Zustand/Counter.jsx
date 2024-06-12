import { useCounterStore } from "./store.js";

export default function Counter() {
  //you can extarct them separetly as well but in the parameter pass this (state => state.count)
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
