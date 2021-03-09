import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons.component';
import { LessonformComponent } from './lessonform/lessonform.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LessonsComponent, LessonformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [LessonsComponent, LessonformComponent]
})
export class LessonsModule { }
