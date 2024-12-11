import "@styles/components/Timer.scss";
import { useGameContext } from "@/context/GameContext";
import { formatTime } from "@/lib/utils";

function Timer() {
  const gameContext = useGameContext();
  const { timer } = gameContext;
  return (
    <div className="timer" aria-label="Game Time">
      <span>{formatTime(timer)}</span>
    </div>
  );
}
export default Timer;
