// console.log('Hello World!')

const express = require ('express')
const app = express()

app.use (express.json())

//get http://localhost:3000/oi
app.get('/oi', (req, res) => {res.send(filmes)})

let filmes = [
    // Dentro de uma lista colocamos objetos, determinados sempre por chaves (ignore o conceito de dicionários) => Ex. de objeto: {chave: valor}
    {
        titulo: "O Poderoso Chefao",
        sinopse: "Don Corleone é foda"
    },
    {
        titulo: "Oppenheimer",
        sinopse: "bomba - boom"
    }
]

app.listen(3000, () => console.log("up and running"))