import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { element } from 'protractor';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit() {
  }
  loginUser(e) {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
   
    if (username == 'admin' && password == 'admin') {
      
      this.Router.navigate(['/home']);
    }
  else {
    this.Router.navigate(['/error']);
  }
  }

}
