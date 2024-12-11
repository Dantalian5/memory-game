import { createContext, ReactNode, useState, useContext } from "react";

interface GameSetup {
  boardSize: number[];
  matchingCards: number;
}
interface SetupContextType {
  gameSetup: GameSetup;
  setGameSetup: React.Dispatch<React.SetStateAction<GameSetup>>;
}

export const SetupContext = createContext<SetupContextType | null>(null);

const SetupProvider = ({ children }: { children: ReactNode }) => {
  const [gameSetup, setGameSetup] = useState<GameSetup>({
    boardSize: [3, 2],
    matchingCards: 2,
  });

  return (
    <SetupContext.Provider value={{ gameSetup, setGameSetup }}>
      {children}
    </SetupContext.Provider>
  );
};

export default SetupProvider;

// SetupContext Hook.
export const useSetupContext = (): SetupContextType => {
  const context = useContext(SetupContext);
  if (!context) {
    throw new Error("useSetupContext must be used within a SetupProvider");
  }
  return context;
};
