// Cria um array fixo de 9 posições (9h às 17h)
const cotacoes = new Array(9).fill(null);

/**
 * Registra a cotação de uma hora específica
 * @param {number} hora - Hora comercial (9 a 17)
 * @param {number} valor - Cotação do dólar
 */
function registrarCotacao(hora, valor) {
  const indice = hora - 9;

  if (indice < 0 || indice >= cotacoes.length) {
    console.log("Hora inválida! Use entre 9 e 17.");
    return;
  }

  cotacoes[indice] = valor;
}

/**
 * Busca a cotação de uma hora específica
 * @param {number} hora - Hora comercial (9 a 17)
 * @returns {number|null}
 */
function buscarCotacao(hora) {
  const indice = hora - 9;

  if (indice < 0 || indice >= cotacoes.length) {
    console.log("Hora inválida! Use entre 9 e 17.");
    return null;
  }

  return cotacoes[indice];
}

/**
 * Calcula a média das cotações do dia
 * @returns {number}
 */
function calcularMedia() {
  let soma = 0;
  let count = 0;

  for (const valor of cotacoes) {
    if (valor !== null) {
      soma += valor;
      count++;
    }
  }

  return count === 0 ? 0 : soma / count;
}