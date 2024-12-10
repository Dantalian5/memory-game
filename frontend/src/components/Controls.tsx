import "@styles/Controls.scss";
import { svgCog } from "@/utils/svgIcons";

function Controls() {
  return (
    <div className="controls">
      <button className="controls__start">Start</button>
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
