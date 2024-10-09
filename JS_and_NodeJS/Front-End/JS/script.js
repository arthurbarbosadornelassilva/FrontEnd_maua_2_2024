const protocolo = 'http://'
const baseURL = 'localhost:3000'
const filmeEndpoint = '/filmes'

// Função a ser executada de forma assíncrona 
async function obterFilmes () {
    const URLcompleta = `${protocolo}${baseURL}${filmeEndpoint}`
    const filmes = (await axios.get(URLcompleta)).data
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

    console.log (filmes)
}