// This will show 
//   "id": "1",
//   "name": "Travel Fund - Japan",
//   "targetAmount": 5000,
//   "savedAmount": 3200,
//   "category": "Travel",
//   "deadline": "2025-12-31",
//   "createdAt": "2024-01-15"
import "./Card.css"

function GoalCard({goal,onDelete}){
    function handleDelete(){
        onDelete(goal.id)
    }
    return(
        <>
        <div className="goalCard">
        <h2>{goal.name}</h2>
        <p><b>Amount</b> {goal.targetAmount}</p>
        <p><b>Saved Amount:</b> {goal.savedAmount}</p>
        <p><b>Category: </b>{goal.category}</p>
        <p><b>Deadline:</b> {goal.deadline}</p>
        <p><b>Created At:</b> {goal.createdAt}</p>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        </div>        
        
        </>
    )
}
export default GoalCard;