import "@styles/components/Switch.scss";
import { useTheme } from "@/context/ThemeContext";
import { svgMoon, svgSun } from "@/utils/svgIcons";

function SwitchBtn() {
  const themeContext = useTheme();
  const { theme, toogleTheme } = themeContext;

  return (
    <button
      title="Change Color Theme"
      aria-label="Change Color Theme"
      onClick={toogleTheme}
      className="switch-btn"
    >
      {theme === "light" ? (
        <span className="switch-btn__sun">{svgSun}</span>
      ) : (
        <span className="switch-btn__moon">{svgMoon}</span>
      )}
    </button>
  );
}
export default SwitchBtn;
