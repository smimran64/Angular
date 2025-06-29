import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { StudentService } from '../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatstudent',
  standalone: false,
  templateUrl: './updatstudent.html',
  styleUrl: './updatstudent.css'
})
export class Updatstudent implements OnInit {


  id: string = '';
  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {

    this.loadStudentById();
  }


  loadStudentById() {

    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe({

      next: (res) => {

        this.student = res;
        this.cdr.markForCheck();
      },
      error: (err) => {

        console.log("Error fetching student:", err);
      }


    });
  }


  updateStudent(): void {

    this.studentService.updateStudent(this.id, this.student).subscribe({

      next: (res) => {

        this.router.navigate([''], res)


      },

      error: (err) => {

        console.log('update failed', err);

      }
    });


  }

}
