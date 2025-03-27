const prompt = require('prompt-sync')();
class Cliente {
    nome;
    idade;
    cpf;
    agencia;
}

let cliente = new Cliente();

cliente.nome = prompt ("digite o nome do cliente: ")
cliente.idade = 21;
cliente.cpf = "132.495.239-33";
cliente.agencia = 102030;

console.log(cliente)