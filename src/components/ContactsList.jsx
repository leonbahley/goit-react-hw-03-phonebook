import React from 'react';
const ContactsList = ({ contacts, onClick }) => (
  <>
    <ul className="List">
      {contacts.map(({ id, name, number }) => (
        <li className="ListItem" id={id} key={id}>
          {name}: {number}
          <button className="DeleteBtn" type="button" onClick={onClick}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);
export default ContactsList;
