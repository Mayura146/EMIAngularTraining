import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
userName: string;
password: string;
alertMessage='Invalid';

  constructor(private service: AuthenticationService, private router: Router) {
   
   }

  ngOnInit(): void {
  }

  public UserLogin()
  {

  const result=this.service.authenticateUser(this.userName,this.password);
    if(result===true)
    {
      this.router.navigate(['/employee']);
    
    }
    else
    {
      this.router.navigate(['switch']);
      return this.alertMessage;
 
     
    }
  }
}
