import { Component, OnInit } from '@angular/core';
import { CaracteresService } from '../caracteres.service';
import { Caracter, CaracterResponse } from '../modelos/Caracter';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public caracteres: Caracter[] = [];
  public pagina:number = 1;
  public disponibles:boolean=true;
  public cargando: boolean = false;
  public ocultarTodo: boolean = false;

  constructor(private _caracteres :CaracteresService) { }
  
  
  ngOnInit() {
    this.Listar();
  }

  Listar(){

    if(this.disponibles){
      this.cargando = true;
      this._caracteres.Listar(this.pagina).subscribe((res)=>{
        this.caracteres = this.caracteres.concat(res.results);
        this.disponibles = (res.info.next != null);
        this.cargando = false;
        // console.log(res.info.count/res.info.pages, '<<');
      }, (er)=>{
        this.cargando = false
      });
    }

  }

  onScroll() {
      this.pagina++;
      this.Listar();
  }

  onActivate(cmp){
    this.ocultarTodo = true;
    
  }
  onDeactivate(evento){
    this.ocultarTodo = false;
  }

  

}
