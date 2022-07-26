import bodyParser from "body-parser";
import dotenv from "dotenv";

import express, { Request, Response } from "express";

import createMQConsumer from "./consumer";
const app = express();
dotenv.config();
const PORT = 3001;
const AMQP_URL: any = process.env.AMPQ_URL;
const QUEUE_NAME = "eventdriven";



const consumer = createMQConsumer(AMQP_URL, QUEUE_NAME);

consumer();
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
