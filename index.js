const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));