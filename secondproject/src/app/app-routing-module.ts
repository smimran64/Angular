import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Viewalllocation } from './viewalllocation/viewalllocation';

const routes: Routes = [
  { path: '', component: Viewalllocation }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
