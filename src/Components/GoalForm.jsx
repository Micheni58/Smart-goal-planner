//   "id": "1",
//   "name": "Travel Fund - Japan",
//   "targetAmount": 5000,
//   "savedAmount": 3200,
//   "category": "Travel",
//   "deadline": "2025-12-31",
//   "createdAt": "2024-01-15"

function GoalForm(){
    return(
        <>
        <h2>Enter New goal</h2>
        <label>Name:</label><br />
        <input type="text" name="" id="" placeholder="Enter Name" /><br />
        <label>Amount:</label><br />
        <input type="text" name="" id="" placeholder="Enter Amount"/><br />
        <label>Saved amount:</label><br />
        <input type="text" placeholder="Enter saved amount" /><br />
        <label>Category</label><br />
        <input type="text" name="" id=""  placeholder="Enter Category"/><br />
        <label>Deadline</label><br />
        <input type="text" placeholder="Enter Deadline" /><br />
        <button>Add Goal</button>
        </>
    )
}
export default GoalForm;