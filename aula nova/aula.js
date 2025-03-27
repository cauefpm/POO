const prompt = require('prompt-sync')();
class Cliente {
    nome;
    idade;
    cpf;
    agencia;
}

let cliente = new Cliente();

cliente.nome = prompt ("digite o nome do cliente: ")
cliente.idade = 23;
cliente.cpf = "134.492.239-37";
cliente.agencia = 102030;

console.log(cliente)