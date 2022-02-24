import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string;
password: string;
alertmessage='Invalid Credentials!!';
  constructor(private service: AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  public UserLogin() {
    this.username = ((document.getElementById('username') as HTMLInputElement).value);
     this.password = ((document.getElementById('password') as HTMLInputElement).value);
    console.log(this.username);
    console.log(this.password);
    const result=this.service.authenticateuser(this.username,this.password);
    if(result===true)
    {
      this.router.navigate(['custom']);
    }
    else
    {
      this.router.navigate(['switch']);
      return this.alertmessage;
    }
  }

}
