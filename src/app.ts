import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import "dotenv/config";
import userRoutes from "./routes/user.route";

const app = express();

app.use(json());
app.use("/users", userRoutes);
app.get("/", (req, res) => {
    res.send("Test");
});

let processConnection: string;
if (process.env.DB_CONNECTION) {
    processConnection = process.env.DB_CONNECTION;
} else {
    throw new Error("dotenv Error");
}
console.log(process.env.DB_CONNECTION);
mongoose.connect(processConnection, () => console.log("connected to db"));
mongoose.connection
    .once("open", () => console.log("Connected"))
    .on("error", (error) => {
        console.log("Your Error", error);
    });

//nasłuchiwanie portu
app.listen(3000);
