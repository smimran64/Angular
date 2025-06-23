import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { Location } from '../location/location.model';

@Component({
  selector: 'app-vew-all-location',
  standalone: false,
  templateUrl: './vew-all-location.html',
  styleUrl: './vew-all-location.css'
})
export class VewAllLocation implements OnInit {

  locations: any;

  constructor(private locationsevice:LocationService) { }
  ngOnInit(): void {
    this.loadAllLocation();
   
  }

  loadAllLocation(){

    this.locations = this.locationsevice.getAllLocation();
  }

}
