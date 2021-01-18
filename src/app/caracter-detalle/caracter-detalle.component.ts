import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd, RouterEvent } from '@angular/router';
import { CaracteresService } from '../caracteres.service';
import { Caracter } from '../modelos/Caracter';

@Component({
  selector: 'app-caracter-detalle',
  templateUrl: './caracter-detalle.component.html',
  styleUrls: ['./caracter-detalle.component.css']
})
export class CaracterDetalleComponent implements OnInit, OnDestroy {
  id: number = 0;
  caracter: Caracter;
  cargando: boolean = false;
  navigationSubscription;

  constructor(private route: ActivatedRoute, private router: Router, private _service: CaracteresService) { 
  }

  iniciar(){
    this.id = +this.route.snapshot.paramMap.get('id');
    if(!this.id){
      this.router.navigate(["caracteres"]);
      return false;
    }
    this.Consultar();
  }

  ngOnInit() {
    this.iniciar();
    this.router.events.subscribe(value => {
      if(value instanceof NavigationEnd){
        this.id = +this.route.snapshot.paramMap.get('id');
        this.Consultar();
      }
  });
    
  }


  Consultar(){
    this.cargando = true;
    this._service.Consultar(this.id).subscribe((res)=>{
      this.caracter = res;
      this.cargando = false;

    }, (err=>{
      this.cargando = false;
    }))
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }


  

}
