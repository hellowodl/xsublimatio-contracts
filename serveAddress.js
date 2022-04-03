/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const deployment = require('./deployments/localhost/XSublimatio.json');

const app = express();

app.get('/', (req, res) => {
    res.send(deployment.address);
});

app.listen(8081);
