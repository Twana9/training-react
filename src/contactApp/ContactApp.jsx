import { useState } from "react";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

export default function ContactApp() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedID, setSelectedID] = useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedID);
  console.log(selectedContact);

  function handleSave(newContact) {
    setContacts(
      contacts.map((contact) => {
        if (contact.id === newContact.id) return newContact;
        else return contact;
      })
    );
  }
  return (
    <>
      <ContactList
        selectedID={selectedID}
        contacts={contacts}
        onSelectId={(id) => setSelectedID(id)}
      />
      <hr />
      <ContactDetail
        key={selectedContact.id}
        selectedContact={selectedContact}
        onSave={handleSave}
      />
    </>
  );
}

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
