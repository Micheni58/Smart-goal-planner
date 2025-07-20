import GoalCard from './Components/GoalCard';
import './App.css';
import GoalForm from './Components/GoalForm';
import React, { useEffect, useState } from 'react';
function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  function handleAddGoal(newGoal) {
    setGoals([...goals, newGoal]); 
  }
  function handleDelete(goalId){
    fetchfetch(`http://localhost:3000/goals/${goalId}`,{
      method: "DELETE",
    })
    .then((res) =>{
      if(res.ok) {
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id != goalId));
      }
    })
  }
  const goalList = goals.map(goal => (
    <GoalCard key={goal.id} goal={goal} onDelete= {handleDelete} />
  ));

  return (
    <>
      <h1>App Component</h1>
      <GoalForm onAddGoal={handleAddGoal} />
      <div className='cards'>
         {goalList}
      </div>
     
    </>
  );
}

export default App;
