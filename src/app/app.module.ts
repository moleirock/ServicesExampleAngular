
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProveedoresService } from './services/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { EtiquetasComponent } from './etiquetas/etiquetas.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [AppComponent, ProveedoresComponent, EtiquetasComponent, ClientesComponent],
  imports: [BrowserModule],
  providers: [ProveedoresService],
  bootstrap: [AppComponent],
})
export class AppModule {}
