import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormationService} from '../../services/formation.service';
import {Chapter} from '../../entities/Chapter';
import {Formation} from '../../entities/Formation';
import {AuthService} from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.css']
})
export class ChapitreComponent implements OnInit {

    formations: Formation[];
    formationName: string;
    formationIcon: string;

    constructor(private formationService: FormationService, private authService: AuthService, private route: ActivatedRoute,
                private location: Location) { }

    ngOnInit() {
        console.log(this.authService.isLogged());
        const id = +this.route.snapshot.paramMap.get('id');
        this.getChapter(id);
        this.getListFormations(id);
        // this.formationName = this.formations[id].name;
        // this.formationIcon = this.formations[id].icon;
    }

    getChapter(id: number): void {
        // this.formationService.getChapter(id).subscribe(chapter => this.chapter = chapter);
    }

    getListFormations(id: number): void {
        // this.formationService.getListFormations().subscribe(formations => this.formations = formations);
    }

    validerChapitre(): void {
        this.location.back();
    }

    goBack(): void {
        this.location.back();
    }
}


