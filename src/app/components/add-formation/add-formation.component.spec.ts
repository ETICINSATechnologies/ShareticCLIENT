import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormationComponent } from './add-formation.component';
import {FormationService} from '../../services/formation.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {Ng2DragDropModule} from 'ng2-drag-drop';
import {ChapterService} from '../../services/chapter.service';

describe('AddFormationComponent', () => {
  let component: AddFormationComponent;
  let fixture: ComponentFixture<AddFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormationComponent ],
      providers: [FormationService, ChapterService],
      imports: [HttpClientModule, RouterTestingModule, FormsModule,  Ng2DragDropModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
