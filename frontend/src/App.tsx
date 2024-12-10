import "@styles/App.scss";
import GameProvider from "@/context/GameContext";
import SwitchBtn from "@components/SwitchBtn";
import Controls from "@components/Controls";
import Board from "@components/Board";

function App() {
  return (
    <GameProvider>
      <div className="body">
        <div className="topbar">
          <h1 className="topbar__logo">{"<Gamemory/>"}</h1>
          <div>
            <SwitchBtn />
          </div>
        </div>
        <Controls />
        <Board />
      </div>
    </GameProvider>
  );
}

export default App;
