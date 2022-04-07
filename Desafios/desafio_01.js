// Declarar uma variável chamada `myvar`, sem valor.
var myVar

// Após declarada, atribua o valor 10 à variável `myvar`.
var myVar = 10

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma
soma = 15 + 8
console.log(soma)

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma += 1
console.log(soma)

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3
console.log(soma)

// Qual é o valor da variável `soma` até aqui?
// soma = 72

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souNinja = 'Naruto'
console.log(!!souNinja)

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['arroz', 'feijão', 'ovo']

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1])

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).

if (soma === myVar) {
  console.log('True')
} else {
  console.log('false')
}

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
if (myVar <= soma) {
  console.log('Menor')
} else {
  console.log('Maior')
}

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
var x = 8
var y = 2
function division(x, y) {
  return x / y
}
console.log(division(x, y))
// Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log(division((x = 10), (y = 2)))
