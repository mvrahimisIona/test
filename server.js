require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")


const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("connect")).catch((err) => console.error(err)) 

app.get("/", (req, res) => {
    console.log("base route hit")
    res.send("ice cream install")
})


app.listen(process.env.PORT, () => {
    console.log("server started")
})
// mjnw1dcheyZBslfn
//LET SEE BASED PR
//boooop