import app from "./app";
import "./database/";

import { PORT } from "./utils/constants";

app.listen(PORT, () => console.log("Server running on port", PORT));
