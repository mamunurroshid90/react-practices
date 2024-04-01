import React from "react";

const Todo = (props) => {
  // console.log(props);
  return (
    <div>
      <h3>{props.todo}</h3>
    </div>
  );
};

export default Todo;
