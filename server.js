const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use("/source",express.static(__dirname + "/source"));


app.get("/", (req, res, next) => {
  res.render("index");
});

app.listen(3000, console.log('app is running on port 3000...'))