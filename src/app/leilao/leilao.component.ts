import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../entities/produto';
import { Lancamento } from '../entities/lancamento';
import { LancamentoService } from '../services/lancamento.service';

@Component({
  selector: 'app-leilao',
  templateUrl: './leilao.component.html',
  styleUrls: ['./leilao.component.css']
})
export class LeilaoComponent implements OnInit {

  constructor(private lancamentoService: LancamentoService) { }

  @Input()
  produto: Produto;
  lancamentos: Lancamento[]
  lancamento: Lancamento = new Lancamento();

  ngOnInit() {
    this.lancamentoService.buscarLancamentos().subscribe(
      response => {
        this.lancamentos = response;
        console.log (this.lancamentos);
      }
    )
    this.lancamento.nomeProduto = this.produto.produto;
  }

  fazerLancamento(){
    this.lancamentoService.cadastrarLancamento(this.lancamento).subscribe(
      response => {
        alert("Lancamento efetuado com sucesso!");
      },
      error => {
        alert("Erro");
      }
    )
  }
}
