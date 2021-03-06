const http = require('http');
const net = require('net');
const url = require('url');

const express = require("express");
const app = express();

const PORT = (process.env.PORT).trim() || 3000;

app.get("/", function(req, res) {
    res.send("Hello World from " + PORT);
});

app.listen(PORT, () => console.log("Server listening on http://localhost:" + PORT));