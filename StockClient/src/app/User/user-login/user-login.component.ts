import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: String;
  password: String;
  invalidLogin: boolean = false;
  users: User[];

  constructor(public router: Router,public authService: AuthService,private userService: UserService) {

   }

  ngOnInit() { 
    this.userService.getUsers().subscribe(response => this.users = response);
  }

  onLogin(){
    this.authService.change();
  }

  onLoginSubmit(){
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === this.username && this.users[i].password === this.password ) {
        if(this.users[i].type=="User")
        {
        this.router.navigate(['UserLanding']);
        }
        // else if(this.users[i].type=="Admin")
        // {
        //   this.router.navigate(['AdminLanding']);
        // }
        this.invalidLogin = false;
        localStorage.setItem("userId", this.users[i].id.toString());
        this.onLogin();
      } 
      else {
        this.invalidLogin = true;
      }
    }
  }
}
