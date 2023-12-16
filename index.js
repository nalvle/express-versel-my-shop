const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res)=>{
    res.send('Test')
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));