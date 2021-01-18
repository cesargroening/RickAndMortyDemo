import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { CaracteresService } from './caracteres.service';
import { HttpClientModule } from '@angular/common/http';
import { CaracterComponent } from './caracter/caracter.component';
import { CaracterDetalleComponent } from './caracter-detalle/caracter-detalle.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { Routes } from '@angular/router'
import {AppRoutingModule} from './app-routing.module';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CaracterComponent,
    CaracterDetalleComponent,
    NotFoundComponentComponent
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    AppRoutingModule,
    
  ],
  providers: [
    CaracteresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
