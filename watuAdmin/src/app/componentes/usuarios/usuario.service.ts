import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  baseUrl = 'https://watu-servidor.herokuapp.com';

  constructor(private http: HttpClient) {}

  async getAll(): Promise<any> {
    return this.http.get(this.baseUrl + '/admin/users').toPromise();
  }

  async deactivate(id: number): Promise<any> {
    return this.http.put(this.baseUrl + '/admin/users/' + id, {}).toPromise();
  }
}
