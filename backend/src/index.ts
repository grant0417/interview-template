import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
