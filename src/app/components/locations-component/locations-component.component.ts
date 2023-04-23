import { Component, OnInit } from '@angular/core';
import { LocationServiceService } from '../../services/location-service.service';

@Component({
  selector: 'app-locations-component',
  templateUrl: './locations-component.component.html',
  styleUrls: ['./locations-component.component.scss']
})
export class LocationsComponentComponent implements OnInit {
  data: any;
  constructor(public locationService: LocationServiceService) { }

  ngOnInit(): void {
    this.locationService.get().subscribe((res)=>{
      console.log(res)
      this.data = res.locations;
    })
  }

}
