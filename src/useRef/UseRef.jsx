import React, { useRef } from "react";

const UseRef = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = userNameRef.current.value;
    const userPassword = passwordRef.current.value;
    console.log({ userName, userPassword });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col gap-5 justify-center items-center h-screen"
    >
      <div>
        <label htmlFor="userName">UserName: </label>
        <input
          className="border-2"
          type="text"
          placeholder="Enter your name"
          ref={userNameRef}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          className="border-2"
          type="password"
          placeholder="Enter a valid password"
          ref={passwordRef}
        />
      </div>
      <button type="submit">register</button>
    </form>
  );
};

export default UseRef;
