import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
 <br><hr><ng-content></ng-content>
 <p #boundParagraph>{{bindable}}</p>
  <p> {{boundParagraph.textContent}}</p>


  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
@Input() bindable=1000;
@ViewChild('boundParagraph')
boundParagraph:HTMLElement;
  constructor() { }

  ngOnInit() {
    this.log('ngOnInit')

  }
  ngOnChanges() {
    this.log('ngOnChanges')


  }
  ngDoCheck() {
    this.log('ngDoCheck')
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')

  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit')

  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
    console.log(this.boundParagraph);

  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    this.log('ngOnDestroy')
  }
  private log(hook: string) {
    console.log(hook)
  }

}
