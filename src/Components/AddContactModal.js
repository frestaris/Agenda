import React, { useState } from "react";
import "./AddContactModal.css";

const AddContactModal = ({ isOpen, onClose, onAddContact }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value,
      age: e.target.age.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      img: image || "",
    };
    onAddContact(newContact);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <div className="add-modal">
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="number" name="age" placeholder="Age" />
          <input type="text" name="phone" placeholder="Phone" required />
          <input type="text" name="address" placeholder="Address" />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <button className="add-button-modal" type="submit">
            Add
          </button>
        </form>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </>
  );
};

export default AddContactModal;
