import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_SERVER } from '../app.constants';

import { AuthService } from './auth.service';
import {LoginID} from '../entities/loginID';

@Injectable()
export class LoginService {

  private OAuthTokenURL = API_SERVER.oauth + 'token';

  constructor(private http: HttpClient, private authService: AuthService) { }

  login(identifiants: LoginID): Promise<Response> {
    /** While no backend **/
    this.authService.setLogged(true);
    return this.http
      .get<any>(this.OAuthTokenURL +
        '&' + 'username=' + identifiants.username +
        '&' + 'password=' + identifiants.password)
      .toPromise()
      .then(res => {
         this.authService.setAccessToken(res.json().access_token);
        this.authService.setTokenType('Bearer');
        this.authService.setLogged(true);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
