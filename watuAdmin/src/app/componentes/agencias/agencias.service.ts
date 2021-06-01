import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HeaderService } from '../../shared/services/header.service';
import { FormBuilder, FormGroup } from "@angular/forms";

@Injectable()


export class AgenciasService {

  httpOptions:object;
    private apiUrl = environment.apiUrl;
    
    constructor(
		private http:HttpClient,
		private headerService:HeaderService
    )
    {
        let headers = new HttpHeaders();
        headers = headers.set("Content-Type", "application/json");
        
        this.httpOptions = { headers: headers };
    }

    listar(): Observable<any>
    {
        var url = this.apiUrl + "admin/listar-agencias";
        
        return this.http.get(url, this.httpOptions);
    }

    activacion(id:number): Observable<any>
    {
        var url = this.apiUrl + "admin/agencia/"+id;

        return this.http.put<any>(url, this.httpOptions);
    }

    mostrar(idAgencia: number): Observable<any>
    {
        var url = this.apiUrl + "agencia/"+idAgencia;
        
        return this.http.get(url, this.httpOptions);
    }

    registrar(formData:FormData): Observable<any>

     {
        var url = this.apiUrl + "admin/crear-agencia";
        console.log(formData);
        console.log(formData.get('image'));
        console.log(formData.get('nombre_agencia'));
        console.log(formData.get('acronimo_agencia'));
        console.log(formData.get('url'));
        console.log(formData.get('direccion_agencia'));
        console.log(formData.get('descripcion_agencia'));
        
        return this.http.post(url, formData, {
          headers : {            
          }
        });
     }

     editar(id_agencia:number, nombre_agencia:String, acronimo_agencia:String, pagina_agencia:String, direccion_agencia:String, descripcion_agencia:String,): Observable<any>
     {
        var url = this.apiUrl + "admin/editar-agencia/"+id_agencia;
        var data = { nombre_agencia: nombre_agencia, acronimo_agencia: acronimo_agencia, url: pagina_agencia,  direccion_agencia:direccion_agencia,descripcion_agencia: descripcion_agencia};
        
        return this.http.post<any>(url, data, this.httpOptions);
     }



}
