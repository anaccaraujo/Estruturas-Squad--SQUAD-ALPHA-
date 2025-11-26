/// ===============================
// Classe Queue (Fila)
// ===============================
class Queue {
    constructor() {
        this.items = []; // Armazena os elementos da fila
    }

    // Adiciona cliente na fila
    enqueue(elemento) {
        this.items.push(elemento);
        console.log(`\nEnqueue: ${elemento} entrou na fila`);
    }

    // Remove o primeiro da fila
    dequeue() {
        if (this.items.length === 0) {
            console.log("\nFila vazia!");
            return null;
        }
        const cliente = this.items.shift();
        console.log(`\nDequeue: ${cliente} está sendo atendido`);
        return cliente;
    }

    // Retorna o primeiro da fila
    front() {
        return this.items.length > 0 ? this.items[0] : "Fila vazia";
    }

    // Mostra toda a fila
    show() {
        console.log("\nFila atual:", this.items.length > 0 ? this.items : "Nenhum cliente");
    }
}

//Interface usuário
const readline = require("readline");

// Criando interface do console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Instancia a fila UMA ÚNICA VEZ
const fila = new Queue();

// Menu
function mostrarMenu() {
    console.log(`
==============================
      SISTEMA DE ATENDIMENTO
==============================

1 - Adicionar cliente à fila
2 - Atender próximo cliente
3 - Ver primeiro da fila
4 - Mostrar toda a fila
5 - Sair

Escolha uma opção:
`);
}

// Lógica das opções
function processarOpcao(opcao) {
    switch (opcao) {

        case "1":
            rl.question("\nDigite o nome do cliente: ", (nome) => {
                fila.enqueue(nome);
                mostrarMenu();
            });
            break;

        case "2":
            fila.dequeue();
            mostrarMenu();
            break;

        case "3":
            console.log(`\nPrimeiro da fila: ${fila.front()}`);
            mostrarMenu();
            break;

        case "4":
            fila.show();
            mostrarMenu();
            break;

        case "5":
            console.log("\nEncerrando o sistema...");
            rl.close();
            break;

        default:
            console.log("\nOpção inválida!");
            mostrarMenu();
    }
}

// Inicia menu
mostrarMenu();

// Escuta entradas do usuário
rl.on("line", (input) => {
    processarOpcao(input.trim());
});
