import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Practice1 } from "./components/practcomp1";
import Todo from "./components/Todo";
import { Modal } from "./components/Modal";
import Backdrop from "./components/Backdrop";
import { useState } from "react";

function App() {
  const [state, setstate] = useState(false);
  return (
    <div>
      <Todo text="Java" />
      <Todo text="Python" />
      <Todo text="HTML" />
      <Todo />
      <Todo />
      {/* <Backdrop />
      <Modal /> */}
    </div>
  );
}

export default App;
