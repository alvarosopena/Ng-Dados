import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda = "../assets/dice1.png";
  dadoDerecha ="../assets/dice2.png";
  numero1: number = 1; 
  numero2: number = 2;

  tirarDados(): void {
    this.numero1 = Math.round(Math.random()*5)+1;
    this.numero2 = Math.round(Math.random()*5)+1;
    this.dadoIzquierda="../assets/dice"+this.numero1+".png";
    this.dadoDerecha="../assets/dice"+this.numero2+".png";
   // console.log(this.numero1);
   // console.log(this.numero2);
  }
}
