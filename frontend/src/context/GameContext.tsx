import { createContext, ReactNode, useState, useContext } from "react";
import { generateCards } from "@/lib/utils";

// Crear el contexto

interface GameState {
  cards: number[];
  matchedCards: number[];
  flippedCards: number[];
  attempts: number;
}
interface GameSetup {
  matrixSize: number[];
  matchesCuantity: number;
}
interface GameContextType {
  gameState: GameState;
  gameSetup: GameSetup;
  initializeGame: () => void;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
}

export const GameContext = createContext<GameContextType | null>(null);

// Proveedor del contexto
const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    matchedCards: [],
    flippedCards: [],
    attempts: 0,
  });

  const gameSetup = {
    matrixSize: [4, 2],
    matchesCuantity: 2,
  };

  const totalCards = gameSetup.matrixSize[0] * gameSetup.matrixSize[1];

  const initializeGame = () => {
    const cards = generateCards(totalCards, gameSetup.matchesCuantity);
    setGameState({
      cards,
      matchedCards: [],
      flippedCards: [],
      attempts: 0,
    });
  };

  return (
    <GameContext.Provider
      value={{ gameState, setGameState, gameSetup, initializeGame }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
export const useGameContext = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
