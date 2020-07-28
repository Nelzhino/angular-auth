import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.auth.isAuthenticated()){
      console.log("Paso el guard");
      return true;
    }
    else{
      console.error("Bloqueado el guard");
      return false;
    }
  }
}
