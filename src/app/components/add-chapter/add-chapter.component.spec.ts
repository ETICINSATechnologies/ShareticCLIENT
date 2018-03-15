import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChapterComponent } from './add-chapter.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('AddChapterComponent', () => {
  let component: AddChapterComponent;
  let fixture: ComponentFixture<AddChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChapterComponent ],
      imports: [ RouterTestingModule ]
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
