import { useState } from "react";
import Axios from "axios";
import React from "react";
import "../App.css";

export const FormInput = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };
  const submitForm = () => {
    Axios.post("http://localhost:3001/adduser", {
      name: user.name,
      email: user.email,
      phone: user.phone,
      date: user.date,
    })
      .then(() => {
        alert("Form Submitted successfully");
        setUser({
          name: "",
          email: "",
          phone: "",
          date: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="form">
      <div className="heading">
        <h1>Welcome</h1>
      </div>
      <label>Name:</label>
      <input
        required
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter your Name..."
        onChange={handleChange}
      />
      <label>Email</label>
      <input
        required
        type="email"
        name="email"
        value={user.email}
        placeholder="Enter your email..."
        onChange={handleChange}
      />
      <label>Phone No.</label>
      <input
        required
        type="number"
        name="phone"
        value={user.phone}
        placeholder="Enter your PhoneNo..."
        onChange={handleChange}
      />
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={user.date}
        onChange={handleChange}
      />
      <button className="button-81" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
};
