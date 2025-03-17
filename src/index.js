import express from "express";
import AppRoutes from "./routes/index.js";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./module/index.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/", AppRoutes);

connectDatabase();
app.listen(PORT, () => console.log(`App is listening at port ${PORT}`));
