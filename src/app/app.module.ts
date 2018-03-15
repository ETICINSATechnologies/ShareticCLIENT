import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SuiModule } from 'ng2-semantic-ui';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Ng2DragDropModule } from 'ng2-drag-drop';

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
import { AddFormationComponent } from './components/add-formation/add-formation.component';
import { ChapitreComponent } from './components/chapter/chapter.component';
import {ChapterService} from './services/chapter.service';
import { AddChapterComponent } from './components/add-chapter/add-chapter.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationsComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    AddFormationComponent,
    FormationComponent,
    ChapitreComponent,
    AddChapterComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'formations', component: FormationsComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'addFormation', component: AddFormationComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'addChapter/:formationId/:chapterId', component: AddChapterComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'formation/:id', component: FormationComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'chapitre/:id', component: ChapitreComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'profile', component: ProfileComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent, pathMatch: 'full'}
    ]),
    HttpClientModule,
    Ng2DragDropModule.forRoot()
  ],
  providers: [ FormationService, AuthGuard , LoginService, AuthService, ChapterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
