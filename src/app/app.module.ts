import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsModule } from './lessons/lessons.module';
import { StudentsModule } from './students/students.module';
import { MarksModule } from './marks/marks.module';
import { Comp404Component } from './comp404.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LessonsModule,
    StudentsModule,
    MarksModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [Comp404Component]
})
export class AppModule { }
