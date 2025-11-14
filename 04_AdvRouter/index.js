import express from 'express'
const app = express()
app.listen(3000, () => console.log("Server Up babe"));

// 1. Create routes folder and put all your routes in diff file
// 2. create instance of express.Router()
// 3. instead of app.method change that to "router.method"
// 4. Export Router
// 5. Import Router
// 6. use the (app.use) built-in middleware & provide your routes