import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { Addstudent } from './addstudent/addstudent';
import { Updatstudent } from './updatstudent/updatstudent';
import { ViewAllLocation } from './view.all.location/view.all.location';
import { AddLocation } from './add-location/add-location';

const routes: Routes = [
  {path: '', component: ViewAllStudent},
  {path: 'allstu', component: Addstudent},
  {path: 'updatestudent/:id',component: Updatstudent},
  {path: 'viewalllocation', component: ViewAllLocation},
  {path: 'addlocation',component: AddLocation}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
