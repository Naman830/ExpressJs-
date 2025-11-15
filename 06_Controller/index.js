import express from 'express'
const app = express()
import Router from './routes/student.js'

app.listen(3000, () => console.log("Server Up Baby"));
