const prompt = require('prompt-sync')();

class TelefoneCelular {
    #marca;
    #modelo;
    #preco;
    #memoria;

    getMarca() {
        return this.#marca;
    }
    setMarca(value) {
        this.#marca = value;
    }

    getModelo() {
        return this.#modelo;
    }
    setModelo(value) {
        this.#modelo = value;
    }

    getPreco() {
        return this.#preco;
    }
    setPreco(value) {
        this.#preco = value;
    }

    getMemoria() {
        return this.#memoria;
    }
    setMemoria(value) {
        this.#memoria = value;
    }

    preencher() {
        this.setMarca(prompt("Digite a marca do celular: "));
        this.setModelo(prompt("Digite o modelo do celular: "));
        this.setPreco(parseFloat(prompt("Digite o preço do celular: ")));
        this.setMemoria(parseInt(prompt("Digite a memória (GB) do celular: ")));
    }

    imprimir() {
        console.log(`Marca: ${this.getMarca()}`);
        console.log(`Modelo: ${this.getModelo()}`);
        console.log(`Preço: R$ ${this.getPreco().toFixed(2)}`);
        console.log(`Memória: ${this.getMemoria()} GB`);
    }
}

let celular = new TelefoneCelular();

celular.preencher();

console.log("\nInformações do Celular:");
celular.imprimir();
