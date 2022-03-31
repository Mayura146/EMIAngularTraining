import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username:string;
  password:string;
 isAuthenticated=false;
  constructor() { }
  public IsAdmin(user:any):boolean
  {
    
    console.log(user);
    if(user.username==='admin' && user.password==='admin123')
    {
     this.isAuthenticated=true;
      return true;

      
    }
    else
    {
      return false;
    }
  }
}
