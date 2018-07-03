import { Injectable } from '@angular/core';
import { Produto } from '../entities/produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { }

  cadastrarProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('http://localhost:3000/addProduto', produto);
  }

  buscarProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:3000/listProdutos');
  }

}
