import {readFileSync, writeFileSync} from "fs"

const action = process.argv[2]
const key = process.argv[3]
const value = process.argv[4]

const dados = JSON.parse(String(readFileSync("./dados.json")))

if (action == "get"){
    console.log(dados[key])
}

//const username = process.argv[2]
//const conteudoDoArquivo = String(readFileSync("./nomes.txt"))
//console.log(conteudoDoArquivo);
//console.log(conteudoDoArquivo.includes(username));
//conteudoDoArquivo += `\n ${username}`
//writeFileSync("meuarquivo.md","# node e legau")


//const username = process.argv[2]
//const secretPassaword = process.argv[3]
//const{countLetters} =require('./test.js')

//if(secretPassaword == "42"){
//    console.log(`welcome, ${username}!`);
//}
//console.log(`hello, ${username}`)
//countLetters()