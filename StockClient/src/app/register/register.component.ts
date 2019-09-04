import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from 'src/app/User/user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Admin } from '../model/Admin';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  type:String;

  constructor(private userService: UserService, private authService: AuthService,private router: Router) { }
  

  ngOnInit() {
    
  }
 
  register(){
    this.authService.change();
  }

  onSubmit() {
    
    let user = new User(this.firstname,this.lastname,this.username, this.password,this.email, this.type);

    this.userService.createUser(user)
  
    .subscribe(data => console.log(data), error => console.log(error));
    if(this.type=="User"){
    this.router.navigate(['UserLanding']);
    }
    else if(this.type=="Admin")
    {
      this.router.navigate(['AdminLanding']);
    }
  }

}
