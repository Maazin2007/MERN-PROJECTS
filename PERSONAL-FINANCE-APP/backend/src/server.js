import { PORT } from "./config/env.js";
import connectToDatabase from "./config/mongodb.js";
import app from "./app.js";

// starting the server
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);

    // attempt to connect to MongoDB
    await connectToDatabase();
});