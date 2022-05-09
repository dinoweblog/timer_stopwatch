import { useEffect, useRef, useState } from "react";
import "./Style.css";

export const Stopwatch = () => {
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [milisecs, setMiliecs] = useState(0);
  const [start, setStart] = useState(false);
  const tick = useRef();

  const timer = () => {
    console.log(hrs, mins, secs);
    if (mins === 59 && secs === 59) {
      setHrs((hrs) => hrs + 1);
    } else if (secs === 59) {
      setMins((mins) => mins + 1);
    } else if (milisecs === 1000) {
      setSecs((secs) => secs + 1);
    } else {
      setMiliecs((mil) => mil + 1);
    }
  };

  const reset = () => {
    clearInterval(tick.current);
    if (start) {
      setStart(!start);
    }
    setHrs(0);
    setMins(0);
    setSecs(0);
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
    <div className="stopwatch_cotainer">
      <div className="stopwatch">
        <h3>{`${hrs.toString().padStart(2, "0")}:${mins
          .toString()
          .padStart(2, "0")}:${secs.toString().padStart(2, "0")} :${milisecs
          .toString()
          .padStart(2, "0")}`}</h3>
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
