import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { FormationsComponent } from './formations.component';
import {FormationService} from '../../services/formation.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {Formation} from '../../entities/formation';
import { of } from 'rxjs/observable/of';
import {RouterTestingModule} from '@angular/router/testing';

describe('FormationsComponent', () => {
  let component: FormationsComponent;
  let fixture: ComponentFixture<FormationsComponent>;
  let formationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationsComponent ],
      providers: [FormationService, AuthService],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(inject([FormationService], f => {
    formationService = f;
    fixture = TestBed.createComponent(FormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getListFormations and return list of formation', async(() => {
    const response: Formation[] = [];
    spyOn(formationService, 'getListFormations').and.returnValue(of(response));
    component.getListFormations();
    fixture.detectChanges();
    expect(component.formations).toEqual(response);
  }));
});
