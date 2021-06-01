import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProgramaService } from '../programa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-programa-detalle',
  templateUrl: './programa-detalle.component.html',
  styleUrls: ['./programa-detalle.component.css'],
})
export class ProgramaDetalleComponent implements OnInit {
  program: any = null;
  formNewRequirement!: FormGroup;
  requirements: any[] = [];

  constructor(
    private service: ProgramaService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.loadDataRequirement();
    this.buildFormMethod();
  }

  buildFormMethod() {
    this.formNewRequirement = this.formBuilder.group({
      descripcion_requisito: ['', [Validators.required]],
    });
  }

  loadData() {
    let id = this.route.snapshot.params.id;
    this.service.get(id).then((data: any) => {
      this.program = data.programa;
      console.log(this.program);
    });
  }

  loadDataRequirement() {
    let id = this.route.snapshot.params.id;
    this.service.getAllRequirement(id).then((data: any) => {
      console.log(data);
      this.requirements = data.List_requisitos;
    });
  }

  async saveNewRequirement() {
    let id = this.route.snapshot.params.id;
    let newRequirement = this.formNewRequirement.value;
    this.service.addRequirement(id, newRequirement).then((data: any) => {
      console.log(data);
      this.loadDataRequirement();
      Swal.fire('Agregado!', '', 'success');
      this.formNewRequirement.reset();
    });
  }
}
