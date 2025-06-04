import { Todo } from "../models/todo.model.js";




export const createTodo = async (req, res) => {
    const {title , description, status}  = req.body;
    try {
        const todo = new Todo({title, description, status});
        await todo.save();

        res.json({message:"todo created successfully", todo})
    } catch (error) {
        console.error('failed to create todo', error);
        res.status(500).json({error:'failed to create todo'})
    }
}