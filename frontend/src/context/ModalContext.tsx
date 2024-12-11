import { createContext, ReactNode, useState, useContext } from "react";

interface ModalContextType {
  isSetupOpen: boolean;
  setIsSetupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        isSetupOpen,
        setIsSetupOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

// ModalContext Hook (for setup and win modals).
export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
