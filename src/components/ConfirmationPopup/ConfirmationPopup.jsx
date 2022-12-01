import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Popup from '../Popup/Popup';

const ConfirmationPopup = ({ name, isOpen, onClose, onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit();
  };

  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <PopupWithForm
        title='Вы уверены?'
        buttonText='Да'
        name={name}
        onSubmit={handleSubmit}
        isFormValid={true}
      />
    </Popup>
  );
};

export default ConfirmationPopup;
