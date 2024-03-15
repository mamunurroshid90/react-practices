import React from "react";

const users = [
  {
    fullName: "Mamunur Roshid",
    age: 30,
    phones: [
      {
        home: "0175555852",
        office: "5469855",
      },
    ],
  },
  {
    fullName: "Mizanur Rahman",
    age: 55,
    phones: [
      {
        home: "017550000",
        office: "546888",
      },
    ],
  },
];

const NestedMap = () => {
  return (
    <div>
      {users.map((user, index) => (
        <article key={index}>
          <h2>FullName: {user.fullName}</h2>
          <h2>Age: {user.age}</h2>
          {user.phones.map((phone, index) => (
            <div key={index}>
              <h4>Home: {phone.home}</h4>
              <h4>Office: {phone.office}</h4>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
};

export default NestedMap;
