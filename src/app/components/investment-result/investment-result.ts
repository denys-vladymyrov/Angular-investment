import {Component, input} from '@angular/core';
import {AnnualData} from '../../models';

@Component({
  selector: 'app-investment-result',
  imports: [],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.scss'
})
export class InvestmentResult {
  results = input<AnnualData[]>()
}
