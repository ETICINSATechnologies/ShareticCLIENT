import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


import { AuthService } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.user.isLogged()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
