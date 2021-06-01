import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Agency } from '../models';


@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http:HttpClient) { }
  getAgencies$(): Observable<Agency[]> {
    return this.http
        .get<Agency[]>(`${environment.backendWatu}/listar-agencias`)
        .pipe(
          tap((res)=>console.log(res)),
          map((agencies:any)=>{
            return agencies.lista_agencias
          })
            
        );
}

}
