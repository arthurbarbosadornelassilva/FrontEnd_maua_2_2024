const protocolo = 'http://'
const baseURL = 'localhost:3000'
const filmesEndpoint = '/filmes'


//////////////////////////////////////////////////////////////////////
// Função reutilizável para adicionar um filme na tabela de filmes:

// function listarFilmes(filmes) {
//     let tabela = document.querySelector('.filmes')  // --> para selecionar o documento
//     let corpoTabela = tabela.getElementsByTagName('tbody'[0])
//     corpoTabela.innerHTML = ""
//     // Criando um 'For' aprimorado
//     for (let filme of filmes) {
//         let linha = corpoTabela.insertRow(0)
//         let celulaTitulo = linha.insertCell(0)
//         let celulaSinopse = linha.insertCell(1)
//         celulaTitulo.innerHTML = filme.titulo
//         celulaSinopse.innerHTML = filme.sinopse
//     }
// }

// Função a ser executada de forma assíncrona 
async function obterFilmes () {
    const URLcompleta = `${protocolo}${baseURL}${filmesEndpoint}`
    const filmes = (await axios.get(URLcompleta)).data

    //listarFilmes(filmes)

    let tabela = document.querySelector('.filmes') // --> para selecionar o documento
    let corpoTabela = tabela.getElementsByTagName('tbody')[0] // -->
    // Criando um 'For' aprimorado
    for (let filme of filmes) {
        let linha = corpoTabela.insertRow(0)
        let celulaTitulo = linha.insertCell(0)
        let celulaSinopse = linha.insertCell(1)
        celulaTitulo.innerHTML = filme.titulo
        celulaSinopse.innerHTML = filme.sinopse
    }
}

async function cadastrarFilme() {
    const URLcompleta = `${protocolo}${baseURL}${filmesEndpoint}`
    let tituloInput = document.querySelector('#tituloInput')
    let sinopseInput = document.querySelector('#sinopseInput')
    let titulo = tituloInput.value
    let sinopse = sinopseInput.value
    tituloInput.value = ""
    sinopseInput.value = ""
    const filmes = (await axios.post(URLcompleta, {titulo, sinopse})).data

    // listarFilmes(filmes)

    let tabela = document.querySelector('.filmes')
    let corpoTabela = tabela.getElementsByTagName('tbody')[0]
    corpoTabela.innerHTML = ""
    for (let filme of filmes) {
        let linha = corpoTabela.insertRow(0)
        let celulaTitulo = linha.insertCell(0)
        let celulaSinopse = linha.insertCell(1)
        celulaTitulo.innerHTML = filme.titulo
        celulaSinopse.innerHTML = filme.sinopse
    }
}