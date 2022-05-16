import React from "react";
import "./ControlButtons.css"



export default function ControlButtons(props) {
    const StartButton = (
        <div className="btn btn-one btn-start"
            onClick={props.handleStart}>
                Start
            </div>
    )

    const ActiveButtons = (
        <div className="btn-grp">
            <div className="btn btn-two"
            onClick={props.handleReset}>
            reset
        </div>
        <div className="btn btn-one"
            onClick={props.handlePauseResume}>
                {props.isPaused ? "Resume" : "Pause"}
                </div>
            </div>
    )
  return (
    <div className="Control-Buttons">
    <div>{props.active ? ActiveButtons : StartButton}</div>
      
    </div>
  )
}
