import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './models/cliente';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ClienteService {
    constructor(private http: HttpClient) {}

   clientes: Cliente[] = [];

    listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>("https://68811e0766a7eb81224a26b6.mockapi.io/Cliente");  // Requisição GET
  }

  // Adicionar um novo cliente
  adicionarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>("https://68811e0766a7eb81224a26b6.mockapi.io/Cliente", cliente);  // Requisição POST
  }

  // Editar um cliente
  editarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`https://68811e0766a7eb81224a26b6.mockapi.io/Cliente/${cliente.id}`, cliente);  // Requisição PUT
  }

  // Excluir um cliente
  excluirCliente(id: number): Observable<void> {
    return this.http.delete<void>(`https://68811e0766a7eb81224a26b6.mockapi.io/Cliente/${id}`);  // Requisição DELETE
  }
}
