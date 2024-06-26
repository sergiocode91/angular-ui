import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[uiAlertTitle]',
  standalone: true,
})
export class HtmlAlertTitleDirective implements OnInit, OnChanges {
  @Input() class: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyClasses();
  }

  ngOnChanges() {
    this.applyClasses();
  }

  private applyClasses() {
    const baseClasses =
      'font-medium text-sm leading-none tracking-tight mb-1';
    const classes = `${baseClasses} ${this.class}`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }
}
