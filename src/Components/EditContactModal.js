import React, { useEffect, useState } from "react";
import "./AddContactModal.css";

const EditContactModal = ({ isOpen, onClose, onEditContact, contact }) => {
  const [image, setImage] = useState(contact.image || null);

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
    const updatedContact = {
      id: contact.id,
      name: e.target.name.value,
      age: e.target.age.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      image: image,
    };
    onEditContact(updatedContact);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.getElementById("name").value = contact.name;
      document.getElementById("age").value = contact.age;
      document.getElementById("phone").value = contact.phone;
      document.getElementById("address").value = contact.address;
      setImage(contact.image);
    }
  }, [isOpen, contact]);

  if (!isOpen) return null;

  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <div className="add-modal">
        <h2>Edit Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input type="number" id="age" name="age" placeholder="Age" />
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            required
          />
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && (
            <img src={image} alt="Preview" className="contact-detail-image" />
          )}
          <button type="submit" className="add-button-modal">
            Save
          </button>
        </form>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
      </div>
    </>
  );
};

export default EditContactModal;
