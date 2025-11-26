class Stack {
  constructor() {
    this.items = [];
  }

  // Adiciona um elemento ao topo
  push(element) {
    this.items.push(element);
  }

  // Remove o elemento do topo
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  // Retorna o elemento do topo sem remover
  peek() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  // Verifica se a pilha está vazia
  isEmpty() {
    return this.items.length === 0;
  }

  // Retorna o tamanho da pilha
  size() {
    return this.items.length;
  }

  // Esvazia a pilha
  clear() {
    this.items = [];
  }
}

function parenteses(string){
  const pilha = new Stack();
  for (c = 0 ; (string.length > c) ; c++){
    if ((string[c] == '(') | (string[c] == ')')){
      pilha.push(string[c])
    }
  }
  if (pilha.size() % 2 == 0){
    return true
  } else{
    return false
  }
}
console.log(parenteses('((1 + 1) * 1'))
