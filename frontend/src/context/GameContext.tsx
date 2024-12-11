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
  attempts: number;
  isRunning: boolean;
}
interface GameSetup {
  boardSize: number[];
  matchingCards: number;
}
interface GameContextType {
  gameState: GameState;
  gameSetup: GameSetup;
  timer: number;
  initializeGame: () => void;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  setGameSetup: React.Dispatch<React.SetStateAction<GameSetup>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  startGame: () => void;
  endGame: () => void;
}

export const GameContext = createContext<GameContextType | null>(null);

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    attempts: 0,
    isRunning: false,
  });
  const [gameSetup, setGameSetup] = useState<GameSetup>({
    boardSize: [3, 2],
    matchingCards: 2,
  });
  const [timer, setTimer] = useState<number>(0);

  const totalCards = gameSetup.boardSize[0] * gameSetup.boardSize[1];

  const initializeGame = () => {
    const cards = generateCards(totalCards, gameSetup.matchingCards);
    setGameState({
      cards,
      attempts: 0,
      isRunning: false,
    });
    setTimer(0);
  };

  const startGame = () => {
    setGameState((prev) => ({ ...prev, isRunning: true }));
  };

  const endGame = () => {
    setGameState((prev) => ({ ...prev, isRunning: false }));
    console.log(gameState);
    initializeGame();
  };

  useEffect(() => {
    initializeGame();
  }, [gameSetup]);

  useEffect(() => {
    let interval: any | null = null;

    if (gameState.isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (!gameState.isRunning && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameState.isRunning]);

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        gameSetup,
        setGameSetup,
        timer,
        setTimer,
        initializeGame,
        startGame,
        endGame,
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
