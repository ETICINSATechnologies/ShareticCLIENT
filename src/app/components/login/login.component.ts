import { Component, OnInit } from '@angular/core';
import {LoginID} from '../../entities/loginID';
import {LoginService} from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  identifiants: LoginID = new LoginID('', '');

  constructor(private loginService: LoginService) { }


}
