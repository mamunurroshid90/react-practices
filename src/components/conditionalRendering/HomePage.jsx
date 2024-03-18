import React from "react";

const HomePage = (props) => {
  const { isLoggedIn, userName } = props;
  console.log(userName);
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome {userName}</h2>
      ) : (
        <h2>Please log in to continue</h2>
      )}
    </div>
  );
};

export default HomePage;
