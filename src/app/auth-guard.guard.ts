import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpAthenticationService } from './signuppage/sign-up-athentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard {
  constructor(
    private router: Router,
    private authenticationService: SignUpAthenticationService
) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.credentialsNotMatching;
    if (!currentUser) {
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
}
}
