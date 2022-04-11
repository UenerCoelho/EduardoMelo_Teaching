// Declarar uma variável qualquer, que receba um objeto vazio.
var anyOne = {}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var person = (function() {
  var anybody = {
      name: 'Uener',
      lastName: 'Coelho',
      gender: 'Male',
      age: 38,
      height: 1.84,
      weight: 98,
      walking: null,
      metersToWalking: 0,
    }
    return {

/* 01:
  Adicione um método ao objeto `pessoa` chamado `fazerAniversario`.
  O método deve alterar o valor da propriedade `idade` dessa pessoa,
  somando `1` a cada vez que for chamado.
*/
  makeBirthday : function() {
    return anybody.age += 1;
  },

/* 02:
  Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
  características:
  - Esse método deve receber por parâmetro um valor que representará a quantidade
  de metros caminhados;
  - Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
  valor dessa propriedade a quantidade passada por parâmetro;
  - Ele deverá modificar o valor da propriedade `andando` para o valor
  booleano que representa "verdadeiro";
*/
  walk : function(valor) {
    return anybody.metersToWalking += 1;
  },

  walking : function() {
    if (person.walk) {
      return anybody.walking = true;
    }
  },

/* 03:
  Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
  da propriedade `andando` para o valor booleano que representa "falso".
*/
  stop : function() {
    anybody.metersToWalking = 0;
    return anybody.walking = false;
  },

/* 04:
  Crie um método chamado `nomeCompleto`, que retorne a frase:
  - "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
  fullName : function() {

    return ('Olá! Meu Nome é: ' + anybody.name + ' ' + anybody.lastName)

  },

/* 05:
  Crie um método chamado `mostrarIdade`, que retorne a frase:
  - "Olá, eu tenho [IDADE] anos!"
*/
  showAge : function() {
    var showAge = `Olá, eu tenho ${anybody.age} anos!`;
    return showAge;
  },

/* 06:
  Crie um método chamado `mostrarPeso`, que retorne a frase:
  - "Eu peso [PESO]Kg."
*/
  showWeight : function() {
    var showWeight = `Eu peso ${anybody.weight} kg.`;
    return showWeight;
  },

/* 07:
  Crie um método chamado `mostrarAltura` que retorne a frase:
  - "Minha altura é [ALTURA]m."
*/
  showHeight : function() {
    var showHeight = `Minha altura é ${anybody.height}m`
    return showHeight;
  }
}
}())

/* 08:
  Agora vamos brincar um pouco com o objeto criado:
  Qual o nome completo da pessoa? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(person.fullName()) //Olá! Meu Nome é: Uener Coelho

/* 09:
  Qual a idade da pessoa? (Use a instrução para responder e comentários
  inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(person.showAge())// Olá, eu tenho 38 anos!

/* 10:
  Qual o peso da pessoa? (Use a instrução para responder e comentários
  inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(person.showWeight())// Eu peso 98kg

/* 11:
  Qual a altura da pessoa? (Use a instrução para responder e comentários
  inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(person.showHeight())//Minha altura é 1.94m

/* 12:
  Faça a `pessoa` fazer 3 aniversários.
*/
console.log(person.makeBirthday()),//39
console.log(person.makeBirthday()),//40
console.log(person.makeBirthday())//41

/* 13:
  Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
  comentários inline ao lado da instrução para mostrar qual foi a resposta
  retornada)
*/
//42

/* 14:
  Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
  com metragens diferentes passadas por parâmetro.
*/
console.log(person.walk())
console.log(person.walking())
console.log(person.walk())
console.log(person.walking())
console.log(person.walk())
console.log(person.walking())

/* 15:
  A pessoa ainda está andando? (Use a instrução para responder e comentários
  inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(person.walking())


/* 16:
  Se a pessoa ainda está andando, faça-a parar.
*/
console.log(person.stop())

/* 17:
  E agora: a pessoa ainda está andando? (Use uma instrução para responder e
  comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(person.stop())

/* 18:
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(person.walk())
console.log(person.walk())
console.log(person.walk())
// 3

/* 19:
  Agora vamos deixar a brincadeira um pouco mais divertida! :D
  Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
  retornar a string:
  - "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
  Só que, antes de retornar a string, você vai fazer algumas validações:
  - Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
  - Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a palavra "ano" ao invés de "anos", pois é singular;
  - Se a quantidade de metros caminhados for igual a `1`, então a palavra que deve conter no retorno da frase acima é "metro" no lugar de "metros".
  - Para cada validação, você irá declarar uma variável localmente (dentro do método), que será concatenada com a frase de retorno, mostrando a resposta correta, de acordo com os dados inseridos no objeto.
*/
var persona = (function() {
  var personaData = {
    name: 'Uener',
    lastName: 'Coelho',
    gender: 'Male',
    age: 38,
    height: 1.84,
    weight: 98,
    walking: false,
    metersToWalking: 0
  }
  return {
    myGender : function() {
      var gender = personaData.gender;
      if (gender == 'Male') {
        return gender = 'o ';
      } else if (gender == 'Female'){
        return gender = 'a ';
      }
    },

    trueAge : function() {
      var age = personaData.age;
      if (age > 1){
        return age = 'anos';
      } else if (age = 1) {
        return age = 'ano';
      } else {
        return NaN;
      }
    },


    presentation : function() {
      return ('Olá, eu sou ' + persona.myGender() + personaData.name + ' ' + personaData.lastName + ', tenho ' + personaData.age + ' ' + persona.trueAge() + ', ' + personaData.height + ' de altura, meu peso é ' + personaData.weight + 'kg, e só hoje, eu já caminhei ' + personaData.metersToWalking + ' metros')
    }
  }
}());

console.log(persona.presentation())
// Agora, apresente-se ;)
