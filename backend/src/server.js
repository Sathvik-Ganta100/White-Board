// const express = require("express");  // When type not set to module in package.json
import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()

// middleware
if(process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173",
        })                                          // Allows request from specific url
    ); 
}

app.use(express.json());       // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);


// to log all req in terminal
// app.use((req, res, next) => {
//     console.log(`Req method: ${req.method} & Req URL: ${req.url}`);
//     next();    
// });


// an Endpoint is a combination of URL + HTTP method that lets the client interact with a specific resource.
// ex: /api/note/...

app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});


