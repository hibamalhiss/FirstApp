import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/services/Authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) {}
  canActivate(): boolean  {
    if ( this.auth.isLoggedIn() ) {
      return true;
    } else { 

      this.router.navigate(['/']);
    }
    return false;
  }
  
}
