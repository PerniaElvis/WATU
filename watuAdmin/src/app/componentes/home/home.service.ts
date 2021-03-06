import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl = 'https://deperu.com/api';

  constructor(private http: HttpClient) {}

  getMascotas() {
    return this.http.get(`${this.baseUrl}/rest/noticias.json`);
  }
}
