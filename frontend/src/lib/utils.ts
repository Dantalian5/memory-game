export const generateCards = (
  totalCards: number,
  matchesCuantity: number,
): number[] => {
  const baseCards = Array.from(
    { length: totalCards / matchesCuantity },
    (_, i) => i,
  );
  const shuffledCards = Array(matchesCuantity)
    .fill(baseCards)
    .flat()
    .sort(() => Math.random() - 0.5);
  return shuffledCards;
};
