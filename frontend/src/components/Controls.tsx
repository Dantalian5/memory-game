import "@styles/components/Controls.scss";
import Timer from "@components/Timer";
import { useGameContext } from "@/context/GameContext";
import { svgPlay, svgReset } from "@/utils/svgIcons";

function Controls() {
  const gameContext = useGameContext();
  const { initializeGame, gameState } = gameContext;
  return (
    <div className="controls">
      <div className="controls__start">
        <button className="controls__start__btn" onClick={initializeGame}>
          {gameState.isRunning ? "Restart" : "Start"}
          {gameState.isRunning ? svgReset : svgPlay}
        </button>
      </div>
      <Timer />
      <span className="controls__attempts">
        Attempts:{" "}
        <span className="controls__attempts__counter">
          {gameState.attempts}
        </span>
      </span>
    </div>
  );
}
export default Controls;
