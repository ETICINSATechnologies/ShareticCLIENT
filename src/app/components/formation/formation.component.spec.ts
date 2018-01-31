import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SuiRatingModule } from 'ng2-semantic-ui';
import { FormsModule } from '@angular/forms';

import { FormationComponent } from './formation.component';
import {FormationService} from '../../services/formation.service';
import {AuthService} from '../../services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {ChapterService} from '../../services/chapter.service';


describe('FormationComponent', () => {
  let component: FormationComponent;
  let fixture: ComponentFixture<FormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationComponent ],
      imports: [ SuiRatingModule, FormsModule, HttpClientModule, RouterTestingModule],
      providers: [ FormationService, AuthService, ChapterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
