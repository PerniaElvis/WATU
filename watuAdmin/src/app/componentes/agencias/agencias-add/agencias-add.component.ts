import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AgenciasService } from '../agencias.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-agencias-add',
  templateUrl: './agencias-add.component.html',
  styleUrls: ['./agencias-add.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AgenciasAddComponent implements OnInit {

  direccion:string="";

  formData!: FormData;
  nombre_agencia:string="";
  acronimo_agencia:string="";
  pagina_agencia:string="";
  direccion_agencia:string="";
  image_agencia:any = null;
  descripcion_agencia:string="";
    
@ViewChild("placesRef") placesRef! : GooglePlaceDirective;
   public handleAddressChange(address: any) {
      this.direccion = address.formatted_address;
      
      console.log(this.direccion);
    }

    constructor(
      private router:Router, 
      private agenciasService:AgenciasService,
      private alertService:AlertService,
      private formBuilder:FormBuilder
      ) {
  
      }

  ngOnInit() {
    this.image_agencia = this.formBuilder.group({
      profile: ['']
    });
  }

  btnAgregarAgencia(){

    this.insertarImagen();
    console.log(this.formData.get('image'));
    
    this.agenciasService.registrar(this.formData)
      .subscribe(
        (response)=>{
          console.log(response);
            console.log("Elemento agregado correctamente");
            this.alertService.success("Ok","Se guardo correctamente la agencia");
          
          this.router.navigate(['/agencias']);
        },
        (err)=>{
          this.alertService.error("Error al guardar Agencia","Ok");
          console.log(err);
        }
      )
  }

  btnCancelar(){
    this.router.navigate(['/agencias']);
  }

  insertarImagen(){
    this.formData = new FormData();
    this.formData.append('nombre_agencia',this.nombre_agencia);
    this.formData.append('acronimo_agencia',this.acronimo_agencia);
    this.formData.append('direccion_agencia',this.direccion);
    this.formData.append('url',this.pagina_agencia);
    this.formData.append('image',this.image_agencia[0]);
    this.formData.append('descripcion_agencia',this.descripcion_agencia);
  }

    
  preview(files: any):void{
    this.image_agencia = files;
    console.log(files);
      if(this.image_agencia.length==0){
        this.image_agencia = null;
        return; 
      }    
  }

}