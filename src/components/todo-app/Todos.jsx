import React from "react";

import Todo from "./Todo";
import Style from "./todos.module.css";

const Todos = (props) => {
  //   console.log(props.todos);
  return (
    <div className={Style.todos}>
      {props.todos.map((todo) => (
        <Todo
          todo={todo.todo}
          key={todo.id}
          id={todo.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
