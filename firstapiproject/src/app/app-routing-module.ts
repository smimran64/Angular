import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VewAllLocation } from './vew-all-location/vew-all-location';

const routes: Routes = [

  {path:'allLocation',component: VewAllLocation},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
