const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend","static"),{extensions:["js"]}));

app.get("/*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "frontend","index.html"),{extensions:["js"]});
});

app.listen(process.env.PORT || 5080, () => console.log("Server running..."));

