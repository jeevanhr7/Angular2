import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'YOYO';
  numberInter = 123;

  onClicked(value: string) {
    console.log(value);
    console.log("Second Worked");
    alert(value);
  }

}
