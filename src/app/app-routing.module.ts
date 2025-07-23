import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClienteAddComponent } from './cliente-add/cliente-add.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
const routes: Routes = [
  { path: '', component: ClientesListComponent },
  { path: 'adicionar', component: ClienteAddComponent },
  { path: 'editar/:id', component: ClienteEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule {}
