import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUtilsService } from '@modules/auth/services';
import { SessionStore } from '@modules/auth/session-store/session.store';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sb-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['top-nav.component.scss'],
})
export class TopNavComponent implements OnInit, OnDestroy {
    subscription: Subscription = new Subscription();
    isLoggedIn = false;
    isOnPost = false;
    isMenuCollapsed = true;

    isLogged(){
        console.log(this.sessionStore.getValue().isLoadUserDone);
        
        return this.sessionStore.getValue().isLoadUserDone;
    }
    constructor(
        private navigationService: NavigationService,
        private authUtilsService: AuthUtilsService,
        private route: ActivatedRoute,
        private router: Router,
        private sessionStore:SessionStore
    ) {}
    ngOnInit() {
        this.subscription.add(
            this.navigationService.currentComponent$().subscribe(currentComponentName => {
                this.isOnPost = currentComponentName === 'PostComponent';
            })
        );
        this.subscription.add(
            this.authUtilsService.isLoggedIn$().subscribe(isLoggedIn => {
                this.isLoggedIn = isLoggedIn;
            })
        );

        this.authUtilsService.checkToken();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    editPost() {
        this.router.navigateByUrl(`/edit/${this.route.snapshot.params.post}`);
    }

    logout(){
        localStorage.removeItem('token');
        this.sessionStore.update((state)=>{
            return{
                isLoadUserDone:false,
                loggedUserId:''
            }
        })
        this.router.navigate([''])
    }
}
