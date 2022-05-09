/* 
  Cadastrar 5 Funcionários diferentes e armazená-las dentro de um array, tem que cadastrar 5 vezes e depois encerrar com a resposta
*/

/*  * Cadastro de produtos
    * Cadastrar o produto e suas especificações
    * Iterar o produto com setor e funcionário específico
    * Realizar a buscar do determinado funcionário, durante o cadastro do produto, ou seja, qndo for cadastrar o Produto e itera-lo com o funcionário, verificar se o funcionário esta cadastrado e caso não dê erro e retorne com pedido de cadastre novamente.
*/

var prompt = require("prompt-sync")();

(function (prompt) {
  'use strict';

  var condicional = true;c

  var funcionarios = [];

  var produtos = [];

	var produto = {
    id: null, // Number
    descricao: null, // String
    valor: null, // Number, tem que ser positivo
    _vendedor: buscarFuncionarioPorNome //funcionario // Iterar com os funcionários, casa contrário de erro.
    // get vendedor() {
    //   return this.vendedor;
    // },
    // set vendedor(vendedor) {
    //   var vendedor = String.push(funcionarios);
    // }
  };

  // 1 - Função pura (só depende dela mesmo) 2 - função impura (depende de outras)
  function buscarFuncionarioPorNome() {
    for ( var index = 0; index < funciconarios.length; index += 1) {
      var funcionario = funcionarios[index];
      return funcionario;
    }
  }

  var pessoa = {
    nome: null, // String
    _idade: null,
    get idade() {
      return this.idade;
    },
    set idade(idade) {
      var idade = Number(idade);
      if (idade <= 0) throw new Error ('Digite uma idade Válida');
      this._idade = idade;
    },
    _sexo: null,
    get sexo() {
      return this.sexo;
    },
    set sexo(sexo){
      var sexo = String(sexo);
      if (sexo !== 'M' && sexo !== 'F') throw new Error ('Digite apenas M ou F')
      this._sexo = sexo;
    },
    cargo: null, // String
    salario: null, // Number
    endereço: {
      estado: null, // String
      cep: null // Number
    },
    departamento: {
      nome: null, // String
      responsavel: {
        nome: null, // String
        id: null, // Number
      }
    }
  };

  do {
    console.log('Cadastro de Funcionário e Produtos');

    var menu = prompt('Digite [1] para Cadastrar Funcionários, [2] para Cadastrar Produtos e [9] para Sair.');

    switch (menu) {
      case '1':
        console.log('Cadastro de Funcionários Selecionado!');
        pessoa.nome = prompt('Informe o Nome: ');
        pessoa.idade = prompt('Informe a idade: ');
        pessoa.sexo = prompt('Informe o Sexo: ');
        pessoa.cargo = prompt('Informe o Cargo: ');
        pessoa.salario = prompt('Informe o Salário: ');
        pessoa.endereço.cep = prompt('Informe o CEP: ');
        pessoa.endereço.estado = prompt('Informe o estado: ');
        pessoa.departamento.nome = prompt('Informe o nome do Departamento: ');
        pessoa.departamento.responsavel.nome = prompt('Informe o nome do Responsável pelo Departamento: ');
        pessoa.departamento.responsavel.id = prompt('Informe o ID do Responsável pelo Departamento: ');

        funcionarios.push(pessoa);

        console.log(funcionarios);

        break;
      case '2':
        produto.id = prompt('Digite o ID do produto: ')
        produto.descricao = prompt('Digite a descrição do produto: ')
        produto.valor = prompt('Digite o Valor do Produto: ')
        produto.vendedor = prompt('Digite o nome do Funcionário: ')

        produtos.push(produto);

        console.log(produtos);

        break;
      case '9':
        console.log('Tchau-brigado')
        condicional = false;
        break;
      default:
        console.log('Menu inválido!')
        condicional = false;
        break;
    };

  } while (condicional);

// O javascript cria PROPRIEDADES dinamicamente, SOMENTE propriedades

}(prompt))