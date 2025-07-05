import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { Addstudent } from './addstudent/addstudent';
import { Updatstudent } from './updatstudent/updatstudent';
import { ViewAllLocation } from './view.all.location/view.all.location';
import { AddLocation } from './add-location/add-location';
import { UpdateLocation } from './update-location/update-location';
import { Registration } from './auth/registration/registration';
import { Userprofile } from './auth/userprofile/userprofile';
import { Login } from './auth/login/login';

const routes: Routes = [
  {path: '', component: ViewAllStudent},
  {path: 'allstu', component: Addstudent},
  {path: 'updatestudent/:id',component: Updatstudent},
  {path: 'viewalllocation', component: ViewAllLocation},
  {path: 'addlocation',component: AddLocation},
  {path:'updatelocation/:id',component: UpdateLocation},
  {path: 'reg',component: Registration},
  {path: 'userprofile',component: Userprofile},
  {path: 'login',component:Login},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
