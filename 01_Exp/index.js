import express from 'express'
const app = express()

// You don't have to worry about this code <ForNow>
app.get('/', (req, res) => {
    res.send("Welcome to ExpressJss")
})



app.listen(3000, () => console.log("Server Stareted..."));