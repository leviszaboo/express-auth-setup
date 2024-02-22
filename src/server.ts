import express from "express";
import cors from "cors";
import config from "config";

const port = config.get("port") as number;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});