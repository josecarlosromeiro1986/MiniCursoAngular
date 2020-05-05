import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Model } from './modules/model';
import { Color } from './utils/tipos';
import { VariaveisComponent } from './components/variaveis/variaveis.component';

@Component({
  selector: 'curso-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Model implements OnInit, OnChanges{

  @ViewChildren(VariaveisComponent) child;

  title;
  color: Color;
  nomeColor: string;
  conjunto: any[] = [];
  correcebido: string = 'black';
  cor = 'black';

  constructor(){
    super()
    this.title='Curso';
    this.color = {
      color: '#23272b',
      nome: 'Preto'
    };
    this.nomeColor = this.color.nome;
  }

  emitter(color){    
    this.color.color = color.color;
    this.color.nome = color.nome;
  }

  getColor(){
    return this.color.nome;
  }

  ngOnInit(): void {
    console.log('TesteInit ==> app.component');
    setTimeout(() => {
      this.conjunto = [{label: 'um'}, {label: 'dois'}, {label: 'treiz'}];
    }, 2000);   
    console.log(this.child);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  getCpf(cpf: string){
    switch(this.conjunto[2].label){
      case 'um':
        break;
      case 'dois':
        break;
      default:
        break;
    }
  }

  defineTipoClass() {
    return {
      'meu-pai': this.correcebido === 'black',
      'meu-filho': this.correcebido === 'lightgray'
    };
  }

  getStyle() {
    return {
      'background-color': this.cor !== 'red' ? 'red' : 'green'
    }
  }
}
