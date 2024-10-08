import React, { useState } from "react";
import "./ContactList.css";
import AddContactModal from "./AddContactModal";

const ContactList = ({ contacts, onSelectContact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddContact = (newContact) => {
    console.log("New Contact Added:", newContact);
  };

  return (
    <div>
      <h1 className="heading">AGENDA</h1>
      <ul>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="contact-item"
            onClick={() => onSelectContact(contact)}
          >
            <div className="contact-details">
              <img
                src={contact.img}
                alt={contact.name}
                className="contact-image"
                width="32"
                height="32"
              />
              <strong className="contact-name">{contact.name}</strong>
            </div>
          </li>
        ))}
      </ul>
      <AddContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddContact={handleAddContact}
      />
    </div>
  );
};

export default ContactList;
