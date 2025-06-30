import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../model/student.model';
import { LocationService } from '../service/location.service';


@Component({
  selector: 'app-addstudent',
  standalone: false,
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css'
})
export class Addstudent implements OnInit {

  formGroup!: FormGroup;

  locations: Location[] = [];

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private router: Router,
    private locationService: LocationService,
    private cdr: ChangeDetectorRef


  ) { }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({

      name: [''],
      email: [''],
      fee: [''],      

    });    

  }

  // loadLocation(): void {

  //   this.locationService.getAllLocation().subscribe({

  //     next: (loc) => {

  //       this.locations = loc;

  //     },
  //     error: (err) => {

  //       console.log(err);
  //     }


  //   });


  // }

  addStudent(): void {
    const student: Student = { ...this.formGroup.value };
    this.studentService.saveStudent(student).subscribe({
      next: (res) => {

        console.log("Student added successfully", res);
        this.formGroup.reset();
        this.router.navigate(['']);

      },
      error: (error) => {


        console.error("Error adding student", error);

      }

    })

  }
}
