import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './gifs/busqueda/busqueda.component';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { ResultadosComponent } from './gifs/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    GifsPageComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
