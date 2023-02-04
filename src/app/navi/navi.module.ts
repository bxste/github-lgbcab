import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';
import { ReferencesComponent } from '../references/references.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { HomeComponent } from '../home/home.component';

const gg: Routes = [
  {
    path: 'About',
    component: AboutComponent,
  },
  {
    path: 'Skills',
    component: SkillsComponent,
  },
  {
    path: 'Education',
    component: EducationComponent,
  },
  {
    path: 'References',
    component: ReferencesComponent,
  },
  {
    path: 'Pagenotfound',
    component: PagenotfoundComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(gg)],
  declarations: [],
  exports: [RouterModule],
})
export class NaviModule {}
