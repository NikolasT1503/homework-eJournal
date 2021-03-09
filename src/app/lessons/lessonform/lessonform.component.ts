import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lesson, LessonsComponent } from '../lessons.component';

@Component({
  selector: 'app-lessonform',
  templateUrl: './lessonform.component.html',
  styleUrls: ['./lessonform.component.css']
})

export class LessonformComponent implements OnInit {
  @Input() lessonsData: Lesson[];
  form : FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control({value: this.lessonsData.length, disabled:false}),
      dateLesson: this.formBuilder.control('',Validators.required),
      theme: this.formBuilder.control('',Validators.required),
      homework: this.formBuilder.control(''),
      note: this.formBuilder.control('')
    })
  }

  addValue(lesson : Lesson){
    this.lessonsData.push(lesson);
  }
}
