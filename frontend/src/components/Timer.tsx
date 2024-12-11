import "@styles/components/Timer.scss";
import { useTime } from "@/context/TimeContext";
import { formatTime } from "@/lib/utils";

function Timer() {
  const timeContext = useTime();
  const { time } = timeContext;
  return (
    <div className="timer" aria-label="Game Time">
      <span>{formatTime(time)}</span>
    </div>
  );
}
export default Timer;
