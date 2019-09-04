import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../model/Admin';
import { AuthService } from '../../auth.service';
import { UserService } from '../../User/user.service';
import { AdminService } from 'src/app/Admin/admin.service';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  username: String;
  password: String;
  type:String;
  invalidLogin: boolean = false;
  admin: User[];

  constructor(public router: Router,public authService: AuthService,private userService: UserService) {

   }

  ngOnInit() { 
    this.userService.getUsers().subscribe(response => this.admin = response);
   
  }

  onLogin(){
    this.authService.change();
  }

  onLoginSubmit(){
    for (let i = 0; i < this.admin.length; i++) {
      if (this.admin[i].username === this.username && this.admin[i].password === this.password && this.admin[i].type==="Admin") {
        this.router.navigate(['AdminLanding']);
        this.invalidLogin = false;
     
        this.onLogin();
      } 
      else {
        this.invalidLogin = true;
      }
    }
  }
}