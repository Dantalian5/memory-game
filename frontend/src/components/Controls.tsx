import "@styles/Controls.scss";
import { svgCog } from "@/utils/svgIcons";
import { useGameContext } from "@/context/GameContext";

function Controls() {
  const gameContext = useGameContext();
  const { initializeGame } = gameContext;
  return (
    <div className="controls">
      <button className="controls__start" onClick={initializeGame}>
        Start
      </button>
      <span>time: 00:00</span>
      <button
        title="Settings"
        aria-label="Modify Game Settings"
        className="controls__settings"
      >
        {svgCog}
      </button>
    </div>
  );
}
export default Controls;
