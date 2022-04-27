/* 
  Cadastrar 5 Funcionários diferentes e armazená-las dentro de um array, tem que cadastrar 5 vezes e depois encerrar com a resposta
*/

var prompt = require("prompt-sync")();

(function (prompt) {
  'use strict';
	
  var condicional = true;

  var funcionarios = [];

  var pessoa = {
    nome: null, // String
    idade: null, // Number (conversão de string para number através de função || get/set) 
    _idade: null,
    get idade() {
      return this.idade;
    },

    set idade(idade) {
      var idade = Number(idade);
      if (idade <= 0) throw new Error ('Idade menor ou igual 0');
      this._idade = idade;
    },
    sexo: null, // M - Masculino, F - Feminino (String) (validação através de função || get/set)
    _sexo: null,
    get sexo() {
      return this.sexo;
    },

    set sexo(sexo) {
      var sexo = String(sexo);
      if (sexo == 'M' || sexo == 'F') {
        return this._sexo = sexo;
      }
      if (sexo != 'M' || sexo != 'F') throw new Error ('Digite apenas M ou F');
      this._sexo = sexo;
    },
    cargo: null, // String
    salario: null, // Number
    endereco: {
      cep: null, // String
      estado: null, // String
    },
    departamento: {
      nome: null, // String
      responsavel: {
        nome: null, // String
        id: Number // Number
      },
    },
    
  };

  do {
    console.log('Cadastro de Funcionário');

    var menu = prompt('Informe o nome [1] Cadastrar Funcionário [2] Sair: ');

    switch (menu) {
      case '1':
        console.log('Cadastrar Funcionário Selecionado!');
        pessoa.nome = prompt('Informe o nome: ');
        pessoa.idade = prompt('Informe a idade: ');
        pessoa.sexo = prompt('Informe o sexo: ');
        pessoa.cargo = prompt('Informe o cargo: ');
        pessoa.salario = prompt('Informe o salário: ');
        pessoa.endereco.cep = prompt('Informe o cep: ');
        pessoa.endereco.estado = prompt('Informe o estado: ');
        pessoa.departamento.nome = prompt('Informe o nome do departamento: ');
        pessoa.departamento.responsavel.nome = prompt('Informe o nome do responsável pelo departamento: ');
        pessoa.departamento.responsavel.id = prompt('Informe o id do responsável: ');

        funcionarios.push(pessoa);

        console.log(funcionarios)

        break;
      case '2':
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
	
	console.log(pessoa);
}(prompt));