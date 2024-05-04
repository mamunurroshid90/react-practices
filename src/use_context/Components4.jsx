import React, { useContext } from "react";
import { UserContext } from "./UseContext";

const Components4 = () => {
  const { user, text } = useContext(UserContext);
  return (
    <div>
      <p>{text}</p>
      <h4>{user.id}</h4>
      <h2>{user.name}</h2>
    </div>
  );
};

export default Components4;
