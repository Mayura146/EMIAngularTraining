import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Role } from './role.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate,CanActivateChild  {

  constructor(private router: Router,private service:AuthService)
  {
    
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    if(!this.service.isAuthorized()){
      this.router.navigate(['login'])
      return false;
    }

    const roles=route.data['roles'] as Role[];

    if (roles && !roles.some(r => this.service.hasRole(r))) {
      this.router.navigate(['error', 'not-found']);
      return false;
  }

  return true;
}

canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
  if (!this.service.isAuthorized()) {
      return false;
  }

  const roles = route.data && route.data['roles'] as Role[];
  if (roles && !roles.some(r => this.service.hasRole(r))) {
      return false;
  }

  return true;
}
  }
  

