/*
Node + Express Example code for CS160 Summer 2022
Prepared by Shm Garanganao Almeda 

Code referenced from: 
https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module"
https://expressjs.com/en/starter/hello-world.html
https://codeforgeek.com/render-html-file-expressjs/
https://stackoverflow.com/questions/32257736/app-use-express-serve-multiple-html

Photo Credits:
Bunny by Satyabratasm on Unsplash <https://unsplash.com/photos/u_kMWN-BWyU>
*/

//Node modules to *require*
//if these cause errors, be sure you've installed them, ex: 'npm install express'
const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');

//specify that we want to run our website on 'http://localhost:8000/'
const host = 'localhost';
const port = 8000;

var publicPath = path.join(__dirname, 'public'); //get the path to use our "public" folder where we stored our html, css, images, etc
app.use(express.static(publicPath));  //tell express to use that folder



//here's where we specify what to send to users that connect to our web server...
//if there's no url extension, it will show "index.html"
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/"));
});

//depending on what url extension the user navigates to, send them the respective html file. 

app.get('/template-frame', function (req, res) {
    res.sendFile(publicPath + '/template-frame.html');
});
app.get('/frame1', function (req, res) {
    res.sendFile(publicPath + '/frame1.html');
});
app.get('/graphs', function (req, res) {
    res.sendFile(publicPath + '/graphs.html');
});
app.get('/planner1', function (req, res) {
    res.sendFile(publicPath + '/planner1.html');
});
app.get('/planner2', function (req, res) {
    res.sendFile(publicPath + '/planner2.html');
});
app.get('/CSBA', function (req, res) {
    res.sendFile(publicPath + '/CSBA.html');
});
app.get('/env', function (req, res) {
    res.sendFile(publicPath + '/env.html');
});
app.get('/urban', function (req, res) {
    res.sendFile(publicPath + '/urban.html');
});
app.get('/planner2-16b', function (req, res) {
    res.sendFile(publicPath + '/planner2-16b.html');
    });
app.get('/index', function (req, res) {
    res.sendFile(publicPath + '/index.html');
});

//run this server by entering "node App.js" using your command line. 
   app.listen(port, () => {
     console.log(`Server is running on http://${host}:${port}`);
   });



