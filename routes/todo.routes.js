
import express from 'express'
import { createTodo , getAllTodos} from '../controllers/todos.controller.js';

const router = express.Router();


router.post('/', createTodo)
router.get('/', getAllTodos)


export default router;