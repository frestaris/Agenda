import React from "react";
import edit from "../Assets/edit.png";
import exit from "../Assets/exit.png";
import deleteIcon from "../Assets/delete.png";
import "./ContactDetail.css";

const ContactDetail = ({ contact, onBack, onEditContact, onDeleteContact }) => {
  return (
    <div className="contact-detail-container">
      <div className="contact-detail">
        <div className="contact-detail-top">
          <img
            src={contact.img}
            alt={contact.name}
            className="contact-detail-image"
          />
          <h2>{contact.name}</h2>
        </div>
        <div className="contact-detail-information">
          {contact.age && (
            <p>
              <strong>Age:</strong> {contact.age}
            </p>
          )}
          {contact.address && (
            <p>
              <strong>Address:</strong> {contact.address}
            </p>
          )}
          <p>
            <strong>Phone:</strong> {contact.phone}
          </p>
        </div>
        <br />
        <button className="edit-button" onClick={onEditContact}>
          <img src={edit} alt="Edit" className="icon" />
        </button>
        <button className="delete-button" onClick={onDeleteContact}>
          <img src={deleteIcon} alt="Delete" className="icon" />
        </button>
        <button onClick={onBack} className="back-button">
          <img src={exit} alt="Exit" className="icon" />
        </button>
      </div>
    </div>
  );
};

export default ContactDetail;
