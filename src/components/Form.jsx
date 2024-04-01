import React, { useState } from "react";
import "./form.module.css";
const Form = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    if (fieldName === "name") {
      setUser({ name: e.target.value, email, password });
    } else if (fieldName === "email") {
      setUser({ name, email: e.target.value, password });
    } else if (fieldName === "password") {
      setUser({ name, email, password: e.target.value });
    }
    // console.log(fieldName);
  };
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Name</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">registered</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
