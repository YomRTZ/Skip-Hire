// context/ModalContext.js
import React, { createContext, useContext, useState } from 'react';
import Modal from '../commons/Modal';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', message: '' });

  const openModal = ({ title, message }) => {
    setModalData({ title, message });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData({ title: '', message: '' });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && <Modal title={modalData.title} message={modalData.message} />}
    </ModalContext.Provider>
  );
};
