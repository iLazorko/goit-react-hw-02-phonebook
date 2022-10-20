// import { nanoid } from 'nanoid';

export function ContactList({ contacts, filter, deleteContact }) {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => {
          return (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button type="button" onClick={() => deleteContact(contact.id)}>
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}
