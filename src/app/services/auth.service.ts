import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(){
    localStorage.setItem('isLogged', 'false');
  }
  private status: any = {
    accessToken: null,
    tokenType: null,
    isLogged: false
  };

  setLogged(logged: boolean): boolean {
    this.status.isLogged = logged;
    localStorage.setItem('isLogged', logged.toString());
    return this.status.isLogged;
  }

  isLogged(): boolean {
    if (!this.status.isLogged) {
      this.status.isLogged = localStorage.getItem('isLogged') === 'true';
    }
    return this.status.isLogged;
  }

  setTokenType(type: string): string {
    this.status.tokenType = type;
    localStorage.setItem('tokenType', type);
    return this.status.tokenType;
  }

  getTokenType(): string {
    if (!this.status.tokenType || this.status.tokenType == null) {
      this.status.tokenType = localStorage.getItem('tokenType');
    }
    return this.status.tokenType;
  }

  setAccessToken(token: string): string {
    this.status.accessToken = token;
    localStorage.setItem('accessToken', token);
    return this.status.accessToken;
  }

  getAccessToken(): string {
    if (!this.status.accessToken || this.status.accessToken == null) {
      this.status.accessToken = localStorage.getItem('accessToken');
    }
    return this.status.accessToken;
  }

  getHeaders(): Headers {
    if (this.isLogged()) {
      return new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.getTokenType() + ' ' + this.getAccessToken()
      });
    } else {
      return new Headers({
        'Content-Type': 'application/json'
      });
    }
  }
}
