import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormationService} from '../../services/formation.service';
import {Chapter} from '../../entities/Chapter';
import {AuthService} from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.css']
})
export class ChapitreComponent implements OnInit {

    chapter: Chapter[];

    constructor(private formationService: FormationService, private authService: AuthService, private route: ActivatedRoute,
                private location: Location) { }

    ngOnInit() {
        console.log(this.authService.isLogged());
        this.getChapter();
    }

    getChapter(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        // this.formationService.getChapter(id).subscribe(chapter => this.chapter = chapter);
    }

    validerChapitre(): void {
    }

    goBack(): void {
        this.location.back();
    }
}


