import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../students.component';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {
  @Input() studentsData: Student[];
  form : FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: this.formBuilder.control({value: this.studentsData.length, disabled:false}),
      fam: this.formBuilder.control('',Validators.required),
      im: this.formBuilder.control('',Validators.required),
      ot: this.formBuilder.control('')
    })
  }

  addValue(student : Student){
    this.studentsData.push(student);
  }

}
