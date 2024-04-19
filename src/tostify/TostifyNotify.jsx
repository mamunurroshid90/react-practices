import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TostifyNotify = () => {
  const handleNewTodo = () => {
    toast("this is new todo");
  };

  return (
    <div>
      <h2>React toastify notification</h2>
      <button onClick={handleNewTodo}>add new todo</button>
      <ToastContainer />
    </div>
  );
};

export default TostifyNotify;
