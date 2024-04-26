import React, { useEffect, useState } from "react";

const DynamicStyleReact = () => {
  const [name, setName] = useState("");
  const [validInput, setValidInput] = useState(false);

  useEffect(() => {
    if (name.length < 2) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [name]);

  const handleChange = (event) => {
    setName(event.target.value);
    // console.log(event.target.value);
  };
  return (
    <div className=" flex justify-center items-center h-screen">
      <input
        className=" border-2 border-red-400 py-3 px-4"
        type="text"
        onChange={handleChange}
        style={{ backgroundColor: validInput ? "green" : "red" }}
      />
    </div>
  );
};

export default DynamicStyleReact;
