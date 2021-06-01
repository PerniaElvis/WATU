import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgramaService {
  baseUrl = 'https://watu-servidor.herokuapp.com';

  constructor(private http: HttpClient) {}

  async getAllAgency(): Promise<any> {
    return this.http.get(this.baseUrl + '/admin/listar-agencias').toPromise();
  }

  async getAll(): Promise<any> {
    return this.http.get(this.baseUrl + '/admin/listar-programas').toPromise();
  }

  async get(id: number): Promise<any> {
    return this.http.get(this.baseUrl + '/programa/' + id).toPromise();
  }

  async add(agenciaId: string, data: any): Promise<any> {
    return this.http
      .post(this.baseUrl + '/admin/agencia/crear-programa/' + agenciaId, data)
      .toPromise();
  }

  async edit(id: number, data: any): Promise<any> {
    return this.http
      .post(this.baseUrl + '/admin/editar-programa/' + id, data)
      .toPromise();
  }

  async remove(id: number): Promise<any> {
    return this.http
      .delete(this.baseUrl + '/admin/eliminar-programa/' + id)
      .toPromise();
  }

  async getAllRequirement(id: number): Promise<any> {
    return this.http.get(this.baseUrl + '/requisitos/' + id).toPromise();
  }

  async addRequirement(id: number, data: any): Promise<any> {
    return this.http
      .post(this.baseUrl + '/admin/programa/crear-requisito/' + id, data)
      .toPromise();
  }
}
