import "./Style.css";
import { useEffect, useRef, useState } from "react";

export const Timer = ({ hoursMinSecs }) => {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [hrs, setHrs] = useState(hours);
  const [mins, setMins] = useState(minutes);
  const [secs, setSecs] = useState(seconds);
  const [start, setStart] = useState(false);
  const tick = useRef();

  const timer = () => {
    console.log(hrs, mins, secs);
    if (mins === 0 && secs === 0) {
      setHrs((hrs) => hrs - 1);
    } else if (secs === 0) {
      setMins((mins) => mins - 1);
    } else {
      setSecs((secs) => secs - 1);
    }
  };

  const reset = () => {
    clearInterval(tick.current);
    if (start) {
      setStart(!start);
    }
    setHrs(hours);
    setMins(minutes);
    setSecs(seconds);
  };

  useEffect(() => {
    if (start) {
      tick.current = setInterval(() => timer(), 1000);
    } else {
      clearInterval(tick.current);
    }
    return () => clearInterval(tick.current);
  }, [start]);

  const toggleStart = () => {
    setStart(!start);
  };

  return (
    <div className="timer_cotainer">
      <div className="timer">
        <h3>{`${hrs.toString().padStart(2, "0")}:${mins
          .toString()
          .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</h3>
      </div>
      <div>
        <button className="startBtn" onClick={toggleStart}>
          {!start ? "START" : "STOP"}
        </button>

        <button onClick={reset}>RESET</button>
      </div>
    </div>
  );
};
