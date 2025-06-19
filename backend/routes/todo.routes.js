
import express from 'express'
import { createTodo , deleteTodo, getAllTodos, updateTodoStatus} from '../controllers/todos.controller.js';

const router = express.Router();


router.post('/', createTodo)
router.get('/', getAllTodos)
router.put('/:id', updateTodoStatus)
router.delete('/:id', deleteTodo)

export default router;