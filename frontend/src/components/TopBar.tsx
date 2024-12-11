import "@styles/components/TopBar.scss";
import { svgCog } from "@/utils/svgIcons";
import { useModalContext } from "@/context/ModalContext";

function TopBar() {
  const modalContext = useModalContext();
  const { setIsSetupOpen } = modalContext;
  return (
    <div className="topbar">
      <h1 className="topbar__logo">{"<Gamemory/>"}</h1>
      <button
        title="Settings"
        aria-label="Modify Game Settings"
        className="topbar__menu"
        onClick={() => setIsSetupOpen(true)}
      >
        {svgCog}
      </button>
    </div>
  );
}
export default TopBar;
