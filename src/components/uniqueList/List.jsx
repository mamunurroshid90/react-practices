import React from "react";

import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    id: uuidv4(),
    title: "todos1",
    desc: "this is a desc 1",
  },
  {
    id: uuidv4(),
    title: "todos2",
    desc: "this is a desc 2",
  },
  {
    id: uuidv4(),
    title: "todos3",
    desc: "this is a desc 3",
  },
  {
    id: uuidv4(),
    title: "todos4",
    desc: "this is a desc 4",
  },
];

const List = () => {
  return (
    <div>
      {todos.map((todo) => {
        // console.log(uuidv4());
        const { id, title, desc } = todo;
        return (
          <div key={id}>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
