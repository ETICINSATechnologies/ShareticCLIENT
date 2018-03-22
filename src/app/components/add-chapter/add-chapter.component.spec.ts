import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChapterComponent } from './add-chapter.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {ChapterService} from '../../services/chapter.service';
import {FroalaEditorModule} from 'angular-froala-wysiwyg';
import {FormsModule} from '@angular/forms';

describe('AddChapterComponent', () => {
  let component: AddChapterComponent;
  let fixture: ComponentFixture<AddChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChapterComponent ],
      providers: [ChapterService],
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, FroalaEditorModule.forRoot() ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
