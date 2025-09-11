import {Component, input} from '@angular/core';
import {AnnualData} from '../../models';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-investment-result',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.scss'
})
export class InvestmentResult {
  results = input<AnnualData[]>()
}
