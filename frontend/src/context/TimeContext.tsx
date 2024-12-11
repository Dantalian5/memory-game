import { useEffect } from "react";
import { createContext, ReactNode, useState, useContext } from "react";

interface TimeContextType {
  time: number;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TimeContext = createContext<TimeContextType | null>(null);

const TimeProvider = ({ children }: { children: ReactNode }) => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) {
      setTime(0);
    } else {
      let interval: NodeJS.Timeout;
      if (isRunning) {
        interval = setInterval(() => {
          setTime((prev) => prev + 1);
        }, 1000);
      }
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <TimeContext.Provider
      value={{
        time,
        setIsRunning,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export default TimeProvider;

export const useTime = (): TimeContextType => {
  const context = useContext(TimeContext);
  if (!context) {
    throw new Error("useTime must be used within a TimeProvider");
  }
  return context;
};
