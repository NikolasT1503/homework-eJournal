import { Component, Input, OnInit } from '@angular/core';
import { Lesson, LessonsComponent } from '../lessons/lessons.component';
import { Student, StudentsComponent } from '../students/students.component';


export interface StudentMark {
  idStudent: string;
  studentMarks: [
    {
      idLesson: string;
      mark: number;
    }
  ],
  avgMark : number;
  roundedMark : number;
}

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css'],
})
export class MarksComponent implements OnInit {
  @Input() lessonsIn: LessonsComponent;
  @Input() studentsIn: StudentsComponent;

  marksSelect = [null,1,2,3,4,5];

  lessons: Lesson[];
  students: Student[];
  marks: StudentMark[] = [];


  constructor() {}

  ngOnInit(): void {
    console.log('Првоерка marks', this.marks);
    this.lessons = this.lessonsIn.lessonsData;
    this.students = this.studentsIn.students;
    console.log('Првоерка lessons', this.lessons);
    console.log('Првоерка students', this.students);
    var tmpStudentMark: StudentMark;
    for (var stud of this.students) {
      for (var les of this.lessons) {
        /* this.marks.splice(this.marks.length-1,0,{idStudent: stud.id, idLesson: les.id, mark: null}); */
        this.addStudentMarks(stud.id, les.id, this.marksSelect[0]);
      }
      this.avgRate(stud.id);
      this.roundedRate(stud.id);
    }
  }

  ngOnChanges(): void {
    /* this.avgMark=this.avgRate(this.marks.) */
  }

  private addStudentMarks(idStudent, idLesson, mark) {
    var tmpIndex = this.marks.findIndex((o) => o.idStudent === idStudent);
/*     console.log('Поиск по индексу', idStudent, tmpIndex); */
    if (tmpIndex === -1) {
      var tmpStudentMark: StudentMark = {
        idStudent: idStudent,
        studentMarks: [{ idLesson: idLesson, mark: mark }],
        avgMark: null,
        roundedMark: null
      };
      this.marks.push(tmpStudentMark);
      console.log('Добавление элемента', tmpStudentMark);
    } else {
      this.marks[tmpIndex].studentMarks.push({
        idLesson: idLesson,
        mark: mark,
      });
    }
  }

  avgRate(id: string) {
    var tmpIndex = this.marks.findIndex((o) => o.idStudent === id);
    var sum = 0;
    this.marks[tmpIndex].studentMarks.forEach((el) => {
      sum += +el.mark;
    });
    this.marks[tmpIndex].avgMark = sum / (this.marks[tmpIndex].studentMarks.length - 1)
  }

  roundedRate(id: string) {
    this.marks[this.marks.findIndex((o) => o.idStudent === id)].roundedMark = +this.marks[this.marks.findIndex((o) => o.idStudent === id)].avgMark.toFixed(2);
  }

  getFIOStudent(id: string): string {
    var tmpStudent = this.students.find((o) => o.id === id);
    return tmpStudent.Fam + ' ' + tmpStudent.Im + ' ' + tmpStudent.Ot;
  }

  /*   groupBy(arr, fn) {
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce(
        (acc, val, i) => {
          acc[val] = (acc[val] || []).concat(arr[i]);
          return acc;
        },{});
  } */
}
