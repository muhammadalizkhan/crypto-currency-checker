import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CoinService } from './service/coin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCurrency : string = "INR";
  constructor(private coinService : CoinService){

  }
  sendCurrency(event:string){
    console.log(event);
    this.coinService.setCurrency(event);
  }
}
