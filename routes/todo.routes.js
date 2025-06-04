
import express from 'express'
import { createTodo } from '../controllers/todos.controller.js';

const router = express.Router();


router.post('/todos', createTodo)


export default router;