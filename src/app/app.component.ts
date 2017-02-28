import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<body><h1>ROOT Component</h1><fa-databinding></fa-databinding><fa-lifecycle></fa-lifecycle></body>',
  template: `
    <h1>ROOT Component</h1>
    <fa-databinding></fa-databinding>
    <fa-lifecycle *ngIf="!delete">
    {{test}}
    </fa-lifecycle>
    
    <button (click)="delete=true">Click To Delete</button>
    <button (click)="test='Changed Value'">Click To Change</button>
    

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  delete = false;
  test = "Starting Value"
}

