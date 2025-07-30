import { readFileSync, writeFileSync } from "fs"

const action = process.argv[2]
const key = process.argv[3]
const value = process.argv[4]

const dados = JSON.parse(String(readFileSync("./dados.json")))

if (action === "get") {
    console.log(dados[key])
} else if (action === "set") {
    dados[key] = value
    writeFileSync("./dados.json", JSON.stringify(dados, null, 2))
    console.log(`Valor de '${key}' atualizado para '${value}'`)
}

// ------------------ EXTRAS TESTES ------------------

// const username = process.argv[2]
// const conteudoDoArquivo = String(readFileSync("./nomes.txt"))
// console.log(conteudoDoArquivo)
// console.log(conteudoDoArquivo.includes(username))
// conteudoDoArquivo += `\n ${username}`
// writeFileSync("meuarquivo.md", "# node é legal")

// const secretPassword = process.argv[3]
// import { countLetters } from "./test.js"

// if (secretPassword === "42") {
//     console.log(`Welcome, ${username}!`)
// }
// console.log(`Hello, ${username}`)
// countLetters()
