import {Component, computed, inject} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {InvestmentService} from '../../services/investment.service';

@Component({
  selector: 'app-investment-result',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.scss'
})
export class InvestmentResult {
  private investmentService = inject(InvestmentService);

  // results = computed(() => this.investmentService.resultsData());
  results = this.investmentService.resultsData.asReadonly();
}
