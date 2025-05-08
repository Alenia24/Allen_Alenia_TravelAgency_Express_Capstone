import express from "express";
const app = express();

const port = 5050;

app.use("/", (req, res) => {
    res.send("Welcome to the Travel Agency API.")
})

// App.listen
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})