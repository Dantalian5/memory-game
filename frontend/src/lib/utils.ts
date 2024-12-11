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
export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};
