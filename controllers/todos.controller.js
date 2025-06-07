import { Todo } from "../models/todo.model.js";




export const createTodo = async (req, res) => {
    const {title , description, status , list , due_date, tags, subtasks}  = req.body;
    try {

        // Validate required fields
        if (![title, list].every(Boolean)) {
            return res.status(400).json({ message: "Title and list are required" });
        }

        const todo = new Todo({title, description, status, list, due_date, tags, subtasks});
        await todo.save();

        res.json({message:"todo created successfully", todo})
    } catch (error) {
        console.error('failed to create todo', error);
        res.status(500).json({error:'failed to create todo'})
    }
}

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find().populate('list', 'title').populate('tags', 'name').populate('subtasks', 'title');
        res.json(todos);
    } catch (error) {
        console.error('failed to fetch todos', error);
        res.status(500).json({error:'failed to fetch todos'})
    }
}