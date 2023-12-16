const express = require("express");
const color = require("colors");
const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res)=>{
    res.send('Test')
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(
    color.bgYellow.black('Server is running in port'),
    color.bgBlue.black(`${PORT}`)
    ));