var contador = (function() {
	var placar = 0;

	function mudaPlacar(valor) {
		placar += valor;
	}
	return {
		aumenta: function() {
			mudaPlacar(1);
		},
		diminui: function() {
			mudaPlacar(-1);
		},
		valor: function() {
			return placar;
		}
	}
})();

// contador.valor(1);