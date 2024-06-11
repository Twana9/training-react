export default function ContactList({ selectedID, contacts, onSelectId }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {contacts.map((contact) => (
        <button key={contact.id} onClick={() => onSelectId(contact.id)}>
          {selectedID === contact.id ? <b>{contact.name}</b> : contact.name}
        </button>
      ))}
    </div>
  );
}
