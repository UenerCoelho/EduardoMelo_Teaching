/* 
  Cadastrar 5 pessoas diferentes e armazená-las dentro de um array, tem que cadastrar 5 vezes e depois encerrar com a resposta
*/

var prompt = require("prompt-sync")();

(function (prompt) {
  'use strict';
	
  var pessoa = {
    nome: null, // String
    idade: null, // Number
    sexo: null, // M - Masculino, F - Feminino (String)
    cargo: null, // String
    salario: null, // Number
    endereço: {
      cep: null, // String
      estado: null, // String
    },
    departamento: {
      nome: null // String
      responsavel: {
        nome: null, // String
        id: null // Number
      },
    }
  };
  
  var concional = null;
  
  var funcionarios = [];

  do {
    console.log('Cadastro de Funcionário');

    var menu = prompt('Informe o nome [1] Cadastrar Funcionário [2] Sair: ');

    if (menu == 1) {

    }else if (menu ==2) {
      break;
    }

    console.log('Aperte [x] para ');
    
    pessoa.nome = prompt('Informe o nome: ');
    pessoa.idade = prompt('Informe o idade: ');
    pessoa.sexo = prompt('Informe o sexo: ');
    pessoa.cargo = prompt('Informe o cargo: ');
    pessoa.endereço.rua = prompt('Informe o rua: ');
    pessoa.endereço.cidade = prompt('Informe o cidade: ');
    pessoa.endereço.estado = prompt('Informe o estado: ');
    pessoa.endereço.cep = prompt('Informe o cep: ');
    pessoa.estadoCivil = prompt('Informe o Estado Civil: ');
  } while (concional)

	
	console.log(pessoa);

  function enviarPessoaServidor(pessoa) {
    console.log('Enviando para o servidor......');
    console.log(pessoa);
  }
}(prompt));