import { useState } from "react"

const AddTask = () => {
    
    const [tasks , setTasks] = useState([]);

    const [task, setTask] = useState({title:"", description:"", status:"", due_date:"", list:""});

    const handleInputChange = (e) => {
        setTask((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }


    const handleAddTask = (e) => {
        e.preventDefault();
       setTasks([task,...tasks])
    }

  return (
    <div>

        <form onSubmit={handleAddTask}>
            <div>
                <label htmlFor="title">Title</label>
                <input onChange={handleInputChange} type="text" name="title" />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea onChange={handleInputChange} name="description" id="description" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label htmlFor="status">Select Status</label>
                <select onChange={handleInputChange} name="status" id="status">
                    <option value="completed">completed</option>
                    <option value="in-progress">in-progress</option>
                    <option value="pending">pending</option>
                </select>
            </div>
            <div>
                <label htmlFor="list">list</label>
                <select onChange={handleInputChange} name="list" id="list">
                    <option value="">select</option>
                    <option value="personal">personal</option>
                </select>
            </div>
            <div>
                <label htmlFor="due_date">Due Date</label>
                <input onChange={handleInputChange} type="date" name="due_date" id="due_date" />
            </div>
            
            <button type="submit">Submit</button>
        </form>
        <div>
            <h1>Task List</h1>
            <ul>
                {
                tasks.map((task) => (

                    <li key={task.title}>
                        <h1>{task.title}</h1>
                        <p>Description: {task.description}</p>
                    </li>
                ))
                }
            </ul>
        </div>
    </div>
  )
}

export default AddTask