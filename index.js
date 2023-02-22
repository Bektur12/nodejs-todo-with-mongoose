import express from "express";
import mongoose from "mongoose";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://user:bekaseka@nodejs-backend.wr1or3h.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json("hello server");
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(PORT, "hello"));
  } catch (e) {
    console.log(e);
  }
}

startApp();
