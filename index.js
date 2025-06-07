import express from "express";
import initializeDatabase from "./config/databaseConfig.js";
import dotenv from 'dotenv'
import listRouter from './routes/list.routes.js';
import todoRouter from './routes/todo.routes.js';

dotenv.config();

const app = express();

// Middleware to prse JSON request bodies
app.use(express.json());
// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.json({ message: 'our todo server is running successfully' })
})

app.use('/api/lists', listRouter);
app.use('/api/todos', todoRouter);

const PORT = process.env.PORT || 3000;

initializeDatabase()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server is running on http://localhost:${PORT}`)
        })
    
})
.catch((error) => {
    console.error('failed to run application server',error)
    process.exit(1)
})


