import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutoComponent } from './auto/auto.component';
import { ListadoAutosComponent } from './listado-autos/listado-autos.component';
import { TituloComponent } from './titulo/titulo.component';
import { EstadoPipe } from './estado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AutoComponent,
    ListadoAutosComponent,
    TituloComponent,
    EstadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
