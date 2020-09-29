const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
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