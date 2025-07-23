import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './models/cliente';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
   private apiUrl = `${environment.apiUrl}/Cliente`; // URL base da API de clientes

  constructor(private http: HttpClient) {}

   clientes: Cliente[] = [];

    listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);  // Requisição GET
  }

  // Adicionar um novo cliente
  adicionarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);  // Requisição POST
  }

  // Editar um cliente
  editarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/${cliente.id}`, cliente);  // Requisição PUT
  }

  // Excluir um cliente
  excluirCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);  // Requisição DELETE
  }
}
