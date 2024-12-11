import "@styles/App.scss";
import { useTheme } from "@/context/ThemeContext";
import GameProvider from "@/context/GameContext";
import SetupProvider from "@/context/SetupContext";
import ModalProvider from "@/context/ModalContext";
import TimeProvider from "@/context/TimeContext";
import TopBar from "@/components/TopBar";
import Controls from "@components/Controls";
import Board from "@components/Board";
import Setup from "@components/Setup";
import Modal from "@components/Modal";
import Footer from "@components/Footer";

function App() {
  const themeContext = useTheme();
  const { theme } = themeContext;
  return (
    <TimeProvider>
      <ModalProvider>
        <SetupProvider>
          <GameProvider>
            <div className="body" data-theme={theme}>
              <TopBar />
              <Controls />
              <Board />
              <Footer />
              <Setup />
              <Modal />
            </div>
          </GameProvider>
        </SetupProvider>
      </ModalProvider>
    </TimeProvider>
  );
}

export default App;
