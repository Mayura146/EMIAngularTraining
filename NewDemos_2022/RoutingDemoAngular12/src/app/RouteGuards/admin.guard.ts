import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SwitchComponent } from '../Components/switch/switch.component';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild,CanDeactivate<SwitchComponent>  {

  constructor(private service: AuthenticationService, private router: Router) {

  }

  canActivate(): boolean {
    if (localStorage.getItem('currentuser') !== null) {
      return true;
    } else {
      alert('Not Allowed to access this page!!');
      this.router.navigate(['login']);
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
        this.router.navigateByUrl('/login');
        return false;
      }

  }
  canDeactivate():boolean
  {
    return window.confirm('Are you sure you want to leave this page!!');
  }
}

