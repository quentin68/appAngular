import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css'],
 /*  changeDetection: ChangeDetectionStrategy.OnPush */
})
export class ChangeComponent  {

  time = Date.now();

  constructor(    cd: ChangeDetectorRef) {
    setInterval( () => {
      this.time = Date.now();
      cd.markForCheck();
     }, 1000 );
  }

}
