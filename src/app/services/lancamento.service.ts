import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lancamento } from '../entities/lancamento';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LancamentoService {

  constructor(private http: HttpClient) { }

  cadastrarLancamento(lancamento: Lancamento): Observable<Lancamento>{
    return this.http.post<Lancamento>('http://localhost:3000/addLance', lancamento);
  }

  buscarLancamentos(): Observable<Lancamento[]>{
    return this.http.get<Lancamento[]>('http://localhost:3000/listLances');
  }
}
