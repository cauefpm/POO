const prompt = require('prompt-sync')();
// Modelo atributos e funçoes para criaçao de um objeto
class Cliente {
    #nome; //Atributo
    idade;
    cpf;
    agencia;

    getNome(){
        return this.#nome;
    }
    setNome(value){
        this.#nome = value;
    }
}

// objeto que possu as informaçoes da classe de frma individual
let cliente = new Cliente();

cliente.setNome(prompt("digite o nome do cliente: "))
cliente.idade = 23;
cliente.cpf = "134.492.239-37";
cliente.agencia = 102030;

console.log(cliente);