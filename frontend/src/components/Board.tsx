import "@styles/components/Board.scss";
import { useState, useEffect } from "react";
import Card from "@components/Card";
import { useGameContext } from "@/context/GameContext";

function Board() {
  const gameContext = useGameContext();

  const { gameState, setGameState, gameSetup, endGame, startGame } =
    gameContext;
  const { cards, isRunning } = gameState;
  const { matchingCards, boardSize } = gameSetup;

  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  const checkMatch = (flippedCards: number[]) => {
    if (flippedCards.every((card) => cards[card] === cards[flippedCards[0]])) {
      setMatchedCards((prev) => [...prev, cards[flippedCards[0]]]);
    }
    setTimeout(() => setFlippedCards([]), 1000);
  };
  const handleCardClick = (index: number) => {
    if (flippedCards.length < matchingCards && !flippedCards.includes(index)) {
      setFlippedCards((prev) => [...prev, index]);
      if (flippedCards.length === matchingCards - 1) {
        checkMatch([...flippedCards, index]);
        setGameState((prev) => ({ ...prev, attempts: prev.attempts + 1 }));
      }
    }
    if (!isRunning) {
      startGame();
    }
  };
  const resetCardState = () => {
    setFlippedCards([]);
    setMatchedCards([]);
  };

  useEffect(() => {
    setTimeout(() => {
      if (
        matchedCards.length === cards.length / matchingCards &&
        matchedCards.length > 0
      ) {
        endGame();
        resetCardState();
      }
    }, 1000);
  }, [matchedCards]);
  useEffect(() => {
    resetCardState();
  }, [cards]);

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${boardSize[0]}, minmax(0px, 200px))`,
        gap: "10px",
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          isFlipped={
            flippedCards.includes(index) || matchedCards.includes(card)
          }
          onClick={() => handleCardClick(index)}
        >
          {/* isRunning && card */}
          {card}
        </Card>
      ))}
    </div>
  );
}
export default Board;
