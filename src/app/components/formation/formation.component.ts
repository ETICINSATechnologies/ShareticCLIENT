import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormationService} from '../../services/formation.service';
import {FormationDetails} from '../../entities/formationDetails';
import {AuthService} from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
    formationName;
    formationDetails: FormationDetails[];

  constructor(private formationService: FormationService, private authService: AuthService, private route: ActivatedRoute,
              private location: Location) { }

    ngOnInit() {
        console.log(this.authService.isLogged());
        this.getFormation();
    }

    getFormation(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        // this.formationService.getFormation(id).subscribe(formation => this.formationDetails = formationDetails);
    }

    goBack(): void {
        this.location.back();
    }
}
