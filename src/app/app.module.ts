import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryFormationDataService } from './in_memory_data/InMemoryFormationDataService';

import { AppComponent } from './app.component';
import { FormationsComponent } from './components/formations/formations.component';
import { FormationComponent } from './components/formation/formation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormationService } from './services/formation.service';
import { AuthGuard } from './services/auth.guard';
import {LoginService} from './services/login.service';
import {AuthService} from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChapitreComponent } from './components/chapitre/chapitre.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationsComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    FormationComponent,
    ChapitreComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'formations', component: FormationsComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'formation/:id', component: FormationComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'chapitre/:id', component: ChapitreComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'profile', component: ProfileComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent, pathMatch: 'full'}
    ]),
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryFormationDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ FormationService, AuthGuard , LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
