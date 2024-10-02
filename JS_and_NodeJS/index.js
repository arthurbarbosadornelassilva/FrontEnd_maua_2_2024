// console.log('Hello World!')

const express = require('express')
const app = express()

app.use(express.json())

//get http://localhost:3000/oi
// app.get('/oi', (req, res) => {
//     res.send(oi)
// })

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

//get http://localhost:3000/filmes
app.get("/filmes", (req, res) => {
    res.json(filmes)
})

app.post("/filmes", (req, res) => {
    //obtém os dados enviados pelo cliente
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    //monta o obj filme para incluir à lista
    const filme = { titulo: titulo, sinopse: sinopse }
    //adiciona o novo filme à lista de filmes
    filmes.push(filme)
    //mostra a base atualizada
    res.json(filmes)
})

app.listen(3000, () => console.log("up and running"))
