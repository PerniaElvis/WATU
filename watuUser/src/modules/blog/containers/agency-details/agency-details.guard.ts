import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({ providedIn: "root" })
export class SessionGuard implements CanActivate {
  constructor(private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const sesion = localStorage.getItem("token");
    if (!sesion) {
      this.router.navigate(["login"]);
    }
    return true;
  }
}
