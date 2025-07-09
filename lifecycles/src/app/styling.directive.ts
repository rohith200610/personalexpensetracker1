import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyling]'
})
export class StylingDirective implements OnInit {
  @HostBinding('class.hovered') isHovered = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightblue');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'darkblue');
  }

  @HostListener('mouseenter')
  onHover() {
    this.isHovered = true;
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }

  @HostListener('mouseleave')
  onLeave() {
    this.isHovered = false;
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightblue');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'darkblue');
  }
}

