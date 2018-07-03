module.exports = class Produto {
	constructor(obj) {
		this.anunciante = obj.anunciante;
		this.produto = obj.produto;
		this.valorInicial = obj.valorInicial;
	}
}