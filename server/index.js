'use strict';

require('dotenv').config(); //enables process.env.
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors);

app.get('/', (req, res)=>{

});

app.get('/hiscores', ()=>{

});

app.post('/hiscores', ()=>{

});

app.delete('/hiscores', (req, res)=>{
    let record = req.query.playerId;
    let score = req.query.score;
    
});

app.get('*', (req, res) => {
    res.status(404).send('404: Page Not Found');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(3001, () => console.log('we live on 3001'));