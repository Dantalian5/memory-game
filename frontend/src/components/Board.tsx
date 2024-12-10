import "@styles/Board.scss";
import { useState, useEffect } from "react";
import { useGameContext } from "@/context/GameContext";

function Board() {
  const gameContext = useGameContext();

  const { gameState, setGameState, initializeGame, gameSetup } = gameContext;
  const { cards, attempts } = gameState;
  const { matchesCuantity } = gameSetup;

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
      if (matchedCards.length === cards.length / matchesCuantity) {
        alert(`You won in ${attempts} attempts!`);
        initializeGame();
      }
    }, 1000);
  }, [matchedCards]);
  return (
    <div className="board">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${(flippedCards.includes(index) || matchedCards.includes(card)) && "flipped"} card`}
          onClick={() => handleCardClick(index)}
        >
          <div className="card__inner">
            <div className="card__front">{card}</div>
            <div className="card__back">{card}?</div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Board;
