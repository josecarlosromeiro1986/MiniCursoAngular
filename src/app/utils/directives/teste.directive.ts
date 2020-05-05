import { Directive, ElementRef, OnInit, Input, Renderer2, Renderer } from '@angular/core';

@Directive({
  selector: '[cursoTeste]'
})
export class TesteDirective implements OnInit{

  @Input() cursoTeste;
  @Input() teste2;

  constructor(private el: ElementRef, private renderer2: Renderer2, private renderer: Renderer) {
  }
  ngOnInit(): void {
    //console.log(this.el);
    this.renderer2.setStyle(this.el.nativeElement, 'background-color', this.getColor());
    this.renderer.setText(this.el.nativeElement, 'Agora Vai');
  }

  getColor() {
    return Math.random() > 0.5 ? 'green' : 'red';
  }
}