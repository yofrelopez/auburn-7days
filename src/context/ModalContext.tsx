"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isGivingModalOpen: boolean;
  openGivingModal: () => void;
  closeGivingModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isGivingModalOpen, setIsGivingModalOpen] = useState(false);

  const openGivingModal = () => setIsGivingModalOpen(true);
  const closeGivingModal = () => setIsGivingModalOpen(false);

  return (
    <ModalContext.Provider value={{ isGivingModalOpen, openGivingModal, closeGivingModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
