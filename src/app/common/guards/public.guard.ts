import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AthenticationService } from '../services/athentication.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  constructor(public _authService: AthenticationService, public _router: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!this._authService.isLoggedIn()){
      return true;
    }
    console.log("Usuario autenticado");
    this._router.navigate(['/home']);
    return false;
  }
}
