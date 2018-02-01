import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormationService} from '../../services/formation.service';
import {Formation} from '../../entities/formation';
import {AuthService} from '../../services/auth.service';
import {Location} from '@angular/common';
import {Chapter} from '../../entities/chapter';
import {ChapterService} from '../../services/chapter.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formation: Formation = {
    id: 1,
    name: '',
    icon: '',
    description: ''
  };

  chapters: Chapter [] = [];

  constructor(private formationService: FormationService, private authService: AuthService,
              private route: ActivatedRoute, private location: Location, private  chapterService: ChapterService) {
  }

  ngOnInit() {
    const idFormation = +this.route.snapshot.paramMap.get('id');
    this.getFormation(idFormation);
  }

  getFormation(id: number): void {
    this.formationService.getFormation(id).subscribe(formation => {
        this.formation = formation;
      });
  }

  addNewChapter(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
