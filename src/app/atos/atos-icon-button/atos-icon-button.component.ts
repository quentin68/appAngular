import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'atos-icon-button',
  templateUrl: './atos-icon-button.component.html',
  styleUrls: ['./atos-icon-button.component.css']
})
export class AtosIconButtonComponent implements DoCheck {

  @Input() icon;
  @Input() color;

  get classes() {
    return {
      'glyphicon-cloud': this.icon === 'cloud',
      'glyphicon-cog': this.icon === 'gear',
      'glyphicon-plus-sign': this.icon === 'plus',
      'glyphicon-option-vertical': this.icon === 'dots',
      'glyphicon-bell': this.icon === 'ring',
      'glyphicon-ok': this.icon === 'check',
    };
  }

  private icons = ['ring', 'dots', 'cloud', 'plus', 'gear', 'check'];

  ngDoCheck(): void {
    if ( !this.icons.some( value => value === this.icon) ) {
      throw Error(`\n Invalid icon value "${ this.icon }", \n PLEASE USE : ${ this.icons } \n\n`);
    }
  }

}

