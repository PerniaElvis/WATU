import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SessionQuery } from '@modules/auth/session-store/session.query';

@Component({
    selector: 'sb-demo-info',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './demo-info.component.html',
    styleUrls: ['demo-info.component.scss'],
})
export class DemoInfoComponent implements OnInit {
    constructor(public sessionQuery:SessionQuery) {}
    ngOnInit() {}
    isLogged(){
        const value = localStorage.getItem('token');
        console.log(value);
        if(value === null){
            return true
        }
        return false
    }
}
