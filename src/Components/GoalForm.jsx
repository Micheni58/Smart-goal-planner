import React, { useState } from "react";
import "./Form.css";

function GoalForm({ onAddGoal }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [savedAmount, setSavedAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      name: name,
      targetAmount: parseFloat(amount),//Parse int will change the string to a number coz html inputs always return strings
      savedAmount: parseFloat(savedAmount),
      category: category,
      deadline: deadline,
      createdAt: new Date().toISOString().split("T")[0],
    };

    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: {//This tells us what kind of data were sending
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoal),//This will convert the new object(newgoal) to json string so the server can read
    })
      .then((res) => res.json())
      .then((data) => {
        onAddGoal(data); 
        setName("");
        setAmount("");
        setSavedAmount("");
        setCategory("");
        setDeadline("");
      });
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>Enter New Goal</h2>
        <label>Name:</label><br />
        <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name} required/><br />

        <label>Amount:</label><br />
        <input type="number" placeholder="Enter  Target Amount" onChange={(e) => setAmount(e.target.value)} value={amount} required/><br />

        <label>Saved Amount:</label><br />
        <input type="number" placeholder="Enter Saved Amount" onChange={(e) => setSavedAmount(e.target.value)} value={savedAmount} required/><br />

        <label>Category:</label><br />
        <input type="text" placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)} value={category} required /><br />

        <label>Deadline:</label><br />
        <input type="date" onChange={(e) => setDeadline(e.target.value)} value={deadline} required /><br />

        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
}

export default GoalForm;
