import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { CaracterDetalleComponent } from './caracter-detalle/caracter-detalle.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'caracteres'
},{
  path: 'caracteres',
  component: ListaComponent,
  children: [{
    path: 'detalle/:id',
    component: CaracterDetalleComponent
  }]
},{ path: '404', component: NotFoundComponentComponent },
{ path: '**', component: NotFoundComponentComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ]
})

export class AppRoutingModule { }
