import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div>
        {toggle && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            adipisci soluta. Possimus perspiciatis iste numquam vel
            necessitatibus minima? Deleniti quo aliquid omnis reiciendis
            voluptatibus atque maiores, voluptatum natus corrupti ratione.
          </p>
        )}

        <button onClick={() => setToggle(!toggle)}>
          {toggle ? "hide" : "show"}
        </button>
      </div>
    </>
  );
};

export default Toggle;
