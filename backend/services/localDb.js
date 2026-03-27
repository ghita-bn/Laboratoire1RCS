const { ObjectId } = require("mongodb");
const connectDB = require("../db");

async function getRecommendationsCollection() {
  const db = await connectDB();
  return db.collection("recommendations");
}

exports.getAllRecommendations = async (category) => {
  const collection = await getRecommendationsCollection();
  return await collection.find({ category }).toArray();
};

exports.createRecommendation = async (data) => {
  const collection = await getRecommendationsCollection();
  const result = await collection.insertOne(data);
  return await collection.findOne({ _id: result.insertedId });
};

exports.updateRecommendation = async (id, data) => {
  const collection = await getRecommendationsCollection();
  await collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
};

exports.deleteRecommendation = async (id) => {
  const collection = await getRecommendationsCollection();
  await collection.deleteOne({ _id: new ObjectId(id) });
};