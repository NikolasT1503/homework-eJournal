import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentformComponent } from './studentform/studentform.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [StudentsComponent, StudentformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [StudentsComponent, StudentformComponent]
})
export class StudentsModule { }
