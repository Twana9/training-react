export default function Letter2({ letter, onToggle, isSelected }) {
  return (
    <li style={{ background: isSelected ? "yellow" : "" }}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggle(letter.id)}
      />
      {letter.subject}
    </li>
  );
}
