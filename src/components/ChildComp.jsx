import React from "react";

const ChildComp = (props) => {
  const childData = "this is child component Data";
  props.onChildData(childData);
  return (
    <div>
      <p>{props.data}</p>
    </div>
  );
};

export default ChildComp;
