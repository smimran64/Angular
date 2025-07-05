import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { StudentService } from '../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../service/location.service';
import { Location } from '../../model/location.model';


@Component({
  selector: 'app-updatstudent',
  standalone: false,
  templateUrl: './updatstudent.html',
  styleUrl: './updatstudent.css'
})
export class Updatstudent implements OnInit {


  id : string = '';
  student: Student = new Student();

  locations : Location[] = [];

  constructor(
    private studentService: StudentService,
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.loadStudentById();
    this.loadLocation();
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

        this.router.navigate([''], res);
        this.cdr.markForCheck();
        
      },

      error: (err) => {

        console.log('update failed', err);

      }
    });

  }



  loadLocation():void{

    this.locationService.getAllLocation().subscribe({

      next : (loc)=>{

        this.locations = loc;
        this.cdr.markForCheck;
      },
      error: (err)=> {

        console.error('Location Error',err);

      }
    })
  }


  compareLocation(l1 : Location , l2 : Location): boolean{

    return l1 && l2 ? l1.id === l2.id : l1===l2;


  }

}
