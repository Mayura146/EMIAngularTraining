import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../Models/User.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl='http://localhost:3000/User';
  user:User;
  username:string;
  password:string;

  constructor(private http:HttpClient,private router:Router) { }

 public login():boolean
 {
   if(this.username===this.user.username && this.password===this.user.password)
   {
      return true;
   }

   else
   {
   return false;
 }
}


public logout():void
{
  this.user=null;
}
}