const express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

//routes application

const userRoutes = require('./routes/user-routes');

app.use('/api/v1', userRoutes);




app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})