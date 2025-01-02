const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017";

const mongoclient = new MongoClient(url);

async function connectToDatabase() {
  try {
    await mongoclient.connect();
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
}

connectToDatabase();

app.get('/bio', async (req, res) => {
  try {
    const db = mongoclient.db("userprofile");
    const collection = db.collection("bio");
    const data = await collection.find().toArray();
    res.json(data[0]);
  } catch (err) {
    console.error("Error fetching bio data", err);
    res.status(500).send("Error fetching data");
  }
});

app.get('/data', async (req, res) => {
  try {
    const db = mongoclient.db("userprofile");
    const collection = db.collection("data");
    const data = await collection.find().toArray();
    res.json(data);
  } catch (err) {
    console.error("Error fetching data", err);
    res.status(500).send("Error fetching data");
  }
});

app.get('/posts', async (req, res) => {
  try {
    const db = mongoclient.db("userprofile");
    const collection = db.collection("posts");
    const data = await collection.find().toArray();
    res.json(data);
  } catch (err) {
    console.error("Error fetching posts", err);
    res.status(500).send("Error fetching posts");
  }
});

app.put('/biodata/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const db = mongoclient.db("userprofile");
    const collection = db.collection("bio");
    const updateResult = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );
    res.json(updateResult);
  } catch (err) {
    console.error("Error updating bio data", err);
    res.status(500).send("Error updating data");
  }
});

app.put('/datas', async (req, res) => {
    try {
      const db = mongoclient.db("userprofile");
      const collection = db.collection("data");
  
      const updateResult = await collection.updateMany(
        {}, 
        { $set: req.body }
      );
  
      res.json(updateResult);
    } catch (err) {
      console.error("Error updating data", err);
      res.status(500).send("Error updating data");
    }
  });
  

app.put('/posts/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const db = mongoclient.db("userprofile");
    const collection = db.collection("posts");
    const updateResult = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );
    res.json(updateResult);
  } catch (err) {
    console.error("Error updating posts data", err);
    res.status(500).send("Error updating data");
  }
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
