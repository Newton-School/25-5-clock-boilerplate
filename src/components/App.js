import React from "react";
import { useState, useEffect, useRef } from "react";
import "../styles/App.css"

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timer, setTimer] = useState(1500); 
  const [timerType, setTimerType] = useState("session");
  const [timerState, setTimerState] = useState("stopped");
  const [timeoutId, setTimeoutId] = useState("")

  function resetClick() {
  }

  function decrementBreakClick() {

  } 

  function incrementBreakClick() {
  }

  function decrementSessionClick() {
  }

  function incrementSessionClick() {
  }

  function startStopClick() {
  }

  function timerToClock() {
  }

  function playSound() {
  }
  return (
    <div>
      <h1 id="header">25 + 5 Clock</h1>
      <div id="machine-container">
        <div id="break-session-containter">
          <BreakLength
            breakLength={breakLength}
            decrement={decrementBreakClick}
            increment={incrementBreakClick}
          />
          <SessionLength
            decrement={decrementSessionClick}
            increment={incrementSessionClick}
            sessionLength={sessionLength}
          />
        </div>
        <div id="timer-container">
          <div id="timer-div">
            <h2 id="timer-label">{timerType}</h2>
            <span id="time-left">{timerToClock()}</span>
          </div>
        </div>
        <div id="timer-controls-container">
          <button id="start_stop" onClick={startStopClick}>
            <i className="fa fa-play"></i>
            <i className="fa fa-pause"></i>
          </button>
          <button id="reset" onClick={resetClick}>
            <i className="fa fa-sync"></i>
          </button>

          <audio
          id="beep"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
        </div>
      </div>
    </div>
  );
}

function BreakLength(props) {
  return (
    <div id="break-length-container">
      <h3 id="break-label">Break Length</h3>
      <button
        id="break-decrement"
        className="down-button"
        onClick={props.decrement}
      >
        <i className="fa fa-arrow-down"></i>
      </button>

      <span id="break-length" className="break-session-number">
        {props.breakLength}
      </span>

      <button
        id="break-increment"
        className="up-button"
        onClick={props.increment}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}

function SessionLength(props) {
  return (
    <div id="session-length-container">
      <h3 id="session-label">Session Length</h3>
      <button
        id="session-decrement"
        className="down-button"
        onClick={props.decrement}
      >
        <i className="fa fa-arrow-down"></i>
      </button>

      <span id="session-length" className="break-session-number">
        {props.sessionLength}
      </span>

      <button
        id="session-increment"
        className="up-button"
        onClick={props.increment}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default App; 
