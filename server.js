import express from "express";
const app = express();

const port = 5050;

app.get("/", (req, res) => {
    res.send("Welcome to the Travel Agency API.")
})

//Error Handling Middleware
app.use((req, res) => {
    res.status(404).send("Resource Not found.")
})

// App.listen
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})