import { useState } from "react";

export default function ContactDetail({ selectedContact, onSave }) {
  const [name, setName] = useState(selectedContact.name);
  const [email, setEmail] = useState(selectedContact.email);

  console.log(name);
  return (
    <div>
      <label>
        Name :
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email :
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />

      <button
        onClick={() => {
          const newContact = {
            id: selectedContact.id,
            name: name,
            email: email,
          };
          onSave(newContact);
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          setName(selectedContact.name);
          setEmail(selectedContact.email);
        }}
      >
        Reset
      </button>
    </div>
  );
}
