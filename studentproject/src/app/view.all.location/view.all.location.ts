import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view.all.location',
  standalone: false,
  templateUrl: './view.all.location.html',
  styleUrl: './view.all.location.css'
})
export class ViewAllLocation implements OnInit {

  locations: any


  constructor(

    private locationService: LocationService,
    private router: Router,
    private cdr: ChangeDetectorRef


  ) { }


  ngOnInit(): void {

    this.loadLocation();
  }

  loadLocation(): void {

    this.locations = this.locationService.getAllLocation();
  }

}
