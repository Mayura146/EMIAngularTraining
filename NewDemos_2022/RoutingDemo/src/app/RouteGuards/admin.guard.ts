import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, CanActivateChild, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/authentication.service';
import { SwitchComponent } from '../Components/switch/switch.component';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  userName:string;
  password:string;

  constructor(private service: AuthenticationService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
  {
  if(this.service.authenticateuser(this.userName,this.password))
  {
    
    return true;
    
  }
  else
  {
    alert('You dont have permission');
    
   this.router.navigate(['/login']);
   return false;

  }
  }

 
}
