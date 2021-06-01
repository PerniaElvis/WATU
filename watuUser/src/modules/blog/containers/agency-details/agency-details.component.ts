import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProgramService } from '../../services/program.service';

import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'sb-agency-details',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './agency-details.component.html',
    styleUrls: ['agency-details.component.scss'],
})
export class AgencyDetailsComponent implements OnInit, OnDestroy {
    sub:Subscription=new Subscription();
    params:any ="";
    nameAgency:any = "";
    program:any;
    requirements:any;
    mostrarRequisitos:boolean=false;
    constructor(
        private route: ActivatedRoute,
        private programService:ProgramService


     ) {
        console.log(this.route.snapshot.queryParamMap.get('name'));
        
        this.nameAgency = this.route.snapshot.queryParamMap.get('name');
        this.sub = this.route.params.pipe(
            tap(val => {
                this.params = val.id;
                this.program = this.programService.getProgram$(this.params);
            })
        ).subscribe()

     }
    ngOnInit() {
      
    }
    ngOnDestroy() {
    }

    showRequiremnts(prog:any){
        this.mostrarRequisitos = true;
        const id = prog.id;
        this.requirements = this.programService.getRequesitos(id);
        
    }

}
