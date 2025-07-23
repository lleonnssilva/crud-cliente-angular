import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/cliente';


@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent {
  nome: string = '';
  email: string = '';
  telefone: string = ''
  constructor(private clienteService: ClienteService, private router: Router) {}

  adicionarCliente(): void {
    const novoCliente: Cliente = {
      id: Date.now(), // Gerando um ID único simples
      nome: this.nome,
      telefone : this.telefone,
      email: this.email
    };

    this.clienteService.adicionarCliente(novoCliente).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
