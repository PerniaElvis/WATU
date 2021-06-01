import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthUtilsService } from '@modules/auth/services';
import { BlogService } from '@modules/blog/services';
import { Observable, Subscription } from 'rxjs';
import { Program } from '../../models/program.model';
import { Agency } from '../../models/agency.model';
import {  ProgramService } from '../../services/program.service';
import {  AgencyService }  from '../../services/agency.service';

@Component({
    selector: 'sb-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './home.component.html',
    styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    subscription: Subscription = new Subscription();
    isLoggedIn = false;

    agencies$!:Observable<Agency[]>;
    programs$!:Observable<Program[]>;
    constructor(
        private authUtilsService: AuthUtilsService,
        private changeDetectorRef: ChangeDetectorRef,
        private agencyService:AgencyService,
        private router:Router,
        private programService:ProgramService

        ) {}
    ngOnInit() {
        this.agencies$ = this.agencyService.getAgencies$();
        this.programs$ =  this.programService.getPrograms$();
        this.subscription.add(
            this.authUtilsService.isLoggedIn$().subscribe(isLoggedIn => {
                this.isLoggedIn = isLoggedIn;
                this.changeDetectorRef.detectChanges();
            })
        );
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    seeMore(agencyId:string,nameAgency:string){
        console.log(agencyId);
        this.router.navigate([`/agency-details/${agencyId}`],{
            queryParams:{
                name:nameAgency
            }
        })
    }
}
