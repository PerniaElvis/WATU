import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenciasService } from '../agencias.service';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-agencias-list',
  templateUrl: './agencias-list.component.html',
  styleUrls: ['./agencias-list.component.css'],
})
export class AgenciasListComponent implements OnInit {

  idSetInterval:any;
  agencias: any[] | undefined;

  constructor(private router:Router, private agenciasService: AgenciasService , private alertService:AlertService) {}
  //constructor(private router:Router) {}

  ngOnInit() {
      this.llenarDatos();
  }

   llenarDatos()
  {
    this.agenciasService.listar()
      .subscribe(
        (response)=>{
          console.log(response);
          this.agencias = response.agencias;
        }
      );
  }
 
  btnCambiarEstado(agencia: { estado: number; id: number; })
  {

    if(agencia.estado == 0){
      console.log("Activa agencia ");
        this.agenciasService.activacion(agencia.id)
          .subscribe(
            (res: any)=>{
              console.log("activa agencia ");
              console.log(res);
              this.alertService.success("Ok","Agencia activada correctamente");
              agencia.estado=1;
            }
          )
    }else{
      console.log("Desactivaragencia ");
      this.agenciasService.activacion(agencia.id)
        .subscribe(
          (res: any)=>{
            console.log("Desactiva agencia ");
            console.log(res);
            this.alertService.success("Ok","Agencia desactivada correctamente");
            agencia.estado=0;
          }
        )

    }
  
  }

  btnAgregar()
  {
      console.log("Navegando a agregar un nueva agencia: ");

      this.router.navigate(['/agencias/agregar']);
  }

  btnVerDetalle(id: number)
  {
      console.log("Navegando a visualizar la agencia: "+id);

      this.router.navigate(['/agencias/'+id]);
  }

  btnEditar(id: number)
  {
      console.log("Navegando a editar la agencia: "+id);

      this.router.navigate(['/agencias/editar/'+id]);
  }

  btnProgramas(id: number)
  {
      console.log("Navegando a ver programas: "+id);

      this.router.navigate(['/programs/'+id]);
  }
  
}
