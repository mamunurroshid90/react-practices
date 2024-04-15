import React from "react";

import { FaTrashAlt } from "react-icons/fa";
import Style from "./todo.module.css";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;
  //   console.log(title);

  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };
  return (
    <>
      <article className={Style.todo}>
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <button className={Style.btn} onClick={() => handleClick(id)}>
          <span>
            <FaTrashAlt />
          </span>
        </button>
      </article>
    </>
  );
};

export default Todo;
