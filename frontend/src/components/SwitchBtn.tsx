import "@styles/components/switch-btn.scss";
import { useState } from "react";
import { svgMoon, svgSun } from "@/utils/svgIcons";

function SwitchBtn() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <button
      title="Change Color Theme"
      aria-label="Change Color Theme"
      onClick={handleClick}
      className="switch-btn"
    >
      {isActive ? (
        <span className="switch-btn__sun">{svgSun}</span>
      ) : (
        <span className="switch-btn__moon">{svgMoon}</span>
      )}
    </button>
  );
}
export default SwitchBtn;
