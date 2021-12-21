const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // req es la request, la peticion
    // res es la respuesta
    console.log(req);
    res.send('Hello World!');

});

app.post('/team/pokemons', () => {

});

app.get('/team', () => {

});

app.delete('/team/pokemons/:pokeid', () => {

});

app.put('/team', () => {

});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});