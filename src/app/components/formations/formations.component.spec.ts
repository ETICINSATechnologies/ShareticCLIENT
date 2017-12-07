import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsComponent } from './formations.component';
import {FormationService} from '../../services/formation.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';

describe('FormationsComponent', () => {
  let component: FormationsComponent;
  let fixture: ComponentFixture<FormationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationsComponent ],
      providers: [FormationService, AuthService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
