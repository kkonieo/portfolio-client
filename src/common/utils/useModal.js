import { useState, useCallback } from 'react';

function useModal() {
  const [showModal, setShow] = useState(false);

  const openModal = useCallback(() => {
    setShow(true);
  }, []);
  const closeModal = useCallback(() => {
    setShow(false);
  }, []);

  return { showModal, openModal, closeModal };
}

export default useModal;
