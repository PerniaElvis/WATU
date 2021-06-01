import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenciasService } from '../agencias.service';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-agencias-edit',
  templateUrl: './agencias-edit.component.html',
  styleUrls: ['./agencias-edit.component.css'],
})
export class AgenciasEditComponent implements OnInit {

    idAgencia:number=0;
    nombre_agencia:string="";
    acronimo_agencia:string="";
    pagina_agencia:string="";
    direccion_agencia:string="";
    image_agencia:string="";
    descripcion_agencia:string="";
      
  constructor(private router:Router, private route:ActivatedRoute, private agenciasService: AgenciasService , private alertService:AlertService) {}
  //constructor(private router:Router) {}

  ngOnInit() {
    this.idAgencia = parseInt(this.route.snapshot.paramMap.get("id")!); 

    this.agenciasService.mostrar(this.idAgencia )
    .subscribe(
      (response)=>{
        console.log(response);

          this.nombre_agencia = response.agencia.nombre_agencia;
          this.acronimo_agencia = response.agencia.acronimo_agencia;
          this.pagina_agencia = response.agencia.url;
          this.direccion_agencia = response.agencia.direccion_agencia;
          this.image_agencia = response.agencia.image;
          this.descripcion_agencia = response.agencia.descripcion_agencia;

      }
    )
  }

  btnCancelar(){
    this.router.navigate(['/agencias']);
  }

  btnActualizarAgencia(){
    console.log(this.nombre_agencia);
    console.log(this.acronimo_agencia);
    console.log(this.pagina_agencia);
    console.log(this.direccion_agencia);
    console.log(this.descripcion_agencia);
    this.agenciasService.editar(
      this.idAgencia,
      this.nombre_agencia,
      this.acronimo_agencia,
      this.pagina_agencia,
      this.direccion_agencia,
      this.descripcion_agencia )
      .subscribe(
        (response)=>{
          console.log(response);
            console.log("Elemento editado correctamente");
            this.alertService.success("Ok","Datos Actualizados Correctamente");
            this.router.navigate(['/agencias']);      
        },
        (err)=>{
          this.alertService.error("Error al actualizar","Ok");
        }
      )
  }

  
}
