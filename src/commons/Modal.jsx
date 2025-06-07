import React, { useEffect, useState } from 'react';
import { useModal } from '../context/ModalContext';

const Modal = ({ title, message }) => {
  const { closeModal } = useModal();
  const [show, setShow] = useState(false);

  // Animate in
  useEffect(() => {
    setTimeout(() => setShow(true), 10);

    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeModal]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`absolute inset-0 bg-transparent transition-opacity duration-300 ${
          show ? 'bg-opacity-60' : 'bg-opacity-0'
        }`}
        onClick={closeModal}
      />
      <div
        className={`relative z-10 bg-brand rounded-lg shadow-xl p-6 w-full max-w-md transform transition-all duration-300 md:px-5 lg:px-10 xl:px-12 2xl:px-12 ${
          show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {title && <h2 className="text-xl font-bold mb-2 text-brand">{title}</h2>}
        {message && (
          <p className="whitespace-pre-line text-brand md:text-xl sm:text-sm">{message}</p>
        )} 
        <div className="mt-4 text-right flex justify-end gap-6">
          <button
            onClick={closeModal}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition font-semibold"
          >
            Close
          </button>
           <button
            onClick={closeModal}
            className="bg-brand-light text-brand-color px-4 py-2 rounded transition font-semibold"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
