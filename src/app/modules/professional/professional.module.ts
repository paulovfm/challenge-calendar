import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalListComponent } from './components/professional-list/professional-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalCalendarComponent } from './components/professional-calendar/professional-calendar.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: '', component: ProfessionalListComponent },
];


@NgModule({
  declarations: [ProfessionalListComponent, ProfessionalCalendarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ProfessionalModule { }
