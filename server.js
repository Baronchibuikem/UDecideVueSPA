const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

// serves files from our dist directory which now contains our index.html
app.use("/", serveStatic(path.join(__dirname, "/dist")));

const port = process.env.port || 8080;
app.listen(port);
console.log("listening on port: " + port);
