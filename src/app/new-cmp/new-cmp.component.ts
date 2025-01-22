import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service'; // Correct service path

@Component({
  selector: 'app-new-cmp',
  standalone: true,
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent {
  todaydate;
  newcomponent = 'Entered in new component!';
  componentproperty;
  constructor(private myservice: MyserviceService) {
    this.todaydate = this.myservice.showTodayDate();
    this.myservice.serviceproperty = 'Component Created';
    this.componentproperty = this.myservice.serviceproperty;
  }
}
