import React, { useState } from "react";
import Todos from "../simple todo/Todos";
import NewTodo from "./NewTodo";

const dummyTodo = ["Bangladesh", "Pakistan", "Canada"];

const Home = () => {
  const [todos, setTodos] = useState(dummyTodo);

  const handleNewData = (newTodos) => {
    setTodos([...todos, newTodos]);
  };

  return (
    <div>
      <NewTodo onTodoData={handleNewData} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
