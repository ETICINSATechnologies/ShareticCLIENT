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
    formationDetails: FormationDetails[];
    formations: Formation[];
    formationName: string;
    formationIcon: string;

  constructor(private formationService: FormationService, private authService: AuthService, private route: ActivatedRoute,
              private location: Location) { }

    ngOnInit() {
        console.log(this.authService.isLogged());
        const id = +this.route.snapshot.paramMap.get('id');
        this.getFormation(id);
        this.getListFormations(id);
        // this.formationName = this.formations[id].name;
        // this.formationIcon = this.formations[id].icon;
    }

    getFormation(id: number): void {
        // this.formationService.getFormation(id).subscribe(formationDetails => this.formationDetails = formationDetails);
    }

    getListFormations(id: number): void {
        this.formationService.getListFormations().subscribe(formations => this.formations = formations);
    }

    addNewChapter(): void {
    }

    goBack(): void {
        this.location.back();
    }
}
