var carro = {
  brand: 'Wolksvagem',
  model: 'Golf',
  plate: '1R0-NM4N',
  year: 2023,
  color: 'Green',
  howManyDoors: 5,
  seats: 5,
  lotation: 0
};

car.changeColor = function (paramCor) {
  this.cor = paramCor;
},

car.getColor = function () {
  return this.color;
},

car.getBrand = function () {
  return this.brand;
},

car.getModel = function () {
  return this.model;
},

car.getBrandModel = function() {
  return ('Esse carro é um ' concat(car.brand())  concat(' ') concat(car.model()) '.');
},

car.addPerson = function (person) {
  if ((person + this.lotation) > this.seats && (this.seats - this.lotation) > 0){
    return 'Só cabem '.concat(this.seats - this.lotation).concat(' pessoas!')
  }

  if ((person + this.lotation) > this.seats) {
    return 'O carro já está lotado!';
  }

  this.lotation += person;
  return 'Já temos '.concat(this.addPerson).concat(' pessoas no carro!');
},
