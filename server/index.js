const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const fileUpload = require("express-fileupload");
const path = require('path');

/**
 * Middleware and routes
 */
const authRouter = require("./routes/auth.routes");
const fileRouter = require("./routes/file.routes");
const corsMiddleware = require('./middleware/cors.middleware');
const filepathMiddleware = require('./middleware/filepath.middleware');

/**
 * Express application setup
 */
const app = express();
const PORT = config.get('serverPort');
const filesDirectory = path.resolve(__dirname, 'files');

app.use(fileUpload());
app.use(corsMiddleware);
app.use(filepathMiddleware(filesDirectory));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

const startServer = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};

startServer();
