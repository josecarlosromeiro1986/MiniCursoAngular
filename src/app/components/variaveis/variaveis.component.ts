import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Color } from 'src/app/utils/tipos';

@Component({
  selector: 'curso-variaveis',
  templateUrl: './variaveis.component.html',
  styleUrls: ['./variaveis.component.scss']
})
export class VariaveisComponent implements OnInit, OnChanges {

  @Input() title;
  @Output() color: EventEmitter<Color> = new EventEmitter<Color>();
  @Input() colorAtual: Color;
  @Input() nomeColor: string;

  constructor() { }

  ngOnInit() {
    console.log('TesteInit ==> variaveis.component');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.nomeColor){
      if(!changes.nomeColor.firstChange){
        this.nomeColor = changes.nomeColor.currentValue;
        console.log(this.nomeColor);        
      }
    }
  }

  getNome() {
    return this.colorAtual.nome;
  }

  getColor() {
    return this.colorAtual.color;
  }

  setColor(color: Color) {
    this.colorAtual.color = color.color;
    this.colorAtual.nome = color.nome;
    this.color.emit(color);
  }
}
