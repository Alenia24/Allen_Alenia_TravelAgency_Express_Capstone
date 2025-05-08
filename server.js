import express from "express";
import { config } from "dotenv";
config();

// Import the database connection
import "./database/database.js"

const app = express();

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
    res.send("Welcome to the Travel Agency API.")
})

//Error Handling Middleware
app.use((req, res) => {
    res.status(404).send("Resource Not found.")
})

// App.listen
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})