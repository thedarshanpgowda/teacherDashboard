import React from "react";
import Chart from "./Chart";
import "./Secondary.css";

export function Message(props) {
  return (
    <Chart className="messageBlock">
      <div className="question">Q: {props.newstate.question}</div>
      <div className="replpyBlock">
        <Chart>
          <div className="namesBlock">{props.newstate.name}</div>
          <div className="namesBlock">{props.newstate.usn}</div>
        </Chart>
        <button
          className="replyBlock"
          onClick={() => {
            props.questionHandler(props.newstate.question);
            console.log(props.newstate.question)
          }}
        >
          Reply
        </button>
      </div>
    </Chart>
  );
}

export default function Secondary(props) {
  return (
    <Chart className="secondaryBlock">
      {props.state.map((newstate, index) => (
        <Message
          key={index}
          newstate={newstate}
          questionHandler={props.questionHandler}
        />
      ))}
    </Chart>
  );
}
