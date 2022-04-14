// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
var sum = function(a, b) {
  sumA = a + b;
  return sumA;
}

console.log(sum(4, 4));

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var sumB = sum(3, 2) + 5;
// Qual o valor atualizado dessa variável?
console.log(sumB); // 10

// Declare uma nova variável, sem valor.
var value;
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é 10.
    Onde 10 é o novo valor da variável.
*/
function addValue(value) {
  valueIs = value;
  return ('O valor da Variável agora é: '.concat(valueIs));
}

// Invoque a função criada acima.
console.log(addValue(10));

// Qual o retorno da função? (Use comentários de bloco).
//'10'

/*
  Crie uma função com as seguintes características:
  1. A função deve receber 3 argumentos;
  2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
      Preencha todos os valores corretamente!
  3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
// var a = 2
// var b = 3
// var c = 4
function funcao(a, b, c) {
  var multSum;
  if (!a || !b || !c){
    return ('Preencha todos os valores corretamente!')
  } else {
    return multSum = ((a * b) * c) + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(funcao(2, '', 3))
console.log(funcao('', 2, 3))
console.log(funcao(2, 2, ''))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(funcao(2, 2, 3))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 14

/*
  Crie uma função com as seguintes características:
  1. A função deve receber 3 argumentos.
  2. Se somente um argumento for passado, retorne o valor do argumento.
  3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
  4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
  5. Se nenhum argumento for passado, retorne o valor booleano `false`.
  6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function threeArgs(a, b, c) {
  arg1 = a;
  arg2 = b;
  arg3 = c;
  sumArg = arg1 + arg2;
  argDivided =  sumArg / arg3;
  if (!!arg1 && !arg2 && !arg3){
    return arg1;
  } else if (!!arg1 && !!arg2 && !arg3) {
    return sumArg;
  } else if (!!arg1 && !!arg2 && !!arg3) {
    return argDivided;
  } else if (!arg1 && !arg2 && !arg3) {
    return argDivided = false;
  } else {
    return null;
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(threeArgs(2, '', ''));
console.log(threeArgs(2, 2, ''));
console.log(threeArgs(2, 2, 2));
console.log(threeArgs(2, '', ''));
console.log(threeArgs('a', 'b', 'c'));
