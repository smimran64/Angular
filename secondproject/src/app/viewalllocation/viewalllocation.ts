import { Component, OnInit } from '@angular/core';
import { Location } from '../service/location';

@Component({
  selector: 'app-viewalllocation',
  standalone: false,
  templateUrl: './viewalllocation.html',
  styleUrl: './viewalllocation.css'
})
export class Viewalllocation implements OnInit{

  locations: any;

  constructor(private locationService: Location){}

  loadAllLocation(){
    this.locations = this.locationService.getAllLocation();
  }

  ngOnInit(): void {
    this.loadAllLocation();
  }

}
