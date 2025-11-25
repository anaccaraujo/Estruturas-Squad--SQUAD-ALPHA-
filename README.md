## 🏦 Desafio de Estruturas de Dados: Squad Alpha - Fintech

Este repositório contém a implementação prática de Estruturas de Dados fundamentais (Lista Duplamente Encadeada, Fila, Pilha e Array) aplicadas à resolução de problemas comuns em um sistema de banco digital. O objetivo é reforçar o conhecimento teórico e prático dessas estruturas no contexto de uma aplicação real de **Fintech**.

-----

## 🚀 Tecnologias

O projeto foi desenvolvido em **JavaScript (ES6+)**.

-----

## 🎯 Desafios de Implementação e Aplicações Bancárias

O desafio é dividido em cinco áreas, cada uma requerendo a implementação de uma estrutura de dados específica ou uma análise de performance.

### 1\. Histórico de Transações (Lista Duplamente Encadeada)

  * **Problema:** Desenvolver um extrato bancário onde o usuário possa **navegar** de forma eficiente para a transação **anterior** ou **posterior**.
  * **Estrutura:** `DoublyLinkedList`.
  * **Implementação:** Implementar as classes `TransactionNode` e `DoublyLinkedList` permitindo a adição e a navegação (`prev` e `next`).
  * 
### 2\. Atendimento ao Cliente (Fila / Queue)

  * **Problema:** Gerenciar solicitações no chat de suporte, garantindo que elas sejam atendidas na **ordem estrita de chegada** (**FIFO - First In, First Out**).
  * **Estrutura:** `Queue` (Fila).
  * **Implementação:**
      * Método `enqueue` para adicionar um cliente à espera.
      * Método `dequeue` para conectar o cliente a um atendente.
  * **Simulação:** Simular a chegada de 3 clientes e o atendimento de 2.

### 3\. Validação de Expressões Matemáticas (Pilha / Stack)

  * **Problema:** Garantir a integridade das fórmulas de cálculo de juros recebidas como *strings*, validando se todos os **parênteses** estão corretamente **balanceados** (ex: `((A + B) * C)`).
  * **Estrutura:** `Stack` (Pilha).
  * **Implementação:** Utilizar a Pilha para ler a string da fórmula e verificar o balanceamento de parênteses, retornando `true` ou `false`.

### 4\. Cotações do Dia (Vetor / Array)

  * **Problema:** Armazenar os valores de cotação do dólar a cada hora do dia comercial (9h às 17h), um cenário de **tamanho fixo e previsível**.
  * **Estrutura:** `Array` nativo do JavaScript.
  * **Implementação:**
      * Função para buscar a cotação de uma hora específica (**acesso direto por índice**).
      * Função para calcular a **média** das cotações do dia (iteração).

### 5\. Análise de Desempenho (Teórico/Prático)

  * **Problema:** Avaliação da performance entre **Lista Ligada** e **Array** para o histórico de transações.
  * **Objetivo:** Explicar (via comentário no código ou `console.log`) qual estrutura é mais performática para:
    1.  **Inserir uma transação no meio** do histórico.
    2.  **Acessar a 500ª transação** diretamente.

-----

## ⚙️ Como Executar o Projeto

1.  **Clone o Repositório:**

    ```bash
    git clone [SEU_LINK_DO_REPOSITORIO]
    ```

2.  **Navegue até o Diretório:**

    ```bash
    cd [NOME_DO_REPOSITORIO]
    ```

3.  **Execute o Arquivo:**

    ```bash
    node [NOME_DO_ARQUIVO].js
    ```

    *(Certifique-se de que o Node.js está instalado em sua máquina.)*

-----

## 👩‍💻 Status da Implementação

| Estrutura | Desafio | Status |
| :--- | :--- | :--- |
| Lista Duplamente Encadeada | Histórico de Transações | ⏳ Em Andamento / |
| Fila (Queue) | Atendimento ao Cliente | ⏳ Em Andamento /  |
| Pilha (Stack) | Validação de Expressões | ⏳ Em Andamento /  |
| Array | Cotações do Dia | ⏳ Em Andamento /  |
| Análise | Performance | ⏳ Em Andamento / |

-----
