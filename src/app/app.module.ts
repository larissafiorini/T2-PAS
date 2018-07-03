import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LancarProdutoComponent } from './lancar-produto/lancar-produto.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProdutoService } from './services/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { LeilaoComponent } from './leilao/leilao.component';
import { LeiloesComponent } from './leiloes/leiloes.component';
import { LancamentoService } from './services/lancamento.service';


@NgModule({
  declarations: [
    AppComponent,
    LancarProdutoComponent,
    LeilaoComponent,
    LeiloesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProdutoService, LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
