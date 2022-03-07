import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }

  // public authenticateUser(userName:string,password: string):boolean
  // {
  //   if(userName==='admin' && password=='admin123')
  //   {
  //     localStorage.setItem('user',userName);
  //     return true;

  //   }

  //   return false;
  // }



  // public  logout():void{
  //   localStorage.removeItem('user');
  // }

  // public getUser():string
  // {
  //  return localStorage.getItem('user');
  // }

  // public isLoggedIn():boolean
  // {
  //   return localStorage.getItem('user')! ==null;
  // }
  
  public authenticateUser(username: string,password: string)
  {
     if(username==='admin' && password==='admin123')
     {
      localStorage.setItem('currentuser','LoggedIn');
       return true;

     }

     else
     {
       return false;
     }
  }
  ischildRights():boolean
  {
    return true;
  }
 


}
