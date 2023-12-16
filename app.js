const express = require("express");
const color = require("colors");
const app = express();
const product = require("./api/product");

app.use(express.json({ extended: false }));

app.use("/api/product", product);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(color.america('Server is running in port '+PORT)));
