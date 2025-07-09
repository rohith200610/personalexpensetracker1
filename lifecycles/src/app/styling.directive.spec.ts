import { StylingDirective } from './styling.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('StylingDirective', () => {
  let directive: StylingDirective;
  let mockElementRef: ElementRef;
  let mockRenderer2: Renderer2;

  beforeEach(() => {
    mockElementRef = { nativeElement: document.createElement('div') } as ElementRef;
    mockRenderer2 = jasmine.createSpyObj('Renderer2', ['setStyle']);
    directive = new StylingDirective(mockElementRef, mockRenderer2);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set initial styles on ngOnInit', () => {
    directive.ngOnInit();
    expect(mockRenderer2.setStyle).toHaveBeenCalledWith(mockElementRef.nativeElement, 'backgroundColor', 'lightblue');
    expect(mockRenderer2.setStyle).toHaveBeenCalledWith(mockElementRef.nativeElement, 'color', 'darkblue');
  });

  it('should set hover styles on mouseenter', () => {
    directive.onHover();
    expect(directive.isHovered).toBeTrue();
    expect(mockRenderer2.setStyle).toHaveBeenCalledWith(mockElementRef.nativeElement, 'backgroundColor', 'yellow');
    expect(mockRenderer2.setStyle).toHaveBeenCalledWith(mockElementRef.nativeElement, 'color', 'black');
  });

  it('should reset styles on mouseleave', () => {
    directive.onLeave();
    expect(directive.isHovered).toBeFalse();
    expect(mockRenderer2.setStyle).toHaveBeenCalledWith(mockElementRef.nativeElement, 'backgroundColor', 'lightblue');
    expect(mockRenderer2.setStyle).toHaveBeenCalledWith(mockElementRef.nativeElement, 'color', 'darkblue');
  });
});
