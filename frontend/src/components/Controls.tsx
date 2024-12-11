import "@styles/Controls.scss";
import { svgCog } from "@/utils/svgIcons";
import { useGameContext } from "@/context/GameContext";
import { useModalContext } from "@/context/ModalContext";

function Controls() {
  const gameContext = useGameContext();
  const modalContext = useModalContext();
  const { initializeGame } = gameContext;
  const { setIsSetupOpen } = modalContext;
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
        onClick={() => setIsSetupOpen(true)}
      >
        {svgCog}
      </button>
    </div>
  );
}
export default Controls;
