import React, { useState } from "react";

const Faq = ({ id, title, desc }) => {
  //   console.log(id, title, desc);
  const [toggle, setToggle] = useState(false);
  return (
    <article>
      <div>
        <h4 className="">{title}</h4>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? " - " : " + "}
        </button>
      </div>
      {toggle && <p>{desc}</p>}
    </article>
  );
};

export default Faq;
