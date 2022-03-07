import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private element: ElementRef, private rendered: Renderer2) { }

@HostBinding('style.backgroundColor') bgcolor: string;
@HostBinding('style.border') bgborder: string;

@HostListener('mouseenter')

CustomMouseEnterAction() {
  this.bgcolor = 'red';
  this.bgborder = '2px solid green';
}

@HostListener('mouseleave')

CustomMouseLeaveAction() {
  this.bgcolor = 'burlywood';
  this.bgborder = '2px solid black';
}
}
