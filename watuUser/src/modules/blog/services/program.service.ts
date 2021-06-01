import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Program } from '../models/program.model';


@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http:HttpClient) { }

  getRequesitos(agecnyId:string){
    return this.http
    .get(`${environment.backendWatu}/requisitos/${agecnyId}`)
    .pipe(
      tap((res)=>console.log(res)),
      map((requisitos:any)=>{
        return requisitos.List_requisitos
      })
        
    )
  }
  getPrograms$(): Observable<Program[]> {
    return this.http
        .get<Program[]>(`${environment.backendWatu}/admin/listar-programas`)
        .pipe(
          tap((res)=>console.log(res)),
          map((programs:any)=>{
            return programs
          })
            
        )
      }

  getProgram$(agencyId:string){
    return this.http
    .get<Program[]>(`${environment.backendWatu}/agencia_programas/${agencyId}`)
    .pipe(
      tap((res)=>console.log(res)),
      map((programs:any)=>{
        return programs.List_programas
      })      
    )
  }
}
