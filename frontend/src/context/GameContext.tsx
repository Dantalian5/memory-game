import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { generateCards } from "@/lib/utils";
import { useModalContext } from "@/context/ModalContext";
import { useTime } from "@/context/TimeContext";
import { useSetupContext } from "@/context/SetupContext";

interface GameState {
  cards: number[];
  attempts: number;
  isRunning: boolean;
}
interface GameContextType {
  gameState: GameState;
  initializeGame: () => void;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  startGame: () => void;
  endGame: () => void;
}

export const GameContext = createContext<GameContextType | null>(null);

const GameProvider = ({ children }: { children: ReactNode }) => {
  const modalContext = useModalContext();
  const { boardSize, matchingCards } = useSetupContext().gameSetup;
  const timeContext = useTime();
  const { setIsModalOpen, setWinData } = modalContext;
  const { time, setIsRunning } = timeContext;
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    attempts: 0,
    isRunning: false,
  });

  const totalCards = boardSize[0] * boardSize[1];

  const initializeGame = () => {
    const cards = generateCards(totalCards, matchingCards);
    setGameState({
      cards,
      attempts: 0,
      isRunning: false,
    });
  };

  const startGame = () => {
    setGameState((prev) => ({ ...prev, isRunning: true }));
  };

  const endGame = () => {
    setGameState((prev) => ({ ...prev, isRunning: false }));
    setWinData({ time: time, attempts: gameState.attempts });
    setIsModalOpen(true);
    initializeGame();
  };

  useEffect(() => {
    initializeGame();
  }, [boardSize, matchingCards]);

  useEffect(() => {
    setIsRunning(gameState.isRunning);
  }, [gameState.isRunning]);

  const gameContextValue = useMemo(
    () => ({
      gameState,
      setGameState,
      initializeGame,
      startGame,
      endGame,
    }),
    [gameState],
  );
  return (
    <GameContext.Provider value={gameContextValue}>
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
