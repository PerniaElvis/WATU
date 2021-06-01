import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramaService } from './programa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css'],
})
export class ProgramasComponent implements OnInit {
  formNewProgram!: FormGroup;
  formEditProgram!: FormGroup;
  programs: any[] = [];
  agencies: any[] = [];
  program: any = null;
  id_filtro = '0';
  constructor(
    private formBuild: FormBuilder,
    private service: ProgramaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formBuildMethod();
    this.loadPrograms();
    this.loadAgencies();

    this.id_filtro = this.route.snapshot.params.id;
  }

  formBuildMethod() {
    this.formNewProgram = this.formBuild.group({
      nombre_programa: ['', [Validators.required]],
      descripcion_programa: ['', [Validators.required]],
      vacantes_disponibles: [1, [Validators.required, Validators.min(1)]],
      agencia: [0, [Validators.required, Validators.min(1)]],
    });

    this.formEditProgram = this.formBuild.group({
      id: [0, [Validators.required]],
      nombre_programa: ['', [Validators.required]],
      descripcion_programa: ['', [Validators.required]],
      vacantes_disponibles: [1, [Validators.required, Validators.min(1)]],
      agencia: [0, [Validators.required, Validators.min(1)]],
      estado: [1, [Validators.required, Validators.min(1)]],
    });
  }

  async loadPrograms() {
    await this.service.getAll().then((data: any) => {
      console.log(data);
      this.programs = data.programas;
    });
  }

  loadAgencies() {
    this.service.getAllAgency().then((data: any) => {
      console.log(data);
      this.agencies = data.agencias;
    });
  }

  loadDataOneProgram(id: number) {
    this.service.get(id).then((data: any) => {
      this.program = data.programa;

      this.formEditProgram.patchValue({
        id: this.program.id,
        nombre_programa: this.program.nombre_programa,
        descripcion_programa: this.program.descripcion_programa,
        vacantes_disponibles: this.program.vacantes_disponibles,
        agencia: this.program.estado,
        estado: this.program.agenciaId,
      });
    });
  }

  saveOneProgram() {
    const newProgram = this.formNewProgram.value;
    this.service
      .add(newProgram.agencia, {
        nombre_programa: newProgram.nombre_programa,
        descripcion_programa: newProgram.descripcion_programa,
        vacantes_disponibles: newProgram.vacantes_disponibles,
      })
      .then((data: any) => {
        console.log(data);
        this.loadPrograms();
        this.formNewProgram.reset();
        Swal.fire('Agregado!', '', 'success');
      });
  }

  editOneProgram() {
    const programData = this.formEditProgram.value;
    this.service
      .edit(programData.id, {
        nombre_programa: programData.nombre_programa,
        descripcion_programa: programData.descripcion_programa,
        vacantes_disponibles: programData.vacantes_disponibles,
        estado: programData.estado,
      })
      .then((data: any) => {
        console.log(data);
        document.getElementById('btn_editar_cerrar_modal')?.click();
        Swal.fire('Editado!', '', 'success');
        this.loadPrograms();
      });
  }

  async deleteOneProgram(id: number) {
    Swal.fire({
      icon: 'question',
      title: 'Seguro que deseas eliminar?',
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.service.remove(id).then((data: any) => {
          console.log(data);
          this.loadPrograms();
          Swal.fire('Eliminado!', '', 'success');
        });
      }
    });
  }

  redirectDetailsProgram(id: number) {
    this.router.navigateByUrl('program/' + id);
  }

  mostrarItem(agenciaId: number): boolean {
    if (this.id_filtro === '0') {
      return true;
    } else {
      return agenciaId === +this.id_filtro;
    }
  }
}
