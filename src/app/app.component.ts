import { Component } from '@angular/core';
import { LocationServiceService } from './services/location-service.service';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: any;
  array: any;
  arraydata: any;

  constructor(private api: LocationServiceService) {
    this.array = [
      {
        "hie": "this is array data"
      }
    ]
   }

  ngOnInit() {
    this.api.get().subscribe(res => {
      this.users = res;
      console.log('data response', this.users);

      this.arraydata = this.users?.data[0].email;
    });



  }
}
