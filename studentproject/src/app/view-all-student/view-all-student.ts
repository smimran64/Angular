import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-student',
  standalone: false,
  templateUrl: './view-all-student.html',
  styleUrl: './view-all-student.css'
})
export class ViewAllStudent implements OnInit {

  students: any;

  constructor(
    private studentService: StudentService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loadAllStudent();

  }


  loadAllStudent() {

    this.students = this.studentService.getAllStudent();

  }



  deleteStudent(id: string): void {

    this.studentService.deleteStudent(id).subscribe({
      next: () => {

        this.cdr.reattach();
        this.loadAllStudent();

      },

      error: (err) => {
        console.log(err);
      }

    });

  }

  getStudentById(id: string): void {

    this.studentService.getStudentById(id).subscribe({


      next: (res) => {

        console.log(res)
        console.log("Data get Successfully");
        this.router.navigate(['/updatestudent', id]);

      },

      error: (err) => {

        console.log(err);


      }


    })



  }

}
