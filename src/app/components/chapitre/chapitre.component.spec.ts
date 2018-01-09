import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapitreComponent } from './chapitre.component';
import {FormationService} from '../../services/formation.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('ChapitreComponent', () => {
  let component: ChapitreComponent;
  let fixture: ComponentFixture<ChapitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapitreComponent ],
      providers: [FormationService, AuthService],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
