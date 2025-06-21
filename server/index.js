// server/index.js
const express = require('express');// Import the Express framework to create a web server.
// This is the main entry point for the Story Collab server.
 // The server is expected to be running on http://localhost:5000/.
// The server is used to handle API requests from the client application.
 // The server is configured to use CORS and JSON parsing middleware.
const cors = require('cors');// Import the CORS middleware to allow cross-origin requests.
// CORS is used to enable cross-origin resource sharing, allowing the client to make requests to the server from a different origin.

const app = express();// Create an instance of the Express application.
// The app variable is the main Express application object that will handle incoming requests and responses.
app.use(cors());
 // The server uses CORS to allow requests from other origins, and it parses JSON request bodies.

app.use(express.json());// Middleware to parse JSON request bodies.
// This middleware allows the server to handle JSON data sent in requests, making it easier to work with request payloads.

app.get('/', (req, res) => res.send('API is running'));// Set up a route to handle GET requests at the root URL.
 // This route responds with a simple text message indicating that the API is running.
 // It is a basic health check endpoint to verify that the server is operational.
// The server is set up to respond to GET requests at the root URL with a simple text message.
 // The server responds with a simple message when the root URL is accessed.

app.listen(5000, () => console.log('Server running on port 5000'));// Start the server and listen on port 5000.
 // This line starts the Express server and listens for incoming requests on port 5000.
 // When the server is successfully running, it logs a message to the console indicating that it is operational.
// It sets up an Express server that listens on port 5000.  
