import { createContext, ReactNode, useState, useContext } from "react";

interface ModalContextType {
  isSetupOpen: boolean;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSetupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  winData: { time: number; attempts: number };
  setWinData: React.Dispatch<
    React.SetStateAction<{ time: number; attempts: number }>
  >;
}

export const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isSetupOpen, setIsSetupOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [winData, setWinData] = useState({ time: 0, attempts: 0 });
  return (
    <ModalContext.Provider
      value={{
        isSetupOpen,
        setIsSetupOpen,
        isModalOpen,
        setIsModalOpen,
        winData,
        setWinData,
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
