module.exports = class Lancamento {
	constructor(obj) {
		this.nomeProduto = obj.nomeProduto;
		this.nomeComprador = obj.nomeComprador;
		this.valor = obj.valor;
	}
}