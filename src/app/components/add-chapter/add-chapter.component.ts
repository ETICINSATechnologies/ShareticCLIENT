import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Chapter} from '../../entities/chapter';
import {ChapterService} from '../../services/chapter.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent implements OnInit {

  chapter: Chapter;

  constructor(private route: ActivatedRoute, private chapterService: ChapterService,
              private location: Location ) { }

  ngOnInit() {
    const idFormation = +this.route.snapshot.paramMap.get('idFormation');
    const idChapter = +this.route.snapshot.paramMap.get('idChapter');
    console.log('formation:' + idFormation);
    console.log('chapter:' + idChapter);
    this.getChapter(idChapter);
  }

  getChapter(id: number): void {
    this.chapterService.getChapter(id).subscribe(chapter => {
      this.chapter = chapter;
    });
  }

  saveChapter(): void {
    this.chapterService.updateChapter(this.chapter).subscribe(c => {
      this.chapter = c;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
