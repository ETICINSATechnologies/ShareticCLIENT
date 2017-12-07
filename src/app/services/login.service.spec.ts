import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, AuthService],
      imports: [HttpClientModule],
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
