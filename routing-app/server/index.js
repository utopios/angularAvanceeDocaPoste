const express = require("express")
const cors = require("cors")
const app = express()
const contacts = ["toto", "tata", "titi"]
app.use(cors({
    origin: "*"
}))
app.get('/', (req, res) => {
    res.json(contacts)
})

app.listen(3000)