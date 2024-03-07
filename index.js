// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {

// K = K + 1;

// SOMA = SOMA + K;

// }

// imprimir(SOMA);

// let INDICE = 13;
// let SOMA = 0;
// let K = 0;

// while (K < INDICE) {
//   K = K + 1;
//   SOMA = SOMA + K;
// }

// console.log(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?
// R: 91;


// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// function fibonacci(n) {
//     let fib = [0, 1];
    
//     for (let i = 2; i <= n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
    
//     return fib;
// }

// function verificaPertinencia(numero, sequencia) {
//     for (let i = 0; i < sequencia.length; i++) {
//         if (sequencia[i] === numero) {
//             return true;
//         }
//     }
//     return false;
// }

// const numero = 21;
// const sequenciaFibonacci = fibonacci(numero);

// if (verificaPertinencia(numero, sequenciaFibonacci)) {
//     console.log(`${numero} pertence à sequência de Fibonacci.`);
// } else {
//     console.log(`${numero} não pertence à sequência de Fibonacci.`);
// }


// 3) Descubra a lógica e complete o próximo elemento:



// a) 1, 3, 5, 7, ___

// b) 2, 4, 8, 16, 32, 64, ____

// c) 0, 1, 4, 9, 16, 25, 36, ____

// d) 4, 16, 36, 64, ____

// e) 1, 1, 2, 3, 5, 8, ____

// f) 2,10, 12, 16, 17, 18, 19, ____

// Respostas

// a) 1, 3, 5, 7, 9
// b) 2, 4, 8, 16, 32, 64, 128
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2, 10, 12, 16, 17, 18, 19, 20

// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

// Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

// R: Eu utilizaria apenas uma ida fazendo assim: acenderia o primeiro interruptor e deixaria ligado por alguns minutos até ter tempo de esquentar ela, depois desligaria o primeiro e ligaria o segundo, depois iria até as salas e procuraria a lâmpada que estiver quente e saberia que ela é a do primeiro interruptor, o segundo interruptor seria da lâmpada acesa e o terceiro seria da lâmpada que sobrou.

// 5) Escreva um programa que inverta os caracteres de um string.


// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;

// function inverterString(str) {
//     let invertedString = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         invertedString += str[i];
//     }
//     return invertedString;
// }

// Exemplo de utilização:
// const minhaString = "Esta é uma mensagem invertida!";
// const stringInvertida = inverterString(minhaString);
// console.log(stringInvertida); // saída: !aditrevni megasnem amu é atsE
