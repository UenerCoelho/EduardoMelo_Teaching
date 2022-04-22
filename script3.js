var prompt = require("prompt-sync")();

(function (prompt) {
  'use strict';

  var person = {
    _age: null,
    get age() {
      return this.age;
    },

    set age(age) {
      var ageNumber = Number(age);
      if (ageNumber < 0) throw new Error ('Idade menor que 0');
      this._age = age;
    },

    name: null,
    age: null,
    gender: null,
    position: null,
    salary: null,
    address: {
      postalCode: null,
      state: null
    },
    department: {
      name: null,
      responsible:  {
        name: null,
        id: null,
      },
    }
  };

  person.name = prompt('Informe o nome: ');
  person.age = prompt('Informe a idade: ');
  person.gender = prompt('Informe o sexo: ');
  person.position = prompt('Informe o cargo: ');
  person.salary = prompt('Informe o salário: ');
  person.address.postalCode = prompt('Informe o cep: ');
  person.address.state = prompt('Informe o estado: ');
  person.department.name = prompt('Informe o nome do departamento: ');
  person.department.responsible.name = prompt('Informe o nome do responsável pelo departamento: ');
  person.department.responsible.id = prompt('Informe o id do responsável: ');

  function sendPersonToServer(person) {
    console.log('Enviando para o servidor ......');
  };
  console.log(person);

  sendPersonToServer();
}(prompt));