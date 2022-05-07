import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Stopwatch } from "./Stopwatch";
import { Timer } from "./Timer";

const Div = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 50px;

  .timer_stopwatch {
    border: 1px solid blue;
  }
  .buttons {
    display: flex;

    button {
      width: 50%;
      padding: 14px;
      border: none;
      border-bottom: 3px white solid;
      background-color: transparent;
    }

    .active {
      border-bottom: 3px red solid;
    }
  }
`;

export const Home = () => {
  const [show, setShow] = useState("timer");
  const [timerActiveClass, setTimerActiveClass] = useState("");
  const [stopwatchActiveClass, setStopwatchActiveClass] = useState("");
  return (
    <Div>
      <h1>Time & Stopwatch</h1>
      <div className="timer_stopwatch">
        <div className="buttons">
          <button
            className={timerActiveClass}
            onClick={() => {
              setShow("timer");
              setTimerActiveClass("active");
              setStopwatchActiveClass("");
            }}
          >
            Timer
          </button>
          <button
            className={stopwatchActiveClass}
            onClick={() => {
              setShow("stopwatch");
              setTimerActiveClass("");
              setStopwatchActiveClass("active");
            }}
          >
            Stopwatch
          </button>
        </div>
        {show === "timer" ? <Timer /> : <Stopwatch />}
      </div>
    </Div>
  );
};
