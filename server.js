const express = require('express');
const path = require('path');

const pkg = require('./package.json');
const version = pkg.version || (new Date().getTime());

const app = express();

app.use((req, res, next) => {
    res.locals.version = version;
    next();
});

app.use(express.static(path.join(__dirname, './dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), () => {
    console.log('Server listening at %s:%s', server.address().address, server.address().port);
});
