
// IMPORTAÇÃO E CONFIGURAÇÃO DO READLINE PARA INPUT DO USUÁRIO

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Função auxiliar para facilitar perguntas ao usuário
function perguntar(msg) {
    return new Promise((resolve) => rl.question(msg, resolve));
}



// LISTA DUPLAMENTE ENCADEADA


// Nó da lista (contém o dado e ponteiros para anterior e próximo)
class Node {
    constructor(data) {
        this.data = data;   // O valor armazenado (nome da transação, por exemplo)
        this.next = null;   // Ponteiro para o próximo nó
        this.prev = null;   // Ponteiro para o nó anterior
    }
}

// Estrutura da lista duplamente encadeada
class DoublyLinkedList {
    constructor() {
        this.head = null; // Primeiro elemento da lista
        this.tail = null; // Último elemento da lista
        this.size = 0;    // Quantidade de nós
    }

    // Método para adicionar uma nova transação no final da lista
    add(data) {
        const newNode = new Node(data);

        // Caso seja o primeiro elemento
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            console.log(`Transação adicionada: ${data}`);
            return;
        }

        // Encadeamento normal (final da lista)
        this.tail.next = newNode;  // Último nó aponta para o novo
        newNode.prev = this.tail;  // Novo nó aponta para o anterior
        this.tail = newNode;       // Novo nó vira o novo tail
        this.size++;

        console.log(`Transação adicionada: ${data}`);
    }

    // Método para remover uma transação específica pelo nome
    remove(data) {
        if (!this.head) return console.log("Não há transações.");

        let current = this.head;

        while (current) {
            // Quando encontrar a transação
            if (current.data === data) {

                // Caso seja o head (primeiro)
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) this.head.prev = null;
                }

                // Caso seja o tail (último)
                if (current === this.tail) {
                    this.tail = current.prev;
                    if (this.tail) this.tail.next = null;
                }

                // Caso seja um nó do meio
                if (current.prev) current.prev.next = current.next;
                if (current.next) current.next.prev = current.prev;

                this.size--;
                console.log(`Transação removida: ${data}`);
                return;
            }

            current = current.next; // Continua procurando
        }

        console.log("Transação não encontrada.");
    }

    // Imprime toda a lista do início ao fim
    printForward() {
        let current = this.head;
        let result = "";

        while (current) {
            result += `[${current.data}] ⇢ `;
            current = current.next;
        }

        console.log(result + "null\n");
    }
}


const history = new DoublyLinkedList();


// SISTEMA DE OPÇÕES DO MENU


// Cada chave do objeto corresponde a uma opção digitada pelo usuário
const options = {
    "1": async () => {
        // Adicionar transação
        const valor = await perguntar("Digite a transação a adicionar: ");
        history.add(valor);
    },

    "2": async () => {
        // Remover transação
        const valor = await perguntar("Digite a transação a remover: ");
        history.remove(valor);
    },

    "3": async () => {
        // Mostrar histórico completo
        console.log("\n--- Histórico ---");
        history.printForward();
    },

    "4": async () => {
        // Finalizar programa
        console.log("Saindo...");
        rl.close();   // Encerra o input
        return "exit"; // Retorno usado para sair do menu
    }
};



// MENU PRINCIPAL

async function menu() {

    // Exibição das opções
    console.log(`
============================
   HISTÓRICO DE TRANSAÇÕES
============================
1 - Adicionar transação
2 - Remover transação
3 - Mostrar histórico
4 - Sair
`);

    // Pergunta ao usuário qual ação deseja
    const opc = await perguntar("Escolha uma opção: ");
    console.log("");

    // Obtém a função correspondente à opção digitada
    const action = options[opc];


    if (action) {
        const result = await action();
        
 
        if (result === "exit") return;
    } else {

        console.log("Opção inválida.\n");
    }

    // Volta ao menu após executar a ação
    menu();
}

// Inicializa o menu ao rodar o programa
menu();
