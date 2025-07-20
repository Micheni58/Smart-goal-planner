import GoalCard from './Components/GoalCard'
import './App.css'
import GoalForm from './Components/GoalForm'
import React,{useEffect,useState} from 'react'
function App() {
  
  const [goals, setGoals] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/goals")
    .then((res) => res.json())
    .then((data) => setGoals(data))
  },[])

  const goalList = goals.map(goal => {
    return <GoalCard key={goal.id} goal={goal}/>
  })
  
  return (
    <>
      <h1>App component</h1>
      <GoalForm />
      {goalList} 
      
    </>
  )
}

export default App
