import React from "react";
import ChildComp from "./ChildComp";

const DatapassFromChild = () => {
  const data = "this is Parent component";

  const handleChildData = (childData) => {
    console.log("Child: ", childData);
  };
  return (
    <div>
      <ChildComp data={data} onChildData={handleChildData} />
    </div>
  );
};

export default DatapassFromChild;
