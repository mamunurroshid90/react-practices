import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");

  const handleInput = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTodoData(todo);
  };
  // console.log(todo);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Todos:</label>
        <input
          onChange={handleInput}
          type="text"
          id="todo"
          name="todo"
          value={todo}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewTodo;
