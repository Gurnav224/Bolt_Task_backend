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

export const updateTodoStatus = async (req, res) => {
    // step1; we have get todo id from params and get the status throug req.body

    const todoId = req.params.id;
    const status = req.body.status;
    
    try {
       const todo = await Todo.findOneAndUpdate({_id:todoId},{status:status},{new:true});
       
       res.status(200).json({message:"todo updated successfully", todo})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:'failed to update the todo'})
    }
}


export const deleteTodo = async (req, res) => {
    const {id} = req.params;
    try {
        
        const todo = await Todo.findOneAndDelete(id);

        if(!todo){
            return res.status(404).json({error:'todo not found'})
        }

        res.status(200).json({message:'todo delete successfully'})

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}