import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/dbConnect.js";
import BookRouter from "../routes/BookRoute.js";
import { globalErrhandler,notFound } from "../middlewear/globalErrHandler.js";

dotenv.config();

const app = express();
dbConnect();

app.use(express.json());
app.use("/api/books",BookRouter)

//err middlewear
app.use(notFound);
app.use(globalErrhandler);

export default app;
