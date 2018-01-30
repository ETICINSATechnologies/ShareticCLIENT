import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormationService} from '../../services/formation.service';
import {FormationDetails} from '../../entities/formationDetails';
import {Formation} from '../../entities/formation';
import {AuthService} from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
    formation: Formation = {
      id : 1,
      name: '',
      icon: '',
      description: ''
    };

  constructor(private formationService: FormationService, private authService: AuthService,
              private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.getFormation(id);
    }

    getFormation(id: number): void {
         this.formationService.getFormation(id).subscribe(formation =>  this.formation = formation);
    }

    addNewChapter(): void {
    }

    goBack(): void {
        this.location.back();
    }
}
