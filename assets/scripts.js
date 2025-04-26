// Inicializa a variável 'count' com valor 0. Esta variável será usada para armazenar o número atual exibido na tela.
let count = 0;

// Seleciona o elemento HTML que possui o ID 'currentNumber'. Esse elemento será utilizado para mostrar o valor de 'count' na página.
const CURRENT_NUMBER = document.getElementById('currentNumber');

// Define a função 'increment' que é chamada para aumentar o valor de 'count'.
function increment() {
    count++; // Incrementa o valor de 'count' em 1.
    CURRENT_NUMBER.innerHTML = count; // Atualiza o conteúdo do elemento HTML para o novo valor de 'count'.
}

// Define a função 'decrement' que é chamada para diminuir o valor de 'count'.
function decrement() {
    count--; // Decrementa o valor de 'count' em 1.
    CURRENT_NUMBER.innerHTML = count; // Atualiza o conteúdo do elemento HTML para o novo valor de 'count'.
}