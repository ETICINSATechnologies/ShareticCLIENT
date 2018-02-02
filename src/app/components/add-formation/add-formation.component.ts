import { Component, OnInit } from '@angular/core';
import { Chapter} from '../../entities/chapter';
import {FormationService} from '../../services/formation.service';
import {Formation} from '../../entities/formation';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  formationSaved = false;

  chapters: Chapter [];

  emptyChapter: Chapter = {
    id: 0,
    title: 'Chapitre',
    place: 0,
    description: '',
    content: '',
    rating: 0
  };

  formation: Formation = {
    id: 0,
    name: '',
    icon: '',
    description: '',
  };

  items = [
    this.emptyChapter
  ];

  droppedChapters = [];
  droppedItems = [];


  constructor( private formationService: FormationService) { }

  ngOnInit() {
  }

  onItemDrop(e: any) {
    this.droppedChapters.push(e.dragData);
  }

  onAnyDrop(e: any) {
    this.droppedItems.push(e.dragData);

    if (e.dragData.type === 'chapter') {
      this.removeItem(e.dragData, this.chapters);
    }
  }

  removeItem(item: any, list: Array<any>) {
    const index = list.map(function (e) {
      return e.name;
    }).indexOf(item.name);
    list.splice(index, 1);
  }

  saveFormation() {
    if (!this.formationSaved) {
      this.formationService.addFormation(this.formation).subscribe(f =>  {
          this.formation = f;
          this.formationSaved = true;
        });
    } else {
      this.formationService.updateFormation(this.formation).subscribe(f => {
        this.formation = f;
      });
    }
  }

  deleteChapter(chapter: Chapter) {
    this.droppedChapters.splice(this.droppedChapters.indexOf(chapter), 1);
  }
}
