import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-location',
  standalone: false,
  templateUrl: './add-location.html',
  styleUrl: './add-location.css'
})
export class AddLocation implements OnInit {

formGroup!: FormGroup;

constructor(
private locationService: LocationService,
private formBuilder: FormBuilder,
private router: Router
) { }
  ngOnInit(): void {
    
    this.formGroup = this.formBuilder.group({
      name:['']
    });
  }


addLocation(): void {

  const loc: Location ={...this.formGroup.value};

  this.locationService.saveLocation(loc).subscribe({
    next: (res) =>{

      console.log("Location added successfully", res);
      this.formGroup.reset();
      this.router.navigate(['/viewalllocation']);
    },
    error: (err)=>{

      console.log("Error adding location", err);
    }
  })
}

}
