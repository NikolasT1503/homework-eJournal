import { Component, OnInit, Output } from '@angular/core';
import studentsData from '../../assets/studentsData.json';

export interface Student {
  id: string;
  Fam: string;
  Im: string;
  Ot: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
  @Output() students: Student[] = studentsData;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    
  }

}
