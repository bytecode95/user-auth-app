const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');

app.use(cors())



app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})