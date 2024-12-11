import "@styles/App.scss";
import GameProvider from "@/context/GameContext";
import ModalProvider from "./context/ModalContext";
import TopBar from "@/components/TopBar";
import Controls from "@components/Controls";
import Board from "@components/Board";
import Setup from "@components/Setup";
import Modal from "@components/Modal";

function App() {
  return (
    <ModalProvider>
      <GameProvider>
        <div className="body">
          <TopBar />
          <Controls />
          <Board />
          <Setup />
          <Modal />
        </div>
      </GameProvider>
    </ModalProvider>
  );
}

export default App;
