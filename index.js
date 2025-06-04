import express from "express";
import initializeDatabase from "./config/databaseConfig.js";
import dotenv from 'dotenv'
import todoRouter from './routes/todo.routes.js'

dotenv.config();

const app = express();


app.get('/', (req, res) => {
    res.json({ message: 'our todo server is running successfully' })
})


const PORT = process.env.PORT || 3000;



initializeDatabase()
.then(() => {
app.listen(PORT, () => {
    console.log(`server is running on http://locahost:${PORT}`)
})
})
.catch((error) => {
    console.error('failed to run application server',error)
    process.exit(1)
})


