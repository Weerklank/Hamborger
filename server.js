// var express = require("express");
// var handlebars = require("express-handlebars");

// var PORT = process.env.PORT || 8000;
// var app = express();

// app.use(express.static("public"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.engine("handlebars", handlebars({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// app.use(routes);

// app.listen(PORT, function() {
//   console.log("Listening on port:%s", PORT);
// });

const express = require('express');
const app = express();
const port = 3000;
const routes = require("./controllers/burger_controller.js");

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static('public'))
app.get('/', (req, res) => {

res.render('index', {layout : 'main'});
});

app.listen(port, () => console.log(`App listening to port ${port}`));