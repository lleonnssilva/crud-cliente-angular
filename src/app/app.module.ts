import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesListComponent,
    ClienteAddComponent,
    ClienteEditComponent,
    ClienteDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
