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
    // idade: null, // Number (conversão de string para number através de função || get/set) 
    _idade: null,
    get idade() {
      return this.idade;
    },

    set idade(idade) {
      var idade = Number(idade);
      if (idade <= 0) throw new Error ('Idade Digite uma idade Válida');
      this._idade = idade;
    },
    // sexo: null, // M - Masculino, F - Feminino (String) (validação através de função || get/set)
    _sexo: null,
    get sexo() {
      return this.sexo;
    },

    set sexo(sexo) {
      var sexo = String(sexo);
      // Validação desnecessária
      // if (sexo == 'M' || sexo == 'F') {
      //   this._sexo = sexo;
      // }

      // Começar sempre negando, pra depois passar o que objetivo desejado, caso a negação não cumprir toda a validação, então inicia outra validação
      if (sexo !== 'M' && sexo !== 'F') throw new Error ('Digite apenas M(Masculino) ou F (Feminino')
      return this._sexo = sexo;
    },
    cargo: null, // String
    salario: null, // Number
    endereco: {
      cep: null, // String
      _estado: null, // String
      get estado() {
        return this.estado;
      },
  
      set estado(estado) {
        var estado = String(estado);
        if (estado !== String) {
          throw new Error ('Digite apenas texto')
      };
        this._estado = estado;
      },
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

    var menu = prompt('Informe [1] Cadastrar Funcionário [2] Sair: ');

    switch (menu) {
      case '1':
        // try {
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
        // } cat (error) {
        //   console.log(error);
        //   continue;
        // }
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

//################################################################


var produto = {
  id: null, // Number
  descricao: null, // String
  valor: null, // Number tem q ser positivo
  vendedor: buscarFuncionarioPorNome // iterar os funcionário pelo nome, caso contrário, de erro
}

var condicional = true;

var funcionarios = [];

// 1- função pura (só depende dela mesmo) 2 - função impura (depende outras)
function buscarFuncionarioPorNome(nome) {
  // for (let funcionario of funcionarios)
  // funcionarios.forEach(fn)
  for (var index = 0; index < funcionários.length; index += 1) {
    var funcionario = funcionarios[index];
    if (funcionario == ' ') throw new Erro ('Funcionário não cadastrado!')
    return funcionario;
  }
//   funcionarios.indexOf('');
//   this.nome = nome;
// }
var pessoa = {
  nome: null, // String
  _idade: null,
  get idade() {
    return this.idade;
  },

  set idade(idade) {
    var idade = Number(idade);
    if (idade <= 0) throw new Error ('Idade Digite uma idade Válida');
    this._idade = idade;
  },
  _sexo: null,
  get sexo() {
    return this.sexo;
  },

  set sexo(sexo) {
    var sexo = String(sexo);
    // if (sexo === 'M' || sexo === 'F') {
    //   return this._sexo = sexo;
    // }
    if (sexo !== 'M' && sexo !== 'F') throw new Error ('Digite apenas M ou F')

    this._sexo = sexo

  },
  cargo: null, // String
  salario: null, // Number
  endereco: {
    _cep: null, // String
    get cep() {
      return this.cep;
    },

    set cep(cep) {
      var cepExp = /^\([0-9]{2}\) [0-9]{5}-[0-9]{3}$/;
      this._cep = cep;
    },

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

  var menu = prompt('Informe o nome [1] Cadastrar Funcionário [2] Cadastrar Produto e [9] Sair: ');

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
      produto.id = prompt('Digite o ID do produto: ')
      produto.descricao = prompt('Digite a descrição do produto: ')
      produto.valor = prompt('Digite o Valor do Produto: ')
      produto.vendedor = prompt('Digite o nome do Funcionário: ')
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

console.log(pessoa);