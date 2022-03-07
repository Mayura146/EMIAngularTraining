import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor() { }
  public authenticateuser(username, password): boolean {
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('currentuser', 'LoggedIn');
      return true;
    } else {
      return false;
    }
  }

  ischildRights():boolean
  {
    return true;
  }
}
