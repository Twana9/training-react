export default function ItemList({ userList, onToggle }) {
  return (
    <>
      <ul>
        {userList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.seen}
              onChange={(e) => {
                onToggle(item.id, e.target.checked);
              }}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}
