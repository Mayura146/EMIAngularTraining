import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SwitchComponent } from '../Components/switch/switch.component';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate,CanActivateChild,CanDeactivate<SwitchComponent> {


  constructor(private service: AuthenticationService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot):boolean 
  {
    if (localStorage.getItem('currentuser') !== null) {
      return true;
    } else {
      alert('Not Allowed to access this page!!');
      this.router.navigate(['login']);
      return false;
    }
  }
  canActivateChild(route: ActivatedRouteSnapshot) :boolean{
    if(this.service.ischildRights())
    {
      return true;
    }

    else
    {
      alert('you dont have permission to access this page!!');
      this.router.navigateByUrl('/custom');
      return false;
    }

}
canDeactivate():boolean
{
  return window.confirm('Are you sure you want to leave this page!!');
}
 
}
