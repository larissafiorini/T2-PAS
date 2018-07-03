import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LancarProdutoComponent } from '../lancar-produto/lancar-produto.component';
import { LeilaoComponent } from '../leilao/leilao.component';
import { LeiloesComponent } from '../leiloes/leiloes.component';

const routes: Routes = [
  { path: 'lancamento', component: LancarProdutoComponent },
  { path: '', component: LeiloesComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
