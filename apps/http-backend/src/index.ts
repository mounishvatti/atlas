import express from "express"
import cors from "cors"
import jwt from "jsonwebtoken"

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())

app.get("/hello", (req, res) => {
  res.send("Hello World!")
})

app.listen(PORT, () => {
  console.log("HTTP Backend is running on port 3000")
})