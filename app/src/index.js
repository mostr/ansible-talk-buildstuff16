let express = require('express');

let app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => res.render('index', {greeting: 'Hello BuildStuff LT'}));
app.listen(8080, () => console.log(`Server started on port 8080...`));