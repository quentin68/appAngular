import { Directive, Input, OnInit, HostBinding, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[atosSize]'
})
export class AtosSizeDirective implements OnInit, AfterViewInit {

  // tslint:disable-next-line:no-input-rename
  @Input('atosSize') size;
  @HostBinding('style.transform') transform;
  @HostBinding('style.display') display = 'inline-block';

  constructor() { }

  ngOnInit(): void {
    if ( this.size === 'small') { this.transform = 'scale(.33)'; }
    if ( this.size === 'medium') { this.transform = 'scale(.6)'; }
  }

  ngAfterViewInit(): void {
    if ( this.size === 'small') { this.transform = 'scale(.33)'; }
    if ( this.size === 'medium') { this.transform = 'scale(.6)'; }
  }

}
