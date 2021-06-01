import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  users: any[] = [];

  constructor(private service: UsuarioService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  async loadUsers() {
    this.service.getAll().then((data: any) => {
      console.log(data);
      this.users = data.lista_users;
    });
  }

  async deactivateUser(item: any) {
    console.log(item);

    this.service.deactivate(item.id).then((data: any) => {
      console.log(data);
      item.estado = item.estado == 1 ? 0 : 1;
    });
  }
}
