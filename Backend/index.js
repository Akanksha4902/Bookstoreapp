import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();

app.use(cors());

app.use(express.json());

dotenv.config();
const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

//conect to mongoDB
try{
    mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  });


}catch (error){
    console.log("error",error);

}

//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(PORT, () => {
  console.log(`server is  listening on port ${PORT}`)
});