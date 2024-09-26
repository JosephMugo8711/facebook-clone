const express = require("express"); // Express framework for handling HTTP requests
// CORE middleware to add a layer of security, allowing or restricting access from specific origins 
const cors = require("cors");
// File system module to read directory contents dynamically
const { readdirSync } = require("fs");
const app = express(); // Initialize Express app

// Enable CORS (Cross-Origin Resource Sharing) middleware to allow cross-origin requests from any domain
// This adds security by limiting who can access the API, depending on the configuration
app.use(cors());
// const useRoutes = require("./routes/user");

// // Add prefix which is api
// app.use("/api", useRoutes);

// Dynamically load all routes from the "routes" directory
// This avoids manually requiring each route file, making the app  scalable as the number of routes increases
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

// Start server and listen on port 800
// Logging message to indicate server is running and ready to handle requests
app.listen(8000, () => {
    console.log("Server is listening....");
});