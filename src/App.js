import React, { useState } from "react";
import ContactList from "./Components/ContactList";
import ContactDetail from "./Components/ContactDetail";
import AddContactModal from "./Components/AddContactModal";
import EditContactModal from "./Components/EditContactModal";
import { contacts as initialContacts } from "./data";

function App() {
  const [selectedContact, setSelectedContact] = useState(null);
  const [view, setView] = useState("list");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [contactList, setContactList] = useState(initialContacts);

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setView("detail");
  };

  const handleBackToList = () => {
    setView("list");
    setSelectedContact(null);
  };

  const handleAddContact = (newContact) => {
    setContactList((prevContacts) => [
      ...prevContacts,
      { id: prevContacts.length + 1, ...newContact },
    ]);
    setIsModalOpen(false);
  };

  const handleEditContact = (updatedContact) => {
    setContactList((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setIsEditModalOpen(false);
    setSelectedContact(updatedContact);
  };

  const handleEditButtonClick = () => {
    setIsEditModalOpen(true);
  };

  const handleDeleteContact = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (confirmDelete) {
      setContactList((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== selectedContact.id)
      );
      handleBackToList();
    }
  };

  return (
    <div className="container">
      {view === "list" && (
        <>
          <ContactList
            contacts={contactList}
            onSelectContact={handleContactSelect}
            onEditContact={handleEditButtonClick}
          />
          <button className="add-button" onClick={() => setIsModalOpen(true)}>
            Add contact
          </button>
        </>
      )}

      {view === "detail" && selectedContact && (
        <ContactDetail
          contact={selectedContact}
          onBack={handleBackToList}
          onEditContact={handleEditButtonClick}
          onDeleteContact={handleDeleteContact}
        />
      )}

      <AddContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddContact={handleAddContact}
      />

      {isEditModalOpen && (
        <EditContactModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onEditContact={handleEditContact}
          contact={selectedContact}
        />
      )}
    </div>
  );
}

export default App;
