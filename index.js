const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express();
app.use(express.json())
app.use(cors({
    origin: "*",
    Credentials: true,
}))

app.use("/api",(req,res) => {
    res.send("eve variables"+process.env.varvar)
})


app.listen(5000,() => {
    console.log("runnng on 5000")
})