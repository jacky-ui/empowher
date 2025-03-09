import { useState, useEffect, useRef } from "react";

export function useModal(autoOpenDelay = null) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (autoOpenDelay !== null) {
      const timer = setTimeout(() => setIsOpen(true), autoOpenDelay);
      return () => clearTimeout(timer);
    }
  }, [autoOpenDelay]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleBackdropClick = (e) => {
    if (modalRef.current && e.target === modalRef.current) {
      setIsOpen(false);
    }
  };

  return { isOpen, setIsOpen, modalRef, handleBackdropClick };
}