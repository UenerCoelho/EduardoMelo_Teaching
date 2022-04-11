var contador = (function () {
  var placar = 0;

  function mudaPlacar(valor) {
    placar += valor;
  }

  function aumenta() {
    mudaPlacar(1);
  }

  function diminui() {
    mudaPlacar(-1);
  }

  function valor() {
    return placar;
  }

  return {
    aumenta: aumenta,
    diminui: diminui,
    valor: valor
  }
})();
