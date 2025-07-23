import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {
  cliente!: Cliente;
  nome: string = '';
  email: string = '';
  telefone: string = ''
  
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clienteService.listarClientes().subscribe((clientes) => {
      console.log('clientes',clientes)
      this.cliente = clientes.find((c) => c.id == id)!;
      this.nome = this.cliente.nome;
      this.telefone = this.cliente.telefone;
      this.email = this.cliente.email;
    });
  }

  editarCliente(): void {
    console.log('editar Cliente')
    this.cliente.nome = this.nome;
    this.cliente.telefone = this.telefone;
    this.cliente.email = this.email;
    this.clienteService.editarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
