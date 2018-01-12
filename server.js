import express from 'express';
import path from 'path';
import open from 'open';

import config from './rollup.config';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, './dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    } else {
        open(`http://localhost:${port}`);
    }
});