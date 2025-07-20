// This will show 
//   "id": "1",
//   "name": "Travel Fund - Japan",
//   "targetAmount": 5000,
//   "savedAmount": 3200,
//   "category": "Travel",
//   "deadline": "2025-12-31",
//   "createdAt": "2024-01-15"
import "./Card.css"
function GoalCard({goal}){
    return(
        <>
        <div className="goalCard">
        <h2>{goal.name}</h2>
        <p>Amount: {goal.targetAmount}</p>
        <p>Saved Amount: {goal.savedAmount}</p>
        <p>Category: {goal.category}</p>
        <p>Deadline: {goal.deadline}</p>
        <p>Created At: {goal.createdAt}</p>
        <button>Edit</button>
        <button>Delete</button>
        </div>        
        
        </>
    )
}
export default GoalCard;