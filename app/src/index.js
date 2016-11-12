let express = require('express');
let config = require(process.cwd() + '/config.json');

let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => res.render('index', {greeting: 'Hello BuildStuff LT', server: config.SERVER_ADDRESS}));
app.listen(config.APP_PORT, () => console.log(`Server started on port ${config.APP_PORT}...`));