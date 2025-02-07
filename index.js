const express = require('express');

const {connectMongoDb }= require('./connection');

const {logReqRes} = require('./midlewires');
const userrouter = require('./routes/user');

const app = express();
//const users = require('./MOCK_DATA.json');
const port = 8000;

connectMongoDb('mongodb://localhost:27017/project-app-1');


//middleware-plugin
app.use(express.urlencoded({extended: false}));
//midleware 
app.use(logReqRes('log.txt'));
app.use('/api/users', userrouter);

//app listening to port 8000
app.listen(port, () => {   
    console.log(`Server is running on port ${port}`);
});