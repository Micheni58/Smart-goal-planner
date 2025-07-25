import GoalCard from './Components/GoalCard';
import './App.css';
import GoalForm from './Components/GoalForm';
import React, { useEffect, useState } from 'react';
import ProgressCard from './Components/ProgressCard';
import Info from './Components/Info';
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
      <div className='topbar'>
      <Info />
      <ProgressCard />
      <GoalForm onAddGoal={handleAddGoal} />
      </div>
      <div className='cards'>
         {goalList}
      </div>
     
    </>
  );
}

export default App;
