import "@styles/components/Card.scss";
import { svgLogo } from "@/utils/svgIcons";

interface CardProps {
  children: React.ReactNode;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

function Card({ children, isFlipped, isMatched, onClick }: CardProps) {
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
        className={`${(isFlipped || isMatched) && "flipped"} ${isMatched && "matched"} card`}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card__inner">
          <div className="card__front">{children}</div>
          <div className="card__back">{svgLogo}</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
