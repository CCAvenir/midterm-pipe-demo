import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewCmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  /*title = 'pipes-demo.';
  presentDate = new Date();
  time$ = interval(1000).pipe(
    map(() => new Date));
  testObject = {
  name: 'Avenir, Christian',
  age: 21,
  food: 'Burger'};
  price: number = 20000;
  Fruits = ["Apple", "Orange", "Grapes" , "Mango", "Kiwi" , "Pomegranate" ];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  items: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];*/

  todaydate: Date;
  componentproperty;
  constructor(private myservice: MyserviceService) {
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
}

