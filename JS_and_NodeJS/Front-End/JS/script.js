const protocolo = 'http://'
const baseURL = 'localhost:5502'
const filmeEndpoint = '/filmes'

// Função a ser executada de forma assíncrona 
async function obterFilmes () {
    const URLcompleta = `${protocolo}${baseURL}${filmeEndpoint}`
    const filmes = (await axios.get(URLcompleta)).data

    console.log (filmes)
}