import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from "../../models/user";

import { UserServiceService } from "../../services/user-service/user-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = "";
  public password: string = "";

  public user: User = {
    username: "",
    description: ""
  }

  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.email);
    console.log(this.password);
    this.user.username = this.email;
    this.user.description = this.password;
    this.userService.getUsers()
    .subscribe(
      res => {
        console.log(res);
      }, error => {
        console.log(error);
      }
    );
    this.router.navigate(['/profile'])
  }
}
