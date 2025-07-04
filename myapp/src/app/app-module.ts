import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { AddStudent } from './add-student/add-student';
import { Addstudentform } from './addstudentform/addstudentform';
import { Editstudentform } from './editstudentform/editstudentform';

@NgModule({
  declarations: [
    App,
    Home,
    AddStudent,
    Addstudentform,
    Editstudentform
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
