const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

const piecesRouter = require("./data/api/piecesRouter");

server.use(cors());
server.use(express.json());

server.use("/api", piecesRouter);

server.get("/", (req, res) => {
    res.status(200).json({message: "Server running."})
})

module.exports = server;