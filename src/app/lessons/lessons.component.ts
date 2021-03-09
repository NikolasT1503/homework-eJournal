import { Component, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import {Observable} from 'rxjs';
import mathData from '../../assets/mathData.json';


export interface Lesson {
  id: string;
  dateLesson: string;
  theme: string;
  homework: string;
  note: string;
}

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  
  @Output() lessonsData: Lesson[]; 

  @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>;
  constructor() {  
    this.lessonsData = mathData;
  }

  ngOnInit(): void {
  
  }

  ngOnChanges(): void {
    
  }

}
