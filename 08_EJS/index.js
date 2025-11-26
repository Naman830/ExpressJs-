import express from 'express'
const app = express()
import route from './routes/route.js'

// this code tell our express ns we are using ejs
app.set('view engine', "ejs")

app.use("/", route)



app.listen(3000, () => console.log("Sever Up Babe"));