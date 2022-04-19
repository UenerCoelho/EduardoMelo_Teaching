var car = {
  brand: 'Wolksvagem',
  model: 'Golf',
  plate: '1R0-NM4N',
  year: 2023,
  color: 'Green',
  howManyDoors: 5,
  seats: 5,
  lotation: 0,
  changeColor: changeColor,
  getColor: getColor,
  getBrand: getBrand,
  getModel: getModel,
  getBrandModel: getBrandModel,
  addPerson: addPerson,
  resetCar: resetCar
};

function changeColor(newColor) {
  this.color = newColor;
};

function getColor() {
  return this.color;
};

function getBrand() {
  return this.brand;
};

function getModel() {
  return this.model;
};

function getBrandModel() {
  return ('Esse carro é um '.concat(car.getBrand()).concat(' ').concat(car.getModel()).concat('.'));
};

// Retornando a função, deveria retornar o resultado
function addPerson(person) {
  if ((this.lotation + person) > this.seats && (this.seats - this.lotation) > 0) {
    return this.lotation = ('Só cabem '.concat(this.seats - this.lotation).concat(' pessoas!'))
  }
  if ((this.lotation + person) > this.seats) {
    return this.lotation = 'O carro já está lotado!';
  }
  this.lotation += person;
  return person = ('Já temos '.concat(this.addPerson).concat(' pessoas no carro!'));
};

function resetCar() {
  this.lotation = 0;
};

console.log(car.getColor());
console.log(car.changeColor('Black'));
console.log(car.getBrand());
console.log(car.getModel());
console.log(car.getBrandModel());
// resetCar();
console.log(car.addPerson(2));

