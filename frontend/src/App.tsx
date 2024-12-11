import "@styles/App.scss";
import GameProvider from "@/context/GameContext";
import ModalProvider from "./context/ModalContext";
import TopBar from "@/components/TopBar";
import Controls from "@components/Controls";
import Board from "@components/Board";
import Setup from "@components/Setup";

function App() {
  return (
    <GameProvider>
      <ModalProvider>
        <div className="body">
          <TopBar />
          <Controls />
          <Board />
          <Setup />
        </div>
      </ModalProvider>
    </GameProvider>
  );
}

export default App;
