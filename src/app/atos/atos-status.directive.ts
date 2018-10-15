import { Directive, Input, ElementRef, OnInit, Renderer, HostBinding, DoCheck, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[atosStatus]'
})
export class AtosStatusDirective implements OnInit {

  @Input() atosStatus: boolean;
  @HostBinding('style.position') position = 'relative';

  constructor(public el: ElementRef, private renderer: Renderer) { }

  ngOnInit(): void {

    const bgColor = (this.atosStatus) ? 'lightGreen' : 'crimson';

    const badge = this.renderer.createElement(this.el.nativeElement, 'div');

    this.renderer.setElementStyle(badge, 'height', '20px');
    this.renderer.setElementStyle(badge, 'width', '20px');
    this.renderer.setElementStyle(badge, 'borderRadius', '10px');
    this.renderer.setElementStyle(badge, 'backgroundColor', bgColor);
    this.renderer.setElementStyle(badge, 'position', 'absolute');
    this.renderer.setElementStyle(badge, 'bottom', '50%');
    this.renderer.setElementStyle(badge, 'right', '0');

    /* this.el.nativeElement.innerHTML += `
      <div style="width:20px;height:20px;border-radius:10px;background-color:${bgColor}"></div>
    `; */
  }

}
