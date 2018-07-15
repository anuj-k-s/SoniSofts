import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamComponent } from './exam/exam.component';
import { ResultComponent } from './result/result.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import {AppRoutingModule, RoutingComponents} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
