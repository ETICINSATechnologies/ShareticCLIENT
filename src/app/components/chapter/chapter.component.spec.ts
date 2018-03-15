import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterComponent } from './chapter.component';
import {FormationService} from '../../services/formation.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('ChapitreComponent', () => {
  let component: ChapterComponent;
  let fixture: ComponentFixture<ChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterComponent ],
      providers: [FormationService, AuthService],
      imports: [HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
