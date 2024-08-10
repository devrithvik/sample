const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express();
app.use(express.json())
app.use(cors({
    // origin: ["localhost:5173"],
    origin: "*",
    credentials: true,
}))

 
 
app.get("/api",(req,res) => {
    res.json(`eve variables ${process.env.varvar}`)
})


app.listen(5000,() => {
    console.log("runnng on 5000")
})