import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpAuthService } from '../../services/sign-up-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserRoleGuard implements CanActivate {
  constructor(private _signUpAuth: SignUpAuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let userRole = this._signUpAuth.getUserRole();
    let UserArray = route.data['userRole']!;
    console.log(UserArray);

    if (UserArray.includes(userRole)) {
      return true;
    } else {
      return false;
    }
  }
}
