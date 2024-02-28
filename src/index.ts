import { PORT } from "./utils/constants";
import app from "./app";
import "./database/";

app.listen(PORT, () => console.log("Server running on port", PORT));
