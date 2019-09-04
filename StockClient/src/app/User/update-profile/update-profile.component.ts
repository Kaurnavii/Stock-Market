import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/User/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  username: String;
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  type:String;

  constructor(private userService: UserService,private router: Router) { }
  

  ngOnInit() {
    
  }
 
  onSubmit() {
    
    let user = new User(this.firstname,this.lastname,this.username, this.password,this.email,this.type);
    this.userService.updateUser(user)
    .subscribe(data => console.log(data), error => console.log(error));

    this.router.navigate(['UserLanding']);
  }

}