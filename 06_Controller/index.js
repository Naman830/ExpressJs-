import express from 'express'
const app = express()
import students from './routes/student.js'


app.use('/students', students)


app.listen(3000, () => console.log("Server Up Baby"));
