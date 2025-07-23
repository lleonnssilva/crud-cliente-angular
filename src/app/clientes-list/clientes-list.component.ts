
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/cliente';


@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    // Inscreva-se no Observable para obter os clientes
    this.clienteService.listarClientes().subscribe((clientes) => {
      this.clientes = clientes;  // Armazena os clientes no array local
    }, error => {
      console.error('Erro ao carregar clientes', error); // Tratamento de erros
    });
  }

  excluir(id: number): void {
    this.clienteService.excluirCliente(id).subscribe(() => {
      this.clientes = this.clientes.filter((cliente) => cliente.id !== id);
    });
  }
}
