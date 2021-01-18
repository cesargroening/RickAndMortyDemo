import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Caracter, CaracterResponse } from './modelos/Caracter';

@Injectable({
  providedIn: 'root'
})
export class CaracteresService {

  constructor(private http: HttpClient) { 

  }

  public Listar (pagina: number = 0): Observable<CaracterResponse>{
    return this.http.get<CaracterResponse>(`${environment.apiBase}/character?page=${pagina |0}`);
  }

  public Consultar(id: number): Observable<Caracter>{
    return this.http.get<Caracter>(`${environment.apiBase}/character/${id}`);
  }


}
