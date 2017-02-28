import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-two-way-binding',
  template: `
   <input type="text" [(ngModel)]="person.name">
   <input type="text" [(ngModel)]="person.age">
   <input type="text" [(ngModel)]="person.name">
   <input type="text" [(ngModel)]="person.age">



  `,
})
export class TwoWayBindingComponent {

  person = {
    name: "MAC",
    age: 12
  }

}
