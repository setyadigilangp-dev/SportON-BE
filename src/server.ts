import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || "5001";
const MONGO_URI = process.env.MONGO_URI || "no-mongo-uri";

if (process.env.VERCEL !== "1") {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("✅ Connected to MongoDB (LOCAL)");

      app.listen(PORT, () => {
        console.log(`🚀 Server is running locally on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.error("❌ Error connecting to MongoDB:", error);
    });
}