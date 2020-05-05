import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VariaveisComponent } from './components/variaveis/variaveis.component';
import { Dia4Component } from './components/dia4/dia4.component';
import { TesteDirective } from './utils/directives/teste.directive';

@NgModule({
  declarations: [
    AppComponent,
    VariaveisComponent,
    Dia4Component,
    TesteDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
