import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 username:string;
 password:string;
 //model:any;
  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  public login(model:any):void
  {
    const result= this.service.IsAdmin(model.value);
    if(result===true)
    {
      this.router.navigate(['/user'])
      
    }

    else
    {
      this.router.navigate(['404']);
    }
    console.log(model.value);
   
  }
}
