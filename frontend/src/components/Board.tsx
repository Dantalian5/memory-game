import "@styles/Board.scss";
import { useState, useEffect } from "react";
import Card from "@components/Card";
import { useGameContext } from "@/context/GameContext";

function Board() {
  const gameContext = useGameContext();

  const { gameState, setGameState, initializeGame, gameSetup } = gameContext;
  const { cards, attempts } = gameState;
  const { matchesCuantity, matrixSize } = gameSetup;

  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    if (
      flippedCards.length < matchesCuantity &&
      !flippedCards.includes(index)
    ) {
      setFlippedCards((prev) => [...prev, index]);
      if (flippedCards.length === matchesCuantity - 1) {
        checkMatch([...flippedCards, index]);
      }
    }
  };

  const checkMatch = (flippedCards: number[]) => {
    if (flippedCards.every((card) => cards[card] === cards[flippedCards[0]])) {
      setMatchedCards((prev) => [...prev, cards[flippedCards[0]]]);
      setGameState((prev) => ({ ...prev, attempts: prev.attempts + 1 }));
    }
    setTimeout(() => setFlippedCards([]), 1000);
  };
  useEffect(() => {
    setTimeout(() => {
      if (
        matchedCards.length === cards.length / matchesCuantity &&
        matchedCards.length > 0
      ) {
        alert(`You won in ${attempts} attempts!`);
        setFlippedCards([]);
        setMatchedCards([]);
        initializeGame();
      }
    }, 1000);
  }, [matchedCards]);
  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${matrixSize[0]}, minmax(0px, 200px))`,
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
          {card}
        </Card>
      ))}
    </div>
  );
}
export default Board;
