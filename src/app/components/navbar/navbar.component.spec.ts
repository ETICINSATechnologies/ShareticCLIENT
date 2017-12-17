import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SuiDropdownModule} from 'ng2-semantic-ui/dist';
import { NavbarComponent } from './navbar.component';
import {LoginService} from '../../services/login.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [SuiDropdownModule, HttpClientModule, RouterTestingModule ],
      providers: [LoginService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
