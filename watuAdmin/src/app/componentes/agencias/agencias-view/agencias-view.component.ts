import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenciasService } from '../agencias.service';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-agencias-view',
  templateUrl: './agencias-view.component.html',
  styleUrls: ['./agencias-view.component.css'],
})
export class AgenciasViewComponent implements OnInit {

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

  
}
