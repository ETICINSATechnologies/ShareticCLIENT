import { Component, OnInit } from '@angular/core';
import {LoginID} from '../../entities/loginID';
import {LoginService} from '../../services/login.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  identifiants: LoginID = new LoginID('', '');

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    this.loginService.login(this.identifiants)
      .then(res => {
        this.router.navigate(['/formations']);
      })
      .catch();
  }

}
