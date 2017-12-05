import { Component, OnInit } from '@angular/core';
import {LoginID} from '../../entities/loginID';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  identifiants: LoginID = new LoginID('', '');

  constructor() { }
}
