import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  // username = ''
  // password = ''
  constructor( private serviceservice: ServiceService ) { }

  ngOnInit(): void {
  }
 
  userLogin(){
    let userBody ={username:this.user.userId, password: this.user.password}
    this.serviceservice.loginUser(userBody).subscribe(data =>{
      alert("Login successfully");
      localStorage.setItem("username", this.user.userId);
      window.location.href = 'http://localhost:4200';
    },
    error=>alert("Sorry please enter correct User and Password"));

  }

}
