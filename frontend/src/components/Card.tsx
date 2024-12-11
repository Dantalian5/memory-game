import "@styles/components/Card.scss";

interface CardProps {
  children: React.ReactNode;
  isFlipped: boolean;
  onClick: () => void;
}

function Card({ children, isFlipped, onClick }: CardProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xCenter = rect.width / 2;
    const yCenter = rect.height / 2;

    const xAngle = ((x - xCenter) / xCenter) * 5;
    const yAngle = ((yCenter - y) / yCenter) * 5;

    card.style.transform = `rotateY(${xAngle}deg) rotateX(${yAngle}deg)`;
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const card = e.currentTarget;
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <div className="card-wrapper">
      <div
        className={`${isFlipped && "flipped"} card`}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card__inner">
          <div className="card__front">{children}</div>
          <div className="card__back">{children}?</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
