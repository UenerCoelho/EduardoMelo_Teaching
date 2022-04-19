// 01 - Declarar uma variável qualquer, que receba um objeto vazio.
var any = {};

/* 02 -
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
var pessoa = {
  nome: 'Uemer',
  sobreNome: 'Coelho',
  sexo: 'Feminino',
  idade: 38,
  altura: 1.84,
  peso: 98,
  andando: false,
  caminhouQuantosMetros: 0
};

/* 01:
  Adicione um método ao objeto `pessoa` chamado `fazerAniversario`.
  O método deve alterar o valor da propriedade `idade` dessa pessoa,
  somando `1` a cada vez que for chamado.
*/
pessoa.fazerAniversario = function () {
  return this.idade += 1;
}

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
pessoa.andar = function (metros) {
  return this.caminhouQuantosMetros += metros;
};

pessoa.andou = function () {
  andou = pessoa.andar;
  if (andou) {
    return this.andando = true;
  } else {
    return this.andando = false;
  };
};

/* 03:
  Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
  da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function () {
  this.caminhouQuantosMetros = pessoa.andar(0);
};

/* 04:
  Crie um método chamado `nomeCompleto`, que retorne a frase:
  - "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function () {
  return ('Olá! Meu nome é '.concat(this.nome).concat(' ').concat(this.sobreNome).concat('!'));
};

/* 05:
  Crie um método chamado `mostrarIdade`, que retorne a frase:
  - "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function () {
  return ('Olá, eu tenho '.concat(this.idade).concat(' anos!'));
};

/* 06:
  Crie um método chamado `mostrarPeso`, que retorne a frase:
  - "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function () {
  return ('Eu peso '.concat(this.peso).concat('kg.'));
};

/* 07:
  Crie um método chamado `mostrarAltura` que retorne a frase:
  - "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function () {
  return ('Minha altura é '.concat(this.altura).concat('m.'));
};

/* 08:
  Agora vamos brincar um pouco com o objeto criado:
  Qual o nome completo da pessoa? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.nomeCompleto());

/* 09:
  Qual a idade da pessoa? (Use a instrução para responder e comentários
  inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarIdade());

/* 10:
  Qual o peso da pessoa? (Use a instrução para responder e comentários
  inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarPeso());

/* 11:
  Qual a altura da pessoa? (Use a instrução para responder e comentários
  inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.mostrarAltura())

/* 12:
  Faça a `pessoa` fazer 3 aniversários.
*/
console.log(pessoa.fazerAniversario())
console.log(pessoa.fazerAniversario())
console.log(pessoa.fazerAniversario())

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
console.log(pessoa.andar(10));
console.log(pessoa.andar(10));
console.log(pessoa.andar(10));

/* 15:
  A pessoa ainda está andando? (Use a instrução para responder e comentários
  inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.andou()); // true

/* 16:
  Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar(); //

/* 17:
  E agora: a pessoa ainda está andando? (Use uma instrução para responder e
  comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoa.andou(pessoa.andar));

/* 18:
  Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
  inline ao lado da instrução para mostrar a resposta retornada)
*/

// 30

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
pessoa.sexo = 'Masculino';
pessoa.idade = 38;
pessoa.caminhouQuantosMetros = 1000;

pessoa.apresentacao = function () {
  pessoa.apresentacao.genero = function () {
    if (pessoa.sexo == 'Masculino') {
      return pessoa.sexo = 'o';
    } else if (pessoa.sexo == 'Feminino') {
      return pessoa.sexo = 'a';
    };
  },

    pessoa.apresentacao.sp = function () {
      if (pessoa.idade > 1) {
        return pessoa.idade = ' anos, ';
      } else if (pessoa.idade = 1) {
        return pessoa.idade = ' ano, '
      };
    },

    pessoa.apresentacao.caminhado = function () {
      if (pessoa.caminhouQuantosMetros > 1) {
        return pessoa.caminhouQuantosMetros = ' metros!';
      } else if (pessoa.caminhouQuantosMetros = 1) {
        return pessoa.caminhouQuantosMetros = ' metro!'
      };
    };

  return ('Olá, eu sou '.concat(pessoa.apresentacao.genero()).concat(' ').concat(pessoa.nome).concat(' ').concat(pessoa.sobreNome).concat(', tenho ').concat(pessoa.idade).concat(pessoa.apresentacao.sp()).concat(pessoa.altura).concat('m, meu peso é ').concat(pessoa.peso).concat('kg, e, só hoje, eu já caminhei ').concat(pessoa.caminhouQuantosMetros).concat(pessoa.apresentacao.caminhado()));
};


// Agora, apresente-se ;)
console.log(pessoa.apresentacao());