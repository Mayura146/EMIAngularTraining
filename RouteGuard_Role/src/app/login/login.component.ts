import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Role } from '../role.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  Role = Role;

  constructor(private router: Router, private authService: AuthService) { }

  login(role: Role) {
    this.authService.login(role);
    this.router.navigate(['/']);
  }
}
