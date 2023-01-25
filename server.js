const express = require("express");
const app = express();
const cors = require("cors");
require("express-async-errors");
const taskRouter = require("./Routes/taskRouter");
const connectDB = require("./DB/connectDB");
require("dotenv").config();

const port = process.env.PORT || 5000;

// const corsOptions = {
//   origin: "http://localhost:3000",
// };

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Database connection successful");
    app.listen(port, () => console.log(`Listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
