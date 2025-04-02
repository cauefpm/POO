const prompt = require('prompt-sync')();
// Modelo atributos e funçoes para criaçao de um objeto
class Cliente {
    nome; //
    idade;
    cpf;
    agencia;
}

// objeto que possu as informaçoes da classe de frma individual
let cliente = new Cliente();

cliente.nome = prompt ("digite o nome do cliente: ")
cliente.idade = 23;
cliente.cpf = "134.492.239-37";
cliente.agencia = 102030;

console.log(cliente);