import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';
import { LocationService } from '../service/location.service';
import { forkJoin } from 'rxjs';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-view-all-student',
  standalone: false,
  templateUrl: './view-all-student.html',
  styleUrl: './view-all-student.css'
})
export class ViewAllStudent implements OnInit {

  students : Student[]= [];
  locations: Location[]=[];

  constructor(
    private studentService: StudentService,
    private locationService: LocationService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loadData();

  }



 

  loadData(): void {
    forkJoin({
      locations: this.locationService.getAllLocation(),
      students: this.studentService.getAllStudent()
    }).subscribe({
      next: ({ locations, students }) => {

        this.locations = locations;
        this.students = students;
      },
      error: (err) => {

        console.error("Error loading data", err);
      }
    });
  }
  


  deleteStudent(id: string): void {

    this.studentService.deleteStudent(id).subscribe({
      next: () => {

        this.cdr.reattach();
        this.loadData();
        this.cdr.markForCheck();

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


    });



  }

}
