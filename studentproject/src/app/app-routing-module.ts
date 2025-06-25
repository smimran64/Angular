import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { Addstudent } from './addstudent/addstudent';
import { Updatstudent } from './updatstudent/updatstudent';

const routes: Routes = [
  {path: '', component: ViewAllStudent},
  {path: 'allstu', component: Addstudent},
  {path: 'updatestudent/:id',component: Updatstudent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
