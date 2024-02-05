//REST API(yat functions astat) Routing mhantat
//database madhala data ahe to api.js madhe ahee 
//
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')//cross origin sesource sharing gives a policy
const path = require('path');
//This is entry point file of server
const api = require('./routes/api');//server madhil routes madhil api.js
const port = 3000;

const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use('/api', api);

app.listen(port, function(){
    console.log("Marvellous Innfosystems : Server running on localhost:" + port);
});