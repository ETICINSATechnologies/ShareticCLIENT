import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.css']
})
export class AddChapterComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const idFormation = +this.route.snapshot.paramMap.get('idFormation');
    const idChapter = +this.route.snapshot.paramMap.get('idChapter');
    console.log('formation:' + idFormation);
    console.log('chapter:' + idChapter);
  }

}
