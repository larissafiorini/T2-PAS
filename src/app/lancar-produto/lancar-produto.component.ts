import { Component, OnInit } from '@angular/core';
import { Produto } from '../entities/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-lancar-produto',
  templateUrl: './lancar-produto.component.html',
  styleUrls: ['./lancar-produto.component.css']
})
export class LancarProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
  }

  iniciarLeilao(){
    console.log(this.produto);
    this.produtoService.cadastrarProduto(this.produto).subscribe(
      response => {
        console.log(response)
        alert("Leilão iniciado");
      },
      error => {
        console.log(error)
        alert("Erro no cadastro");
      });
;
  }
}
