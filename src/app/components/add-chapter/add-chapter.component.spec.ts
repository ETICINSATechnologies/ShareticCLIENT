import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChapterComponent } from './add-chapter.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {ChapterService} from '../../services/chapter.service';
import {HttpClientModule} from '@angular/common/http';

describe('AddChapterComponent', () => {
  let component: AddChapterComponent;
  let fixture: ComponentFixture<AddChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChapterComponent ],
      imports: [ RouterTestingModule, FormsModule, FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(), HttpClientModule ],
      providers: [ ChapterService ]
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
