import { Component, OnInit } from '@angular/core';
import { Chapter} from '../../entities/chapter';
import {FormationService} from '../../services/formation.service';
import {Formation} from '../../entities/formation';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  formationSaved = false;

  chapters: Chapter []= [];

  emptyChapter: Chapter = {
    id: -1,
    title: 'Chapitre',
    place: 0,
    description: '',
    content: '',
    rating: 0
  };

  formation: Formation = {
    id: -1,
    name: '',
    icon: '',
    description: '',
  };

  items = [
    this.emptyChapter
  ];

  constructor( private formationService: FormationService, private location: Location) { }

  ngOnInit() {
  }

  onItemDrop(e: any) {
    e.dragData.title = '';
    this.chapters.push(e.dragData);
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
    this.chapters.splice(this.chapters.indexOf(chapter), 1);
  }

  goBack(): void {
    this.location.back();
  }
}
