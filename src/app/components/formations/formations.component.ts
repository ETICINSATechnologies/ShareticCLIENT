import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Formation} from '../../entities/formation';
import {FormationService} from '../../services/formation.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-formations',
    templateUrl: './formations.component.html',
    styleUrls: ['./formations.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FormationsComponent implements OnInit {
    formations: Formation[];

    constructor(private formationService: FormationService, private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        console.log(this.authService.isLogged());
        this.getListFormations();
    }

    getListFormations(): void {
        this.formationService.getListFormations().subscribe(formations => this.formations = formations);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.formationService.addFormation({id: null, name: name, icon: '../assets/angular-logo.jpg'} as Formation)
            .subscribe(formation => {
                this.formations.push(formation);
            });
    }

    delete(formation: Formation): void {
        this.formations = this.formations.filter(f => f !== formation);
        this.formationService.deleteFormation(formation).subscribe();
    }

    versForma(formation: Formation) {
        this.router.navigate(['/formation']/*, {queryParams : {id: idForma}}*/);
    }
}
