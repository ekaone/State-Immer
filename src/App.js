import React, { useState, useEffect } from "react";
import produce from "immer";
import logo from "./immer-logo.svg";
import "./App.css";
import todos from "./shared/tasks.json";

function App() {
  const nextState = produce(todos, draftState => {
    draftState.push({ id: 10, todo: "Tweet about it", done: true });
  });

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <br />
      {nextState.map(task => (
        <>
          <input
            key={task.id}
            type="checkbox"
            id={task.id}
            name={task.todo}
            value={task.todo}
            checked={task.done === true ? true : false}
          />
          <label htmlFor={task.todo}>{task.todo}</label>
          <br />
        </>
      ))}
    </div>
  );
}

export default App;
