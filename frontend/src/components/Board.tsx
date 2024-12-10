import "@styles/Board.scss";
import { useState, useEffect } from "react";

function Board() {
  const [cards, setCards] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [attempts, setAttempts] = useState<number>(0);

  useEffect(() => {
    initializeGame();
  }, []);

  const matrixSize = [4, 2];
  const totalCards = matrixSize[0] * matrixSize[1];
  const matchesCuantity = 2;

  const initializeGame = () => {
    const baseCards = Array.from(
      { length: totalCards / matchesCuantity },
      (_, i) => i,
    );
    const shuffledCards = Array(matchesCuantity)
      .fill(baseCards)
      .flat()
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setAttempts(0);
  };

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
      setAttempts((prev) => prev + 1);
    }
    setTimeout(() => setFlippedCards([]), 1000);
  };
  useEffect(() => {
    setTimeout(() => {
      if (matchedCards.length === totalCards / matchesCuantity) {
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
