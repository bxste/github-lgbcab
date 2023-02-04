import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsComponent } from './skills/skills.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'pagenotfoundComponent', component: PagenotfoundComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    EducationComponent,
    ReferencesComponent,
    SkillsComponent,
    PagenotfoundComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
