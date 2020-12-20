var path = require('path')
const express = require('express')
const testmockAPIResponse = require('./mockAPI.js')

const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });
var body = []
var k = process.env.API_KEY

//require('dotenv').config({ path: __dirname + '/.env' })

const hostname = process.env.HOST;
const database = process.env.DATABASE;
const port = process.env.PORT;

// console.log(hostname);
// console.log(database);
// console.log(port);


const app = express()

app.use(express.static('dist'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`);
const cors = require('cors');
app.use(cors());

var https = require('follow-redirects').https;
var fs = require('fs');


app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')


})

app.get('/test', function(req, response) {
    //console.log("REAAAAAAAAAAAAAAAA")
    //mockAPIResponse()

    let str = "This is the food i like.I like pizza.this is book i like.i read novels"
    st1 = encodeURI(str)
        //console.log(st1)
    var options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': '/deepcategorization-1.0?key=' + k + '&txt=' + st1 + '&model=IAB_2.0_en',
        'headers': {},
        'maxRedirects': 20
    };

    var req = https.request(options, function(res) {
        var chunks = [];

        res.on("data", function(chunk) {
            chunks.push(chunk);
        });

        res.on("end", function(chunk) {
            body = Buffer.concat(chunks);
            console.log("In end " + body.toString());
            //console.log(body)
            response.send(body.toString())

        });

        res.on("error", function(error) {
            console.error(error);
        });
    });

    req.end();
})

//function mockAPIResponse() {


//}