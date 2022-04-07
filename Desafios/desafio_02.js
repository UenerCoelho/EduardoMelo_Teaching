// // Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
// var num1 = 2
// var num2 = 3
// function soma() {
//   return num1 + num2
// }
// console.log(soma())
// // Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
// console.log(soma((num1 = 10), (num2 = 10)) + 5)
// // Qual o valor atualizado dessa variável?
// 25

// // Declare uma nova variável, sem valor.
// var num
// /*
// Crie uma função que adicione um valor à variável criada acima, e retorne a string:
//     O valor da variável agora é 10.
//     Onde 10 é o novo valor da variável.
// */
// function value(valor) {
//   num = valor;
//   var text = 'O valor da variável agora é: ' + num;
//   return text;
// }
// console.log(value(10))

// // Invoque a função criada acima.
// // value()

// // Qual o retorno da função? (Use comentários de bloco).
// //'10'

// /*
// Crie uma função com as seguintes características:
// 1. A função deve receber 3 argumentos;
// 2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
//     Preencha todos os valores corretamente!
// 3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
// */
// // var a = 2
// // var b = 3
// // var c = 4
// function multiplication(a, b, c) {
//   if ((!a || !b || !c)) {
//     var text = 'Preencha todos os valores corretamente!';
//     return text;
//   } else {
//     return a * b * c + 2
//   }
// }
// console.log(multiplication())
// console.log(multiplication(1,2,3))

// // Invoque a função criada acima, passando só dois números como argumento.
// console.log(multiplication('',3,4))

// // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// // 2

// // Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
// console.log(multiplication(2,3,4))

// // Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// // 26

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function condition2(x, y, z){
  if  (x && !y && !z){
    return x;
  }else if (x && y && !z){
    return x + y;
  }else if (x && y && z){
  var xy = x + y;
  return xy / z;
  }else if (!x && !y && !z){
    return false;
  }else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.


console.log(condition2(1,'',''))
console.log(condition2(1,2,''))
console.log(condition2(1,2,3))
console.log(condition2('','',''))
