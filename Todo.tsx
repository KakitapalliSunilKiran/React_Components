import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props: any) {
  const [state, setstate] = useState(false);
  function deleteHandler() {
    setstate(true);
  }
  function closeModalHandler() {
    setstate(false);
  }

  return (
    <div>
      <h1>{props.text}</h1>
      <div className="card">
        <h2>I am sunil</h2>
        <div>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
      {state && (
        <Modal onCancel1={closeModalHandler} onConfirm1={closeModalHandler} />
      )}
      {state && <Backdrop abcd={closeModalHandler} />}
    </div>
  );
}
export default Todo;
