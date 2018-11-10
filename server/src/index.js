//root file for application server side 

import express from 'express';
import renderer from './helpers/renderer';
const app = express();

app.use(express.static('public'));//this tells express that teh public folder is publicy availble (like to the user) to the outside world. 

app.get('/', (req, res) => {
   
    res.send(renderer());
});

app.listen(3200, () => {
    console.log('\n -- server running on 3200');
});