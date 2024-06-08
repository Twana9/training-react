import { useState } from "react";
import { filterItems, foods } from "./data";

export default function FilterList() {
  const [query, setQuery] = useState("");

  const result = filterItems(query, foods);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <Items items={result} />
    </>
  );
}
function SearchBar({ query, onChange }) {
  return <input type="text" value={query} onChange={onChange} />;
}
function Items({ items }) {
  return (
    <>
      {items.map((item) => (
        <div style={{ fontSize: "25px" }} key={item.id}>
          <span>{item.name}</span>
          {"====="}
          <span>{item.description}</span>
          <hr />
        </div>
      ))}
    </>
  );
}
