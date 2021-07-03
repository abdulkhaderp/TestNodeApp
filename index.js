
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const router = express.Router();
app.use(bodyParser.json());
const nodemailer = require('nodemailer');

//app.use(express.static(path.join(__dirname,'../build')));
app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'index.html'));
});
const port = process.env.PORT || 3001;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));
module.exports = server;