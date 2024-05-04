import React, { useState } from "react";

import Components2 from "./Components2";
import { UserContext } from "./UseContext";

const Componetnts1 = () => {
  const [user, setUser] = useState({ id: 101, name: "Mamunur Roshid" });
  const [text, setText] = useState("hello I am Mamun");
  return (
    <UserContext.Provider value={{ user, text }}>
      <Components2 />
    </UserContext.Provider>
  );
};

export default Componetnts1;
