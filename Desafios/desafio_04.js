/* 01 -
  Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
  um único parâmetro como argumento. Essa função deve retornar `true` se o
  equivalente booleano para o valor passado no argumento for `true`, ou `false`
  para o contrário.
*/
var isTruthy = (function () {
  var valueIs;

  return {
    changeValue: function (value) {
      valueIs = value;
      return !!valueIs;
    }
  }
}())

/* 01.1 -
  Invoque a função criada acima, passando todos os tipos de valores `falsy`.
*/
console.log(isTruthy.changeValue(0)) //false
console.log(isTruthy.changeValue(null)) //false
console.log(isTruthy.changeValue(NaN)) //false
console.log(isTruthy.changeValue()) // false por ser Vazio pois automaticamente vem com dupla negação
console.log(isTruthy.changeValue(false)) //false
console.log(isTruthy.changeValue(undefined)) //false
console.log(isTruthy.changeValue(""))

/*01.2 -
  Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy.changeValue(1))
console.log(isTruthy.changeValue(true))
console.log(isTruthy.changeValue(String))
console.log(isTruthy.changeValue(-1))
console.log(isTruthy.changeValue('String'))
console.log(isTruthy.changeValue({}))
console.log(isTruthy.changeValue([]))
console.log(isTruthy.changeValue(10))
console.log(isTruthy.changeValue("1000"))
console.log(isTruthy.changeValue('Uener'))

/* 02 -
  Declare uma variável chamada `carro`, atribuindo à ela um objeto com as seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
  - `marca` - String
  - `modelo` - String
  - `placa` - String
  - `ano` - Number
  - `cor` - String
  - `quantasPortas` - Number
  - `assentos` - Number - cinco por padrão
  - `quantidadePessoas` - Number - zero por padrão
*/
var car = {
  brand: 'Wolksvagem',
  model: 'Fox Rock'.concat("'") + 'in Rio',
  plate: '1R0-NM4N',
  year: 2023,
  color: 'Green',
  howManyDoors: 5,
  seats: 5,
  capacity: 0
};


/* 02.1 -
  Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor passado por parâmetro.
*/
car.changeColor = function (newColor) {
  return this.color = newColor;
};

/* 02.2 -
  Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
car.getColor = function () {
  return this.color;
};

/* 02.3 -
  Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
car.getModel = function () {
  return this.model;
};

/* 02.4 -
  Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
car.getBrand = function () {
  return this.brand;
};

/* 02.5 -
  Crie um método chamado `obterMarcaModelo`, que retorne: "Esse carro é um [MARCA] [MODELO]" Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
car.getBrandModel = function () {
  return 'Esse carro é um '.concat(this.brand).concat(' ').concat(this.model).concat('.');
}
/* 02.6 -
  Crie um método que irá adicionar pessoas no carro. Esse método terá as
  seguintes características:
  - Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse número não precisa encher o carro, você poderá acrescentar as pessoas aos poucos.
  - O método deve retornar a frase: "Já temos [X] pessoas no carro!"
  - Se o carro já estiver cheio, com todos os assentos já preenchidos, o método deve retornar a frase: "O carro já está lotado!"
  - Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por parâmetro for ultrapassar o limite de assentos do carro, então você deve mostrar quantos assentos ainda podem ser ocupados, com a frase: "Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
  - Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno citado acima, no lugar de "pessoas".
*/
car.addPerson = function (person) {
  this.capacity += person;
  if (((this.capacity + person) > this.seats) && ((this.capacity + person) < this.seats)) {
    return 'Só cabem mais '.concat(this.seats - person).concat(' pessoas no carro!')
  } else if ((this.capacity + person) == 5) {
    return 'O carro está lotado!';
  } else if (((this.capacity + person) > 0) && ((this.capacity + person) < 5)) {
    return 'Já temos '.concat(this.capacity).concat(' Pessoas no Carro!');
  }
  // return this.capacity;
}

/*
  Agora vamos verificar algumas informações do carro. Para as respostas abaixo, utilize sempre o formato de invocação do método (ou chamada da propriedade), adicionando comentários _inline_ ao lado com o valor retornado, se o método retornar algum valor.

  Qual a cor atual do carro?
*/


// Mude a cor do carro para vermelho.
car.changeColor('Black');

// E agora, qual a cor do carro?
console.log(car.getColor());

// Mude a cor do carro para verde musgo.
car.changeColor('Verde Musgo');

// E agora, qual a cor do carro?
console.log(car.getColor());

// Qual a marca e modelo do carro?
console.log(car.getBrandModel());

// Adicione 2 pessoas no carro.
console.log(car.addPerson(2))

// Adicione mais 4 pessoas no carro.
console.log(car.addPerson(4));

// Faça o carro encher.
// console.log(car.addPerson(5));

// Tire 4 pessoas do carro.
// console.log(car.addPerson(-4));

// Adicione 10 pessoas no carro.
// console.log(car.addPerson(10));

// Quantas pessoas temos no carro?
// console.log(car.capacity);
