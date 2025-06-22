import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { Home } from './home/home';
import { AddStudent } from './add-student/add-student';
import { Addstudentform } from './addstudentform/addstudentform';

const routes: Routes = [
  {path:'', component: Home },
  {path: 'addstudent', component: AddStudent},
  {path: 'addstudentform', component: Addstudentform}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
