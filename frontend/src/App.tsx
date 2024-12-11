import "@styles/App.scss";
import GameProvider from "@/context/GameContext";
import ModalProvider from "./context/ModalContext";
import SwitchBtn from "@components/SwitchBtn";
import Controls from "@components/Controls";
import Board from "@components/Board";
import Setup from "@components/Setup";

function App() {
  return (
    <GameProvider>
      <ModalProvider>
        <div className="body">
          <div className="topbar">
            <h1 className="topbar__logo">{"<Gamemory/>"}</h1>
            <div>
              <SwitchBtn />
            </div>
          </div>
          <Controls />
          <Board />
          <Setup />
        </div>
      </ModalProvider>
    </GameProvider>
  );
}

export default App;
