import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SuiDropdownModule} from 'ng2-semantic-ui/dist';
import {LoginService} from './services/login.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [RouterTestingModule, SuiDropdownModule, HttpClientModule],
      declarations: [AppComponent, NavbarComponent],
      providers: [LoginService, AuthService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  /*it(`should have as title 'SHARETIC'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SHARETIC');
  }));*/
  /*it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/
});
