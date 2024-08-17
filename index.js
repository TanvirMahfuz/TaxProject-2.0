require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./src/app"); // No .default needed

// Connect to MongoDB using the URI from environment variables
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    // Start the server on the specified port, defaulting to 3000
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on: localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
