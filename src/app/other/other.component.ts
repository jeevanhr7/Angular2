import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-other',
  template: '<div><ng-content> <p>lease get the job for me</p></ng-content></div>',
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
