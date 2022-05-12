import { JogoDaVelhaService } from './shared/jogo-da-velha.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { provideRoutes } from '@angular/router';



@NgModule({
  declarations: [
    JogoDaVelhaComponent,

  ],
  imports: [
    CommonModule,

  ],

  exports:[
    JogoDaVelhaComponent,

  ],
  providers:[
    JogoDaVelhaService,
  ]
})
export class JogoDaVelhaModule { }
