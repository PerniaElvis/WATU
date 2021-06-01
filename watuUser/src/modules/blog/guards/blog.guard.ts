import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BlogService } from '@modules/blog/services';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class PostGuard implements CanActivate {
    constructor(private blogService: BlogService) {}
    canActivate(_next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // return this._canActivate(_next, state);
        return true;
    }

    _canActivate(_next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // return this.blogService.getPost$(_next.params.post).pipe(
        //     switchMap(post => {
        //         if (post) {
        //             return of(true);
        //         }
        //         return of(false);
        //     })
        // );
    }
}
