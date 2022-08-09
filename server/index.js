const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const fileRouter = require("./routes/file.routes")
const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')
const filepathMiddleware = require('./middleware/filepath.middleware')
const path = require('path')

app.use(corsMiddleware)
app.use(filepathMiddleware(path.resolve(__dirname, 'files')))

app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)

const start = async () => {
    try {

        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        app.listen(PORT, () => {
            console.log('server is running on port:', PORT)
        })

    } catch (e) {
        console.log('error', e)
    }
}

start();
