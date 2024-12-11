import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { generateCards } from "@/lib/utils";

interface GameState {
  cards: number[];
  matchedCards: number[];
  attempts: number;
}
interface GameSetup {
  boardSize: number[];
  matchingCards: number;
}
interface GameContextType {
  gameState: GameState;
  gameSetup: GameSetup;
  initializeGame: () => void;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  setGameSetup: React.Dispatch<React.SetStateAction<GameSetup>>;
}

export const GameContext = createContext<GameContextType | null>(null);

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    matchedCards: [],
    attempts: 0,
  });
  const [gameSetup, setGameSetup] = useState<GameSetup>({
    boardSize: [3, 2],
    matchingCards: 2,
  });

  const totalCards = gameSetup.boardSize[0] * gameSetup.boardSize[1];

  const initializeGame = () => {
    const cards = generateCards(totalCards, gameSetup.matchingCards);
    setGameState({
      cards,
      matchedCards: [],
      attempts: 0,
    });
  };
  useEffect(() => {
    initializeGame();
  }, [gameSetup]);

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        gameSetup,
        setGameSetup,
        initializeGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

// GameContext Hook.
export const useGameContext = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
