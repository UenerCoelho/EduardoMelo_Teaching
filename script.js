var prompt = require("prompt-sync")();

(function (prompt) {
	'use strict';
	
	console.log('Cadastro de Funcionário');

  var pessoa = {
    _idade: null,
    get idade() {
      return this._idade;
    },

    set idade(idade) {
      var idadeNumber = Number(idade);
      if (idadeNumber > 0) throw new Error('Idade menor que 0');
      this._idade = idade;
    }
  };
	
	pessoa.nome = prompt('Informe o nome: ');
	pessoa.idade = prompt('Informe o idade: ');
	pessoa.sexo = prompt('Informe o sexo: ');
	pessoa.cargo = prompt('Informe o cargo: ');
	pessoa.rua = prompt('Informe o rua: ');
	pessoa.cidade = prompt('Informe o cidade: ');
	pessoa.estado = prompt('Informe o estado: ');
	pessoa.cep = prompt('Informe o cep: ');
	pessoa.estadoCivil = prompt('Informe o Estado Civil: ');
	
	console.log(pessoa);

  function enviarPessoaServidor(pessoa) {
    console.log('Enviando para o servidor......');
    console.log(pessoa);
  }
}(prompt));