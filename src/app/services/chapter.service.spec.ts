import { TestBed, inject } from '@angular/core/testing';

import { ChapterService } from './chapter.service';
import {HttpClientModule} from '@angular/common/http';

describe('ChapterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapterService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([ChapterService], (service: ChapterService) => {
    expect(service).toBeTruthy();
  }));
});
